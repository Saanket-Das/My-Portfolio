// src/pages/ProjectDetails.jsx
import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { projects } from "../data/projects";

export default function ProjectDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="card" style={{ padding: 20 }}>
        <h3>Project not found</h3>
        <div style={{ marginTop: 12 }}>
          <button className="btn btn-outline" onClick={() => navigate(-1)}>Go back</button>
          <Link to="/projects" className="btn" style={{ marginLeft: 8 }}>Projects</Link>
        </div>
      </div>
    );
  }

  // helper to resolve image path from public/images
  const imageUrl = (file) => {
    // if your projects.images already contain absolute paths ("/images/..") this will still work
    if (!file) return null;
    return file.startsWith("/") ? file : `/images/${file}`;
  };

  return (
    <div className="card" style={{ padding: 20 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
        <h2 style={{ margin: 0 }}>{project.title}</h2>
        <div style={{ display: "flex", gap: 8 }}>
          <Link to="/projects" className="btn btn-outline">Back</Link>
        </div>
      </div>

      {/* top small meta */}
      <div style={{ marginTop: 10, color: "#64748b" }}>
        {project.period && <span style={{ marginRight: 12 }}>{project.period}</span>}
        {project.tags && project.tags.map((t, i) => (
          <span key={i} className="tag" style={{ marginRight: 6 }}>{t}</span>
        ))}
      </div>

      {/* Gallery (uses your existing card widths; images are responsive) */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginTop: 16 }}>
        <div>
          {/* show first image larger */}
          {project.images && project.images[0] && (
            <img
              src={imageUrl(project.images[0])}
              alt={`${project.title} demo`}
              style={{ width: "100%", borderRadius: 10, objectFit: "cover", maxHeight: 420 }}
            />
          )}
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {/* remaining images stacked */}
          {(project.images || []).slice(1).map((img, i) => (
            <img
              key={i}
              src={imageUrl(img)}
              alt={`${project.title} ${i + 2}`}
              style={{ width: "100%", borderRadius: 10, objectFit: "cover", height: 190 }}
            />
          ))}

          {/* if no extra images, show description area filler */}
          {(!project.images || project.images.length <= 1) && (
            <div style={{
              background: "var(--card-bg, #fff)",
              borderRadius: 10,
              padding: 14,
              boxShadow: "0 6px 20px rgba(10,18,40,0.06)",
              color: "#475569",
              flex: 1
            }}>
              <strong>About</strong>
              <p style={{ marginTop: 8 }}>{project.description}</p>
            </div>
          )}
        </div>
      </div>

      {/* if there are more images than shown above, show them in a simple gallery row */}
      {(project.images || []).length > 3 && (
        <div style={{ marginTop: 14, display: "flex", gap: 10, flexWrap: "wrap" }}>
          {(project.images || []).map((img, i) => (
            <img
              key={i}
              src={imageUrl(img)}
              alt={`${project.title} thumb ${i + 1}`}
              style={{ width: 120, height: 80, objectFit: "cover", borderRadius: 8, border: "1px solid rgba(15,23,42,0.04)" }}
            />
          ))}
        </div>
      )}

      {/* Description, links */}
      <div style={{ marginTop: 18, color: "#334155" }}>
        {project.images && project.images.length > 1 && (
          <div style={{ marginTop: 12 }}>
            <strong>About</strong>
            <p style={{ marginTop: 8 }}>{project.description}</p>
          </div>
        )}

        <div style={{ marginTop: 12, display: "flex", gap: 8 }}>
          {project.github && (
            <a href={project.github} target="_blank" rel="noreferrer" className="btn btn-outline">GitHub</a>
          )}
          {project.demo && project.demo !== "#" && (
            <a href={project.demo} target="_blank" rel="noreferrer" className="btn btn-primary">Live Demo</a>
          )}
        </div>
      </div>
    </div>
  );
}
