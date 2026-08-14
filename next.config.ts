import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,

  allowedDevOrigins: ["192.168.1.187"],

  // Portfolio v1.3.10 — route the existing AUV gallery slots to the
  // updated image files already stored in /public/projects/auv.
  async rewrites() {
    return [
      { source: "/projects/auv/solid-model.png", destination: "/projects/auv/AUV%20Model.png" },
      { source: "/projects/auv/final-side.jpg", destination: "/projects/auv/FInal%201.jpg" },
      { source: "/projects/auv/final-front.jpg", destination: "/projects/auv/Updated.jpg" },
      { source: "/projects/auv/scrap-rickshaw.jpg", destination: "/projects/auv/Scrap%201.JPG" },
      { source: "/projects/auv/steering.jpg", destination: "/projects/auv/Prototype%201.png" },
      { source: "/projects/auv/cutter.jpg", destination: "/projects/auv/Cutter.jpg" },
      { source: "/projects/auv/cultivator.jpg", destination: "/projects/auv/Cultivator.JPG" },
      { source: "/projects/auv/front-body.jpg", destination: "/projects/auv/Prototype%202.jpg" },
    ];
  },
};

export default nextConfig;
