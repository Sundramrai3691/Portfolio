import { useState, type CSSProperties } from "react";
import { ArrowDownRight, ArrowUpRight, Github, Waypoints } from "lucide-react";
import { motion } from "framer-motion";
import { ADDITIONAL_PROJECTS, PROJECTS } from "@/data/projects";
import { SectionHeader } from "./SectionHeader";

function ProjectCaseStudy({ project, index }: { project: (typeof PROJECTS)[number]; index: number }) {
  const [imageFailed, setImageFailed] = useState(false);
  const ready = Boolean(project.image) && !imageFailed;
  return (
    <div className={`project-art project-art-${project.visual}`} style={{ "--project-index": index } as CSSProperties} role="img" aria-label={ready ? project.imageAlt : `${project.title} system illustration. Application screenshot not supplied.`}>
      {ready && project.image && <img src={project.image} alt={project.imageAlt} loading="lazy" onError={() => setImageFailed(true)} />}
      {!ready && <div className="project-artwork" aria-hidden="true">
        {project.visual === "sync" && <><span className="sync-ring sync-ring-a"/><span className="sync-ring sync-ring-b"/><span className="sync-node sync-node-a"/><span className="sync-node sync-node-b"/><span className="sync-node sync-node-c"/><span className="sync-link"/><span className="sync-core">17.3<small>ms</small></span></>}
        {project.visual === "recall" && <><span className="recall-orbit recall-orbit-a"/><span className="recall-orbit recall-orbit-b"/><span className="recall-node recall-node-a"/><span className="recall-node recall-node-b"/><span className="recall-node recall-node-c"/><span className="recall-core">R<span>↻</span></span></>}
        {project.visual === "extract" && <><span className="extract-sheet extract-sheet-a"/><span className="extract-sheet extract-sheet-b"/><span className="extract-beam"/><span className="extract-row extract-row-a"/><span className="extract-row extract-row-b"/><span className="extract-row extract-row-c"/><span className="extract-stamp">86%</span></>}
        {project.visual === "workflow" && <><span className="workflow-node workflow-node-a">RETRIEVE</span><span className="workflow-node workflow-node-b">ANALYZE</span><span className="workflow-node workflow-node-c">APPROVE</span><span className="workflow-line workflow-line-a"/><span className="workflow-line workflow-line-b"/><span className="workflow-core">H</span></>}
      </div>}
      <div className="project-art-meta"><span>PROJECT STUDY / {String(index + 1).padStart(2, "0")}</span><span>{ready ? "APPLICATION CAPTURE" : "SCREENSHOT NOT SUPPLIED · SYSTEM STUDY"}</span></div>
      <div className="project-art-outline" aria-hidden="true" />
    </div>
  );
}

export const Projects = () => (
  <section id="projects" className="projects-section section-frame">
    <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16">
      <SectionHeader eyebrow="Selected work / 01—04" title="Systems with a pulse." description="Real products, built around the hard parts: coordination, evidence, extraction, and trust." />
      <div className="project-list">
        {PROJECTS.map((project, index) => (
          <motion.article id={project.id} key={project.id} className={`project-row ${index % 2 ? "project-row-reverse" : ""}`} initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.16 }} transition={{ duration: 0.65, ease: [0.2, 0.75, 0.25, 1] }}>
            <ProjectCaseStudy project={project} index={index} />
            <div className="project-copy">
              <p className="project-kicker"><span>0{index + 1}</span><i />{project.category}</p>
              <h3>{project.title}<span className="project-title-mark">↗</span></h3>
              <p className="project-subtitle">{project.subtitle}</p>
              <p className="project-description">{project.description}</p>
              <p className="project-problem"><span>THE PROBLEM</span>{project.problem}</p>
              <p className="project-result"><span className="result-mark">✳</span>{project.result}</p>
              <p className="project-decision-label">IMPLEMENTATION DECISIONS</p>
              <ul className="project-details">{project.decisions.map((decision) => <li key={decision}>{decision}</li>)}</ul>
              <div className="project-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
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
