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
    title: "Hoist Castor Redesign",
    category: "Maintenance",
    tags: ["SolidWorks", "Reliability", "Design", "Serviceability"],
    description: "Reworked a hoist caster assembly so wheel replacement can be completed at the installation point without removing the heavy assembly or performing hot work.",
    metric: "Maintenance",
    sections: [
      { title: "The problem", body: "The original caster was installed at height. Wheel replacement required removing the heavy subassembly, taking it to a maintenance shop, grinding off a welded axle end, replacing the wheel, welding the axle again, and reinstalling the assembly." },
      { title: "Design approach", body: "The redesign uses a new caster housing with a removable axle secured by a cotter pin. The housing remains installed on the hoist while only the wheel and axle are removed for replacement." },
      { title: "Result", body: "The maintenance procedure becomes a simple remove-pin, slide-axle, replace-wheel, reinstall-axle sequence. This removes the need for welding and grinding during routine wheel replacement and reduces handling and downtime." },
    ],
    highlights: ["Removable axle", "Cotter-pin retention", "No routine welding", "At-height serviceability", "Lower maintenance effort"],
  },
  {
    title: "Industrial Electroplating Barrel Improvements",
    category: "Design",
    tags: ["CAD", "Manufacturing", "Reliability"],
    description: "Improved access to difficult mid-assembly connections and addressed rotation-related wear in an industrial electrocoating setup.",
    metric: "Reliability",
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
    hero: "/projects/auv/solid-model.png",
    gallery: [
      { src: "/projects/auv/solid-model.png", caption: "Agricultural Utility Vehicle solid model — multipurpose vehicle configuration." },
      { src: "/projects/auv/final-side.jpg", caption: "Final Agricultural Utility Vehicle — side view." },
      { src: "/projects/auv/final-front.jpg", caption: "Final Agricultural Utility Vehicle — front view." },
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
  const [labProject, setLabProject] = useState<Project>(projects[0]);
  const [recruiterOpen, setRecruiterOpen] = useState(false);
  const [recruiterRole, setRecruiterRole] = useState("Mechanical Design");

  useEffect(() => {
    // A browser refresh should always reopen the portfolio at the home/hero section.
    // Remove any section hash and reset the scroll position before the page settles.
    if (window.location.hash) {
      window.history.replaceState(null, "", `${window.location.pathname}${window.location.search}`);
    }
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    requestAnimationFrame(() => window.scrollTo({ top: 0, left: 0, behavior: "auto" }));
  }, []);

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
        setRecruiterOpen(false);
      }
    };
    window.addEventListener("keydown", key);
    return () => window.removeEventListener("keydown", key);
  }, []);

  useEffect(() => {
    const trackVisitor = async () => {
      try {
        await fetch("/api/visitor", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            page: window.location.pathname,
            event_type: "page_view",
            device: /Mobi|Android/i.test(navigator.userAgent)
              ? "mobile"
              : "desktop",
            browser: navigator.userAgent,
            referrer: document.referrer,
          }),
        });
      } catch (error) {
        console.error("Visitor tracking failed:", error);
      }
    };

    trackVisitor();
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

  const recruiterProjects = useMemo(() => {
    const role = recruiterRole.toLowerCase();
    const roleTerms: Record<string, string[]> = {
      "Mechanical Design": ["design", "cad", "mechanism", "solidworks"],
      "Manufacturing": ["manufacturing", "dfm", "fabrication", "prototyping"],
      "Product Development": ["product", "mechanism", "design", "prototyping"],
      "Maintenance Engineering": ["maintenance", "serviceability", "reliability", "root cause"],
      "CAD / SolidWorks": ["cad", "solidworks", "design"],
    };
    const terms = roleTerms[recruiterRole] || [];
    return projects
      .map((project) => {
        const haystack = `${project.title} ${project.category} ${project.tags.join(" ")} ${project.description} ${project.highlights?.join(" ") || ""}`.toLowerCase();
        const score = terms.reduce((total, term) => total + (haystack.includes(term) ? 1 : 0), 0);
        return { project, score };
      })
      .sort((a, b) => b.score - a.score)
      .slice(0, 3)
      .map(({ project }) => project);
  }, [recruiterRole]);

  const recruiterDescriptions: Record<string, string> = {
    "Mechanical Design": "Industrial mechanical design, assemblies, mechanisms, CAD iteration, and practical serviceability.",
    "Manufacturing": "DFM thinking, fabrication, prototyping, process improvement, and practical shop-floor constraints.",
    "Product Development": "Problem definition, mechanism development, prototyping, fit checks, and design refinement.",
    "Maintenance Engineering": "Serviceability, reliability, root-cause thinking, maintenance access, and downtime reduction.",
    "CAD / SolidWorks": "SolidWorks-driven mechanical assemblies, design iteration, prototyping, and engineering documentation.",
  };
  const recruiterRoles = Object.keys(recruiterDescriptions);
  const recruiterSummary = recruiterDescriptions[recruiterRole];

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
        <div className="nav-actions"><button className="recruiter-trigger" onClick={() => setRecruiterOpen(true)}>⚡ Recruiter Mode</button><button className="search-trigger" onClick={() => setCommandOpen(true)} aria-label="Open search"><span>⌕</span><kbd>⌘ K</kbd></button></div>
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
              <div className="project-body"><small>{project.category}</small><h3>{project.title}</h3><p>{project.description}</p><div className="tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><button>Explore project →</button></div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
