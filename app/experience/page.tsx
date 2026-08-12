import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience | Ashish Kudu",
  description:
    "Engineering experience of Ashish Kudu across mechanical design, manufacturing, maintenance, troubleshooting, and product development.",
};

export default function ExperiencePage() {
  return (
    <main className="privacy-page">
      <div className="privacy-shell">
        <a className="privacy-back" href="/">
          ← Back to portfolio
        </a>

        <p className="kicker">ENGINEERING EXPERIENCE</p>

        <h1>Engineering in the real world.</h1>

        <p className="privacy-lede">
          My experience spans mechanical design, manufacturing, maintenance,
          troubleshooting, product development, and practical industrial
          problem solving.
        </p>

        <p className="privacy-updated">
          Mechanical Design • Manufacturing • Maintenance
        </p>

        <section className="privacy-section">
          <span>01</span>
          <div>
            <h2>Mechanical Design Engineering</h2>
            <p>
              Designed and developed mechanical components and assemblies using
              CAD while considering manufacturing requirements, maintenance,
              serviceability, safety, and real-world operating conditions.
            </p>
          </div>
        </section>

        <section className="privacy-section">
          <span>02</span>
          <div>
            <h2>Industrial Maintenance &amp; Troubleshooting</h2>
            <p>
              Worked around industrial equipment, maintenance activities,
              inspection, troubleshooting, and practical shop-floor
              constraints. This experience strengthened my understanding of
              designing equipment that can actually be maintained and serviced.
            </p>
          </div>
        </section>

        <section className="privacy-section">
          <span>03</span>
          <div>
            <h2>Manufacturing &amp; Process Improvement</h2>
            <p>
              Applied structured problem-solving methods, root-cause analysis,
              5 Whys, Fishbone analysis, DFM thinking, and prototyping to
              identify problems and develop practical engineering improvements.
            </p>
          </div>
        </section>

        <section className="privacy-section">
          <span>04</span>
          <div>
            <h2>Product Development</h2>
            <p>
              Contributed to mechanical product and component development,
              working through design iterations, material considerations,
              manufacturing constraints, and engineering documentation.
            </p>
          </div>
        </section>

        <section className="privacy-section">
          <span>05</span>
          <div>
            <h2>Engineering Approach</h2>
            <p>
              I approach engineering problems by first understanding the
              failure or inefficiency, identifying the root cause, developing
              multiple concepts, evaluating practical constraints, and
              selecting a solution that can be manufactured, maintained, and
              used reliably.
            </p>
          </div>
        </section>

        <a className="primary privacy-home" href="/">
          Explore Ashish&apos;s portfolio →
        </a>
      </div>
    </main>
  );
}
