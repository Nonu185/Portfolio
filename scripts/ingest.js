import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';
import { Pinecone } from '@pinecone-database/pinecone';

// Load env vars from .env.local
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

const apiKey = process.env.VITE_GEMINI_API_KEY;
const pineconeApiKey = process.env.PINECONE_API_KEY;
const pineconeIndexName = process.env.PINECONE_INDEX || 'portfolio';
const namespace = process.env.PINECONE_NAMESPACE || 'portfolio';

if (!apiKey || !pineconeApiKey) {
  console.error("Missing GEMINI_API_KEY or PINECONE_API_KEY in .env.local");
  process.exit(1);
}

const ai = new GoogleGenAI({ apiKey });
const pc = new Pinecone({ apiKey: pineconeApiKey });

async function processDirectory(dirPath) {
  const chunks = [];
  const files = fs.readdirSync(dirPath);

  for (const file of files) {
    const fullPath = path.join(dirPath, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      chunks.push(...(await processDirectory(fullPath)));
    } else if (file.endsWith('.md')) {
      const content = fs.readFileSync(fullPath, 'utf8');
      
      // Basic frontmatter parser tolerant of BOM or leading spaces
      const match = content.match(/^\s*---[\r\n]+([\s\S]*?)[\r\n]+---(?:[\r\n]+([\s\S]*))?$/);
      let metadata = {};
      let text = content;

      if (match) {
        const frontmatter = match[1];
        text = match[2] ? match[2].trim() : '';
        frontmatter.split(/\r?\n/).forEach(line => {
          const [key, ...values] = line.split(':');
          if (key && values.length > 0) {
            metadata[key.trim()] = values.join(':').trim();
          }
        });
      }

      // Generate a deterministic ID based on category and source
      const id = `${metadata.category || 'misc'}-${metadata.project || metadata.source || file}`.replace(/[^a-zA-Z0-9-]/g, '-');
      
      chunks.push({
        id,
        text,
        metadata
      });
    }
  }

  return chunks;
}

async function main() {
  console.log("Starting ingestion process...");
  const knowledgeDir = path.resolve(process.cwd(), 'knowledge');
  const chunks = await processDirectory(knowledgeDir);
  
  console.log(`Found ${chunks.length} chunks to ingest.`);

  const index = pc.Index(pineconeIndexName);
  const vectors = [];

  for (const chunk of chunks) {
    console.log(`Generating embedding for ${chunk.id}...`);
    try {
      const response = await ai.models.embedContent({
        model: 'gemini-embedding-2',
        contents: chunk.text,
        config: {
          outputDimensionality: 768,
        }
      });

      const embedding = response.embeddings[0].values;
      
      vectors.push({
        id: chunk.id,
        values: embedding,
        metadata: {
          ...chunk.metadata,
          text: chunk.text // Store the actual text so we can retrieve it
        }
      });
    } catch (e) {
      console.error(`Failed to embed ${chunk.id}:`, e);
    }
  }

  if (vectors.length > 0) {
    console.log(`Upserting ${vectors.length} vectors to Pinecone index "${pineconeIndexName}" (namespace: "${namespace}")...`);
    try {
      await index.namespace(namespace).deleteAll();
      console.log("Cleared old vectors in namespace.");
      await index.namespace(namespace).upsert({ records: vectors });
      console.log("Ingestion completed successfully!");
    } catch (e) {
      console.error("Failed to upsert to Pinecone:", e);
    }
  } else {
    console.log("No vectors to upsert.");
  }
}

main().catch(console.error);
