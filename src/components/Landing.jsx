// src/components/Landing.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ParticleNetwork from "./ParticleNetwork";
import "./Landing.css";
import profilePhoto from "../assets/passport.jpeg"; // adjust if different filename

const TAGLINE_WORDS = [
  "React • Java • SQL",
  "Full-Stack Developer",
  "Data-Analyst",
  "Mobile & Web Enthusiast",
];

export default function Landing() {
  const [loading, setLoading] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typingForward, setTypingForward] = useState(true);
  const navigate = useNavigate();

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

  useEffect(() => {
    function onKey(e) {
      if ((e.key === "Enter" || e.key === " ") && !loading) {
        handleEnter();
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);

  function handleEnter() {
    // show spinner and navigate after a short delay
    setLoading(true);

    // keep spinner for a bit to show transition; then navigate.
    setTimeout(() => {
      // navigate to main portfolio route — change "/" to "/portfolio" if that's your route
      navigate("/portfolio");
    }, 650);
  }

  return (
    <div className="landing-hero">
      {/* Particle background behind everything */}
      <ParticleNetwork enabled={true} />

      {/* translucent overlay to improve readability */}
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
              disabled={loading}
              aria-label="Enter portfolio"
              aria-busy={loading ? "true" : "false"}
              type="button"
            >
              {/* Keep width stable: spinner replaces text but button min-width prevents jump */}
              {loading ? <span className="btn-loader" aria-hidden /> : "My Portfolio"}
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
