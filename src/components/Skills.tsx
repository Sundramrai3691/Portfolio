import { BrainCircuit, Boxes, Code2, Database, Sparkles, Wrench } from "lucide-react";
import { LANGUAGE_PROFICIENCY, SKILLS } from "@/data/skills";
import RevealOnScroll from "./RevealOnScroll";
import { SectionHeader } from "./SectionHeader";

const SKILL_CATEGORIES = [
  {
    key: "languages",
    title: "Languages",
    icon: Code2,
    skills: SKILLS.languages,
    glow: "rgba(0, 200, 255, 0.22)",
    tint: "from-cyan-400/30 to-sky-500/20",
  },
  {
    key: "webDev",
    title: "Web Development",
    icon: Boxes,
    skills: SKILLS.webDev,
    glow: "rgba(34, 211, 238, 0.16)",
    tint: "from-sky-500/25 to-cyan-400/15",
  },
  {
    key: "databases",
    title: "Databases",
    icon: Database,
    skills: SKILLS.databases,
    glow: "rgba(16, 185, 129, 0.18)",
    tint: "from-emerald-400/25 to-cyan-400/10",
  },
  {
    key: "toolsTech",
    title: "Tools & Tech",
    icon: Wrench,
    skills: SKILLS.toolsTech,
    glow: "rgba(123, 97, 255, 0.2)",
    tint: "from-violet-500/25 to-cyan-400/10",
  },
  {
    key: "aiMl",
    title: "AI / ML",
    icon: BrainCircuit,
    skills: SKILLS.aiMl,
    glow: "rgba(244, 114, 182, 0.18)",
    tint: "from-fuchsia-500/25 to-violet-500/15",
  },
  {
    key: "softSkills",
    title: "Soft Skills",
    icon: Sparkles,
    skills: SKILLS.softSkills,
    glow: "rgba(250, 204, 21, 0.18)",
    tint: "from-amber-300/25 to-orange-400/15",
  },
] as const;

export const Skills = () => {
  return (
    <section id="skills" className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Technical Expertise"
          title="Technical Skills"
          description="A practical stack for shipping full-stack systems, real-time collaboration, and ML-backed products without losing polish."
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
                    {category.skills.length} Skills
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
