import React from "react";
import MacWindow from "./MacWindow";
import "./spotify.scss";

const Spotify = ({ windowName, setWindowsState }) => {
  return (
    <MacWindow
      width="330px"
      height="430px"
      windowName={windowName}
      setWindowsState={setWindowsState}
    >
      <div className="spotify-window">
        <iframe
          data-testid="embed-iframe"
          src="https://open.spotify.com/embed/playlist/6Cts00bQJan5KUYFwWPtA1?utm_source=generator&theme=0"
          width="100%"
          height="100%"
          frameBorder="0"
          allowFullScreen
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          title="Spotify Playlist"
        ></iframe>
      </div>
    </MacWindow>
  );
};

export default Spotify;
