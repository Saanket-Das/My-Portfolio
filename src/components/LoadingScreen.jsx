import React, { useEffect } from "react";
import "./LoadingScreen.css";

export default function LoadingScreen({ onDone }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onDone();
    }, 2000); // 2 sec loading

    return () => clearTimeout(timer);
  }, [onDone]);

  return (
    <div className="loader-wrapper">
      <div className="loader">
        <span className="dot dot1"></span>
        <span className="dot dot2"></span>
        <span className="dot dot3"></span>
      </div>
      <h2 className="load-text">Loading Portfolio...</h2>
    </div>
  );
}
