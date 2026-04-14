import { CheckCircle2, Github } from "lucide-react";
import { CERTIFICATIONS } from "@/data";
import { CODING_PROFILES } from "@/data/codingProfiles";
import RevealOnScroll from "./RevealOnScroll";
import { SectionHeader } from "./SectionHeader";

const PLATFORM_META = {
  GitHub: { color: "#6e40c9", mark: "GH" },
  LeetCode: { color: "#FFA116", mark: "LC" },
  Codeforces: { color: "#318CE7", mark: "CF" },
  CodeChef: { color: "#5B4638", mark: "CC" },
  Codolio: { color: "#3B82F6", mark: "CO" },
} as const;

function PlatformMark({ platform }: { platform: keyof typeof PLATFORM_META }) {
  if (platform === "GitHub") {
    return <Github size={22} className="text-white" />;
  }

  return <span className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-white">{PLATFORM_META[platform].mark}</span>;
}

export const Profiles = () => {
  return (
    <section id="profiles" className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Online Presence"
          title="Coding Profiles & Certifications"
          description="Live coding handles, platform ratings, and certifications that reflect day-to-day problem solving and continuous learning."
        />

        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="grid gap-6 sm:grid-cols-2">
            {CODING_PROFILES.map((profile, index) => {
              const meta = PLATFORM_META[profile.platform as keyof typeof PLATFORM_META];

              return (
                <RevealOnScroll key={profile.platform} delay={index * 80}>
                  <a
                    href={profile.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="OPEN"
                    className="group block rounded-[1.7rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1"
                    style={{
                      boxShadow: `0 18px 40px rgba(0,0,0,0.18)`,
                    }}
                  >
                    <div
                      className="inline-flex rounded-2xl p-3 transition-transform duration-300 group-hover:-translate-y-1"
                      style={{ background: `${meta.color}22`, boxShadow: `0 0 22px ${meta.color}33` }}
                    >
                      <PlatformMark platform={profile.platform as keyof typeof PLATFORM_META} />
                    </div>
                    <div className="mt-5 flex items-start justify-between gap-3">
                      <div>
                        <h3 className="font-heading text-2xl font-semibold text-white">{profile.platform}</h3>
                        <p className="mt-2 text-sm uppercase tracking-[0.18em] text-muted-foreground">{profile.handle}</p>
                      </div>
                      <span className="mt-1 h-2.5 w-2.5 rounded-full" style={{ background: meta.color, boxShadow: `0 0 16px ${meta.color}` }} />
                    </div>
                    {profile.rating ? (
                      <div className="mt-6 flex items-center justify-between rounded-2xl border border-white/10 bg-slate-950/40 px-4 py-3">
                        <span className="text-sm text-slate-200">Rating {profile.rating}</span>
                        <span
                          className="rounded-full px-3 py-1 text-[11px] font-medium uppercase tracking-[0.16em]"
                          style={{ background: `${meta.color}20`, color: meta.color }}
                        >
                          {profile.badge}
                        </span>
                      </div>
                    ) : (
                      <div className="mt-6 rounded-2xl border border-white/10 bg-slate-950/40 px-4 py-3 text-sm text-slate-200">
                        Open-source work and project shipping hub
                      </div>
                    )}
                  </a>
                </RevealOnScroll>
              );
            })}
          </div>

          <RevealOnScroll delay={220}>
            <aside className="glass-card h-full rounded-[1.85rem] border border-white/10 p-7">
              <p className="text-xs uppercase tracking-[0.24em] text-cyan-100/80">Certifications</p>
              <h3 className="font-heading mt-4 text-3xl font-semibold text-white">Structured learning, kept practical.</h3>
              <div className="mt-8 space-y-4">
                {CERTIFICATIONS.map((certification) => (
                  <div key={certification} className="flex gap-3 rounded-2xl border border-white/10 bg-slate-950/35 p-4">
                    <CheckCircle2 size={18} className="mt-0.5 text-cyan-300" />
                    <p className="text-sm leading-7 text-slate-200/90">{certification}</p>
                  </div>
                ))}
              </div>
            </aside>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
};
