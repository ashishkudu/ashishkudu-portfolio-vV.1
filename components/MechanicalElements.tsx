const elements = [
  { type: "gear", className: "mechanical-element mechanical-gear mech-1", label: "Engineering gear" },
  { type: "bearing", className: "mechanical-element mechanical-bearing mech-2", label: "Bearing" },
  { type: "nut", className: "mechanical-element mechanical-nut mech-3", label: "Hex nut" },
  { type: "bolt", className: "mechanical-element mechanical-bolt mech-4", label: "Bolt" },
  { type: "spring", className: "mechanical-element mechanical-spring mech-5", label: "Spring" },
  { type: "bracket", className: "mechanical-element mechanical-bracket mech-6", label: "Bracket" },
];

function MechanicalSvg({ type }: { type: string }) {
  if (type === "gear") {
    return (
      <svg viewBox="0 0 120 120" aria-hidden="true">
        <g fill="none" stroke="currentColor" strokeWidth="4">
          <path d="M46 8h28l4 14 13 6 13-6 11 23-12 8 2 14 13 7-11 23-14-5-11 9-1 15H46l-1-15-11-9-14 5-11-23 13-7 2-14-12-8 11-23 13 6 13-6 4-14Z" />
          <circle cx="60" cy="60" r="27" />
          <circle cx="60" cy="60" r="8" />
        </g>
      </svg>
    );
  }

  if (type === "bearing") {
    return (
      <svg viewBox="0 0 120 120" aria-hidden="true">
        <g fill="none" stroke="currentColor" strokeWidth="4">
          <circle cx="60" cy="60" r="48" />
          <circle cx="60" cy="60" r="31" />
          <circle cx="60" cy="60" r="13" />
          <circle cx="60" cy="27" r="5" />
          <circle cx="89" cy="43" r="5" />
          <circle cx="89" cy="77" r="5" />
          <circle cx="60" cy="93" r="5" />
          <circle cx="31" cy="77" r="5" />
          <circle cx="31" cy="43" r="5" />
        </g>
      </svg>
    );
  }

  if (type === "nut") {
    return (
      <svg viewBox="0 0 120 120" aria-hidden="true">
        <polygon points="60,8 104,34 104,86 60,112 16,86 16,34" fill="none" stroke="currentColor" strokeWidth="5" />
        <polygon points="60,30 83,43 83,77 60,90 37,77 37,43" fill="none" stroke="currentColor" strokeWidth="4" />
      </svg>
    );
  }

  if (type === "bolt") {
    return (
      <svg viewBox="0 0 120 120" aria-hidden="true">
        <g fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round">
          <path d="M35 19h50M42 31h36M48 43h24M56 43v58M64 43v58" />
          <path d="M43 18l-5 12 7 12-7 12 7 12-7 12 7 12" />
          <path d="M77 18l5 12-7 12 7 12-7 12 7 12-7 12" />
        </g>
      </svg>
    );
  }

  if (type === "spring") {
    return (
      <svg viewBox="0 0 120 120" aria-hidden="true">
        <path d="M26 10v15c0 8 14 8 14 16s-14 8-14 16 14 8 14 16-14 8-14 16v15M94 10v15c0 8-14 8-14 16s14 8 14 16-14 8-14 16 14 8 14 16v15" fill="none" stroke="currentColor" strokeWidth="4" />
        <path d="M40 18h40M40 102h40" fill="none" stroke="currentColor" strokeWidth="4" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 120 120" aria-hidden="true">
      <path d="M18 98V22h76v30h-20v-12H38v58h56V74H74v24" fill="none" stroke="currentColor" strokeWidth="5" />
      <circle cx="38" cy="38" r="5" fill="currentColor" stroke="none" />
      <circle cx="94" cy="38" r="5" fill="currentColor" stroke="none" />
      <circle cx="38" cy="82" r="5" fill="currentColor" stroke="none" />
    </svg>
  );
}

export default function MechanicalElements() {
  return (
    <div className="mechanical-elements" aria-hidden="true">
      {elements.map((element) => (
        <div key={element.className} className={element.className} aria-label={element.label}>
          <MechanicalSvg type={element.type} />
        </div>
      ))}
    </div>
  );
}
