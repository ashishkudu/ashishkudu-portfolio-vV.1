"use client";

import { useEffect, useState } from "react";

type Item = {
  id: number;
  type: "gear" | "bolt" | "nut" | "bearing" | "spring" | "bracket";
  left: number;
  top: number;
  size: number;
  duration: number;
  delay: number;
  driftX: number;
  driftY: number;
  rotation: number;
  opacity: number;
};

const TYPES: Item["type"][] = ["gear", "bolt", "nut", "bearing", "spring", "bracket"];

function Icon({ type }: { type: Item["type"] }) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.15,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  if (type === "gear") return (
    <svg viewBox="0 0 48 48" aria-hidden="true"><path {...common} d="M19 4h10l1.5 5.2a15 15 0 0 1 3.7 2.2l5.1-1.6 5 8.7-3.8 3.8c.3 1.3.5 2.6.5 3.9s-.2 2.6-.5 3.9l3.8 3.8-5 8.7-5.1-1.6a15 15 0 0 1-3.7 2.2L29 44H19l-1.5-5.2a15 15 0 0 1-3.7-2.2l-5.1 1.6-5-8.7 3.8-3.8a16 16 0 0 1 0-7.8l-3.8-3.8 5-8.7 5.1 1.6a15 15 0 0 1 3.7-2.2L19 4Z"/><circle {...common} cx="24" cy="24" r="7"/><circle {...common} cx="24" cy="24" r="2"/></svg>
  );

  if (type === "bolt") return (
    <svg viewBox="0 0 48 48" aria-hidden="true"><path {...common} d="M28 4 10 27h11l-2 17 19-25H27l1-15Z"/><path {...common} d="M7 32h7M34 11h7"/></svg>
  );

  if (type === "nut") return (
    <svg viewBox="0 0 48 48" aria-hidden="true"><path {...common} d="m15 6 18 0 10 18-10 18H15L5 24 15 6Z"/><circle {...common} cx="24" cy="24" r="8"/><path {...common} d="M15 6 24 4l9 2M33 42l-9 2-9-2"/></svg>
  );

  if (type === "bearing") return (
    <svg viewBox="0 0 48 48" aria-hidden="true"><circle {...common} cx="24" cy="24" r="17"/><circle {...common} cx="24" cy="24" r="10"/><circle {...common} cx="24" cy="24" r="4"/><circle {...common} cx="24" cy="12" r="2"/><circle {...common} cx="34.4" cy="18" r="2"/><circle {...common} cx="34.4" cy="30" r="2"/><circle {...common} cx="24" cy="36" r="2"/><circle {...common} cx="13.6" cy="30" r="2"/><circle {...common} cx="13.6" cy="18" r="2"/></svg>
  );

  if (type === "spring") return (
    <svg viewBox="0 0 48 48" aria-hidden="true"><path {...common} d="M10 6v5c0 3 4 3 4 6s-4 3-4 6 4 3 4 6-4 3-4 6v7"/><path {...common} d="M38 6v5c0 3-4 3-4 6s4 3 4 6-4 3-4 6 4 3 4 6v7"/><path {...common} d="M10 24h28"/></svg>
  );

  return (
    <svg viewBox="0 0 48 48" aria-hidden="true"><path {...common} d="M8 10h18v8h14v20H8V10Z"/><path {...common} d="M8 18h10v20M26 18v20M18 10v8M34 26h6"/><circle {...common} cx="13" cy="29" r="2.2"/><circle {...common} cx="31" cy="29" r="2.2"/></svg>
  );
}

function MachineWatermark() {
  return (
    <div
      className="auv-model-watermark"
      style={{
        position: "absolute",
        right: "-4vw",
        top: "2vh",
        width: "min(980px, 78vw)",
        height: "min(620px, 70vh)",
        backgroundImage: "url('/projects/auv/solid-model.png')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "contain",
        opacity: 0.10,
        filter: "grayscale(1) contrast(.9) brightness(1.12)",
        WebkitMaskImage: "radial-gradient(ellipse 72% 62% at 58% 42%, black 0%, rgba(0,0,0,.72) 48%, transparent 84%)",
        maskImage: "radial-gradient(ellipse 72% 62% at 58% 42%, black 0%, rgba(0,0,0,.72) 48%, transparent 84%)",
        pointerEvents: "none",
        zIndex: 0,
      }}
    />
  );
}

export default function MechanicalElements() {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    const positions = [
      [68, 24], [82, 35], [60, 46], [91, 57], [73, 68],
      [53, 74], [87, 79], [64, 87], [78, 14], [47, 34],
      [95, 28], [57, 18],
    ];

    setItems(
      positions.map(([left, top], id) => ({
        id,
        type: TYPES[id % TYPES.length],
        left,
        top,
        size: 16 + (id % 4) * 4,
        duration: 7 + (id % 5) * 1.5,
        delay: -(id * 0.9),
        driftX: (id % 2 ? 1 : -1) * (5 + (id % 4) * 2),
        driftY: (id % 3 ? -1 : 1) * (6 + (id % 3) * 3),
        rotation: id % 2 ? 10 : -8,
        opacity: 0.18 + (id % 4) * 0.035,
      }))
    );
  }, []);

  return (
    <div className="mechanical-elements" aria-hidden="true">
      <MachineWatermark />
      {items.map((item) => (
        <div
          key={item.id}
          className={`mechanical-element mechanical-${item.type}`}
          style={{
            left: `${item.left}%`,
            top: `${item.top}%`,
            width: `${item.size}px`,
            height: `${item.size}px`,
            opacity: item.opacity,
            ["--mech-duration" as string]: `${item.duration}s`,
            ["--mech-delay" as string]: `${item.delay}s`,
            ["--mech-x" as string]: `${item.driftX}px`,
            ["--mech-y" as string]: `${item.driftY}px`,
            ["--mech-rot" as string]: `${item.rotation}deg`,
          }}
        >
          <Icon type={item.type} />
        </div>
      ))}
    </div>
  );
}
