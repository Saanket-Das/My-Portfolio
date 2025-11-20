import React from "react";

export default function AnimatedBackground() {
  return (
    <div aria-hidden="true" className="animated-bg">
      <svg className="bg-svg" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="g1" x1="0" x2="1">
            <stop offset="0%" stopColor="#dbeafe" stopOpacity="0.85"/>
            <stop offset="100%" stopColor="#e0f2fe" stopOpacity="0.6"/>
          </linearGradient>
          <linearGradient id="g2" x1="0" x2="1">
            <stop offset="0%" stopColor="#fef3c7" stopOpacity="0.65"/>
            <stop offset="100%" stopColor="#fde68a" stopOpacity="0.35"/>
          </linearGradient>
        </defs>

        {/* multiple soft blobs */}
        <g className="blobs" fill="url(#g1)" transform="translate(0,0)">
          <ellipse className="blob blob-1" cx="220" cy="180" rx="220" ry="160"/>
          <ellipse className="blob blob-2" cx="980" cy="120" rx="260" ry="180" fill="url(#g2)"/>
          <ellipse className="blob blob-3" cx="720" cy="620" rx="320" ry="220" fill="url(#g1)"/>
        </g>

        {/* subtle grid / texture */}
        <g className="grid" fill="none" stroke="rgba(15,23,42,0.02)" strokeWidth="1">
          <rect x="0" y="0" width="1200" height="800"/>
        </g>
      </svg>
    </div>
  );
}
