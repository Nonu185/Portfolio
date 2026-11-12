import { useState } from 'react'
import "./app.scss"
import Dock from './components/Dock'
import Nav from './components/Nav'
import Desktop from './components/Desktop'
import Note from './components/windows/Note'
import Resume from './components/windows/Resume'
import Cli from './components/windows/Cli'
import AiWindow from './components/ai/AiWindow'
import ProjectsModal from './components/windows/ProjectsModal'
import ExperienceModal from './components/windows/ExperienceModal'
import AboutModal from './components/windows/AboutModal'
import StickiesModal from './components/windows/StickiesModal'
import GalleryModal from './components/windows/GalleryModal'

function App() {
  const [currentTheme, setCurrentTheme] = useState('blue');

  const wallpapers = {
    blue: '/bg-blue.svg',
    purple: '/bg-purple.svg',
    green: '/bg-green.svg',
    black: '/bg-black.svg',
  };

  const [stickyNotes, setStickyNotes] = useState([
    {
      id: 1,
      author: "Divyansh",
      content: "👋 Welcome to my interactive portfolio & digital workspace! Feel free to explore my projects, client work, or drop a note.",
      color: { bg: "#fef08a", border: "#fde047", text: "#713f12" },
      x: 1065,
      y: 140,
      rotation: -1.5,
    },
    {
      id: 2,
      author: "Status",
      content: "🚀 Currently building full-stack web applications & Gen AI solutions. Open to opportunities!",
      color: { bg: "#bae6fd", border: "#38bdf8", text: "#0369a1" },
      x: 1070,
      y: 535,
      rotation: 1.5,
    },
  ]);

  const addSticky = (newSticky) => {
    setStickyNotes((prev) => [...prev, newSticky]);
  };

  const [windowsState, setWindowsState] = useState({
    note: false,
    resume: false,
    cli: false,
    ai: false,
    projects: false,
    experience: false,
    about: false,
    stickies: false,
    gallery: false,
  });

  return (
    <main
      data-theme={currentTheme}
      style={{
        backgroundImage: `url(${wallpapers[currentTheme] || wallpapers.blue})`,
        transition: 'background-image 0.4s ease-in-out',
      }}
    >
      <Nav setWindowsState={setWindowsState} />
      <Desktop
        setWindowsState={setWindowsState}
        stickyNotes={stickyNotes}
        setStickyNotes={setStickyNotes}
        currentTheme={currentTheme}
        setCurrentTheme={setCurrentTheme}
      />
      <Dock />

      {windowsState.note && (
        <Note windowName="note" setWindowsState={setWindowsState} />
      )}
      {windowsState.resume && (
        <Resume windowName="resume" setWindowsState={setWindowsState} />
      )}
      {windowsState.cli && (
        <Cli windowName="cli" setWindowsState={setWindowsState} />
      )}
      {windowsState.ai && (
        <AiWindow windowName="ai" setWindowsState={setWindowsState} />
      )}
      {windowsState.projects && (
        <ProjectsModal windowName="projects" setWindowsState={setWindowsState} />
      )}
      {windowsState.experience && (
        <ExperienceModal
          windowName="experience"
          setWindowsState={setWindowsState}
        />
      )}
      {windowsState.about && (
        <AboutModal windowName="about" setWindowsState={setWindowsState} />
      )}
      {windowsState.stickies && (
        <StickiesModal
          windowName="stickies"
          setWindowsState={setWindowsState}
          onAddSticky={addSticky}
        />
      )}
      {windowsState.gallery && (
        <GalleryModal windowName="gallery" setWindowsState={setWindowsState} />
      )}
    </main>
  );
}

export default App;
