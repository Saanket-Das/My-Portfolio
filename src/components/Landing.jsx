// src/components/Landing.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ParticleNetwork from "./ParticleNetwork";
import LoadingScreen from "./LoadingScreen"; // ← ADD THIS
import "./Landing.css";
import profilePhoto from "../assets/passport.jpeg";

const TAGLINE_WORDS = [
  "React • Java • SQL",
  "Full-Stack Developer",
  "Data-Analyst",
  "Mobile & Web Enthusiast",
];

export default function Landing() {
  const [loading, setLoading] = useState(false);   // typing animation state
  const [showLoader, setShowLoader] = useState(false); // NEW ← to show loading screen
  const [wordIndex, setWordIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typingForward, setTypingForward] = useState(true);
  const navigate = useNavigate();

  // Typewriter effect
  useEffect(() => {
    let timer;
    const word = TAGLINE_WORDS[wordIndex];

    if (typingForward) {
      if (displayed.length < word.length) {
        timer = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), 90);
      } else {
        timer = setTimeout(() => setTypingForward(false), 900);
      }
    } else {
      if (displayed.length > 0) {
        timer = setTimeout(() => setDisplayed(displayed.slice(0, displayed.length - 1)), 50);
      } else {
        setWordIndex((w) => (w + 1) % TAGLINE_WORDS.length);
        setTypingForward(true);
      }
    }

    return () => clearTimeout(timer);
  }, [displayed, typingForward, wordIndex]);

  // Keyboard shortcut (Enter / Space)
  useEffect(() => {
    function onKey(e) {
      if ((e.key === "Enter" || e.key === " ") && !loading) {
        handleEnter();
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [loading]);

  function handleEnter() {
    setShowLoader(true);  // Show loading screen

    setTimeout(() => {
      navigate("/portfolio");
    }, 2000); // matches LoadingScreen duration
  }

  // If loader is active → show loading screen only
  if (showLoader) return <LoadingScreen />;

  return (
    <div className="landing-hero">
      <ParticleNetwork enabled={true} />
      <div className="landing-overlay" />

      <div className="landing-inner" role="main">
        <aside className="landing-left" aria-hidden>
          <div className="photo-wrap">
            <img src={profilePhoto} alt="Sanket Kumar Das" className="photo-large" />
            <div className="photo-ring" aria-hidden />
          </div>
        </aside>

        <section className="landing-right">
          <h1 className="landing-title">Sanket Kumar Das</h1>

          <div className="landing-tagline" aria-live="polite">
            <span className="typewriter">{displayed}</span>
            <span className="cursor" aria-hidden>▌</span>
          </div>

          <p className="landing-sub">
            Passionate about building scalable applications and extracting actionable insights from large datasets.
          </p>

          <div className="landing-cta">
            <button
              className="btn-portfolio-hero"
              onClick={handleEnter}
              disabled={showLoader}
              type="button"
            >
              {showLoader ? <span className="btn-loader" /> : "My Portfolio"}
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
