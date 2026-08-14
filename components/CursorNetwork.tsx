"use client";

import { useEffect, useRef } from "react";

export default function CursorNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0, height = 0, raf = 0;
    let mouseX = -1000, mouseY = -1000;
    let targetX = -1000, targetY = -1000;
    let time = 0;

    type Node = {
      homeX: number;
      homeY: number;
      x: number;
      y: number;
      vx: number;
      vy: number;
      r: number;
      phase: number;
      twinkle: number;
    };
    let nodes: Node[] = [];

    const seed = () => {
      const count = Math.min(110, Math.max(55, Math.floor((width * height) / 11000)));
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        homeX: 0,
        homeY: 0,
        vx: (Math.random() - 0.5) * 0.008,
        vy: (Math.random() - 0.5) * 0.008,
        r: Math.random() < 0.038 ? 1.7 + Math.random() * 1.1 : 0.45 + Math.random() * 0.75,
        phase: Math.random() * Math.PI * 2,
        twinkle: 0.30 + Math.random() * 0.7,
      }));
      for (const n of nodes) {
        n.homeX = n.x;
        n.homeY = n.y;
      }
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      seed();
    };

    const move = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    const leave = () => {
      targetX = -1000;
      targetY = -1000;
    };

    const draw = () => {
      time += 0.012;
      mouseX += (targetX - mouseX) * 0.34;
      mouseY += (targetY - mouseY) * 0.34;
      ctx.clearRect(0, 0, width, height);

      const visible = mouseX > -500 && mouseY > -500;

      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;

        if (n.x < -25) n.x = width + 25;
        if (n.x > width + 25) n.x = -25;
        if (n.y < -25) n.y = height + 25;
        if (n.y > height + 25) n.y = -25;

        const homeStrength = 0.0018;
        n.vx += (n.homeX - n.x) * homeStrength;
        n.vy += (n.homeY - n.y) * homeStrength;

        if (visible) {
          const dx = mouseX - n.x;
          const dy = mouseY - n.y;
          const dist = Math.hypot(dx, dy);
          const radius = 150;
          if (dist > 1 && dist < radius) {
            const strength = Math.pow(1 - dist / radius, 2.2) * 0.025;
            n.vx += (dx / dist) * strength;
            n.vy += (dy / dist) * strength;
          }
        }

        n.vx *= 0.972;
        n.vy *= 0.972;
      }

      const cellSize = 150;
      const grid = new Map<string, number[]>();
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        const gx = Math.floor(n.x / cellSize);
        const gy = Math.floor(n.y / cellSize);
        const key = `${gx},${gy}`;
        const bucket = grid.get(key);
        if (bucket) bucket.push(i); else grid.set(key, [i]);
      }

      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        const gx = Math.floor(a.x / cellSize);
        const gy = Math.floor(a.y / cellSize);
        for (let ox = -1; ox <= 1; ox++) {
          for (let oy = -1; oy <= 1; oy++) {
            const bucket = grid.get(`${gx + ox},${gy + oy}`);
            if (!bucket) continue;
            for (const j of bucket) {
              if (j <= i) continue;
              const b = nodes[j];
              const dx = a.x - b.x, dy = a.y - b.y;
              const d2 = dx * dx + dy * dy;
              if (d2 > 0 && d2 < 34 * 34) {
                const d = Math.sqrt(d2);
                const separation = Math.pow(1 - d / 34, 1.8) * 0.003;
                a.vx += (dx / d) * separation;
                a.vy += (dy / d) * separation;
                b.vx -= (dx / d) * separation;
                b.vy -= (dy / d) * separation;
              }
            }
          }
        }
      }

      for (const n of nodes) {
        const d = visible ? Math.hypot(mouseX - n.x, mouseY - n.y) : Infinity;
        const active = d < 760;
        const twinkle = 0.72 + Math.sin(time * n.twinkle + n.phase) * 0.20;
        const size = active ? n.r * 1.25 : n.r;
        const alpha = (active ? 0.34 : 0.12) * twinkle;

        ctx.fillStyle = `rgba(125, 190, 255, ${alpha})`;
        ctx.beginPath();
        ctx.arc(n.x, n.y, size, 0, Math.PI * 2);
        ctx.fill();
      }

      raf = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", move, { passive: true });
    window.addEventListener("mouseleave", leave);
    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseleave", leave);
    };
  }, []);

  useEffect(() => {
    const contact = document.getElementById("contact");
    if (!contact || contact.querySelector(".contact-links")) return;

    const links = document.createElement("div");
    links.className = "contact-links";
    links.innerHTML = `
      <a href="mailto:kuduashish9647@gmail.com">Email</a>
      <a href="https://www.linkedin.com/in/ashish-kudu-0ba0921b0/" target="_blank" rel="noreferrer">LinkedIn</a>
      <a href="https://github.com/ashishkudu" target="_blank" rel="noreferrer">GitHub</a>
    `;
    links.style.cssText = "display:flex;flex-wrap:wrap;gap:12px;margin-top:24px;position:relative;z-index:20";
    links.querySelectorAll("a").forEach((a) => {
      a.style.cssText = "display:inline-flex;align-items:center;padding:11px 18px;border:1px solid rgba(125,190,255,.35);border-radius:999px;color:inherit;text-decoration:none;cursor:pointer;position:relative;z-index:21";
    });
    contact.appendChild(links);
  }, []);

  return <canvas ref={canvasRef} className="cursor-network" aria-hidden="true" />;
}
