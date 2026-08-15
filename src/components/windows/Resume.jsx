import React from "react";
import MacWindow from "./MacWindow";
import "./resume.scss";

const Resume = ({ windowName, setWindowsState }) => {
  return (
    <MacWindow
      windowName={windowName}
      setWindowsState={setWindowsState}
      index={2}
    >
      <div className="resume-window">
        <iframe src="/DivyanshKumar_CV  .pdf" title="Resume" />
      </div>
    </MacWindow>
  );
};

export default Resume;
