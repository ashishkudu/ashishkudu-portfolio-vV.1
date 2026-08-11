"use client";

import { useEffect, useMemo, useState } from "react";
import ASHAssistant from "./ASHAssistant";
import CursorNetwork from "./CursorNetwork";
import MechanicalElements from "./MechanicalElements";

type Project = {
  title: string;
  category: string;
  tags: string[];
  description: string;
  metric: string;
  hero?: string;
  gallery?: { src: string; caption: string }[];
  sections?: { title: string; body: string }[];
  highlights?: string[];
};

const projects: Project[] = [
  {
    title: "Copper Plate Extension",
    category: "Design",
    tags: ["Mechanism", "Maintenance", "CAD", "Prototyping"],
    description: "Redesigned the electrical connection arrangement on an electrocoating barrel to improve accessibility, protect danglers during rotation, and reduce maintenance-related downtime.",
    metric: "Serviceability",
    hero: "/projects/copper/poster.png",
    gallery: [
      { src: "/projects/copper/before.jpeg", caption: "Existing electrocoating barrel and difficult mid-assembly connection area." },
      { src: "/projects/copper/after.png", caption: "CAD representation of the redesigned copper plate extension." },
      { src: "/projects/copper/detail-left.png", caption: "Left-side detail of the extension and support arrangement." },
      { src: "/projects/copper/detail-right.png", caption: "Right-side detail showing the relocated connection point." },
    ],
    sections: [
      { title: "The problem", body: "The existing electrical connection point was located in the middle of the barrel assembly, making dangler connection and disconnection difficult. During barrel rotation, danglers could rub against surrounding components, increasing wear, replacement frequency, and maintenance effort." },
      { title: "Design approach", body: "A copper plate extension was developed in SolidWorks to move the connection point outside the barrel assembly. Multiple 3D-printed prototypes were used to verify fit, clearance, and mounting before the design was tested and refined on the actual assembly." },
      { title: "Result", body: "The final arrangement provides easier access to the electrical connection, reduces dangler interference during rotation, shortens the dangler routing, and improves serviceability of the electrocoating process." },
    ],
    highlights: ["SolidWorks CAD", "3D-printed prototypes", "Fit & functional testing", "Improved serviceability", "Reduced dangler interference"],
  },
  {
    title: "Hoist Castor Redesign",
    category: "Maintenance",
    tags: ["SolidWorks", "Reliability", "Design", "Serviceability"],
    description: "Reworked a hoist caster assembly so wheel replacement can be completed at the installation point without removing the heavy assembly or performing hot work.",
    metric: "Maintenance",
    hero: "/projects/hoist/hero.png",
    gallery: [
      { src: "/projects/hoist/hero.png", caption: "Redesigned caster housing with removable axle and quick-release retention." },
      { src: "/projects/hoist/wheel.png", caption: "Wheel and housing arrangement." },
      { src: "/projects/hoist/side.png", caption: "CAD view of the redesigned assembly." },
    ],
    sections: [
      { title: "The problem", body: "The original caster was installed at height. Wheel replacement required removing the heavy subassembly, taking it to a maintenance shop, grinding off a welded axle end, replacing the wheel, welding the axle again, and reinstalling the assembly." },
      { title: "Design approach", body: "The redesign uses a new caster housing with a removable axle secured by a cotter pin. The housing remains installed on the hoist while only the wheel and axle are removed for replacement." },
      { title: "Result", body: "The maintenance procedure becomes a simple remove-pin, slide-axle, replace-wheel, reinstall-axle sequence. This removes the need for welding and grinding during routine wheel replacement and reduces handling and downtime." },
    ],
    highlights: ["Removable axle", "Cotter-pin retention", "No routine welding", "At-height serviceability", "Lower maintenance effort"],
  },
  {
    title: "Tube Light Protection",
    category: "Safety",
    tags: ["DFM", "Fabrication", "Protection"],
    description: "Developed a grill/mesh protection concept to reduce tube-light damage caused by material handling and swinging loads without changing the existing lighting structure.",
    metric: "Safety",
    sections: [
      { title: "The problem", body: "Exposed tube lights were vulnerable to impact during material handling, especially when lifted or swung loads moved through the work area. The objective was to reduce repeated breakage without changing the existing lighting structure." },
      { title: "Design approach", body: "A grill/mesh protection concept was developed as a physical barrier around the light. The concept was evaluated with fabrication, clearance, visibility, and maintainability in mind so the protection could be added without redesigning the underlying fixture." },
      { title: "Engineering considerations", body: "The protective geometry was treated as a sacrificial impact barrier: keep the load away from the lamp, maintain access for replacement, and avoid unnecessarily blocking useful illumination. The design direction also considers practical fabrication and installation constraints." },
      { title: "Result", body: "The concept provides a maintainable protective layer around the existing tube light and directly targets the material-handling impact mechanism responsible for damage." },
    ],
    highlights: ["Impact protection", "Existing-structure compatible", "Fabrication focused", "DFM thinking"],
  },
  {
    title: "Safe Lifting & Dumping",
    category: "Mechanism",
    tags: ["Mechanism", "Hoisting", "Product Design"],
    description: "Developed a controlled lifting and dumping concept for a rectangular industrial bucket where the customer-owned bucket could not be structurally modified.",
    metric: "Mechanism",
    sections: [
      { title: "The problem", body: "A rectangular customer-owned bucket had to be lifted with a small industrial crane and positioned for controlled dumping into an elevated hopper. The mechanism also needed to limit unwanted swing while respecting the constraint that the bucket itself could not be modified." },
      { title: "Design constraints", body: "The solution had to interface externally with the existing bucket, work within the available crane envelope, support the load during movement, and create a predictable dumping motion without relying on permanent changes to the customer-owned container." },
      { title: "Design approach", body: "The concept focused on an external lifting and tilting mechanism that interfaces with the existing bucket, controls the dumping motion, and keeps the load supported during handling. Mechanism layout, attachment points, clearance, and operator interaction were considered as part of the concept development." },
      { title: "Result", body: "The mechanism-centered approach provides a path toward controlled lifting, positioning, and dumping while respecting the no-modification constraint. The concept emphasizes controlled motion and serviceable mechanical interfaces rather than modifying the customer-owned bucket." },
    ],
    highlights: ["External interface", "Controlled dumping", "Load handling", "Constraint-driven design"],
  },
  {
    title: "Corrosion Resistance",
    category: "Manufacturing",
    tags: ["Six Sigma", "Root Cause", "Materials"],
    description: "Structured an industrial corrosion problem using People, Process, Environment, Materials, and Equipment to identify practical improvement paths.",
    metric: "Root Cause",
    sections: [
      { title: "The problem", body: "Steel machine components were exposed to an industrial environment where corrosion could affect reliability, maintenance effort, appearance, and service life. The goal was to understand the causes before selecting a countermeasure." },
      { title: "Root-cause analysis", body: "The problem was structured with a Fishbone framework covering People, Process, Environment, Materials, and Equipment. A 5 Whys approach was then used to move from visible corrosion symptoms toward contributing causes and controllable factors." },
      { title: "Engineering direction", body: "Potential countermeasures included improved surface protection, material selection, and control of environmental exposure. Options were considered against manufacturing practicality, maintenance requirements, and the existing equipment context." },
      { title: "Result", body: "The structured analysis created a repeatable problem-solving path for corrosion: define the failure mechanism, separate contributing categories, identify root causes, and then select a practical control rather than treating the corrosion symptom alone." },
    ],
    highlights: ["Fishbone analysis", "5 Whys", "Materials thinking", "Process improvement"],
  },
  {
    title: "Industrial Dangler Improvement",
    category: "Design",
    tags: ["CAD", "Manufacturing", "Reliability"],
    description: "Improved access to difficult mid-assembly connections and addressed rotation-related wear in an industrial electrocoating setup.",
    metric: "Reliability",
    gallery: [
      { src: "/projects/copper/detail-left.png", caption: "Improved connection-side detail." },
      { src: "/projects/copper/detail-right.png", caption: "Connection routing and support detail." },
    ],
    sections: [
      { title: "The problem", body: "Dangler connections positioned inside the assembly were difficult to access, while barrel rotation created opportunities for rubbing and wear. This made routine connection work harder and contributed to repeated dangler maintenance." },
      { title: "Design approach", body: "The improvement focused on relocating the connection access and managing the dangler routing so maintenance personnel could reach the connection more easily while reducing interference with the rotating assembly." },
      { title: "Manufacturing & serviceability", body: "The design was considered from the perspective of practical installation, access, routing, and repeatable maintenance. The goal was not simply to move the connection, but to make the interface easier to work on and less exposed to the recurring wear mechanism." },
      { title: "Result", body: "The resulting arrangement improves accessibility and addresses the recurring wear mechanism associated with rotation, supporting more reliable dangler operation and easier maintenance." },
    ],
    highlights: ["Accessibility", "Dangler routing", "Reliability", "Maintenance"],
  },
  {
    title: "Agricultural Utility Vehicle",
    category: "Product Design",
    tags: ["Vehicle Design", "Fabrication", "Mechanism", "Agriculture"],
    description: "Developed a multipurpose Agricultural Utility Vehicle by adapting a compact vehicle platform for agricultural operations including grass cutting, cultivation, and row making.",
    metric: "Research Project",
    hero: "/projects/auv/final-side.jpg",
    gallery: [
      { src: "/projects/auv/final-side.jpg", caption: "Final Agricultural Utility Vehicle — side view." },
      { src: "/projects/auv/final-front.jpg", caption: "Final Agricultural Utility Vehicle — front view." },
      { src: "/projects/auv/solid-model.png", caption: "Conceptual solid model showing the multipurpose agricultural attachments." },
      { src: "/projects/auv/scrap-rickshaw.jpg", caption: "Scrap/donor vehicle used during development." },
      { src: "/projects/auv/steering.jpg", caption: "Steering assembly during development." },
      { src: "/projects/auv/cutter.jpg", caption: "Cutter assembly development." },
      { src: "/projects/auv/cultivator.jpg", caption: "Cultivator shaft development." },
      { src: "/projects/auv/front-body.jpg", caption: "Front body/frame development." },
    ],
    sections: [
      { title: "Project objective", body: "The research project focused on developing a multipurpose Agricultural Utility Vehicle capable of carrying out several agricultural operations with a compact, practical platform." },
      { title: "System concept", body: "The vehicle combines a base platform with interchangeable or task-specific agricultural mechanisms. The documented concept includes a cutter, cultivator, and row-maker arrangement." },
      { title: "Development", body: "The work progressed through vehicle/frame development, steering and mechanism integration, attachment development, fabrication, and final prototype assembly. The paper documents the final model in both side and front views." },
      { title: "Reported outcome", body: "The paper reports a multipurpose vehicle intended to reduce the need for separate machines for different operations and reports a 35–40% reduction in cost compared with conventional separate equipment." },
    ],
    highlights: ["Multipurpose agricultural platform", "Grass cutting", "Cultivation", "Row making", "Prototype fabrication", "35–40% reported cost reduction"],
  },
];

const skills = [
  ["CAD & Product Design", "SolidWorks • AutoCAD • Mechanical assemblies • Design iteration"],
  ["Manufacturing", "DFM/DFA • Fabrication • Prototyping • 3D printing"],
  ["Problem Solving", "Root-cause analysis • 5 Whys • Fishbone • Six Sigma"],
  ["Engineering", "Mechanisms • Maintenance • Materials • Technical documentation"],
];

const navItems = ["home", "projects", "experience", "skills", "research", "resume", "contact"];
const categories = ["All", "Design", "Maintenance", "Safety", "Mechanism", "Manufacturing", "Product Design"];

export default function PortfolioShell() {
  const [ashOpen, setAshOpen] = useState(false);
  const [ashPrompt, setAshPrompt] = useState("");
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [commandOpen, setCommandOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    const key = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setCommandOpen((value) => !value);
      }
      if (e.key === "Escape") {
        setCommandOpen(false);
        setAshOpen(false);
        setSelectedProject(null);
      }
    };
    window.addEventListener("keydown", key);
    return () => window.removeEventListener("keydown", key);
  }, []);

  const filtered = useMemo(() => {
    const q = search.toLowerCase().trim();
    return projects.filter((project) => {
      const categoryMatch = category === "All" || project.category === category;
      const text = `${project.title} ${project.category} ${project.tags.join(" ")} ${project.description}`.toLowerCase();
      return categoryMatch && (!q || text.includes(q));
    });
  }, [search, category]);

  const openAshForProject = (project: Project) => {
    setAshPrompt(`Tell me about the "${project.title}" project in Ashish's portfolio. Explain the problem, what was changed, and the engineering value in a concise recruiter-friendly way.`);
    setSelectedProject(null);
    setAshOpen(true);
  };

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setCommandOpen(false);
  };

  return (
    <main>
      <header className="nav">
        <button className="brand" onClick={() => scrollTo("home")} aria-label="Go home">
          <span className="brand-mark">AK</span>
          <span><strong>ASHISH KUDU</strong><small>MECHANICAL ENGINEER</small></span>
        </button>
        <nav>{navItems.map((item) => <button key={item} onClick={() => scrollTo(item)}>{item}</button>)}</nav>
        <button className="search-trigger" onClick={() => setCommandOpen(true)} aria-label="Open search"><span>⌕</span><kbd>⌘ K</kbd></button>
      </header>

      <section id="home" className="hero">
        <div className="blueprint-grid" />
        <div className="hero-copy">
          <div className="availability"><i /> AVAILABLE FOR OPPORTUNITIES</div>
          <p className="kicker">MECHANICAL DESIGN • MANUFACTURING • PRODUCT DEVELOPMENT</p>
          <h1>Designing solutions.<br /><span>Building impact.</span></h1>
          <p className="hero-lede">Mechanical engineer specializing in design and manufacturing, with hands-on experience turning industrial challenges into practical, manufacturable solutions.</p>
          <div className="stats"><div><b>7+</b><span>Engineering Projects</span></div><div><b>2+</b><span>Industry Experiences</span></div><div><b>1</b><span>Research Publication</span></div><div><b>MS</b><span>Clemson University</span></div></div>
          <div className="actions"><button className="primary" onClick={() => scrollTo("projects")}>View Projects →</button><button className="secondary" onClick={() => scrollTo("resume")}>View Resume ↗</button></div>
        </div>
        <div className="avatar-stage"><CursorNetwork /><MechanicalElements /><img className="hero-portrait" src="/ashish-cutout.png" alt="Ashish Kudu" draggable={false} /></div>
        <div className="hero-assistant-card"><div className="assistant-top"><div><b>ASH</b><span>Engineering Assistant</span></div><i /></div><p>Ask me about Ashish&apos;s projects, skills, experience, or research.</p><button onClick={() => setAshOpen(true)}>Open ASH →</button></div>
      </section>

      <section id="projects" className="section">
        <div className="section-head"><div><p className="kicker">ENGINEERING WORK</p><h2>Featured projects</h2></div><div className="filters">{categories.map((item) => <button key={item} className={category === item ? "active" : ""} onClick={() => setCategory(item)}>{item}</button>)}</div></div>
        <div className="project-grid">
          {filtered.map((project) => (
            <article className="project-card" key={project.title} tabIndex={0} role="button" onClick={() => setSelectedProject(project)} onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setSelectedProject(project); } }}>
              <div className="project-visual">{project.hero ? <img src={project.hero} alt="" /> : <div className="cad-lines" />}<span>{project.metric}</span></div>
              <div className="project-body"><small>{project.category.toUpperCase()}</small><h3>{project.title}</h3><p>{project.description}</p><div className="tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><button onClick={(e) => { e.stopPropagation(); openAshForProject(project); }}>Ask ASH about this →</button></div>
            </article>
          ))}
        </div>
      </section>

      <section id="experience" className="section split"><div><p className="kicker">EXPERIENCE</p><h2>Engineering in the real world.</h2></div><div className="timeline"><div><span>01</span><div><h3>Mechanical Design Engineering</h3><p>Designed and developed mechanical components and assemblies with CAD, manufacturing, maintenance, and industrial project constraints.</p></div></div><div><span>02</span><div><h3>Industrial Maintenance &amp; Troubleshooting</h3><p>Worked around equipment maintenance, inspection, troubleshooting, serviceability, and practical shop-floor constraints.</p></div></div><div><span>03</span><div><h3>Manufacturing &amp; Process Improvement</h3><p>Applied structured problem solving, root-cause analysis, DFM thinking, and prototyping to improve engineering outcomes.</p></div></div></div></section>

      <section id="skills" className="section"><p className="kicker">CAPABILITY STACK</p><h2>Tools I use to solve problems.</h2><div className="skill-grid">{skills.map(([title, text]) => <div className="skill-card" key={title}><span>✦</span><h3>{title}</h3><p>{text}</p></div>)}</div></section>
      <section id="research" className="section research"><div><p className="kicker">RESEARCH</p><h2>Engineering beyond the project floor.</h2><p>Research and academic work presented with the same emphasis on clear problem definition, method, evidence, and technical communication.</p></div><div className="research-card"><span>PUBLICATION</span><h3>Research portfolio</h3><p>Publication details, abstract, methodology, contribution, and downloadable paper can live here.</p><button>View research →</button></div></section>
      <section id="resume" className="section resume"><div><p className="kicker">RESUME</p><h2>A recruiter-friendly view of my engineering background.</h2><p>Keep the full PDF in <code>/public/resume.pdf</code> and connect the button below to it.</p></div><a className="primary" href="/resume.pdf" target="_blank" rel="noreferrer">Download Resume ↓</a></section>
      <section id="contact" className="section contact"><p className="kicker">CONTACT</p><h2>Let&apos;s build something useful.</h2><p>For engineering opportunities, collaborations, or project discussions.</p><div className="contact-actions"><a className="primary" href="mailto:your-email@example.com">Email me →</a><a className="secondary" href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn</a></div></section>
      <footer><span>© {new Date().getFullYear()} Ashish Kudu</span><span>Designed for engineering. Built for people.</span></footer>

      {selectedProject && (
        <div className="project-modal-overlay" onClick={() => setSelectedProject(null)}>
          <article className="project-modal project-case-study" onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true" aria-label={`${selectedProject.title} case study`}>
            <button className="project-modal-close" onClick={() => setSelectedProject(null)} aria-label="Close project">×</button>
            <div className="project-modal-kicker">{selectedProject.category.toUpperCase()} • {selectedProject.metric.toUpperCase()}</div>
            <h2>{selectedProject.title}</h2>
            <p className="project-modal-lede">{selectedProject.description}</p>

            {selectedProject.hero ? (
              <img className="case-hero" src={selectedProject.hero} alt={`${selectedProject.title} overview`} />
            ) : (
              <div className="case-visual-placeholder">
                <span>ENGINEERING CASE STUDY</span>
                <strong>Project documentation</strong>
                <p>Detailed engineering narrative below. Visual documentation can be added here when additional project images are available.</p>
              </div>
            )}

            {selectedProject.sections?.map((section, index) => (
              <section className="case-section" key={section.title}>
                <div className="case-number">{String(index + 1).padStart(2, "0")}</div>
                <div><span className="project-modal-label">{section.title}</span><p>{section.body}</p></div>
              </section>
            ))}

            {selectedProject.gallery && selectedProject.gallery.length > 0 && (
              <section className="case-gallery-section">
                <span className="project-modal-label">PROJECT VISUALS</span>
                <div className="case-gallery">{selectedProject.gallery.map((image) => <figure key={image.src}><img src={image.src} alt={image.caption} /><figcaption>{image.caption}</figcaption></figure>)}</div>
              </section>
            )}

            {selectedProject.highlights && <section className="case-highlights"><span className="project-modal-label">ENGINEERING FOCUS</span><div className="tags">{selectedProject.highlights.map((item) => <span key={item}>{item}</span>)}</div></section>}

            <div className="case-nav">
              <button onClick={() => { const i = projects.findIndex((p) => p.title === selectedProject.title); setSelectedProject(projects[(i - 1 + projects.length) % projects.length]); }}>← Previous project</button>
              <span>{projects.findIndex((p) => p.title === selectedProject.title) + 1} / {projects.length}</span>
              <button onClick={() => { const i = projects.findIndex((p) => p.title === selectedProject.title); setSelectedProject(projects[(i + 1) % projects.length]); }}>Next project →</button>
            </div>
            <div className="project-modal-actions"><button className="primary" onClick={() => openAshForProject(selectedProject)}>Ask ASH about this project →</button><button className="secondary" onClick={() => setSelectedProject(null)}>Close</button></div>
          </article>
        </div>
      )}

      <ASHAssistant open={ashOpen} onClose={() => setAshOpen(false)} initialPrompt={ashPrompt} />

      {commandOpen && <div className="command-overlay" onClick={() => setCommandOpen(false)}><div className="command" onClick={(e) => e.stopPropagation()}><div className="command-input"><span>⌕</span><input autoFocus value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search projects, skills, experience..." /></div><div className="command-results"><button onClick={() => scrollTo("projects")}>→ Projects</button><button onClick={() => scrollTo("skills")}>→ Skills</button><button onClick={() => { setCommandOpen(false); setAshOpen(true); }}>→ Ask ASH</button>{search && filtered.map((project) => <button key={project.title} onClick={() => { setCommandOpen(false); setSelectedProject(project); }}>↳ {project.title}</button>)}</div><small>ESC to close • ⌘K / Ctrl+K to open</small></div></div>}
    </main>
  );
}
