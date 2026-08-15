import React, { useState, useEffect, useRef } from "react";
import MacWindow from "../windows/MacWindow";
import ReactMarkdown from 'react-markdown';
import "./ai.scss";

const AiWindow = ({ windowName, setWindowsState }) => {
  const initialMessage = { 
    role: "assistant", 
    content: "Hi! I'm Ask Divyansh, an AI assistant for this portfolio. Ask me anything about Divyansh's skills, projects, or experience." 
  };

  const [messages, setMessages] = useState([initialMessage]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const suggestedQuestions = [
    "Tell me about Divyansh",
    "What projects has he built?",
    "Explain Orvyn",
    "What technologies does he know?",
    "Why should we hire him?"
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSend = async (e, customMessage = null) => {
    if (e) e.preventDefault();
    const userMessage = customMessage || input.trim();
    if (!userMessage || isLoading) return;

    setInput("");
    setMessages(prev => [...prev, { role: "user", content: userMessage }]);
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: userMessage }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to fetch response');
      }

      setMessages(prev => [...prev, { 
        role: "assistant", 
        content: data.answer,
        sources: data.sources 
      }]);
    } catch (error) {
      console.error("Error generating response:", error);
      setMessages(prev => [...prev, { role: "assistant", content: "Sorry, I encountered an error. Please try again later or check if the backend is configured." }]);
    } finally {
      setIsLoading(false);
    }
  };

  const clearChat = () => {
    setMessages([initialMessage]);
  };

  return (
    <MacWindow
      windowName={windowName}
      setWindowsState={setWindowsState}
      index={5}
    >
      <div className="ai-window">
        <div className="chat-header" style={{ padding: '10px', borderBottom: '1px solid #333', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <strong>Ask Divyansh</strong>
            <span style={{ fontSize: '0.8em', color: '#888', display: 'block' }}>AI assistant for my portfolio</span>
          </div>
          <button onClick={clearChat} style={{ background: 'transparent', border: '1px solid #555', color: '#fff', padding: '5px 10px', borderRadius: '5px', cursor: 'pointer' }}>
            Clear Chat
          </button>
        </div>

        <div className="chat-container">
          <div className="messages-area">
            {messages.length === 1 && (
              <div className="suggestions" style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', padding: '10px 20px' }}>
                {suggestedQuestions.map((q, i) => (
                  <button 
                    key={i} 
                    onClick={() => handleSend(null, q)}
                    style={{ background: '#333', border: 'none', color: '#fff', padding: '8px 12px', borderRadius: '15px', cursor: 'pointer', fontSize: '0.9em' }}
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}

            {messages.map((msg, i) => (
              <div key={i} className={`message-wrapper ${msg.role}`}>
                <div className="message-bubble">
                  {msg.role === 'assistant' ? (
                    <ReactMarkdown>{msg.content}</ReactMarkdown>
                  ) : (
                    msg.content
                  )}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="message-wrapper assistant">
                <div className="message-bubble loading">
                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          
          <form className="input-area" onSubmit={(e) => handleSend(e)}>
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me anything..." 
              disabled={isLoading}
            />
            <button type="submit" disabled={!input.trim() || isLoading}>
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </form>
        </div>
      </div>
    </MacWindow>
  );
};

export default AiWindow;

