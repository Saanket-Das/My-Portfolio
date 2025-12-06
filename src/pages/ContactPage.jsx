// src/pages/ContactPage.jsx
import React from "react";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

export default function ContactPage() {
  return (
    <div className="card" style={{ padding: 20 }}>
      <h2 style={{ marginTop: 0 }}>Contact</h2>

      <p style={{ marginBottom: 20 }}>
        Feel free to reach out or check out my work here:
      </p>

      {/* ICONS ONLY */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 40,
          marginBottom: 10
        }}
      >
        {/* GitHub */}
        <a
          href="https://github.com/Saanket-Das"
          target="_blank"
          rel="noopener noreferrer"
          className="social"
        >
          <FiGithub size={36} />
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/sanket-kumar-das-598298229/"
          target="_blank"
          rel="noopener noreferrer"
          className="social"
        >
          <FiLinkedin size={36} />
        </a>

        {/* Gmail */}
        <a
          href="mailto:sanketlives@gmail.com"
          className="social"
        >
          <FiMail size={36} />
        </a>
      </div>

      <p style={{ textAlign: "center" }}>
        Email:{" "}
        <a href="mailto:sanketlives@gmail.com" style={{ fontWeight: 600 }}>
          sanketlives@gmail.com
        </a>
      </p>
    </div>
  );
}
