// src/components/ParticleNetwork.jsx
import React, { useEffect, useRef } from "react";
import "./ParticleNetwork.css";

export default function ParticleNetwork({ enabled = true }) {
  const canvasRef = useRef(null);
  const rafRef = useRef(null);
  const particlesRef = useRef([]);
  const pointerRef = useRef({ x: null, y: null, active: false });
  const resizeTimeout = useRef(null);

  useEffect(() => {
    if (!enabled) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let width = 0, height = 0;
    let dpr = Math.max(1, window.devicePixelRatio || 1);
    let running = true;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      drawStatic();
      return cleanup;
    }

    function particleCountForSize(w, h) {
      const area = (w * h) / (1000 * 1000);
      const base = Math.max(28, Math.round(area * 90)); // higher base for clearer network
      return Math.min(220, base); // raised cap
    }

    function resize() {
      cancelAnimationFrame(rafRef.current);
      clearTimeout(resizeTimeout.current);

      dpr = Math.max(1, window.devicePixelRatio || 1);
      width = Math.max(320, Math.floor(canvas.clientWidth));
      height = Math.max(240, Math.floor(canvas.clientHeight));

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      initParticles();
      resizeTimeout.current = setTimeout(() => {
        if (running) animate();
      }, 100);
    }

    function initParticles() {
      const count = particleCountForSize(width, height);
      const particles = [];
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * (0.2 + Math.random() * 0.9),
          vy: (Math.random() - 0.5) * (0.2 + Math.random() * 0.9),
          r: 1.4 + Math.random() * 2.8 // larger radius
        });
      }
      particlesRef.current = particles;
    }

    function animate() {
      if (!running) return;
      if (document.body.classList.contains("pb-scrolling")) {
        rafRef.current = requestAnimationFrame(animate);
        return;
      }

      ctx.clearRect(0, 0, width, height);

      const particles = particlesRef.current;
      const len = particles.length;
      const maxLinkDist = Math.min(140, Math.max(width, height) * 0.10);
      const maxLinkDistSq = maxLinkDist * maxLinkDist;

      // draw faint background gradient for contrast (cheap)
      const g = ctx.createLinearGradient(0,0,width, height);
      g.addColorStop(0, "rgba(245,248,255,0.98)");
      g.addColorStop(1, "rgba(247,250,255,0.98)");
      ctx.fillStyle = g;
      ctx.fillRect(0,0,width, height);

      // draw lines first (stronger, glowing)
      for (let i = 0; i < len; i++) {
        const a = particles[i];
        for (let j = i + 1; j < len; j++) {
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const distSq = dx * dx + dy * dy;
          if (distSq <= maxLinkDistSq) {
            const alpha = 0.22 * (1 - distSq / maxLinkDistSq); // stronger alpha
            // bright glowing connection
            ctx.beginPath();
            ctx.strokeStyle = `rgba(80,140,255,${Math.min(alpha * 2.2, 1)})`; // brighter blue
            ctx.lineWidth = 2.2;
            ctx.shadowBlur = 8;
            ctx.shadowColor = "rgba(120,170,255,0.9)";
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
            // clear shadow so subsequent draws aren't affected
            ctx.shadowBlur = 0;
            ctx.shadowColor = "transparent";
          }
        }
      }

      // draw particles (on top)
      for (let i = 0; i < len; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;
        if (p.y < -10) p.y = height + 10;
        if (p.y > height + 10) p.y = -10;

        // draw halo + core
        ctx.beginPath();
        ctx.fillStyle = "rgba(255,255,255,0.95)";
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();

        // subtle outer glow ring
        ctx.beginPath();
        ctx.strokeStyle = "rgba(120,160,255,0.12)";
        ctx.lineWidth = 2;
        ctx.arc(p.x, p.y, p.r + 2.2, 0, Math.PI * 2);
        ctx.stroke();
      }

      // pointer repulse (cheap)
      if (pointerRef.current.active && pointerRef.current.x !== null) {
        const px = pointerRef.current.x;
        const py = pointerRef.current.y;
        for (let i = 0; i < len; i++) {
          const p = particles[i];
          const dx = p.x - px;
          const dy = p.y - py;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 110) {
            const force = (110 - dist) / 110;
            p.x += (dx / dist) * force * 6.5;
            p.y += (dy / dist) * force * 6.5;
          }
        }
      }

      rafRef.current = requestAnimationFrame(animate);
    }

    function drawStatic() {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = "rgba(247,250,255,1)";
      ctx.fillRect(0, 0, width, height);
    }

    function onMove(e) {
      const rect = canvas.getBoundingClientRect();
      pointerRef.current.x = (e.clientX - rect.left);
      pointerRef.current.y = (e.clientY - rect.top);
      pointerRef.current.active = true;
      clearTimeout(pointerRef.current._timer);
      pointerRef.current._timer = setTimeout(() => {
        pointerRef.current.active = false;
        pointerRef.current.x = null;
        pointerRef.current.y = null;
      }, 1500);
    }
    function onLeave() {
      pointerRef.current.active = false;
      pointerRef.current.x = null;
      pointerRef.current.y = null;
    }

    function start() {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(animate);
    }
    function stop() {
      cancelAnimationFrame(rafRef.current);
    }

    function attach() {
      window.addEventListener("resize", resize, { passive: true });
      canvas.addEventListener("mousemove", onMove);
      canvas.addEventListener("mouseleave", onLeave);
      window.addEventListener("visibilitychange", () => {
        if (document.hidden) stop(); else start();
      });
    }
    function detach() {
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("mousemove", onMove);
      canvas.removeEventListener("mouseleave", onLeave);
    }

    resize();
    attach();
    start();

    function cleanup() {
      running = false;
      cancelAnimationFrame(rafRef.current);
      detach();
      clearTimeout(resizeTimeout.current);
      clearTimeout(pointerRef.current._timer);
    }
    return cleanup;
  }, [enabled]);

  return (
    <div className="pn-wrapper" aria-hidden>
      <canvas ref={canvasRef} className="pn-canvas" />
    </div>
  );
}
