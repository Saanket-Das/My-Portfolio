import React, { useMemo, useState } from "react";
import { projects as allProjects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import { Link } from "react-router-dom";

export default function ProjectsPage() {
  const [query, setQuery] = useState("");
  const [tagFilter, setTagFilter] = useState("All");
  const [page, setPage] = useState(1);
  const perPage = 4;

  const tags = useMemo(() => ["All", ...new Set(allProjects.flatMap(p => p.tags))], []);

  const filtered = allProjects.filter(p => {
    const matchesTag = tagFilter === "All" || p.tags.includes(tagFilter);
    const matchesQuery = (p.title + p.short).toLowerCase().includes(query.toLowerCase());
    return matchesTag && matchesQuery;
  });

  const pages = Math.max(1, Math.ceil(filtered.length / perPage));
  const pageItems = filtered.slice((page - 1) * perPage, page * perPage);

  return (
    <div className="card">
      <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12 }}>Projects</h2>

      <div style={{ display: "flex", gap: 8, marginBottom: 12, alignItems: "center" }}>
        <input
          value={query}
          onChange={e => { setQuery(e.target.value); setPage(1); }}
          placeholder="Search projects"
          style={{ padding: 8, borderRadius: 8, border: "1px solid #cbd5e1", width: 240 }}
        />

        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          {tags.map(t => (
            <button
              key={t}
              onClick={() => { setTagFilter(t); setPage(1); }}
              className="btn"
              style={{
                padding: "6px 10px",
                borderRadius: 999,
                border: tagFilter === t ? "1px solid #1f2937" : "1px solid #e2e8f0",
                background: tagFilter === t ? "#f1f5f9" : "transparent",
                cursor: "pointer"
              }}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

   <div className="projects-grid">
  {pageItems.map(p => (
    <a
      key={p.id}
      href={p.github}
      target="_blank"
      rel="noreferrer"
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <ProjectCard project={p} />
    </a>
  ))}
</div>


      {/* Pagination */}
      <div style={{ marginTop: 12, display: "flex", gap: 8, alignItems: "center" }}>
        <button onClick={() => setPage(s => Math.max(1, s - 1))} className="btn btn-outline">Prev</button>
        <div>Page {page} / {pages}</div>
        <button onClick={() => setPage(s => Math.min(pages, s + 1))} className="btn btn-outline">Next</button>
      </div>
    </div>
  );
}
