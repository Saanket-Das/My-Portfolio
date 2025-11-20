import React from "react";

export default function Achievements({ items }) {
  return (
    <div className="card">
      <h2
        style={{
          fontSize: "22px",
          fontWeight: "bold",
          marginBottom: "12px",
        }}
      >
        Achievements
      </h2>

      <ul style={{ marginLeft: "18px", lineHeight: "1.6" }}>
        {items.map((ach, index) => (
          <li key={index} style={{ marginBottom: "8px", fontSize: "15px" }}>
            {ach}
          </li>
        ))}
      </ul>
    </div>
  );
}
