export default function AUVBackground() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: "78px 0 0",
        zIndex: 0,
        pointerEvents: "none",
        backgroundImage: "url('/projects/auv/solid-model.png')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "72% 34%",
        backgroundSize: "min(980px, 78vw) auto",
        opacity: 0.10,
        filter: "grayscale(1) contrast(0.9) brightness(1.05)",
        WebkitMaskImage: "radial-gradient(ellipse 70% 58% at 68% 38%, black 0%, rgba(0,0,0,.72) 48%, transparent 82%)",
        maskImage: "radial-gradient(ellipse 70% 58% at 68% 38%, black 0%, rgba(0,0,0,.72) 48%, transparent 82%)",
      }}
    />
  );
}
