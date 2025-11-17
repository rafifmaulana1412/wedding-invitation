import { useState, useRef } from "react";

export default function MusicPlayer() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setPlaying(!playing);
  };

  return (
    <>
      <audio ref={audioRef} src="/assets/A Thousand Years.mp3" loop />

      <button
        onClick={toggleMusic}
        style={{
          position: "fixed",
          bottom: "40px",
          right: "40px",
          zIndex: 999999,
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          border: "none",
          background: "#fff",
          boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
          cursor: "pointer",
        }}
      >
        {playing ? "⏸️" : "🎵"}
      </button>
    </>
  );
}
