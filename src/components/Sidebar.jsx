import React, { useState } from "react";
import { profile } from "../data/profile";
import { FiGithub, FiLinkedin, FiMail, FiGlobe } from "react-icons/fi";

// ⭐ IMPORT YOUR REAL PROFILE PHOTO HERE
// (Make sure the file is inside: src/assets/me.jpg)
import myPhoto from "../assets/passport.jpeg";

export default function Sidebar() {
  const [imageError, setImageError] = useState(false);

  const SKILLS = [
    { name: "React", value: 90 },
    { name: "Java", value: 85 },
    { name: "Python", value: 80 },
      { name: "C++", value: 70 },
    { name: "SQL", value: 78 },
    { name: "Firebase", value: 75 },
    { name: "Android", value: 90 },
   
  ];

  const STATS = [
    { label: "Projects", value: "10" },
    { label: "Hackathons", value: "2" },
    { label: "Experience", value: "Fresher" },
  ];

  return (
    <aside className="card sidebar" style={{ paddingBottom: 18 }}>

      {/* PROFILE PHOTO OR INITIALS */}
      <div style={{ display: "flex", justifyContent: "center", marginTop: 6 }}>
        {!imageError ? (
          <img
            src={myPhoto}        // 👉 fixed path
            alt="Profile"
            className="profile-photo"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="profile-photo-initials">
            {profile.initials ||
              profile.name
                .split(" ")
                .map((n) => n[0])
                .slice(0, 2)
                .join("")
                .toUpperCase()}
          </div>
        )}
      </div>

      {/* NAME + TITLE */}
      <div style={{ marginTop: 12, textAlign: "center" }}>
        <h3 style={{ fontSize: 18, marginBottom: 4 }}>{profile.name}</h3>
        <small style={{ color: "#64748b" }}>{profile.title}</small>
      </div>

      {/* AVAILABILITY */}
      <div style={{ display: "flex", justifyContent: "center", marginTop: 12 }}>
        <span className="availability">● Open to work</span>
      </div>

      {/* CONTACT */}
      <div style={{ marginTop: 14, paddingLeft: 12, paddingRight: 12 }}>
        <small>📍 {profile.location}</small><br />
        <small>✉️ {profile.email}</small><br />
        <small>📞 {profile.phone}</small>
      </div>

      {/* SKILLS */}
      <div style={{ marginTop: 18, paddingLeft: 12, paddingRight: 12 }}>
        <h4 style={{ marginBottom: 10 }}>Skills</h4>
        {SKILLS.map((s) => (
          <div key={s.name} style={{ marginBottom: 12 }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span>{s.name}</span>
              <span style={{ color: "#475569" }}>{s.value}%</span>
            </div>
            <div className="skill-track">
              <div className="skill-bar" style={{ width: `${s.value}%` }} />
            </div>
          </div>
        ))}
      </div>

      {/* SOCIAL ICONS */}
      <div style={{ marginTop: 14, display: "flex", justifyContent: "center", gap: 10 }}>
        <a href="https://github.com/Saanket-Das" className="social"><FiGithub /></a>
        <a href="https://www.linkedin.com/in/sanket-kumar-das-598298229/" className="social"><FiLinkedin /></a>
      <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=sanketlives@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
  className="social"
>
  <FiMail />
</a>

      </div>

      {/* STATS */}
      <div style={{ marginTop: 18, display: "flex", justifyContent: "space-around" }}>
        {STATS.map((s) => (
          <div key={s.label} style={{ textAlign: "center" }}>
            <div style={{ fontWeight: 700, fontSize: 16 }}>{s.value}</div>
            <div style={{ color: "#64748b", fontSize: 13 }}>{s.label}</div>
          </div>
        ))}
      </div>
    </aside>
  );
}
