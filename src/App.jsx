import { useState, useEffect } from 'react'
import "./app.scss"
import Dock from './components/Dock'
import Nav from './components/Nav'
import Desktop from './components/Desktop'
import Note from './components/windows/Note'
import Resume from './components/windows/Resume'
import Spotify from './components/windows/Spotify'
import Cli from './components/windows/Cli'
import Safari from './components/windows/Safari'
import AiWindow from './components/ai/AiWindow'




function App() {
  const wallpapers = ['/mac-wallpaper.jpg', '/w2.jpg', '/w3.jpg'];
  const [currentWallpaperIndex, setCurrentWallpaperIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWallpaperIndex((prev) => (prev + 1) % wallpapers.length);
    }, 5 * 60 * 1000); 

    return () => clearInterval(interval);
  }, []);

  const changeWallpaper = () => {
    setCurrentWallpaperIndex((prev) => (prev + 1) % wallpapers.length);
  };

  const [windowsState, setWindowsState] = useState({
    note: false,
    resume: false,
    spotify: false,
    cli: false,
    safari: false,
    ai: false,
  })
  
  return (
    <main style={{ backgroundImage: `url(${wallpapers[currentWallpaperIndex]})` }}>
      <Nav setWindowsState={setWindowsState} changeWallpaper={changeWallpaper} />
      <Desktop />
      <Dock windowsState={windowsState} setWindowsState={setWindowsState} />
      { windowsState.note && <Note windowName="note" setWindowsState={setWindowsState} />}
      { windowsState.resume && <Resume windowName="resume" setWindowsState={setWindowsState} />}
      { windowsState.spotify && <Spotify windowName="spotify" setWindowsState={setWindowsState} />}
      { windowsState.cli && <Cli windowName="cli" setWindowsState={setWindowsState} />}
      { windowsState.safari && <Safari windowName="safari" setWindowsState={setWindowsState} />}
      { windowsState.ai && <AiWindow windowName="ai" setWindowsState={setWindowsState} />}
    </main>
  )
}

export default App
