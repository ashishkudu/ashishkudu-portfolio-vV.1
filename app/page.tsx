import PortfolioShell from "@/components/PortfolioShell";

export default function Home() {
  return (
    <>
      <style>{`
        .hero::before {
          content: "";
          position: absolute;
          inset: 0;
          z-index: 0;
          pointer-events: none;
          background-image: url("/projects/auv/solid-model.png");
          background-repeat: no-repeat;
          background-position: 62% 50%;
          background-size: min(920px, 76vw) auto;
          opacity: 0.13;
          filter: grayscale(1) brightness(1.15) contrast(0.9);
          mix-blend-mode: screen;
        }

        @media (max-width: 800px) {
          .hero::before {
            background-position: 58% 42%;
            background-size: 760px auto;
            opacity: 0.08;
          }
        }
      `}</style>
      <PortfolioShell />
    </>
  );
}
