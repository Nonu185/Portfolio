import React, { useState } from "react";
import MacWindow from "./MacWindow";
import "./stickies.scss";

const PAPER_COLORS = [
  { name: "Yellow", bg: "#fef08a", border: "#fde047", text: "#713f12" },
  { name: "Pink", bg: "#fbcfe8", border: "#f472b6", text: "#831843" },
  { name: "Sky", bg: "#bae6fd", border: "#38bdf8", text: "#0369a1" },
  { name: "Mint", bg: "#bbf7d0", border: "#4ade80", text: "#14532d" },
  { name: "Peach", bg: "#fed7aa", border: "#fb923c", text: "#7c2d12" },
];

const StickiesModal = ({ windowName, setWindowsState, onAddSticky }) => {
  const [selectedColor, setSelectedColor] = useState(PAPER_COLORS[0]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    if (onAddSticky) {
      onAddSticky({
        id: Date.now(),
        author: name.trim() || "Visitor",
        content: message.trim(),
        color: selectedColor,
        x: Math.floor(Math.random() * 40 + 16),
        y: Math.floor(Math.random() * 80 + 260),
        rotation: (Math.random() * 6 - 3).toFixed(1),
      });
    }

    setMessage("");
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 2500);
  };

  return (
    <MacWindow
      windowName={windowName}
      setWindowsState={setWindowsState}
      index={3}
      width="420px"
      height="480px"
    >
      <div className="stickies-tool">
        <div className="st-header">
          <h3>Pin a Sticky Note</h3>
          <p>Leave a note or greeting on the desktop wall.</p>
        </div>

        <form onSubmit={handleSubmit} className="st-form">
          <div className="st-palette">
            <span className="st-label">Paper Color:</span>
            <div className="st-swatches">
              {PAPER_COLORS.map((c) => (
                <button
                  type="button"
                  key={c.name}
                  className={`st-swatch ${selectedColor.name === c.name ? "selected" : ""}`}
                  style={{ backgroundColor: c.bg, borderColor: c.border }}
                  onClick={() => setSelectedColor(c)}
                />
              ))}
            </div>
          </div>

          <div
            className="st-preview-card"
            style={{
              backgroundColor: selectedColor.bg,
              borderColor: selectedColor.border,
              color: selectedColor.text,
            }}
          >
            <input
              type="text"
              placeholder="Your name or handle"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="st-input"
              maxLength={25}
            />
            <textarea
              placeholder="Write your note here..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="st-textarea"
              rows={4}
              required
            />
          </div>

          <div className="st-footer">
            <button type="submit" className="st-submit-btn">
              {submitted ? "Pinned to Desktop! ✨" : "Pin Note to Desktop 📌"}
            </button>
          </div>
        </form>
      </div>
    </MacWindow>
  );
};

export default StickiesModal;

