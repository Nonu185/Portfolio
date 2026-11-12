import React from "react";
import MacWindow from "./MacWindow";
import Terminal from "react-console-emulator";
import "./cli.scss";

const Cli = ({ windowName, setWindowsState }) => {
  const commands = {
    about: {
      description: "About me",
      usage: "about",
      fn: () =>
        `Hi, I'm Divyansh Kumar!

Software Developer with hands-on experience designing and building
full-stack web applications and AI-powered solutions.

Proficient in JavaScript, Java, Python, React.js, Node.js, Express.js,
and MongoDB, with practical experience in backend development, REST APIs,
secure authentication, LLM integration, and RAG pipelines.

Currently pursuing Bachelor of Computer Applications (BCA) at
REVA University, Bengaluru (CGPA: 8.85).

Focus:
- Full-Stack Web Development (MERN)
- AI & LLM Systems (LangChain, Gemini, RAG)
- Data Structures & Algorithms (80+ problems solved)
- Scalable, maintainable software design`,
    },

    skills: {
      description: "List my technical skills",
      usage: "skills",
      fn: () =>
        `LANGUAGES:
- JavaScript, Java, Python, C, TypeScript

FRONTEND:
- React.js, HTML5, CSS3, Tailwind CSS

BACKEND:
- Node.js, Express.js, REST APIs, JWT, OAuth

DATABASES:
- MongoDB, MySQL, Redis, Pinecone

AI & LLMS:
- Generative AI, LLMs, Prompt Engineering, RAG, LangChain

DEVELOPER TOOLS:
- Git, GitHub, Postman, Docker, Vercel, Render

CORE CS:
- Data Structures & Algorithms, OOP, DBMS, Operating Systems, Computer Networks

SOFT SKILLS:
- Problem Solving, Team Collaboration, Communication, Time Management`,
    },

    projects: {
      description: "View my featured projects",
      usage: "projects",
      fn: () =>
        `1. Orvyn – AI-Powered Search & Research Assistant
   • Built an AI-powered research assistant using LangChain, Google Gemini,
     and Tavily for real-time web search and context-aware responses.
   • Node.js, Express.js, and MongoDB backend supporting secure JWT
     authentication and conversation management.
   • Demo: https://orvyn-ochre.vercel.app

2. Interactive Web Workspace & Portfolio
   • Created an interactive browser-based portfolio workspace featuring
     functional window management, custom applications, and an integrated AI chatbot
     powered by RAG and Pinecone for context-aware responses.
   • Tech: React, JavaScript, SCSS, Pinecone, Gemini

3. Flakes.pdf – PDF & Image Utility
   • Engineered a browser-based PDF utility supporting image-to-PDF
     conversion, PDF merging, and file compression through client-side
     processing, reducing server dependency.
   • Demo: https://flakespdf.vercel.app

4. NOC Simulator – Network-on-Chip Simulator
   • Developed a React-based interactive simulator in collaboration with
     a professor working on an emerging Network-on-Chip architecture language,
     enabling visualization of network architecture and communication flows.
   • Demo: https://noclang-simulator.vercel.app/`,
    },

    experience: {
      description: "View my professional experience",
      usage: "experience",
      fn: () =>
        `1. Freelance Web Developer
   Client: Dr. Rao's Naturals – E-commerce Website
   Timeline: 27 Aug 2026 – 30 Sep 2026
   • Developed a responsive e-commerce platform with product management,
     an admin dashboard, and Cloudinary-powered image uploads using React,
     Node.js, Express.js, and MongoDB.

2. Freelance Web Developer
   Client: Prof. P. V. Rao – Academic Portfolio
   Timeline: 1 Oct 2026 – 30 Oct 2026
   • Developed a multi-page academic portfolio with an admin dashboard and
     backend integration for dynamic content management.

3. Kampus – Video Editor Intern
   Timeline: Feb 2025 – Jul 2025
   • Produced 3–4 short-form videos per month aligned with brand identity
     for social media platforms.`,
    },

    education: {
      description: "View my education",
      usage: "education",
      fn: () =>
        `Bachelor of Computer Applications (BCA)
REVA University, Bengaluru
Duration: Aug 2024 – Aug 2027
CGPA: 8.85

Coursework:
- Data Structures & Algorithms
- Operating Systems
- Computer Networks
- Database Management Systems (RDBMS)
- Software Engineering
- Java & Python Programming`,
    },

    certifications: {
      description: "View my certifications",
      usage: "certifications",
      fn: () =>
        `1. Introduction to Generative AI
   Issuer: Google Cloud, Coursera (February 2025)

2. Database Management Systems (RDBMS) and Microsoft Fabric SQL
   Issuer: Udemy (December 2025)

3. Python PCAP: Certified Associate in Python Programming
   Issuer: Udemy (May 2026)`,
    },

    achievements: {
      description: "View my achievements and leadership",
      usage: "achievements",
      fn: () =>
        `• Problem Solving: Solved 80+ problems across LeetCode and GeeksforGeeks.
• Hackathons: Participated in multiple hackathons, including Smart India
  Hackathon (SIH) 2026, advancing to Round 2.
• Leadership: Coordinated 5+ technical events through the Software Coding Club
  at REVA University.`,
    },

    contact: {
      description: "Contact information",
      usage: "contact",
      fn: () =>
        `Email: divyanshrai6200@gmail.com
Phone: +91-9234148912
Location: Bengaluru, India
LinkedIn: https://www.linkedin.com/in/divyansh-kumar-889057322/
GitHub: https://github.com/Nonu185
LeetCode: https://leetcode.com/u/mjauXDneVZ/`,
    },

    github: {
      description: "Open GitHub profile",
      usage: "github",
      fn: () => {
        window.open("https://github.com/Nonu185", "_blank");
        return "Opening GitHub profile (https://github.com/Nonu185)...";
      },
    },

    linkedin: {
      description: "Open LinkedIn profile",
      usage: "linkedin",
      fn: () => {
        window.open("https://www.linkedin.com/in/divyansh-kumar-889057322/", "_blank");
        return "Opening LinkedIn profile...";
      },
    },

    leetcode: {
      description: "Open LeetCode profile",
      usage: "leetcode",
      fn: () => {
        window.open("https://leetcode.com/u/mjauXDneVZ/", "_blank");
        return "Opening LeetCode profile (80+ problems solved)...";
      },
    },

    resume: {
      description: "Open my resume PDF",
      usage: "resume",
      fn: () => {
        window.open("/DivyanshKumar_Resume.pdf", "_blank");
        return "Opening resume...";
      },
    },

    echo: {
      description: "Repeat the given text",
      usage: "echo <text>",
      fn: (...args) => args.join(" "),
    },
  };

  const welcomeMessage = `
╔══════════════════════════════════════════════════════════════╗
║               Welcome to Divyansh's Terminal                 ║
╚══════════════════════════════════════════════════════════════╝

Divyansh Kumar — Software Developer | Full-Stack & AI
Bengaluru, India • REVA University (CGPA: 8.85)

Available commands:
• about          • skills         • projects
• experience     • education      • certifications
• achievements   • contact        • resume
• github         • linkedin       • leetcode

Type 'help' to see all available commands.
`;

  return (
    <MacWindow
      windowName={windowName}
      setWindowsState={setWindowsState}
      index={4}
    >
      <div className="cli-window">
        <Terminal
          commands={commands}
          welcomeMessage={welcomeMessage}
          promptLabel={"divyansh:~$"}
          promptLabelStyle={{ color: "#38bdf8" }}
        />
      </div>
    </MacWindow>
  );
};

export default Cli;
