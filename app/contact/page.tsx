import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Ashish Kudu",
  description:
    "Contact Ashish Kudu for mechanical engineering opportunities, design projects, collaborations, and professional inquiries.",
};

export default function ContactPage() {
  return (
    <main className="privacy-page">
      <div className="privacy-shell">
        <a className="privacy-back" href="/">
          ← Back to portfolio
        </a>

        <p className="kicker">CONTACT</p>

        <h1>Let&apos;s build something useful.</h1>

        <p className="privacy-lede">
          For mechanical engineering opportunities, collaborations, project
          discussions, and professional inquiries.
        </p>

        <section className="privacy-section">
          <span>01</span>
          <div>
            <h2>Professional Opportunities</h2>
            <p>
              I&apos;m interested in opportunities related to mechanical
              design, manufacturing, product development, and engineering.
            </p>
          </div>
        </section>

        <section className="privacy-section">
          <span>02</span>
          <div>
            <h2>LinkedIn</h2>
            <p>
              Connect with me professionally through LinkedIn.
            </p>
            <a
              className="primary"
              href="https://www.linkedin.com/in/ashish-kudu-0ba0921b0/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn →
            </a>
          </div>
        </section>

        <a className="primary privacy-home" href="/">
          Return to Ashish&apos;s portfolio →
        </a>
      </div>
    </main>
  );
}
