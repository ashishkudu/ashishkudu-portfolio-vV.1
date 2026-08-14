export default function MechanicalElements() {
  return (
    <div className="mechanical-elements" aria-hidden="true">
      <div
        className="auv-model-watermark"
        style={{
          position: "absolute",
          right: "-2vw",
          top: "1vh",
          width: "min(1000px, 82vw)",
          height: "min(680px, 76vh)",
          backgroundImage: "url('/projects/auv/final-side.jpg')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "contain",
          opacity: 0.12,
          filter: "grayscale(1) contrast(.95) brightness(1.08)",
          WebkitMaskImage: "radial-gradient(ellipse 74% 66% at 55% 45%, black 0%, rgba(0,0,0,.82) 52%, transparent 88%)",
          maskImage: "radial-gradient(ellipse 74% 66% at 55% 45%, black 0%, rgba(0,0,0,.82) 52%, transparent 88%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
    </div>
  );
}
