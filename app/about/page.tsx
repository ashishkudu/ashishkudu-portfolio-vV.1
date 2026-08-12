import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Ashish Kudu | Mechanical Engineer",
  description:
    "Ashish Kudu is a mechanical engineer focused on mechanical design, manufacturing, product development, and industrial engineering.",
  alternates: {
    canonical: "https://ashishkudu.com/about",
  },
};

const profileSchema = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  mainEntity: {
    "@type": "Person",
    name: "Ashish Kudu",
    url: "https://ashishkudu.com/",
    image: "https://ashishkudu.com/ashish-cutout.png",
    jobTitle: "Mechanical Engineer",
    description:
      "Mechanical engineer focused on mechanical design, manufacturing, product development, and industrial engineering.",
    sameAs: [
      "https://www.linkedin.com/in/ashish-kudu-0ba0921b0/",
    ],
  },
};

export default function AboutPage() {
  return (
    <main className="privacy-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(profileSchema),
        }}
      />

      <div className="privacy-shell">
        <a className="privacy-back" href="/">
          ← Back to portfolio
        </a>

        <p className="kicker">ABOUT ASHISH KUDU</p>

        <h1>Mechanical Engineering. Design. Manufacturing.</h1>

        <p className="privacy-lede">
          I&apos;m a mechanical engineer focused on mechanical design,
          manufacturing, product development, and practical industrial
          problem solving.
        </p>

        <p className="privacy-updated">
          Mechanical Engineering • Design &amp; Manufacturing
        </p>

        <section className="privacy-section">
          <span>01</span>
          <div>
            <h2>Engineering Focus</h2>
            <p>
              My work centers on turning engineering problems into practical,
              manufacturable solutions. I&apos;m particularly interested in
              mechanical design, CAD, product development, manufacturing,
              maintenance, and process improvement.
            </p>
          </div>
        </section>

        <section className="privacy-section">
          <span>02</span>
          <div>
            <h2>Design &amp; Product Development</h2>
            <p>
              I use CAD and structured design thinking to develop mechanical
              components, assemblies, mechanisms, and product concepts while
              considering manufacturing constraints, serviceability, safety,
              and real-world use.
            </p>
          </div>
        </section>

        <section className="privacy-section">
          <span>03</span>
          <div>
            <h2>Manufacturing &amp; Problem Solving</h2>
            <p>
              My engineering approach combines practical shop-floor
              experience with root-cause analysis, 5 Whys, Fishbone analysis,
              DFM thinking, prototyping, and continuous improvement.
            </p>
          </div>
        </section>

        <section className="privacy-section">
          <span>04</span>
          <div>
            <h2>Academic &amp; Professional Journey</h2>
            <p>
              I am pursuing graduate studies in Mechanical Engineering with a
              focus on Design and Manufacturing. My experience includes
              mechanical design, industrial maintenance, troubleshooting,
              manufacturing, and engineering project work.
            </p>
          </div>
        </section>

        <section className="privacy-section">
          <span>05</span>
          <div>
            <h2>What I&apos;m Building</h2>
            <p>
              This portfolio brings together selected engineering projects,
              technical work, research, and professional experience in one
              place. The goal is to show not only what I designed, but how I
              approach engineering problems.
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
