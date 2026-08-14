"use client";

import { useEffect } from "react";

export default function RefreshToHome() {
  useEffect(() => {
    if (window.location.hash) {
      window.history.replaceState(null, "", window.location.pathname + window.location.search);
    }

    window.scrollTo(0, 0);

    const frame = requestAnimationFrame(() => {
      window.scrollTo(0, 0);
      const home = document.getElementById("home");
      if (home && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        home.animate(
          [
            { transform: "translateY(-8px)", opacity: 0.9 },
            { transform: "translateY(3px)", opacity: 1 },
            { transform: "translateY(-1px)" },
            { transform: "translateY(0)" }
          ],
          { duration: 600, easing: "cubic-bezier(.22, 1.2, .36, 1)" }
        );
      }
    });

    return () => cancelAnimationFrame(frame);
  }, []);

  return null;
}
