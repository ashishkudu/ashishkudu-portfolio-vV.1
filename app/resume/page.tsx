import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume | Ashish Kudu",
  description:
    "Resume of Ashish Kudu, a mechanical engineer focused on mechanical design, manufacturing, product development, and industrial engineering.",
};

export default function ResumePage() {
  return (
    <main className="privacy-page">
      <div className="privacy-shell">
        <a className="privacy-back" href="/">
          ← Back to portfolio
        </a>

        <p className="kicker">RESUME</p>

        <h1>Ashish Kudu — Mechanical Engineering</h1>

        <p className="privacy-lede">
          Professional resume covering mechanical engineering education,
          experience, design, manufacturing, maintenance, and engineering
          projects.
        </p>

        <div className="contact-actions">
          <a className="primary" href="/resume.pdf" target="_blank" rel="noreferrer">
            Open Resume PDF →
          </a>

          <a className="secondary" href="/">
            View Portfolio
          </a>
        </div>

        <section className="privacy-section">
          <span>01</span>
          <div>
            <h2>Engineering Focus</h2>
            <p>
              Mechanical design, manufacturing, product development,
              maintenance, troubleshooting, CAD, and engineering problem
              solving.
            </p>
          </div>
        </section>

        <section className="privacy-section">
          <span>02</span>
          <div>
            <h2>Download</h2>
            <p>
              The current resume is available as a PDF for recruiters and
              engineering professionals.
            </p>
            <a className="primary" href="/resume.pdf" download>
              Download Resume ↓
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
