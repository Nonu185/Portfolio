import React from "react";
import MacWindow from "./MacWindow";
import "./about.scss";

const skillsByCategory = [
  {
    category: "Languages",
    items: ["JavaScript", "Java", "Python", "C", "TypeScript"],
  },
  {
    category: "Frontend",
    items: ["React.js", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express.js", "REST APIs", "JWT", "OAuth"],
  },
  {
    category: "Databases",
    items: ["MongoDB", "MySQL", "Redis", "Pinecone"],
  },
  {
    category: "AI & LLMs",
    items: ["Generative AI", "LLMs", "Prompt Engineering", "RAG", "LangChain"],
  },
  {
    category: "Developer Tools",
    items: ["Git", "GitHub", "Postman", "Docker", "Vercel", "Render"],
  },
  {
    category: "Core CS",
    items: ["Data Structures & Algorithms", "OOP", "DBMS", "Operating Systems", "Computer Networks"],
  },
];

const AboutModal = ({ windowName, setWindowsState }) => {
  return (
    <MacWindow
      windowName={windowName}
      setWindowsState={setWindowsState}
      index={1}
      width="58vw"
      height="70vh"
    >
      <div className="about-window">
        <div className="about-hero">
          <div className="about-avatar-ring">
            <img
              src="/profile.jpg"
              alt="Divyansh Kumar"
              className="about-avatar"
            />
          </div>
          <div className="about-hero-text">
            <h2>Divyansh Kumar</h2>
            <div className="about-role">Full-Stack Developer · Generative AI</div>
            <div className="about-location">📍 Bengaluru, India · divyanshrai6200@gmail.com</div>
            <div className="about-actions">
              <a
                href="/DivyanshKumar_Resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="btn-primary"
              >
                View Resume PDF ↗
              </a>
              <a
                href="mailto:divyanshrai6200@gmail.com"
                className="btn-secondary"
              >
                Send Email ✉️
              </a>
            </div>
          </div>
        </div>

        <div className="about-body">
          <section className="about-section">
            <h3>Professional Summary</h3>
            <p>
              Software Developer with hands-on experience designing and building full-stack web applications and AI-powered solutions. Proficient in JavaScript, Java, Python, React.js, Node.js, Express.js, and MongoDB, with practical experience in backend development, REST APIs, secure authentication, LLM integration, and RAG pipelines. Strong foundation in Data Structures and Algorithms, problem-solving, and writing scalable, maintainable code.
            </p>
          </section>

          <section className="about-section">
            <h3>Education</h3>
            <div className="edu-card">
              <div className="edu-header">
                <div>
                  <h4>Bachelor of Computer Applications (BCA)</h4>
                  <div className="edu-inst">REVA University, Bengaluru</div>
                </div>
                <div className="edu-badge">CGPA: 8.85</div>
              </div>
              <div className="edu-time">Aug 2024 – Aug 2027</div>
              <div className="edu-coursework">
                Relevant Coursework: Data Structures & Algorithms, Operating Systems, Computer Networks, Database Management Systems (RDBMS), Software Engineering, Java & Python Programming.
              </div>
            </div>
          </section>

          <section className="about-section">
            <h3>Technical Skills</h3>
            <div className="skills-grid">
              {skillsByCategory.map((group, idx) => (
                <div key={idx} className="skill-group">
                  <div className="skill-cat">{group.category}</div>
                  <div className="skill-chips">
                    {group.items.map((item, iIdx) => (
                      <span key={iIdx} className="skill-chip">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="about-section">
            <h3>Certifications</h3>
            <div className="cert-list">
              <div className="cert-item">
                <span className="cert-title">Introduction to Generative AI</span>
                <span className="cert-issuer">Google Cloud, Coursera · Feb 2025</span>
              </div>
              <div className="cert-item">
                <span className="cert-title">Database Management Systems (RDBMS) and Microsoft Fabric SQL</span>
                <span className="cert-issuer">Udemy · Dec 2025</span>
              </div>
              <div className="cert-item">
                <span className="cert-title">Python PCAP: Certified Associate in Python Programming</span>
                <span className="cert-issuer">Udemy · May 2026</span>
              </div>
            </div>
          </section>

          <section className="about-section">
            <h3>Achievements & Leadership</h3>
            <ul className="achieve-list">
              <li>
                <strong>Problem Solving:</strong> Solved 80+ problems across LeetCode and GeeksforGeeks.
              </li>
              <li>
                <strong>Hackathon Participation:</strong> Participated in multiple hackathons, including Smart India Hackathon (SIH) 2026, advancing to Round 2.
              </li>
              <li>
                <strong>Technical Event Coordination:</strong> Coordinated 5+ technical events through the Software Coding Club at REVA University.
              </li>
            </ul>
          </section>
        </div>
      </div>
    </MacWindow>
  );
};

export default AboutModal;

