# Web OS Portfolio

A highly interactive, Mac OS-inspired developer portfolio built with React and Vite. It features functional applications, window management, dynamic wallpapers, and a Retrieval-Augmented Generation (RAG) AI assistant.

##  Key Features

- **Mac OS Interface**: Fully functional desktop environment with draggable and resizable windows.
- **RAG AI Assistant ("Ask Divyansh")**: A backend-powered AI assistant that answers questions based on a Pinecone Vector Database containing my resume and project history.
- **Applications**: Features functional apps like a Terminal (CLI), Safari browser simulator, Resume viewer, Notes, and a Music Player.
- **Dynamic Customization**: Change wallpapers directly from the Navigation bar.

## 🛠️ Technology Stack

- **Frontend**: React, JavaScript, SCSS, Vite
- **Backend / AI (Serverless)**: Vercel Serverless Functions (`/api`), Node.js
- **Vector Database**: Pinecone
- **LLM & Embeddings**: Google Gemini (`gemini-2.5-flash`, `text-embedding-004`)
- **Key Libraries**: `@google/genai`, `@pinecone-database/pinecone`, `react-rnd` (Window management)

## 🚀 Getting Started

### Prerequisites
- Node.js installed
- API Keys for Google Gemini and Pinecone.

### Installation

1. Clone the repository and install dependencies:
   \`\`\`bash
   npm install
   \`\`\`

2. Set up environment variables:
   Create a \`.env.local\` file in the root directory and add the following:
   \`\`\`env
   GEMINI_API_KEY=your_gemini_key
   PINECONE_API_KEY=your_pinecone_key
   PINECONE_INDEX=portfolio
   PINECONE_NAMESPACE=portfolio
   \`\`\`

3. Initialize the Vector Database (One-time setup):
   \`\`\`bash
   npm run ingest
   \`\`\`
   *(Note: This chunks the data in the \`knowledge/\` folder, generates embeddings via Gemini, and uploads them to Pinecone. You do not need to run this again unless you update your data.)*

4. Start the development server:
   \`\`\`bash
   npm run dev
   \`\`\`

## 🧠 AI Assistant Architecture (RAG)
The "Ask Divyansh" app utilizes a Retrieval-Augmented Generation system. 
1. When a user asks a question, the Vercel Serverless Function (\`/api/chat\`) generates an embedding for the query.
2. It queries Pinecone for the most relevant semantic matches from my knowledge base.
3. The retrieved chunks are appended to a strict system prompt and sent to Gemini 2.5 Flash, which synthesizes a grounded answer, completely eliminating hallucinations.

## 📄 License
This project is open-source and available under the MIT License.
