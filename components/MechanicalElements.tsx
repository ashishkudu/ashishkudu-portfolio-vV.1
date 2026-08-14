export default function MechanicalElements() {
  return (
    <div className="mechanical-elements" aria-hidden="true">
      <div
        className="auv-model-watermark"
        style={{
          position: "absolute",
          right: "3vw",
          top: "12vh",
          width: "min(460px, 38vw)",
          height: "min(340px, 42vh)",
          backgroundImage: "url('/projects/auv/solid-model.png')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "contain",
          opacity: 0.018,
          filter: "grayscale(1) contrast(.65) brightness(1.05)",
          WebkitMaskImage: "radial-gradient(ellipse 70% 65% at 55% 48%, black 0%, rgba(0,0,0,.65) 45%, transparent 82%)",
          maskImage: "radial-gradient(ellipse 70% 65% at 55% 48%, black 0%, rgba(0,0,0,.65) 45%, transparent 82%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
    </div>
  );
}
