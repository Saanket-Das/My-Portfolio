// src/pages/ContactPage.jsx
import React from "react";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

export default function ContactPage() {
  return (
    <div className="card" style={{ padding: 24 }}>
      <h2 style={{ marginTop: 0, marginBottom: 8 }}>Contact</h2>
      <p style={{ marginTop: 0, marginBottom: 24, color: "#64748b" }}>
        Feel free to reach out or check out my work here:
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 32,
          padding: "24px 0 8px",
        }}
      >
        {/* GitHub */}
        <a
          href="https://github.com/Saanket-Das"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            textDecoration: "none",
            color: "#0f172a",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 6,
          }}
        >
          <FiGithub size={32} />
          <span style={{ fontSize: 14 }}>GitHub</span>
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/sanket-kumar-das-598298229/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            textDecoration: "none",
            color: "#0f172a",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 6,
          }}
        >
          <FiLinkedin size={32} />
          <span style={{ fontSize: 14 }}>LinkedIn</span>
        </a>

        {/* Email (opens Gmail compose) */}
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=sanketlives@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            textDecoration: "none",
            color: "#0f172a",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 6,
          }}
        >
          <FiMail size={32} />
          <span style={{ fontSize: 14 }}>Email</span>
        </a>
      </div>

      <p
        style={{
          marginTop: 16,
          textAlign: "center",
          fontSize: 13,
          color: "#94a3b8",
        }}
      >
        You can also email me directly at{" "}
        <a
          href="mailto:sanketlives@gmail.com"
          style={{ color: "#2563eb", textDecoration: "none", fontWeight: 500 }}
        >
          sanketlives@gmail.com
        </a>
        .
      </p>
    </div>
  );
}
