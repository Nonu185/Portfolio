import React from "react";
import MacWindow from "./MacWindow";
import "./experience.scss";

const experiences = [
  {
    role: "Freelance Web Developer",
    organization: "Dr. Rao's Naturals – E-commerce Website",
    period: "27 Aug 2026 – 30 Sep 2026",
    badge: "Client Project",
    demo: "https://drraosnaturals.com",
    highlights: [
      "Developed a responsive e-commerce platform with end-to-end product catalog and category filtering.",
      "Engineered an intuitive admin dashboard for product management, inventory updates, and order oversight.",
      "Integrated Cloudinary for optimized media storage and high-speed image deliveries.",
      "Stack: React.js, Node.js, Express.js, MongoDB, RESTful APIs.",
    ],
  },
  {
    role: "Freelance Web Developer",
    organization: "Prof. P. V. Rao – Academic Portfolio",
    period: "1 Oct 2026 – 30 Oct 2026",
    badge: "Client Project",
    demo: "https://profpvrao.com",
    highlights: [
      "Engineered a multi-page academic portfolio showcasing research publications, patents, and courses.",
      "Built a secure backend-integrated admin dashboard enabling dynamic content and publication updates.",
      "Stack: React.js, Node.js, Express.js, MongoDB.",
    ],
  },
  {
    role: "Video Editor Intern",
    organization: "Kampus",
    period: "Feb 2025 – Jul 2025",
    badge: "Internship",
    highlights: [
      "Produced 3–4 short-form videos per month aligned with brand identity and creative guidelines for social platforms.",
      "Collaborated on visual storytelling, pacing, and engaging video layouts.",
    ],
  },
  {
    role: "Technical Event Coordinator",
    organization: "Software Coding Club, REVA University",
    period: "Nov 2025 – Present",
    badge: "Leadership",
    highlights: [
      "Coordinated 5+ technical events, coding bootcamps, and hackathons.",
      "Participated in multiple hackathons, including Smart India Hackathon (SIH) 2026, advancing to Round 2.",
      "Mentored junior peers in core data structures and problem-solving.",
    ],
  },
];

const ExperienceModal = ({ windowName, setWindowsState }) => {
  return (
    <MacWindow
      windowName={windowName}
      setWindowsState={setWindowsState}
      index={3}
      width="55vw"
      height="65vh"
    >
      <div className="experience-window">
        <div className="exp-header">
          <h2>Work Experience & Leadership</h2>
          <p>Practical engineering experience, freelance deliverables, and leadership roles.</p>
        </div>

        <div className="exp-timeline">
          {experiences.map((exp, idx) => (
            <div key={idx} className="exp-item">
              <div className="exp-item-top">
                <div className="exp-badge-group">
                  <span className="exp-badge">{exp.badge}</span>
                  {exp.demo && (
                    <a
                      href={exp.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="exp-demo-link"
                    >
                      Live Site ↗
                    </a>
                  )}
                </div>
                <span className="exp-period">{exp.period}</span>
              </div>
              <h3>{exp.role}</h3>
              <div className="exp-org">{exp.organization}</div>
              <ul className="exp-bullets">
                {exp.highlights.map((point, pIdx) => (
                  <li key={pIdx}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </MacWindow>
  );
};

export default ExperienceModal;

