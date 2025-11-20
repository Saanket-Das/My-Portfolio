import React from "react";

export default function Education({ items }) {
  return (
    <div className="card">
      <h2 style={{ fontSize: "22px", fontWeight: "bold", marginBottom: "12px" }}>
        Education
      </h2>

      {items.map((edu, index) => (
        <div
          key={index}
          style={{
            marginBottom: "16px",
            paddingBottom: "10px",
            borderBottom: "1px solid #e2e8f0",
          }}
        >
          <h3 style={{ fontSize: "18px", fontWeight: "600" }}>
            {edu.school}
          </h3>
          <p style={{ color: "#475569", fontSize: "14px" }}>
            {edu.degree} • {edu.period}
          </p>

          <p style={{ marginTop: "6px", color: "#334155", fontSize: "14px" }}>
            {edu.details}
          </p>
        </div>
      ))}
    </div>
  );
}
