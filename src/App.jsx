import React, { useState } from "react";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Nav from "./components/Nav";

import Home from "./pages/Home";
import ProjectsPage from "./pages/ProjectsPage";
import ProjectDetails from "./pages/ProjectDetails";
import ContactPage from "./pages/ContactPage";
import resumePDF from "./assets/resume.pdf";
import { HashRouter as BrowserRouter, Routes, Route } from "react-router-dom";


import ParticleNetwork from "./components/ParticleNetwork"; // the network background
import "./App.css"; // optional - keep your global styles

// Landing + Loading
import Landing from "./components/Landing";
import LoadingScreen from "./components/LoadingScreen";
import CertificationsPage from "./pages/CertificationsPage";
import Loading from "./components/Loading";
import "./components/Loading.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingWrapper />} />
        <Route path="/portfolio/*" element={<PortfolioLayout />} />
        <Route path="*" element={<LandingWrapper />} />
      </Routes>
    </BrowserRouter>
  );
}

function LandingWrapper() {
  const [loading, setLoading] = useState(true);

  return loading ? (
    <LoadingScreen onDone={() => setLoading(false)} />
  ) : (
    <Landing />
  );
}

function PortfolioLayout() {
  const [theme, setTheme] = useState("light");

  // same educational data you were passing earlier
  const education = [
    { school: "VIT Bhopal University", degree: "MCA", period: "2024 - Present", details: "Yet To Graduate" },
    { school: "Siksha 'O' Anusandhan University", degree: "BCA.", period: "2020 - 2023", details: "Graduated " },
    { school: "St Joseph's College ", degree: "Higher Secondary", period: "2020", details: "Graduated with Distinction" },
    { school: "St Joseph's College", degree: "Secondary", period: "2018", details: "Graduated with Distinction" }
  ];

  const achievements = [
    "TCS CodeVita Round 1 Qualified [Rank-634]",
    "Adobe Hackathon Round 1 Qualified"
  ];

const downloadResume = () => {
  const a = document.createElement("a");
  a.href = resumePDF;
  a.download = "Sanket_Kumar_Das_Resume.pdf";
  document.body.appendChild(a);
  a.click();
  a.remove();
};
  return (
    <div className={theme === "dark" ? "dark-mode" : ""}>
      {/* Particle background only on portfolio pages */}
      <ParticleNetwork enabled={true} />

      <div style={{ position: "relative", zIndex: 1, maxWidth: 1100, margin: "0 auto", padding: 20 }}>
        <Header onResume={downloadResume} onToggleTheme={() => setTheme(t => (t === "light" ? "dark" : "light"))} />
        <Nav />
        <div className="layout" style={{ marginTop: 12 }}>
          <Sidebar />
          <main style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <Routes>
              <Route index element={<Home education={education} achievements={achievements} />} />
              <Route path="projects" element={<ProjectsPage />} />
              <Route path="projects/:id" element={<ProjectDetails />} />
              <Route path="certifications" element={<CertificationsPage />} />
              <Route path="contact" element={<ContactPage />} />
              <Route path="*" element={<div className="card"><h2>Page not found</h2></div>} />
            </Routes>
          </main>
        </div>
        <Footer />
      </div>
    </div>
  );
}
