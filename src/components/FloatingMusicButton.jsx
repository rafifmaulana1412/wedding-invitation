export default function FloatingMusicButton({
  audio,
  isPlaying,
  setIsPlaying,
}) {
  const toggleAudio = () => {
    if (isPlaying) {
      audio.current.pause();
      setIsPlaying(false);
    } else {
      audio.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <button
      onClick={toggleAudio}
      style={{
        position: "fixed",
        bottom: 30,
        right: 30,
        width: 58,
        height: 58,
        borderRadius: "50%",
        background: "#fff",
        border: "2px solid #d4b97f", // gold
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        boxShadow: isPlaying
          ? "0 0 20px rgba(212,185,127,0.55)"
          : "0 6px 18px rgba(0,0,0,0.15)",
        cursor: "pointer",
        transition: "0.3s ease",
        zIndex: 2000,
      }}
    >
      <div
        style={{
          fontSize: 24,
          color: isPlaying ? "#d4b97f" : "#aaa",
          animation: isPlaying ? "spin 4s linear infinite" : "none",
        }}
      >
        🎵
      </div>

      <style>
        {`
          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
        `}
      </style>
    </button>
  );
}
