import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Ashish Kudu",
  description:
    "Mechanical engineering projects by Ashish Kudu covering mechanical design, manufacturing, maintenance, product development, and industrial problem solving.",
};

export default function ProjectsPage() {
  return (
    <main className="privacy-page">
      <div className="privacy-shell">
        <a className="privacy-back" href="/">
          ← Back to portfolio
        </a>

        <p className="kicker">ENGINEERING PROJECTS</p>

        <h1>Engineering problems turned into practical solutions.</h1>

        <p className="privacy-lede">
          A selection of mechanical engineering work involving design,
          manufacturing, maintenance, product development, and process
          improvement.
        </p>

        <section className="privacy-section">
          <span>01</span>
          <div>
            <h2>Mechanical Design</h2>
            <p>
              Mechanical components, assemblies, mechanisms, fixtures, and
              equipment designed with CAD and real-world manufacturing
              constraints.
            </p>
          </div>
        </section>

        <section className="privacy-section">
          <span>02</span>
          <div>
            <h2>Manufacturing &amp; Process Improvement</h2>
            <p>
              Engineering improvements using DFM thinking, root-cause
              analysis, prototyping, and structured problem solving.
            </p>
          </div>
        </section>

        <section className="privacy-section">
          <span>03</span>
          <div>
            <h2>Industrial Engineering</h2>
            <p>
              Practical solutions developed around equipment maintenance,
              serviceability, reliability, material handling, and shop-floor
              requirements.
            </p>
          </div>
        </section>

        <a className="primary privacy-home" href="/">
          View the full portfolio →
        </a>
      </div>
    </main>
  );
}
