import { GoogleGenAI } from '@google/genai';
import { Pinecone } from '@pinecone-database/pinecone';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { query } = req.body;
  if (!query) {
    return res.status(400).json({ error: 'Query is required' });
  }

  try {
    const apiKey = process.env.GEMINI_API_KEY || process.env.VITE_GEMINI_API_KEY;
    const pineconeApiKey = process.env.PINECONE_API_KEY;
    const pineconeIndexName = process.env.PINECONE_INDEX || 'portfolio';
    const namespace = process.env.PINECONE_NAMESPACE || 'portfolio';

    if (!apiKey || !pineconeApiKey) {
      return res.status(500).json({ error: 'Server configuration error' });
    }

    const ai = new GoogleGenAI({ apiKey });
    const pc = new Pinecone({ apiKey: pineconeApiKey });

    // Generate embedding for user query
    const embedResponse = await ai.models.embedContent({
      model: 'gemini-embedding-2',
      contents: query,
      config: {
        outputDimensionality: 768,
      }
    });
    const queryEmbedding = embedResponse.embeddings[0].values;

    
    const index = pc.Index(pineconeIndexName);
    const queryResult = await index.namespace(namespace).query({
      vector: queryEmbedding,
      topK: 4,
      includeMetadata: true,
    });

    const chunks = queryResult.matches.map((match) => ({
      text: match.metadata.text,
      source: match.metadata.source,
      category: match.metadata.category,
      project: match.metadata.project,
    }));

    if (chunks.length === 0) {
      return res.status(200).json({
        answer: "I don't have enough information in my portfolio knowledge base to answer that.",
        sources: []
      });
    }

    const context = chunks.map((c, i) => `[Source ${i + 1}: ${c.source}]\\n${c.text}`).join('\\n\\n');

    const systemInstruction = `You are Divyansh Kumar's portfolio AI assistant.

Your job is to answer questions about Divyansh using ONLY the information provided in the retrieved knowledge context below.

Do not invent, assume, exaggerate, or infer facts that are not supported by the retrieved context.

If the requested information is not available in the retrieved context, clearly say that the information is not available in the portfolio knowledge base.

For professional and HR questions, synthesize information from the retrieved context while remaining factual.

Do not claim Divyansh has experience, skills, companies, technologies, achievements, or qualifications unless supported by the provided context.

If asked an opinion-based HR question such as "Why should we hire Divyansh?", construct a professional answer based only on retrieved evidence.

Your response must be well-structured. Use short paragraphs or bullet points where appropriate to make it highly readable.
Keep your answer concise, ideally between 100 to 150 words. Do not exceed this limit unless absolutely necessary.

RETRIEVED CONTEXT:
${context}
`;

   
    const chatResponse = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: query,
      config: {
        systemInstruction,
        temperature: 0.4, 
      }
    });

    res.status(200).json({
      answer: chatResponse.text,
      sources: chunks.map(c => ({
        source: c.source,
        category: c.category,
        project: c.project
      }))
    });

  } catch (error) {
    console.error("API Chat Error:", error);
    res.status(500).json({ error: 'An error occurred while generating the response.' });
  }
}
