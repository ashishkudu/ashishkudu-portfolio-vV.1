"use client";

import { useEffect } from "react";

export default function ImageClickHandler() {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const image = target?.closest(".project-gallery img") as HTMLImageElement | null;
      if (!image) return;

      event.preventDefault();
      event.stopPropagation();

      const overlay = document.createElement("div");
      overlay.className = "image-lightbox";
      overlay.setAttribute("role", "dialog");
      overlay.setAttribute("aria-label", "Expanded project image");

      const expanded = document.createElement("img");
      expanded.src = image.currentSrc || image.src;
      expanded.alt = image.alt;

      const close = document.createElement("button");
      close.className = "image-lightbox-close";
      close.type = "button";
      close.setAttribute("aria-label", "Close image");
      close.textContent = "×";

      const closeLightbox = () => overlay.remove();
      close.addEventListener("click", closeLightbox);
      overlay.addEventListener("click", (e) => {
        if (e.target === overlay) closeLightbox();
      });

      overlay.append(expanded, close);
      document.body.appendChild(overlay);
    };

    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, []);

  return null;
}
