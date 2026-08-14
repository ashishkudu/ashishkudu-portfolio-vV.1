"use client";

export default function PortfolioFooter() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      style={{
        position: "relative",
        zIndex: 20,
        marginTop: 0,
        padding: "56px 6vw 28px",
        background: "#07111f",
        color: "#eaf2ff",
        borderTop: "1px solid rgba(255,255,255,.12)",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "2fr 1fr 1fr",
          gap: 40,
        }}
      >
        <div>
          <div style={{ fontSize: 22, fontWeight: 800, letterSpacing: ".04em" }}>ASHISH KUDU</div>
          <div style={{ marginTop: 8, color: "#8fa6c2", fontSize: 13, letterSpacing: ".12em" }}>MECHANICAL ENGINEER</div>
          <p style={{ maxWidth: 520, marginTop: 18, color: "#aebdd0", lineHeight: 1.7 }}>
            Mechanical design, manufacturing, product development, and practical engineering problem solving.
          </p>
        </div>
        <div>
          <div style={{ fontWeight: 700, marginBottom: 16 }}>EXPLORE</div>
          {["home", "projects", "experience", "education", "skills", "research", "resume", "contact"].map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item)}
              style={{ display: "block", border: 0, background: "transparent", color: "#aebdd0", padding: "6px 0", cursor: "pointer", textAlign: "left", textTransform: "capitalize" }}
            >
              {item}
            </button>
          ))}
        </div>
        <div>
          <div style={{ fontWeight: 700, marginBottom: 16 }}>CONNECT</div>
          <a href="mailto:ashishkudu@gmail.com" style={{ display: "block", color: "#aebdd0", padding: "6px 0", textDecoration: "none" }}>Email</a>
          <a href="https://www.linkedin.com/in/ashish-kudu-0ba0921b0/" target="_blank" rel="noreferrer" style={{ display: "block", color: "#aebdd0", padding: "6px 0", textDecoration: "none" }}>LinkedIn</a>
          <a href="https://github.com/ashishkudu" target="_blank" rel="noreferrer" style={{ display: "block", color: "#aebdd0", padding: "6px 0", textDecoration: "none" }}>GitHub</a>
        </div>
      </div>
      <div style={{ maxWidth: 1200, margin: "40px auto 0", paddingTop: 20, borderTop: "1px solid rgba(255,255,255,.08)", color: "#71859d", fontSize: 12, display: "flex", justifyContent: "space-between", gap: 20 }}>
        <span>© {new Date().getFullYear()} Ashish Kudu. All rights reserved.</span>
        <span>Portfolio v1.4.2</span>
      </div>
    </footer>
  );
}
