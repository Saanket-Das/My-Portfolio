import React from "react";

export default function CertificationsPage() {
  const certifications = [
    {
      name: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
      issuer: "Oracle",
      year: "2025",
      url: "https://drive.google.com/file/d/1KXo8ZRAvef9SeXwcNRRbVcTysojpN_e6/view"
    },
    {
      name: "Introduction to Technology Apprenticeship",
      issuer: "Accenture",
      year: "2025",
      url: "https://drive.google.com/file/d/1PgAjwTdAbNohKfX3D1YNhJsK2RavZE4r/view"
    },
    {
      name: "Data Analytics and Forensic Technology",
      issuer: "Deloitte",
      year: "2025",
      url: "https://drive.google.com/file/d/1nQxzeCv_QZ15WeRpJBBK5JDhe2Svo2ka/view"
    },
     {
      name: "Power BI for Beginners",
      issuer: "Course / Platform",
      year: "2025",
      url: "https://drive.google.com/file/d/1VaqO7gW3vA-FIMi-Imvvi6B1ohQRmdVU/view?usp=sharing"
    },
    {
      name: "Generative AI For Beginners",
      issuer: "Course / Platform",
      year: "2025",
      url: "https://drive.google.com/file/d/1_euyEm3hVGp4uORWstnhvBjEknhrq6H9/view"
    },
    {
      name: "Introduction to Information Security",
      issuer: "Course / Platform",
      year: "2023",
      url: "https://drive.google.com/file/d/1Ak-iRRnSyM-i7qK0P4_ImkbJYRpvq309/view"
    },
    
     {
      name: "OpenCV Tutorial",
      issuer: "Course / Platform",
      year: "2023",
      url: "https://drive.google.com/file/d/1lnPAtK_bZfI5ZWX2KVr3-B8ZqbOFNOzu/view?usp=sharing"
    }
  ];

  return (
    <div className="card">
      <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12 }}>
        Certifications
      </h2>

      <div style={{ display: "grid", gap: 12 }}>
        {certifications.map((c, i) => (
          <a
            key={i}
            href={c.url}
            target="_blank"
            rel="noreferrer noopener"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div
              className="card"
              style={{
                padding: 16,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 12,
                cursor: "pointer"
              }}
            >
              <div>
                <h3 style={{ margin: 0 }}>{c.name}</h3>
                <p style={{ margin: "6px 0 0", color: "#475569" }}>
                  {c.issuer} • {c.year}
                </p>
              </div>

              <div style={{ minWidth: 96, textAlign: "right" }}>
                <span
                  style={{
                    display: "inline-block",
                    padding: "8px 12px",
                    background: "#eef2ff",
                    color: "#1e3a8a",
                    borderRadius: 999,
                    fontWeight: 700,
                    fontSize: 13
                  }}
                >
                  View
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
