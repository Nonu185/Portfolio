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
        `Hi, I’m Divyansh Kumar.
I am a BCA student at REVA University, Bangalore.
I am learning full-stack web development and UI/UX.
I like building projects to improve my skills.`,
    },

    skills: {
      description: "List my technical skills",
      usage: "skills",
      fn: () =>
        `Frontend:
- HTML (80%)
- CSS (80%)
- JavaScript (60%)
- React.js (40%)
- Tailwind CSS (70%)

Backend:
- Node.js (40%)
- Express.js (40%)

Database:
- MySQL (50%)

Tools:
- Git & GitHub
- Figma
- Canva
- VS Code
- Linux (Basics)`,
    },

    projects: {
      description: "View my projects",
      usage: "projects",
      fn: () =>
        `1. SkillSpace
   - Online learning platform concept
   - Tech: React, Tailwind CSS, Node.js

2. Snake Game
   - JavaScript-based game
   - Focus on logic and DOM handling

3. NoCLang Simulator
   - Visual simulator for Network-on-Chip concepts
   - Built with React and JavaScript`,
    },

    education: {
      description: "View my education",
      usage: "education",
      fn: () =>
        `Bachelor of Computer Applications (BCA)
REVA University, Bangalore

Semester Results:
- 1st Semester: 8.5 SGPA
- 2nd Semester: 8.7 SGPA
- 3rd Semester: 8.9 SGPA`,
    },

    goals: {
      description: "My career goals",
      usage: "goals",
      fn: () =>
        `Short-term:
- Get an internship and build strong basics

Long-term:
- Work as a developer, gain experience,
  and later explore opportunities abroad`,
    },

    contact: {
      description: "Contact information",
      usage: "contact",
      fn: () =>
        `LinkedIn:
https://www.linkedin.com/in/divyansh-kumar-889057322/

GitHub:
https://github.com/Nonu185

Location:
Bangalore, India`,
    },

    github: {
      description: "Open GitHub profile",
      usage: "github",
      fn: () => {
        window.open("https://github.com/Nonu185", "_blank");
        return "Opening GitHub profile...";
      },
    },

    echo: {
      description: "Repeat the given text",
      usage: "echo <text>",
      fn: (...args) => args.join(" "),
    },
  };

  const welcomeMessage = `
╔══════════════════════════════════════╗
║   Welcome to My CLI Portfolio ║
╚══════════════════════════════════════╝

This is my terminal-style portfolio.

Try commands:
- about
- skills
- projects
- education
- goals
- contact
- github

Type 'help' to see all commands.
Enjoy exploring 🚀
`;

  return (
    <MacWindow windowName={windowName} setWindowsState={setWindowsState}>
      <div className="cli-window">
        <Terminal
          commands={commands}
          welcomeMessage={welcomeMessage}
          promptLabel={"nonu:~$"}
          promptLabelStyle={{ color: "#00ff00" }}
        />
      </div>
    </MacWindow>
  );
};

export default Cli;
