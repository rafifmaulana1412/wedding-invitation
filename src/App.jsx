import { useState, useRef, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Hero from "./components/Hero";
import Home from "./pages/Home";
import Story from "./pages/Story";
import Gallery from "./pages/Gallery";
import Wishes from "./pages/Wishes";

import FloatingMusicButton from "./components/FloatingMusicButton";
import StickyBottomNav from "./components/StickyBottomNav";

export default function App() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [opened, setOpened] = useState(false);
  const audioRef = useRef(null);
  const location = useLocation();

  // Load musik
  useEffect(() => {
    audioRef.current = new Audio("/assets/A Thousand Years.mp3");
    audioRef.current.loop = true;
    audioRef.current.preload = "auto";
  }, []);

  const handleOpen = () => {
    setOpened(true);
    audioRef.current
      .play()
      .then(() => setIsPlaying(true))
      .catch(() => {});
  };

  setTimeout(() => {
    document.querySelectorAll(".scroll-animate").forEach((el) => {
      el.classList.add("active");
    });
  }, 300);

  return (
    <>
      {!opened ? (
        <Hero onOpen={handleOpen} />
      ) : (
        <div className="min-h-screen">
          {/* ROUTING TANPA PAGE TRANSITION */}
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/story" element={<Story />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/wishes" element={<Wishes />} />
          </Routes>

          <FloatingMusicButton
            audio={audioRef}
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
          />
          <StickyBottomNav />
        </div>
      )}
    </>
  );
}
