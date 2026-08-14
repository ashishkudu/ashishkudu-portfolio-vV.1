export default function MechanicalElements() {
  return (
    <div className="mechanical-elements" aria-hidden="true">
      <div
        className="auv-model-watermark"
        style={{
          position: "absolute",
          right: "4vw",
          top: "15vh",
          width: "min(380px, 31vw)",
          height: "min(280px, 34vh)",
          backgroundImage: "url('/projects/auv/solid-model.png')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "contain",
          opacity: 0.004,
          filter: "grayscale(1) contrast(.5) brightness(1.02)",
          WebkitMaskImage: "radial-gradient(ellipse 68% 62% at 55% 48%, black 0%, rgba(0,0,0,.55) 42%, transparent 78%)",
          maskImage: "radial-gradient(ellipse 68% 62% at 55% 48%, black 0%, rgba(0,0,0,.55) 42%, transparent 78%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
    </div>
  );
}
