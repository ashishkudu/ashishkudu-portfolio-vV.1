import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy | Ashish Kudu",
  description: "Privacy and data collection information for Ashish Kudu's portfolio and ASH assistant.",
  alternates: { canonical: "https://ashishkudu.com/privacy" },
};

export default function PrivacyPage() {
  return (
    <main className="privacy-page">
      <div className="privacy-shell">
        <a className="privacy-back" href="/">← Back to portfolio</a>
        <p className="kicker">TRANSPARENCY &amp; DATA</p>
        <h1>Privacy Policy</h1>
        <p className="privacy-lede">
          This page explains what information this portfolio collects, why it is collected,
          and how ASH, the portfolio&apos;s AI assistant, handles conversations.
        </p>
        <p className="privacy-updated">Last updated: August 11, 2026</p>

        <section className="privacy-section">
          <span>01</span>
          <div><h2>What we collect</h2><p>When you use ASH, the website collects the questions you submit and the responses generated for you. Each ASH conversation is associated with a random anonymous session ID so the conversation can be managed and deleted without requiring an account.</p><p>The service may also store basic technical context associated with an ASH request, including browser/device user-agent information and the referring page.</p></div>
        </section>

        <section className="privacy-section">
          <span>02</span>
          <div><h2>Why we collect it</h2><p>Conversation data is collected to provide ASH, preserve a record of interactions for the active anonymous session, understand how the assistant is being used, and improve the portfolio experience.</p></div>
        </section>

        <section className="privacy-section">
          <span>03</span>
          <div><h2>AI processing</h2><p>Messages submitted to ASH are sent to Groq, the AI service used by this portfolio, so that an AI response can be generated. Do not submit passwords, API keys, payment information, or other highly sensitive information to ASH.</p></div>
        </section>

        <section className="privacy-section">
          <span>04</span>
          <div><h2>Storage &amp; retention</h2><p>ASH conversation records are stored in the portfolio&apos;s database. The current implementation does not require visitors to create an account. Retention periods may change as the site evolves; this policy will be updated when the storage policy changes.</p></div>
        </section>

        <section className="privacy-section">
          <span>05</span>
          <div><h2>Your control</h2><p>You can clear the visible ASH conversation at any time. ASH also provides a deletion action that removes stored records associated with your current anonymous session.</p><p>If you need help with a privacy request, use the contact information provided on the portfolio.</p></div>
        </section>

        <section className="privacy-section">
          <span>06</span>
          <div><h2>Third-party services</h2><p>The portfolio may use third-party infrastructure for hosting and AI processing. The production deployment currently uses Vercel for hosting/deployment and Groq for AI response generation.</p></div>
        </section>

        <section className="privacy-section">
          <span>07</span>
          <div><h2>Policy changes</h2><p>This policy may be updated when the portfolio, ASH, or its data practices change. The date at the top of this page indicates the latest revision.</p></div>
        </section>

        <div className="privacy-note"><strong>Important:</strong> This page describes the website&apos;s technical data practices and is not legal advice. If the site is used in jurisdictions with specific privacy obligations, the policy and implementation should be reviewed for those requirements.</div>
        <a className="primary privacy-home" href="/">Return to Ashish&apos;s portfolio →</a>
      </div>
    </main>
  );
}
