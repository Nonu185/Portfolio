import React, { useState } from "react";
import MacWindow from "./MacWindow";
import "./gallery.scss";

const initialGalleryPhotos = [
  {
    id: 1,
    title: "Night Drive",
    location: "Late Night Street",
    category: "Night & Street",
    src: "/desktop-assets/user-photo-night-street.jpg",
    date: "2026",
    camera: "Mobile Photography",
  },
  {
    id: 2,
    title: "Golden Horizon",
    location: "Lake Serenity",
    category: "Landscape & Sky",
    src: "/desktop-assets/user-photo-lake-sunset.jpg",
    date: "2026",
    camera: "Sunset Reflection",
  },
  {
    id: 3,
    title: "Crimson Sky",
    location: "Dusk Twilight",
    category: "Landscape & Sky",
    src: "/desktop-assets/user-photo-crimson-sunset.jpg",
    date: "2026",
    camera: "Sky Hues",
  },
  {
    id: 4,
    title: "Above the Clouds",
    location: "Flight Window View",
    category: "Landscape & Sky",
    src: "/desktop-assets/user-photo-airplane-clouds.jpg",
    date: "2026",
    camera: "Cloudscape",
  },
  {
    id: 5,
    title: "Twilight Silhouette",
    location: "Evening Branches",
    category: "Landscape & Sky",
    src: "/desktop-assets/user-photo-twilight-tree.jpg",
    date: "2026",
    camera: "Nature Silhouette",
  },
];

const GalleryModal = ({ windowName, setWindowsState }) => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [activeTab, setActiveTab] = useState("All");

  const filteredPhotos =
    activeTab === "All"
      ? initialGalleryPhotos
      : initialGalleryPhotos.filter((p) => p.category === activeTab);

  return (
    <MacWindow
      windowName={windowName}
      setWindowsState={setWindowsState}
      index={3}
      width="64vw"
      height="70vh"
    >
      <div className="gallery-window">
        {/* Header */}
        <div className="gallery-header">
          <div className="gh-info">
            <h2>Personal Gallery</h2>
            <p>Personal archive of clicked photos, sunset horizons, and street moments.</p>
          </div>
          <div className="gh-tabs">
            {["All", "Landscape & Sky", "Night & Street"].map((tab) => (
              <button
                key={tab}
                type="button"
                className={`gh-tab ${activeTab === tab ? "active" : ""}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab === "All" ? `All (${initialGalleryPhotos.length})` : tab}
              </button>
            ))}
          </div>
        </div>

        {/* Photos Grid */}
        <div className="gallery-grid">
          {filteredPhotos.map((photo) => (
            <div
              key={photo.id}
              className="gallery-card"
              onClick={() => setSelectedPhoto(photo)}
            >
              <div className="gc-image-wrap">
                <img src={photo.src} alt={photo.title} loading="lazy" />
                <div className="gc-overlay">
                  <span className="gc-zoom-hint">Click to enlarge 🔍</span>
                </div>
              </div>
              <div className="gc-meta">
                <div className="gc-title">{photo.title}</div>
                <div className="gc-sub">
                  <span>{photo.location}</span>
                  <span className="dot-sep">·</span>
                  <span>{photo.camera}</span>
                </div>
              </div>
            </div>
          ))}

          {/* Placeholder for future uploads */}
          <div className="gallery-card placeholder-card">
            <div className="gc-placeholder-inner">
              <span className="ph-icon">📷</span>
              <div className="ph-text">More Photos Coming Soon</div>
              <p className="ph-desc">New uploads will be archived here.</p>
            </div>
          </div>
        </div>

        {/* Lightbox / Fullscreen Preview */}
        {selectedPhoto && (
          <div className="gallery-lightbox" onClick={() => setSelectedPhoto(null)}>
            <div
              className="lightbox-content"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                className="lb-close"
                onClick={() => setSelectedPhoto(null)}
                aria-label="Close"
              >
                ✕
              </button>
              <div className="lb-image-container">
                <img src={selectedPhoto.src} alt={selectedPhoto.title} />
              </div>
              <div className="lb-footer">
                <div className="lb-info">
                  <h3>{selectedPhoto.title}</h3>
                  <p>
                    {selectedPhoto.location} · {selectedPhoto.camera} ({selectedPhoto.date})
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </MacWindow>
  );
};

export default GalleryModal;

