import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy | Ashish Kudu",
  description:
    "Privacy and data collection information for Ashish Kudu's portfolio and ASH assistant.",
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
          This page explains what information this portfolio collects, why it is
          collected, and how ASH, the portfolio&apos;s AI assistant, handles
          conversations.
        </p>

        <p className="privacy-updated">Last updated: August 12, 2026</p>

        <section className="privacy-section">
          <span>01</span>
          <div>
            <h2>What we collect</h2>
            <p>
              When you use ASH, the website collects the questions you submit
              and the responses generated for you. Each ASH conversation is
              associated with a random anonymous session ID so the conversation
              can be managed without requiring an account.
            </p>
            <p>
              The portfolio also collects basic website analytics when pages
              are viewed, including the page visited, event type, approximate
              visit time, device type, browser information, and referring page.
            </p>
            <p>
              The site may also receive approximate country, region/state, and
              city information derived from the visitor&apos;s IP address. This
              information is approximate and may be inaccurate, particularly
              when using VPNs, proxies, mobile networks, or certain internet
              service providers.
            </p>
            <p>
              The site does not intentionally collect precise GPS location or
              your exact physical address.
            </p>
          </div>
        </section>

        <section className="privacy-section">
          <span>02</span>
          <div>
            <h2>Why we collect it</h2>
            <p>
              Conversation data is collected to provide ASH, preserve a record
              of interactions for the active anonymous session, understand how
              the assistant is being used, and improve the portfolio
              experience.
            </p>
            <p>
              Website analytics are used to understand general traffic
              patterns, such as which pages are viewed and the approximate
              geographic distribution of visitors, and to improve the
              portfolio&apos;s content and user experience.
            </p>
          </div>
        </section>

        <section className="privacy-section">
          <span>03</span>
          <div>
            <h2>AI processing</h2>
            <p>
              Messages submitted to ASH are sent to Groq, the AI service used
              by this portfolio, so that an AI response can be generated.
            </p>
            <p>
              Do not submit passwords, API keys, payment information, or other
              highly sensitive information to ASH.
            </p>
          </div>
        </section>

        <section className="privacy-section">
          <span>04</span>
          <div>
            <h2>Storage &amp; retention</h2>
            <p>
              ASH conversation records and website analytics are stored in the
              portfolio&apos;s database. The current implementation does not
              require visitors to create an account.
            </p>
            <p>
              A specific automatic retention period has not been established
              for all stored data. This policy will be updated if a defined
              retention schedule is introduced.
            </p>
          </div>
        </section>

        <section className="privacy-section">
          <span>05</span>
          <div>
            <h2>Your control</h2>
            <p>
              You can choose not to use ASH if you do not want to submit a
              message to the assistant.
            </p>
            <p>
              ASH provides a deletion action for stored records associated with
              the current anonymous session. If you need help with a privacy
              request, use the contact information provided on the portfolio.
            </p>
          </div>
        </section>

        <section className="privacy-section">
          <span>06</span>
          <div>
            <h2>Third-party services</h2>
            <p>
              The portfolio uses third-party infrastructure to operate the
              website, store data, and provide AI functionality. The production
              system uses Vercel for hosting and deployment, Supabase for
              database storage, and Groq for AI response generation.
            </p>
          </div>
        </section>

        <section className="privacy-section">
          <span>07</span>
          <div>
            <h2>Data security</h2>
            <p>
              The portfolio uses server-side infrastructure and access controls
              to protect stored application data. Visitors should still avoid
              submitting confidential or highly sensitive information to ASH.
            </p>
          </div>
        </section>

        <section className="privacy-section">
          <span>08</span>
          <div>
            <h2>Policy changes</h2>
            <p>
              This policy may be updated when the portfolio, ASH, or its data
              practices change. The date at the top of this page indicates the
              latest revision.
            </p>
          </div>
        </section>

        <div className="privacy-note">
          <strong>Important:</strong> This page describes the website&apos;s
          current technical data practices and is not legal advice. If the
          site is used in jurisdictions with specific privacy obligations,
          the policy and implementation should be reviewed for those
          requirements.
        </div>

        <a className="primary privacy-home" href="/">
          Return to Ashish&apos;s portfolio →
        </a>
      </div>
    </main>
  );
}
