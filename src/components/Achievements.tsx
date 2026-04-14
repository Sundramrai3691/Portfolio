import { useEffect, useRef, useState } from "react";
import { Award, Code2, GitMerge, Star, Trophy } from "lucide-react";
import { ACHIEVEMENTS } from "@/data/achievements";
import { useCounter } from "@/hooks/useCounter";
import RevealOnScroll from "./RevealOnScroll";
import { SectionHeader } from "./SectionHeader";

const ICON_MAP = {
  code: Code2,
  award: Award,
  trophy: Trophy,
  star: Star,
  "git-merge": GitMerge,
} as const;

function StatTile({
  label,
  value,
  badge,
  start,
  color,
  suffix = "",
}: {
  label: string;
  value: number;
  badge?: string;
  start: boolean;
  color: string;
  suffix?: string;
}) {
  const count = useCounter(value, 1500, start);

  return (
    <div className="rounded-[1.4rem] border border-white/10 bg-slate-950/40 p-5">
      <div className="flex items-start justify-between gap-3">
        <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">{label}</p>
        {badge ? (
          <span
            className="rounded-full px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.16em]"
            style={{ background: `${color}20`, color, boxShadow: `0 0 18px ${color}33` }}
          >
            {badge}
          </span>
        ) : null}
      </div>
      <p className="font-heading mt-4 text-3xl font-semibold text-white">
        {count}
        {suffix}
      </p>
    </div>
  );
}

export const Achievements = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [statsVisible, setStatsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="achievements" className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Recognition & Milestones"
          title="Achievements"
          description="Competitive programming results, startup validation, open-source recognition, and event wins that reflect both depth and consistency."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {ACHIEVEMENTS.map((achievement, index) => {
            const Icon = ICON_MAP[achievement.icon];

            if (achievement.id === "cp") {
              return (
                <RevealOnScroll key={achievement.id} delay={index * 80} className="md:col-span-2">
                  <article className="glass-card rounded-[1.9rem] border border-white/10 p-8">
                    <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                      <div className="max-w-2xl">
                        <div className="inline-flex rounded-2xl bg-gradient-to-br from-amber-300/25 via-cyan-400/15 to-violet-500/20 p-3">
                          <Icon size={24} className="text-white" />
                        </div>
                        <h3 className="font-heading mt-5 text-3xl font-semibold text-white">{achievement.title}</h3>
                        <p className="mt-3 text-base leading-7 text-muted-foreground">{achievement.description}</p>
                        <p className="mt-5 text-sm uppercase tracking-[0.2em] text-cyan-100/80">{achievement.highlight}</p>
                      </div>
                      <div className="grid flex-1 gap-4 sm:grid-cols-2">
                        <StatTile label="LeetCode Rating" value={1886} badge="Knight" color="#FFD700" start={statsVisible} />
                        <StatTile label="Codeforces Rating" value={1379} badge="Pupil" color="#7EB4F7" start={statsVisible} />
                        <StatTile label="CodeChef Rating" value={1731} badge="3★" color="#F7C137" start={statsVisible} />
                        <StatTile label="Problems Solved" value={1700} suffix="+" start={statsVisible} color="#00C8FF" />
                      </div>
                    </div>
                  </article>
                </RevealOnScroll>
              );
            }

            return (
              <RevealOnScroll key={achievement.id} delay={index * 80}>
                <article className="glass-card h-full rounded-[1.75rem] border border-white/10 p-7">
                  <div className="inline-flex rounded-2xl bg-gradient-to-br from-cyan-400/20 via-sky-500/15 to-violet-500/20 p-3">
                    <Icon size={22} className="text-white" />
                  </div>
                  <h3 className="font-heading mt-5 text-2xl font-semibold text-white">{achievement.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-200/90 md:text-base">{achievement.description}</p>
                </article>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
};
