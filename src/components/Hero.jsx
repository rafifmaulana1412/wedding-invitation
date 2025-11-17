import React from "react";
import { useNavigate } from "react-router-dom";

export default function Hero({ onOpen }) {
  const navigate = useNavigate();

  const handleOpen = () => {
    try {
      onOpen?.(); // panggil onOpen dari App (setOpened + audio)
    } catch (e) {
      // ignore
    }
  };

  return (
    <header className="hero-wrapper">
      <video className="hero-video" autoPlay muted loop playsInline>
        <source
          src={encodeURI("/assets/48569-454825064_small.mp4")}
          type="video/mp4"
        />
      </video>

      <div className="hero-overlay" />

      <div className="hero-content">
        <h1 className="hero-title">Rizky & Rizka</h1>
        <p className="hero-date">20 November 2025</p>

        <button className="hero-button" onClick={handleOpen}>
          Buka Undangan
        </button>
      </div>
    </header>
  );
}
