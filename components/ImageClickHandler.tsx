"use client";

import { useEffect } from "react";

export default function ImageClickHandler() {
  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      .project-gallery img { cursor: zoom-in !important; }
      .image-lightbox { position: fixed; inset: 0; z-index: 10000; display: flex; align-items: center; justify-content: center; padding: 32px; background: rgba(0, 0, 0, .92); cursor: zoom-out; }
      .image-lightbox img { max-width: 94vw; max-height: 90vh; width: auto; height: auto; object-fit: contain; border-radius: 10px; box-shadow: 0 25px 100px rgba(0,0,0,.65); cursor: default; }
      .image-lightbox-close { position: fixed; top: 18px; right: 24px; width: 46px; height: 46px; border: 1px solid rgba(255,255,255,.25); border-radius: 50%; background: rgba(4,12,24,.8); color: white; font-size: 32px; line-height: 1; cursor: pointer; z-index: 10001; }
      .image-lightbox-close:hover { background: rgba(22,133,255,.35); }
    `;
    document.head.appendChild(style);

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        document.querySelector(".image-lightbox")?.remove();
      }
    };

    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const image = target?.closest(".project-gallery img") as HTMLImageElement | null;
      if (!image) return;

      event.preventDefault();
      event.stopPropagation();

      document.querySelector(".image-lightbox")?.remove();

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
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("click", handleClick, true);
      document.removeEventListener("keydown", handleKeyDown);
      style.remove();
    };
  }, []);

  return null;
}
