import React from "react";
import Hero from "../components/Hero";
import Education from "../components/Education";
import Achievements from "../components/Achievements";

export default function Home({ education, achievements }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      <Hero />
      <Education items={education} />
      <Achievements items={achievements} />
    </div>
  );
}
