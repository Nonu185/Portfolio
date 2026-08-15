import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv'
import chatHandler from './api/chat.js'

// Load .env.local into process.env so the local API handler can access the API keys
dotenv.config({ path: '.env.local' })

// Simple middleware to run the Vercel serverless function locally during development
const apiMiddleware = () => ({
  name: 'api-middleware',
  configureServer(server) {
    server.middlewares.use((req, res, next) => {
      if (req.url === '/api/chat' && req.method === 'POST') {
        try {
          let body = '';
          req.on('data', chunk => body += chunk);
          req.on('end', async () => {
            req.body = JSON.parse(body || '{}');
            // Mock Vercel response object methods
            res.status = (code) => { res.statusCode = code; return res; };
            res.json = (data) => { 
              res.setHeader('Content-Type', 'application/json'); 
              res.end(JSON.stringify(data)); 
            };
            await chatHandler(req, res);
          });
        } catch (err) {
          console.error("Local API Error:", err);
          res.statusCode = 500;
          res.end(JSON.stringify({ error: 'Internal Server Error' }));
        }
      } else {
        next();
      }
    });
  }
});

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), apiMiddleware()],
})
