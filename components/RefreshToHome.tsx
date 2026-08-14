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
      document.documentElement.classList.add("home-refresh-bounce");
      window.setTimeout(() => {
        document.documentElement.classList.remove("home-refresh-bounce");
      }, 650);
    });

    return () => {
      cancelAnimationFrame(frame);
      document.documentElement.classList.remove("home-refresh-bounce");
    };
  }, []);

  return null;
}
