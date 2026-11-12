import React, { useState } from "react";
import MacWindow from "./MacWindow";
import "./projects.scss";

const projectsData = [
  {
    id: "orvyn",
    category: "AI & Full-Stack",
    title: "Orvyn – AI-Powered Search & Research Assistant",
    subtitle: "LangChain · Gemini · Tavily · Node.js · Express · MongoDB",
    description:
      "Built an AI-powered research assistant using LangChain, Google Gemini, and Tavily for real-time web search and context-aware responses, with a Node.js, Express.js, and MongoDB backend supporting secure JWT authentication and conversation management.",
    demo: "https://orvyn-ochre.vercel.app",
    tags: ["LangChain", "Gemini", "Tavily", "Node.js", "MongoDB", "JWT"],
    badge: "Gen AI",
  },
  {
    id: "portfolio-workspace",
    category: "AI & Full-Stack",
    title: "Interactive Web Workspace & Portfolio",
    subtitle: "React.js · RAG · Pinecone · Gemini · SCSS",
    description:
      "Created an interactive browser-based portfolio workspace featuring functional window management, custom applications, and an integrated AI chatbot powered by RAG and Pinecone for context-aware responses about my engineering profile.",
    demo: "https://divyanshkumar.dev",
    tags: ["React", "RAG", "Pinecone", "Gemini", "SCSS"],
    badge: "Full-Stack / AI",
  },
  {
    id: "flakes-pdf",
    category: "Tools & Utilities",
    title: "Flakes.pdf – PDF & Image Utility",
    subtitle: "React.js · Client-Side Processing · Web APIs",
    description:
      "Engineered a browser-based PDF utility supporting image-to-PDF conversion, PDF merging, and file compression through client-side processing, reducing server dependency while keeping users' files on their devices.",
    demo: "https://flakespdf.vercel.app",
    tags: ["React", "Client-Side", "File Processing", "Vercel"],
    badge: "Utility",
  },
  {
    id: "noc-sim",
    category: "Tools & Utilities",
    title: "NOC Simulator – Network-on-Chip Simulator",
    subtitle: "React.js · Interactive Architecture · Animation",
    description:
      "Developed a React-based interactive simulator in collaboration with a professor working on an emerging Network-on-Chip architecture language, enabling visualization of network architecture and communication flows.",
    demo: "https://noclang-simulator.vercel.app/",
    tags: ["React", "SVG/Canvas", "Computer Architecture", "Interactive"],
    badge: "Research / Sim",
  },
];

const ProjectsModal = ({ windowName, setWindowsState }) => {
  const [filter, setFilter] = useState("All");

  const filtered =
    filter === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === filter);

  return (
    <MacWindow
      windowName={windowName}
      setWindowsState={setWindowsState}
      index={2}
      width="60vw"
      height="65vh"
    >
      <div className="projects-window">
        <div className="pw-header">
          <div className="pw-title-area">
            <h2>Featured Projects</h2>
            <p>Selected engineering work, AI systems, and interactive web applications.</p>
          </div>
          <div className="pw-tabs">
            {["All", "AI & Full-Stack", "Tools & Utilities"].map(
              (cat) => (
                <button
                  key={cat}
                  className={`pw-tab ${filter === cat ? "active" : ""}`}
                  onClick={() => setFilter(cat)}
                >
                  {cat}
                </button>
              )
            )}
          </div>
        </div>

        <div className="pw-grid">
          {filtered.map((proj) => (
            <div key={proj.id} className="pw-card">
              <div className="pw-card-top">
                <span className="pw-badge">{proj.badge}</span>
                {proj.demo && (
                  <a
                    href={proj.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="pw-demo-link"
                  >
                    Live Demo ↗
                  </a>
                )}
              </div>
              <h3>{proj.title}</h3>
              <div className="pw-sub">{proj.subtitle}</div>
              <p className="pw-desc">{proj.description}</p>
              <div className="pw-tags">
                {proj.tags.map((t, idx) => (
                  <span key={idx} className="pw-tag">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </MacWindow>
  );
};

export default ProjectsModal;

