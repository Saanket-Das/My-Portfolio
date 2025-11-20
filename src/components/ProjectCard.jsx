import React from "react";

export default function ProjectCard({ project, onClick }) {
  return (
    <div className="project-card" onClick={onClick}>
      <h3 style={{ fontSize: "18px", fontWeight: "600" }}>
        {project.title}
      </h3>

      <p style={{ marginTop: "6px", fontSize: "14px", color: "#475569" }}>
        {project.short}
      </p>

      <div style={{ marginTop: "10px", display: "flex", flexWrap: "wrap", gap: "6px" }}>
        {project.tags.map((tag, index) => (
          <span key={index} className="tag">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
