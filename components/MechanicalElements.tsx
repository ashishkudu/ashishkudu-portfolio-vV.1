export default function MechanicalElements() {
  return (
    <div className="mechanical-elements" aria-hidden="true">
      <div
        className="auv-model-watermark"
        style={{
          position: "absolute",
          right: "1vw",
          top: "8vh",
          width: "min(720px, 58vw)",
          height: "min(500px, 58vh)",
          backgroundImage: "url('/projects/auv/solid-model.png')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "contain",
          opacity: 0.045,
          filter: "grayscale(1) contrast(.8) brightness(1.15)",
          WebkitMaskImage: "radial-gradient(ellipse 70% 65% at 55% 48%, black 0%, rgba(0,0,0,.7) 45%, transparent 82%)",
          maskImage: "radial-gradient(ellipse 70% 65% at 55% 48%, black 0%, rgba(0,0,0,.7) 45%, transparent 82%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
    </div>
  );
}
