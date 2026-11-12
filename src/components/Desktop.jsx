import React, { useState, useEffect, useRef } from "react";
import "./desktop.scss";

const Desktop = ({
  setWindowsState,
  stickyNotes,
  setStickyNotes,
  currentTheme = "blue",
  setCurrentTheme,
}) => {
  const [coords, setCoords] = useState({ x: 380, y: 240 });
  const [draggingNoteId, setDraggingNoteId] = useState(null);
  const dragOffsetRef = useRef({ x: 0, y: 0 });

  const themes = [
    { id: "blue", name: "Blue", gradient: "linear-gradient(135deg, #dbeaf7, #5b8dc9)" },
    { id: "purple", name: "Purple", gradient: "linear-gradient(135deg, #e6c0cc, #292e65)" },
    { id: "green", name: "Green", gradient: "linear-gradient(135deg, #dceccf, #6ea24a)" },
    { id: "black", name: "Black", gradient: "linear-gradient(135deg, #3a3a3a, #080808)" },
  ];

  const handleStickyMouseDown = (e, note) => {
    if (e.target.closest(".sticky-close")) return;
    setDraggingNoteId(note.id);
    dragOffsetRef.current = {
      x: e.clientX - note.x,
      y: e.clientY - note.y,
    };
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCoords({ x: Math.round(e.clientX), y: Math.round(e.clientY) });
      if (draggingNoteId !== null && setStickyNotes) {
        const newX = Math.max(10, Math.min(window.innerWidth - 170, e.clientX - dragOffsetRef.current.x));
        const newY = Math.max(40, Math.min(window.innerHeight - 170, e.clientY - dragOffsetRef.current.y));
        setStickyNotes((prev) =>
          prev.map((n) => (n.id === draggingNoteId ? { ...n, x: newX, y: newY } : n))
        );
      }
    };

    const handleMouseUp = () => {
      setDraggingNoteId(null);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [draggingNoteId, setStickyNotes]);

  const handleOpenWindow = (windowKey) => {
    if (setWindowsState) {
      setWindowsState((prev) => ({ ...prev, [windowKey]: true }));
    }
  };

  const removeSticky = (id) => {
    if (setStickyNotes) {
      setStickyNotes((prev) => prev.filter((n) => n.id !== id));
    }
  };

  const desktopNodes = [
    {
      id: "n-cases",
      num: "01",
      title: "projects",
      subtitle: "selected work",
      icon: "/desktop-assets/ico-folder.png",
      action: () => handleOpenWindow("projects"),
    },
    {
      id: "n-stickies",
      num: "02",
      title: "stickies",
      subtitle: "draw & pin note",
      icon: "/desktop-assets/ico-stickies.png",
      action: () => handleOpenWindow("stickies"),
    },
    {
      id: "n-skills",
      num: "03",
      title: "skills",
      subtitle: "tech & stack",
      icon: "/desktop-assets/ico-books.png",
      action: () => handleOpenWindow("note"),
    },
    {
      id: "n-resume",
      num: "04",
      title: "resume",
      subtitle: "pdf · 2026",
      icon: "/desktop-assets/ico-resume.png?v=2",
      action: () => handleOpenWindow("resume"),
    },
    {
      id: "n-experience",
      num: "05",
      title: "experience",
      subtitle: "freelance & intern",
      icon: "/desktop-assets/ico-notebook.png",
      action: () => handleOpenWindow("experience"),
    },
    {
      id: "n-terminal",
      num: "06",
      title: "terminal",
      subtitle: "interactive cli",
      icon: "/desktop-assets/ico-terminal.svg",
      action: () => handleOpenWindow("cli"),
    },
    {
      id: "n-ai",
      num: "07",
      title: "ai chatbot",
      subtitle: "rag & pinecone",
      icon: "/doc-icons/ASiri.svg",
      action: () => handleOpenWindow("ai"),
    },
    {
      id: "n-gallery",
      num: "08",
      title: "gallery",
      subtitle: "personal archive",
      icon: "/desktop-assets/ico-camera.png",
      action: () => handleOpenWindow("gallery"),
    },
  ];

  return (
    <div className="desktop-stage">
      {/* Blueprint grid lines */}
      <div className="bp-line" style={{ top: "80px" }} />
      <div className="bp-line" style={{ top: "240px" }} />
      <div className="bp-line" style={{ top: "420px" }} />
      <div className="bp-line" style={{ top: "600px" }} />
      <div className="bp-line" style={{ top: "780px" }} />
      <div className="bp-line v" style={{ left: "80px" }} />
      <div className="bp-line v" style={{ left: "340px" }} />
      <div className="bp-line v" style={{ left: "620px" }} />
      <div className="bp-line v" style={{ left: "900px" }} />
      <div className="bp-line v" style={{ left: "1180px" }} />

      {/* Blueprint crosshairs */}
      <div className="crosshair" style={{ left: "71px", top: "71px" }} />
      <div className="crosshair" style={{ left: "611px", top: "71px" }} />
      <div className="crosshair" style={{ left: "1171px", top: "71px" }} />
      <div className="crosshair" style={{ left: "71px", top: "411px" }} />

      {/* Coordinates tracker */}
      <div className="coord-tracker">
        <span>x: {coords.x}</span>
        <span className="dot-sep">·</span>
        <span>y: {coords.y}</span>
      </div>

      {/* Hero Intro Block (#brand-stack) */}
      <div id="brand-stack">
        <div className="hero-row">
          <div className="hero-avatar-wrap">
            <img
              src="/profile.jpg"
              alt="Divyansh Kumar"
              className="hero-portrait"
            />
          </div>
          <div className="hero-col">
            <div className="avail">
              Full-Stack Developer · Generative AI
            </div>
            <p className="hero-lede">
              I build scalable full-stack web applications and integrate modern Generative AI capabilities. Currently pursuing BCA at REVA University, passionate about clean software architecture, responsive UI, and backend scalability.
            </p>
            <p className="hero-lede sub-lede">
              Explore featured work like <strong>Orvyn</strong> (AI Search Assistant), <strong>Flakes.pdf</strong>, and <strong>NOC Simulator</strong> below.
            </p>
            <button
              type="button"
              className="hero-more"
              onClick={() => handleOpenWindow("about")}
            >
              more about me <span>→</span>
            </button>
          </div>
        </div>
      </div>

      {/* Primary Desktop Nodes Grid */}
      <div className="desktop-nodes-grid">
        {desktopNodes.map((node) => (
          <div
            key={node.id}
            id={node.id}
            className="node-card"
            onClick={node.action}
          >
            <div className="node-cap">
              <span className="cn">{node.title}</span>
              <span className="cd">{node.subtitle}</span>
              <i className="cx">{node.num}</i>
            </div>
            <div className={`icon-tile ${node.id === "n-cases" ? "folder-tile" : ""}`}>
              <img
                src={node.icon}
                alt={node.title}
                className={node.id === "n-cases" ? "cs-folder-img" : ""}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Scattered Polaroid / Photo Snippets */}
      <div
        className="polaroid-node p1"
        onClick={() => handleOpenWindow("gallery")}
        title="Night Drive · Click to open Gallery"
      >
        <div className="polaroid-pin" />
        <div className="polaroid-img">
          <img src="/desktop-assets/user-photo-night-street.jpg" alt="Night Drive" />
        </div>
        <div className="polaroid-caption">
          <span className="p-title">night_drive</span>
          <span className="p-sub">Late Night Lights</span>
        </div>
      </div>

      <div
        className="polaroid-node p2"
        onClick={() => handleOpenWindow("gallery")}
        title="Lake Horizon · Click to open Gallery"
      >
        <div className="polaroid-pin" />
        <div className="polaroid-img">
          <img src="/desktop-assets/user-photo-lake-sunset.jpg" alt="Lake Horizon" />
        </div>
        <div className="polaroid-caption">
          <span className="p-title">golden_horizon</span>
          <span className="p-sub">Lake Serenity</span>
        </div>
      </div>

      {/* Pinned Desktop Sticky Notes */}
      {stickyNotes &&
        stickyNotes.map((note) => (
          <div
            key={note.id}
            className="desktop-sticky"
            onMouseDown={(e) => handleStickyMouseDown(e, note)}
            style={{
              left: `${note.x}px`,
              top: `${note.y}px`,
              transform: `rotate(${note.rotation}deg)`,
              backgroundColor: note.color.bg,
              borderColor: note.color.border,
              color: note.color.text,
              cursor: draggingNoteId === note.id ? "grabbing" : "grab",
            }}
          >
            <div className="sticky-pin" />
            <button
              className="sticky-close"
              onClick={(e) => {
                e.stopPropagation();
                removeSticky(note.id);
              }}
              title="Remove sticky note"
            >
              ×
            </button>
            <div className="sticky-author">{note.author}</div>
            <div className="sticky-content">{note.content}</div>
          </div>
        ))}

      {/* Right-Side Widget Rail */}
      <aside id="widget-rail">
        {/* Choose a theme */}
        <div id="wallpaper-picker" aria-label="Choose wallpaper theme">
          <div className="wp-title">choose a theme</div>
          <div className="wp-grid">
            {themes.map((t) => (
              <button
                key={t.id}
                type="button"
                className={`wp-swatch ${currentTheme === t.id ? "active" : ""}`}
                style={{ background: t.gradient }}
                title={t.name}
                aria-label={`Switch to ${t.name} theme`}
                onClick={() => setCurrentTheme && setCurrentTheme(t.id)}
              />
            ))}
          </div>
        </div>

        {/* Weather Widget */}
        <div className="widget" id="weather-widget">
          <div className="wx-pair">
            <div className="wx-card">
              <div className="wx-loc">
                Bengaluru
                <span className="pin-dot">📍</span>
              </div>
              <div className="wx-temp">24°</div>
              <div className="wx-foot">
                <span className="wx-emoji">☀️</span>
                <span className="wx-cond">Clear Sky</span>
              </div>
            </div>
            <div className="wx-card">
              <div className="wx-loc">
                Patna
                <span className="pin-dot">📍</span>
              </div>
              <div className="wx-temp">28°</div>
              <div className="wx-foot">
                <span className="wx-emoji">🌤️</span>
                <span className="wx-cond">Mostly Sunny</span>
              </div>
            </div>
          </div>
        </div>

        {/* Music Widget */}
        <div className="widget" id="music-widget">
          <div className="w-title">Now Playing</div>
          <div className="mp-embed">
            <iframe
              title="Spotify Player"
              style={{ borderRadius: "12px", border: "0" }}
              src="https://open.spotify.com/embed/artist/4gdMJYnopf2nEUcanAwstx?utm_source=generator&theme=0"
              width="100%"
              height="152"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            />
          </div>
          <a
            className="mp-fallback"
            href="https://open.spotify.com/artist/4gdMJYnopf2nEUcanAwstx"
            target="_blank"
            rel="noopener noreferrer"
          >
            open in spotify →
          </a>
        </div>

        {/* Achievements / Awards Widget */}
        <div className="widget" id="awards-widget">
          <div className="w-title">
            <span>Achievements</span>
            <span className="aw-count">2026</span>
          </div>
          <div className="aw-items">
            <div
              className="aw-badge-row"
              onClick={() => window.open("https://leetcode.com/u/mjauXDneVZ/", "_blank")}
            >
              <div className="aw-icon leetcode">80+</div>
              <div className="aw-info">
                <div className="aw-name">LeetCode & GFG</div>
                <div className="aw-desc">80+ DSA Problems Solved</div>
              </div>
            </div>

            <div className="aw-badge-row">
              <div className="aw-icon sih">SIH</div>
              <div className="aw-info">
                <div className="aw-name">Smart India Hackathon</div>
                <div className="aw-desc">SIH 2026 Round 2 Finalist</div>
              </div>
            </div>

            <div className="aw-badge-row">
              <div className="aw-icon club">5+</div>
              <div className="aw-info">
                <div className="aw-name">Software Coding Club</div>
                <div className="aw-desc">5+ Technical Events Coordinated</div>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Desktop;
