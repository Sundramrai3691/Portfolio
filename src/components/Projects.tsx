import { ArrowDownRight, ArrowUpRight, Boxes, Code2, Database, FileText, Github, GitBranch, Layers, Network, Search, Server, Waypoints } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import { ADDITIONAL_PROJECTS, PROJECTS } from "@/data/projects";
import { SectionHeader } from "./SectionHeader";
import { ProjectVisual } from "./ProjectVisual";

const stackGlyphs: Record<string, LucideIcon> = {
  React: Layers, "Socket.IO": Network, "Node.js": Server, MongoDB: Database, Redis: Layers, Docker: Boxes,
  TypeScript: Code2, PostgreSQL: Database, Retrieval: Search, Python: Code2, FastAPI: Server,
  EasyOCR: FileText, Tesseract: FileText, LangGraph: GitBranch, MCP: Network,
};

function ProjectCaseStudy({ project }: { project: (typeof PROJECTS)[number] }) {
  if (project.id === "forkspace") return <figure className="project-art project-art-screenshot project-art-forkspace">
    <img src="/projects/forkspace-home.png" alt="ForkSpace homepage showing its shared room, code practice, and interview workflow." loading="lazy" decoding="async" />
  </figure>;

  return <figure className={`project-art project-art-${project.visual}`}>
    <ProjectVisual projectId={project.id} />
  </figure>;
}
export const Projects = () => (
  <section id="projects" className="projects-section section-frame">
    <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16">
      <SectionHeader eyebrow="SELECTED WORK" title="Systems with a pulse." description="Four products shaped by coordination, evidence, extraction, and trust." />
      <div className="project-list">
        {PROJECTS.map((project, index) => (
          <motion.article id={project.id} key={project.id} className={`project-row ${index % 2 ? "project-row-reverse" : ""}`} initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.16 }} transition={{ duration: 0.65, ease: [0.2, 0.75, 0.25, 1] }}>
            <ProjectCaseStudy project={project} />
            <div className="project-copy">
              <p className="project-kicker"><span>0{index + 1}</span><i />{project.category}</p>
              <h3>{project.title}<span className="project-title-mark">↗</span></h3>
              <p className="project-subtitle">{project.subtitle}</p>
              <p className="project-description">{project.description}</p>
              {project.metric && <p className="project-result"><span className="result-mark" aria-hidden="true">↗</span>{project.metric}</p>}
              <ul className="project-tags" aria-label={`${project.title} technology stack`}>
                {project.tags.slice(0, 5).map((tag) => {
                  const Icon = stackGlyphs[tag] ?? Code2;
                  return <li key={tag}><Icon size={14} strokeWidth={1.8} aria-hidden="true" /><span>{tag}</span></li>;
                })}
              </ul>
              <div className="project-links">
                <a href={project.github} target="_blank" rel="noreferrer"><Github size={16} /> Repository <ArrowUpRight size={14} /></a>
                {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noreferrer">Live project <ArrowUpRight size={14} /></a>}
                <a href={`#systems-${project.id}`} className="project-deep-link" onClick={() => window.dispatchEvent(new CustomEvent("portfolio:select-system", { detail: project.id }))}><Waypoints size={15} /> Engineering anatomy <ArrowUpRight size={14} /></a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
      <div className="archive-line"><span>ALSO IN THE WORKSHOP</span>{ADDITIONAL_PROJECTS.map((project) => <a key={project.id} href={project.github} target="_blank" rel="noreferrer"><strong>{project.title}</strong><span>{project.description}</span><ArrowDownRight size={17} /></a>)}</div>
    </div>
  </section>
);
