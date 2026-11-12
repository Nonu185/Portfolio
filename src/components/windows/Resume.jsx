import React from "react";
import MacWindow from "./MacWindow";
import "./resume.scss";

const Resume = ({ windowName, setWindowsState }) => {
  return (
    <MacWindow
      windowName={windowName}
      setWindowsState={setWindowsState}
      index={2}
      width="60vw"
      height="75vh"
    >
      <div className="resume-window">
        <div className="resume-toolbar">
          <span className="resume-filename">DivyanshKumar_Resume.pdf</span>
          <a
            href="/DivyanshKumar_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="resume-download-btn"
          >
            Open / Download PDF ↗
          </a>
        </div>
        <div className="resume-frame-wrap">
          <iframe src="/DivyanshKumar_Resume.pdf" title="Resume PDF" />
        </div>
      </div>
    </MacWindow>
  );
};

export default Resume;
