// src/components/Nav.jsx
import React from "react";
import { NavLink } from "react-router-dom";

export default function Nav() {
  // Base prefix used for portfolio pages
  const base = "/portfolio";

  const linkClass = ({ isActive }) =>
    isActive ? "nav-link active" : "nav-link";

  return (
    <nav className="nav" aria-label="Main navigation" style={{ display: "flex", gap: 14 }}>
      <NavLink to={`${base}/`} end className={linkClass}>
        Home
      </NavLink>

      <NavLink to={`${base}/projects`} className={linkClass}>
        Projects
      </NavLink>
        <NavLink to={`${base}/certifications`} className={linkClass}>
        Certifications
      </NavLink>
  
      <NavLink to={`${base}/contact`} className={linkClass}>
        Contact
      </NavLink>

      {/* Theme button / resume button are in Header — keep those there */}
    </nav>
  );
}
