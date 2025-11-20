import React from "react";
import ProjectCard from "./ProjectCard";

export default function ProjectsList({ projects, onSelect }) {
  return (
    <div className="card">
      <h2
        style={{
          fontSize: "22px",
          fontWeight: "bold",
          marginBottom: "12px",
        }}
      >
        Projects
      </h2>

      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onClick={() => onSelect(project)}
          />
        ))}
      </div>
    </div>
  );
}
