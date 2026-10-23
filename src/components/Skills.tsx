import { BrainCircuit, Code2, Database, Rocket, Wrench } from "lucide-react";
import { LANGUAGE_PROFICIENCY, SKILLS } from "@/data/skills";
import RevealOnScroll from "./RevealOnScroll";
import { SectionHeader } from "./SectionHeader";

const SKILL_CATEGORIES = [
  {
    key: "languages",
    title: "Languages",
    icon: Code2,
    skills: SKILLS.languages,
    glow: "rgba(97, 225, 255, 0.24)",
    tint: "from-cyan-400/30 to-indigo-500/20",
  },
  {
    key: "systems",
    title: "Backend & systems",
    icon: Database,
    skills: SKILLS.systems,
    glow: "rgba(85, 241, 222, 0.2)",
    tint: "from-emerald-400/20 to-cyan-500/15",
  },
  {
    key: "ai",
    title: "AI engineering",
    icon: BrainCircuit,
    skills: SKILLS.ai,
    glow: "rgba(155, 114, 255, 0.22)",
    tint: "from-violet-400/25 to-fuchsia-500/15",
  },
  {
    key: "tools",
    title: "Engineering tools",
    icon: Wrench,
    skills: SKILLS.tools,
    glow: "rgba(255, 117, 189, 0.18)",
    tint: "from-rose-400/20 to-violet-500/15",
  },
  {
    key: "leadership",
    title: "Leadership",
    icon: Rocket,
    skills: SKILLS.leadership,
    glow: "rgba(250, 204, 21, 0.18)",
    tint: "from-amber-300/20 to-orange-500/15",
  },
] as const;

export const Skills = () => {
  return (
    <section id="skills" className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Technical depth"
          title="Systems, AI, and product execution"
          description="Backend software engineering with applied AI, disciplined validation, and the operational detail required to ship reliable systems."
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {SKILL_CATEGORIES.map((category, categoryIndex) => (
            <RevealOnScroll key={category.title} delay={categoryIndex * 80}>
              <article className="glass-card group h-full rounded-[1.75rem] border border-white/8 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30">
                <div className={`inline-flex rounded-2xl bg-gradient-to-br p-3 ${category.tint}`}>
                  <category.icon size={22} className="text-white" />
                </div>
                <div className="mt-5 flex items-start justify-between gap-4">
                  <h3 className="font-heading text-2xl font-semibold text-white">{category.title}</h3>
                  <span className="rounded-full border border-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
                    {category.skills.length}
                  </span>
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  {category.skills.map((skill, index) => {
                    const proficiency = category.key === "languages" ? LANGUAGE_PROFICIENCY[skill] : undefined;

                    return (
                      <div key={skill} className="group/tag relative">
                        <span
                          className="skill-tag inline-flex rounded-full border border-white/10 bg-slate-950/45 px-4 py-2 text-sm text-slate-100"
                          style={{
                            animationDelay: `${index * 60}ms`,
                            boxShadow: `0 0 0 1px rgba(255,255,255,0.03) inset, 0 0 20px ${category.glow}`,
                          }}
                        >
                          {skill}
                        </span>
                        {proficiency ? (
                          <span className="pointer-events-none absolute left-1/2 top-full z-20 mt-2 -translate-x-1/2 translate-y-1 whitespace-nowrap rounded-full border border-white/10 bg-slate-950/95 px-3 py-1 text-[11px] text-cyan-100 opacity-0 transition-all duration-200 group-hover/tag:translate-y-0 group-hover/tag:opacity-100">
                            {proficiency}
                          </span>
                        ) : null}
                      </div>
                    );
                  })}
                </div>
              </article>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};
