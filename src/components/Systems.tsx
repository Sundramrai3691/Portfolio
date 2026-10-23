import { ArrowRight, BrainCircuit, BriefcaseBusiness, Database, GraduationCap, ShieldCheck, Sparkles } from "lucide-react";
import { PERSONAL } from "@/data";
import RevealOnScroll from "./RevealOnScroll";
import { SectionHeader } from "./SectionHeader";

const SYSTEM_PATTERNS = [
  {
    id: "forkspace",
    title: "ForkSpace",
    label: "Concurrency",
    summary:
      "Atomic coordination, session recovery, and rate-aware execution help collaborative code rooms stay stable under live load.",
    tags: ["WebSockets", "Redis", "Rate limiting", "Session state"],
    icon: Database,
  },
  {
    id: "recallloop",
    title: "RecallLoop",
    label: "Validation",
    summary:
      "Deterministic evidence checks turn AI remediation into a grounded review loop instead of a noisy suggestion engine.",
    tags: ["RAG", "Validation", "Evidence", "Retrieval"],
    icon: BrainCircuit,
  },
  {
    id: "rexcan",
    title: "ReXcan",
    label: "Extraction",
    summary:
      "Multi-stage OCR and normalization convert messy invoice documents into structured outputs with confidence signals and reviewability.",
    tags: ["OCR", "LLMs", "Normalization", "Review flows"],
    icon: Sparkles,
  },
  {
    id: "peopleops",
    title: "PeopleOps Copilot",
    label: "Auditability",
    summary:
      "Authorization gates, approval checks, and audit-friendly actions keep AI assistance worthy of sensitive operational workflows.",
    tags: ["Authorization", "Approvals", "Audit logs", "Assistive AI"],
    icon: ShieldCheck,
  },
] as const;

export const Systems = () => {
  return (
    <section id="systems" className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Engineering narrative"
          title="How I think about systems"
          description="I design with reliability in mind: concurrency, validation, retrieval, approvals, and practical leverage of AI at the right layer."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {SYSTEM_PATTERNS.map((pattern, index) => {
            const Icon = pattern.icon;

            return (
              <RevealOnScroll key={pattern.id} delay={index * 80}>
                <article className="group relative h-full overflow-hidden rounded-[1.8rem] border border-white/10 bg-white/[0.03] p-7 shadow-[0_18px_50px_rgba(6,10,20,0.28)] transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(155,114,255,0.14),transparent_35%)]" />
                  <div className="relative">
                    <div className="flex items-center justify-between gap-4">
                      <div className="inline-flex rounded-2xl bg-gradient-to-br from-cyan-400/20 via-violet-500/15 to-emerald-400/10 p-3">
                        <Icon size={20} className="text-white" />
                      </div>
                      <span className="rounded-full border border-white/10 bg-slate-950/40 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-cyan-100/80">
                        {pattern.label}
                      </span>
                    </div>

                    <h3 className="mt-6 font-heading text-2xl font-semibold text-white">{pattern.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-slate-200/90 md:text-base">{pattern.summary}</p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {pattern.tags.map((tag) => (
                        <span key={tag} className="rounded-full border border-white/10 bg-slate-950/40 px-3 py-1.5 text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export const About = () => {
  return (
    <section id="about" className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="About"
          title="Engineering student building real systems"
          description="I care about projects that combine architectural clarity, measurable product outcomes, and thoughtful use of AI."
          align="left"
        />

        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6 text-base leading-8 text-muted-foreground md:text-lg">
            <p>
              I&apos;m Sundram Rai, an engineering student at NIT Raipur building software products where algorithms, infrastructure, and AI meet.
            </p>
            <p>
              My work sits between product engineering and applied intelligence: real-time systems, retrieval-heavy AI flows, structured validation, and developer-focused workflows that need to be robust in the real world.
            </p>
            <div id="resume" className="rounded-[1.6rem] border border-white/10 bg-white/[0.03] p-6">
              <p className="text-xs uppercase tracking-[0.26em] text-cyan-100/80">Resume</p>
              <p className="mt-3 text-lg font-medium text-white">Available for product engineering, applied AI, and backend systems work.</p>
              <a
                href={PERSONAL.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-cyan-200 transition-colors hover:text-white"
              >
                View résumé <ArrowRight size={16} />
              </a>
            </div>
          </div>

          <div className="rounded-[1.9rem] border border-white/10 bg-white/[0.03] p-7">
            <p className="text-xs uppercase tracking-[0.26em] text-cyan-100/80">Education</p>
            <div className="mt-6 flex items-start gap-4">
              <div className="rounded-2xl bg-cyan-500/10 p-3 text-cyan-200">
                <GraduationCap size={22} />
              </div>
              <div>
                <p className="font-heading text-2xl font-semibold text-white">{PERSONAL.education.institute}</p>
                <p className="mt-2 text-sm text-muted-foreground">{PERSONAL.education.degree}</p>
                <p className="mt-1 text-sm text-muted-foreground">Graduation year: {PERSONAL.education.graduationYear}</p>
                <p className="mt-1 text-sm text-muted-foreground">CGPA: {PERSONAL.education.cgpa}</p>
              </div>
            </div>

            <div className="mt-8 rounded-[1.4rem] border border-white/10 bg-slate-950/45 p-5">
              <div className="flex items-center gap-3 text-cyan-200">
                <BriefcaseBusiness size={18} />
                <span className="text-xs uppercase tracking-[0.2em]">Leadership</span>
              </div>
              <p className="mt-4 text-sm leading-7 text-slate-200/90">
                Robotix Club technical leadership and mentoring experience shaped how I build teams, prototype quickly, and keep execution practical.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
