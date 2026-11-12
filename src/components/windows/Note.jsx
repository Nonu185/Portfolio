import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atelierDuneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import MacWindow from "./MacWindow";
import { profileConfigCode } from "../../data/profileConfig";
import "./note.scss";

const Note = ({ windowName, setWindowsState }) => {
  return (
    <MacWindow
      windowName={windowName}
      setWindowsState={setWindowsState}
      index={1}
    >
      <div className="note-window">
        <SyntaxHighlighter language="typescript" style={atelierDuneDark}>
          {profileConfigCode}
        </SyntaxHighlighter>
      </div>
    </MacWindow>
  );
};

export default Note;
