export default function MechanicalElements() {
  return (
    <div className="mechanical-elements" aria-hidden="true">
      <div
        className="auv-model-watermark"
        style={{
          position: "absolute",
          right: "5vw",
          top: "17vh",
          width: "min(300px, 25vw)",
          height: "min(220px, 27vh)",
          backgroundImage: "url('/projects/auv/solid-model.png')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "contain",
          opacity: 0.001,
          filter: "grayscale(1) contrast(.35) brightness(1)",
          WebkitMaskImage: "radial-gradient(ellipse 65% 60% at 55% 48%, black 0%, rgba(0,0,0,.4) 42%, transparent 75%)",
          maskImage: "radial-gradient(ellipse 65% 60% at 55% 48%, black 0%, rgba(0,0,0,.4) 42%, transparent 75%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
    </div>
  );
}
