import { useRef, type CSSProperties, type MouseEvent } from "react";
import { ExternalLink, Github, Sparkles } from "lucide-react";
import { PROJECTS } from "@/data/projects";
import { Button } from "./ui/button";
import RevealOnScroll from "./RevealOnScroll";
import { SectionHeader } from "./SectionHeader";

function ProjectCard({ project, index }: { project: (typeof PROJECTS)[number]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) {
      return;
    }

    const rect = card.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;

    card.style.transform = `perspective(800px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg) translateY(-4px)`;
    card.style.background = `radial-gradient(circle at ${event.clientX - rect.left}px ${event.clientY - rect.top}px, rgba(0,200,255,0.07), transparent 60%), var(--card-bg)`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) {
      return;
    }

    card.style.transform = "perspective(800px) rotateY(0deg) rotateX(0deg) translateY(0)";
    card.style.background = "var(--card-bg)";
  };

  return (
    <RevealOnScroll delay={index * 80}>
      <article
        ref={cardRef}
        data-cursor="VIEW →"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={
          {
            transition: "transform 0.15s ease, box-shadow 0.3s ease",
            "--card-bg": "rgba(255,255,255,0.03)",
          } as CSSProperties & { "--card-bg": string }
        }
        className="project-card group relative h-full overflow-hidden rounded-[1.85rem] border border-white/5 p-8 hover:border-cyan-400/40 hover:shadow-[0_0_30px_rgba(0,200,255,0.1)]"
      >
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.03),transparent_48%)]" />
        <div className="relative h-full">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="mb-3 flex items-center gap-2">
                <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-cyan-100/75">
                  {project.category}
                </span>
                {project.featured ? (
                  <span className="inline-flex items-center gap-1 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-cyan-100">
                    <Sparkles size={12} />
                    Featured
                  </span>
                ) : null}
              </div>
              <h3 className="font-heading text-2xl font-semibold text-white">{project.title}</h3>
              <p className="mt-2 text-sm uppercase tracking-[0.2em] text-muted-foreground">{project.subtitle}</p>
            </div>
            <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-muted-foreground">{project.date}</span>
          </div>

          <p className="mt-6 text-sm leading-7 text-muted-foreground md:text-base">{project.description}</p>

          <ul className="mt-6 space-y-3">
            {project.bullets.map((bullet) => (
              <li key={bullet} className="flex gap-3 text-sm leading-7 text-slate-200/90">
                <span className="mt-2 h-2 w-2 rounded-full bg-cyan-300" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>

          <div className="mt-7 flex flex-wrap gap-2.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="tech-tag rounded-full border border-white/8 bg-slate-950/55 px-3 py-1.5 text-xs uppercase tracking-[0.16em] text-slate-200"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild className="flex-1 rounded-full bg-cyan-400 text-slate-950 hover:bg-cyan-300" data-cursor="OPEN">
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <Github size={16} />
                View Code
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="flex-1 rounded-full border-white/10 bg-transparent text-white hover:border-cyan-400/40 hover:bg-cyan-400/10"
              data-cursor="OPEN"
            >
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                Open Project
                <ExternalLink size={16} />
              </a>
            </Button>
          </div>
        </div>
      </article>
    </RevealOnScroll>
  );
}

export const Projects = () => {
  return (
    <section id="projects" className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Portfolio Showcase"
          title="Projects"
          description="A selection of systems built across collaboration, OCR pipelines, full-stack product engineering, and computer vision."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
