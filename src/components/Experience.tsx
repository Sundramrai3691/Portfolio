import { useEffect, useRef, useState } from "react";
import { Briefcase } from "lucide-react";
import { EXPERIENCES } from "@/data/experiences";
import { cn } from "@/lib/utils";
import RevealOnScroll from "./RevealOnScroll";
import { SectionHeader } from "./SectionHeader";

export const Experience = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [lineVisible, setLineVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLineVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.22 },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="experience" className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Professional Journey"
          title="Work Experience"
          description="Leading technical teams, building prototypes, and creating systems that can move from idea to real-world use."
        />

        <div className="relative">
          <div className="absolute bottom-0 left-5 top-0 w-px bg-white/8 md:left-1/2 md:-translate-x-1/2" />
          {lineVisible ? (
            <div className="timeline-line absolute left-5 top-0 w-px bg-gradient-to-b from-cyan-400 via-sky-300 to-violet-400 md:left-1/2 md:-translate-x-1/2" />
          ) : null}

          {EXPERIENCES.map((experience, index) => (
            <RevealOnScroll
              key={experience.id}
              delay={index * 80}
              direction={index % 2 === 0 ? "left" : "right"}
              className={cn("relative mb-12 md:mb-16", index % 2 === 0 ? "md:pr-[52%]" : "md:pl-[52%]")}
            >
              <div className="absolute left-5 top-8 -translate-x-1/2 md:left-1/2">
                <div
                  className={cn(
                    "flex h-10 w-10 items-center justify-center rounded-full border border-cyan-400/40 bg-slate-950 shadow-[0_0_30px_rgba(0,200,255,0.12)]",
                    experience.duration.includes("Present") && "timeline-dot-active",
                  )}
                >
                  <Briefcase size={16} className="text-cyan-200" />
                </div>
              </div>

              <div className={cn("ml-14 md:ml-0", index % 2 === 0 ? "md:pr-10" : "md:pl-10")}>
                <article className="glass-card rounded-[1.8rem] border border-white/10 p-8">
                  <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                    <div>
                      <p className="text-sm uppercase tracking-[0.22em] text-cyan-100/70">{experience.duration}</p>
                      <h3 className="font-heading mt-3 text-2xl font-semibold text-white">{experience.role}</h3>
                      <p className="mt-2 text-sm uppercase tracking-[0.18em] text-muted-foreground">
                        {experience.org} • {experience.location}
                      </p>
                    </div>
                    <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-muted-foreground">
                      {experience.duration.includes("Present") ? "Present" : "Completed"}
                    </span>
                  </div>

                  <p className="mt-6 text-sm leading-7 text-slate-200/90 md:text-base">{experience.description}</p>
                </article>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};
