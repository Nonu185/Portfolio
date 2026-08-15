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
        `Hi, I'm Divyansh Kumar.

I'm a BCA student at REVA University, Bengaluru,
and an aspiring Software Developer.

I enjoy building full-stack and AI-powered applications
while continuously improving my DSA and core CS fundamentals.

Focus:
- Full-stack development
- AI applications
- Data Structures & Algorithms
- Problem solving

Status:
Learning • Building • Growing`,
    },

    skills: {
      description: "List my technical skills",
      usage: "skills",
      fn: () =>
        `Languages:
- JavaScript
- Java
- Python
- C
- Shell Scripting
- TypeScript

Frontend:
- React.js
- HTML5
- CSS3
- Tailwind CSS

Backend:
- Node.js
- Express.js
- REST APIs
- JWT
- OAuth

Databases:
- MongoDB
- MySQL
- Redis

Tools:
- Git
- GitHub
- Postman
- Figma
- Vercel
- Render
- Canva
- Docker`,
    },

    projects: {
      description: "View my projects",
      usage: "projects",
      fn: () =>
        `1. Orvyn
   - AI-powered search & research assistant
   - Real-time web search and context-aware responses
   - Tech: LangChain, Google Gemini, Tavily,
     Node.js, Express.js, MongoDB

2. Web OS
   - Mac OS-inspired browser OS and portfolio
   - Functional apps, window management and Dock
   - Tech: React, JavaScript, CSS

3. Flakes.pdf
   - Client-side PDF & image utility
   - Image-to-PDF, PDF merging and compression
   - Files processed entirely on the client side

4. NOC Simulator
   - Interactive Network-on-Chip simulator
   - Visualizes data flow between nodes
   - Tech: React, JavaScript`,
    },

    education: {
      description: "View my education",
      usage: "education",
      fn: () =>
        `Bachelor of Computer Applications (BCA)

REVA University, Bengaluru
Aug 2024 – Aug 2027

CGPA: 8.85

Coursework:
- Data Structures & Algorithms
- Computer Networks
- Operating Systems
- Software Engineering
- RDBMS
- Design & Analysis of Algorithms
- Java
- Python`,
    },

    experience: {
      description: "View my experience",
      usage: "experience",
      fn: () =>
        `1. Editorial & Content Head
   Software Coding Club, REVA University
   Nov 2025 – Present

   - Spearheaded 6–7 technical events per semester
   - Organized hackathons and debugging competitions
   - Managed events with 50+ participants

2. Video Editor Intern
   Kampus
   Feb 2025 – Jul 2025

   - Produced 3–4 short-form videos per month
   - Created content for Instagram and YouTube
   - Followed brand identity and content requirements`,
    },

    certifications: {
      description: "View my certifications",
      usage: "certifications",
      fn: () =>
        `Certifications:

1. Introduction to Generative AI
   Google Cloud, Coursera
   Feb 2025

2. Database Management Systems (RDBMS)
   and Microsoft Fabric SQL
   Udemy
   Dec 2025

3. Python PCAP: Certified Associate
   in Python Programming
   Udemy
   May 2026`,
    },

    goals: {
      description: "View my career goals",
      usage: "goals",
      fn: () =>
        `Short-term:
- Secure a software development internship
- Strengthen full-stack development
- Improve DSA and core CS fundamentals
- Build real-world applications

Long-term:
- Grow into a strong software developer
- Build impactful software and AI products
- Gain strong industry experience
- Explore advanced opportunities in software and AI`,
    },

    contact: {
      description: "Contact information",
      usage: "contact",
      fn: () =>
        `Email:
divyanshrai6200@gmail.com

Phone:
+91-9234148912

LinkedIn:
https://www.linkedin.com/in/divyansh-kumar-889057322/

GitHub:
https://github.com/Nonu185

Location:
Bengaluru, India`,
    },

    github: {
      description: "Open GitHub profile",
      usage: "github",
      fn: () => {
        window.open("https://github.com/Nonu185", "_blank");
        return "Opening GitHub profile...";
      },
    },

    resume: {
      description: "Open my resume",
      usage: "resume",
      fn: () => {
        window.open("/DivyanshKumar_CV  .pdf", "_blank");
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
╔══════════════════════════════════════════╗
║        Welcome to Divyansh's CLI         ║
╚══════════════════════════════════════════╝

BCA Student | Aspiring Software Developer

Explore my portfolio through the terminal.

Available commands:

- about
- skills
- projects
- education
- experience
- certifications
- goals
- contact
- github
- resume
- echo <text>

Type 'help' to see all commands.
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
          promptLabelStyle={{ color: "#00ff00" }}
        />
      </div>
    </MacWindow>
  );
};

export default Cli;