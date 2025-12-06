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

      {/* ICON ROW */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 50,
          marginBottom: 20
        }}
      >
        {/* GitHub */}
        <a
          href="https://github.com/Saanket-Das"
          className="social"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textAlign: "center" }}
        >
          <FiGithub size={36} />
          <div style={{ marginTop: 6 }}>GitHub</div>
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/sanket-kumar-das-598298229/"
          className="social"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textAlign: "center" }}
        >
          <FiLinkedin size={36} />
          <div style={{ marginTop: 6 }}>LinkedIn</div>
        </a>

        {/* Email */}
        <a
          href="mailto:sanketlives@gmail.com"
          className="social"
          style={{ textAlign: "center" }}
        >
          <FiMail size={36} />
          <div style={{ marginTop: 6 }}>Email</div>
        </a>
      </div>

      <p style={{ textAlign: "center", marginTop: 10 }}>
        You can also email me directly at{" "}
        <a href="mailto:sanketlives@gmail.com" style={{ fontWeight: 600 }}>
          sanketlives@gmail.com
        </a>.
      </p>
    </div>
  );
}
