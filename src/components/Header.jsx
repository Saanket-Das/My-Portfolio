import React from "react";
import { useNavigate } from "react-router-dom";


export default function Header({ onResume, onToggleTheme }) {
  const navigate = useNavigate();

  return (
    <header className="header">
      {/* LEFT SIDE — My Portfolio button */}
      <button
        className="portfolio-title-btn"
        onClick={() => navigate("/")}   // Go back to Landing Page
      >
        My Portfolio
      </button>

      {/* RIGHT SIDE — Theme + Resume */}
      <div className="header-right">
        <button className="theme-btn" onClick={onToggleTheme}>
       
        </button>

        <button className="btn btn-primary" onClick={onResume}>
          Download Resume
        </button>
      </div>
    </header>
  );
}
