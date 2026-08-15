import fs from 'fs';
import path from 'path';

const baseDir = path.join(process.cwd(), 'knowledge');
const projectsDir = path.join(baseDir, 'projects');

if (!fs.existsSync(baseDir)) fs.mkdirSync(baseDir, { recursive: true });
if (!fs.existsSync(projectsDir)) fs.mkdirSync(projectsDir, { recursive: true });

const files = {
  'profile.md': `---
category: profile
source: profile.md
---
# Divyansh Kumar - Profile
**Role:** BCA Student | Aspiring Software Developer
**University:** REVA University, Bengaluru
**Degree:** Bachelor of Computer Applications (Aug 2024 – Aug 2027)
**Location:** Bengaluru, India
**Focus:** Full-stack development, AI applications & problem solving
**Availability:** Open to internships
**Status:** Learning • Building • Growing
`,
  'education.md': `---
category: education
source: education.md
---
# Education
**Institute:** REVA University
**Degree:** Bachelor of Computer Applications (BCA)
**Duration:** Aug 2024 – Aug 2027
**Location:** Bengaluru, India
**CGPA:** 8.85
**Coursework:**
- Data Structures & Algorithms
- Computer Networks
- Operating Systems
- Software Engineering
- RDBMS
- Design & Analysis of Algorithms
- Java
- Python
`,
  'skills.md': `---
category: skills
source: skills.md
---
# Technical Skills
**Languages:** JavaScript, Java, Python, C, Shell Scripting, TypeScript
**Frontend:** React.js, HTML5, CSS3, Tailwind CSS
**Backend:** Node.js, Express.js, REST APIs, JWT, OAuth
**Databases:** MongoDB, MySQL, Redis
**Tools:** Git, GitHub, Postman, Figma, Vercel, Render, Canva, Docker
**Soft Skills:** Problem Solving, Team Collaboration, Communication, Time Management
`,
  'experience.md': `---
category: experience
source: experience.md
---
# Work Experience

## Editorial & Content Head
**Organization:** Software Coding Club, REVA University
**Duration:** Nov 2025 – Present
**Description:** Spearheaded 6–7 technical events per semester, including hackathons and debugging competitions, while managing end-to-end logistics for 50+ participants per event.

## Video Editor Intern
**Organization:** Kampus
**Duration:** Feb 2025 – Jul 2025
**Description:** Produced and delivered 3–4 short-form videos per month aligned with brand identity for Instagram and YouTube.
`,
  'certifications.md': `---
category: certifications
source: certifications.md
---
# Certifications
- **Introduction to Generative AI** — Google Cloud, Coursera (Feb 2025)
- **Database Management Systems (RDBMS) and Microsoft Fabric SQL** — Udemy (Dec 2025)
- **Python PCAP: Certified Associate in Python Programming** — Udemy (May 2026)
`,
  'career.md': `---
category: career
source: career.md
---
# Career Goals
**Short-term:** Secure a software development internship and strengthen full-stack development, DSA, and core CS fundamentals.
**Long-term:** Grow into a strong software developer by building real-world products and exploring advanced opportunities in software and AI.
`,
  'projects/orvyn.md': `---
category: project
project: orvyn
source: orvyn.md
---
# Orvyn
**Description:** AI-powered search and research assistant providing real-time web search and context-aware responses.
**Tech Stack:** LangChain, Google Gemini, Tavily, Node.js, Express.js, MongoDB
`,
  'projects/web-os.md': `---
category: project
project: web-os
source: web-os.md
---
# Web OS / Mac OS Portfolio
**Description:** Mac OS-inspired browser operating system simulation and interactive developer portfolio with functional apps, window management, and Dock.
**Tech Stack:** React, JavaScript, CSS, Browser APIs
`,
  'projects/flakes.md': `---
category: project
project: flakes
source: flakes.md
---
# Flakes.pdf
**Description:** Client-side PDF and image utility supporting image-to-PDF conversion, PDF merging, compression, and file processing without a server.
**Tech Stack:** React, JavaScript, PDF Processing, Client-side APIs
`,
  'projects/noc-simulator.md': `---
category: project
project: noc-simulator
source: noc-simulator.md
---
# NOC Simulator
**Description:** Interactive Network-on-Chip simulator that visually demonstrates data flow between nodes through animated rendering.
**Tech Stack:** React, JavaScript, Animation
`
};

for (const [filename, content] of Object.entries(files)) {
  fs.writeFileSync(path.join(baseDir, filename), content.trim() + '\\n');
}

console.log('Knowledge base files created successfully.');
