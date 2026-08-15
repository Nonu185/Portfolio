import React from "react";
import MacWindow from "./MacWindow";
import "./safari.scss";

const Safari = ({ windowName, setWindowsState }) => {
  return (
    <MacWindow
      windowName={windowName}
      setWindowsState={setWindowsState}
      index={4}
    >
      <div className="safari-window">
        <div className="browser-header">
          <div className="browser-nav">
            <span className="nav-btn prev">&lt;</span>
            <span className="nav-btn next">&gt;</span>
          </div>
          <div className="browser-url">
            <span className="lock-icon">🔒</span>
            connect.divyansh
          </div>
        </div>
        <div className="browser-content">
          <h1>Connect with Me</h1>
          <p>Find me on social media or send an email directly.</p>
          
          <div className="social-links-grid">
            <a 
              href="https://github.com/Nonu185" 
              target="_blank" 
              rel="noreferrer" 
              className="social-card github"
            >
              <img src="/doc-icons/github.svg" alt="GitHub" />
              <span>GitHub</span>
            </a>
            
            <a 
              href="https://www.linkedin.com/in/divyansh-kumar-889057322/" 
              target="_blank" 
              rel="noreferrer" 
              className="social-card linkedin"
            >
              <img src="/doc-icons/LinkedIn.svg" alt="LinkedIn" />
              <span>LinkedIn</span>
            </a>
            
            <a 
              href="https://leetcode.com/u/mjauXDneVZ/" 
              target="_blank" 
              rel="noreferrer" 
              className="social-card leetcode"
            >
              <div className="lc-icon">&lt;/&gt;</div>
              <span>LeetCode</span>
            </a>
            
            <a 
              href="mailto:divyanshrai6200@gmail.com" 
              className="social-card email"
            >
              <img src="/doc-icons/mail.svg" alt="Mail" />
              <span>Email</span>
            </a>
          </div>
        </div>
      </div>
    </MacWindow>
  );
};

export default Safari;
