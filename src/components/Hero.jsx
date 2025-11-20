import React from "react";
import { profile } from "../data/profile";

export default function Hero() {
  return (
    
    <div className="card">
      <h1 style={{ fontSize: "26px", fontWeight: "bold", position: "relative",
    zIndex: 2, }}>
        
        {profile.name}
      </h1>

      <p style={{ marginTop: "10px", color: "#475569", lineHeight: "1.6" }}>
        {profile.summary}
      </p>
    </div>
    
  );
}
