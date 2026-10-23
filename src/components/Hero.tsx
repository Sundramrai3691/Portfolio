import { useEffect, useState, type MouseEvent } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Code2, ExternalLink, Github, Linkedin, MapPin } from "lucide-react";
import { PERSONAL, HERO_STATS } from "@/data";
import { useCounter } from "@/hooks/useCounter";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { Button } from "./ui/button";
import { SingularityScene } from "./SingularityScene";

function StatCard({
  value,
  prefix = "",
  suffix = "",
  label,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
}) {
  const count = useCounter(value);

  return (
    <div className="hero-stat-card relative bg-white/[0.035] px-5 py-5">
      <p className="font-heading bg-gradient-to-r from-cyan-300 via-cyan-100 to-violet-300 bg-clip-text text-2xl font-bold text-transparent md:text-3xl">
        {prefix}
        {count}
        {suffix}
      </p>
      <p className="mt-2 text-xs uppercase tracking-[0.24em] text-muted-foreground md:text-sm">{label}</p>
    </div>
  );
}

export const Hero = () => {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [typedHeading, setTypedHeading] = useState(prefersReducedMotion ? "THINK IN SYSTEMS." : "");
  const [showCursor, setShowCursor] = useState(!prefersReducedMotion);

  const socialLinks = [
    { icon: Github, href: PERSONAL.github, label: "GitHub" },
    { icon: Linkedin, href: PERSONAL.linkedin, label: "LinkedIn" },
    { icon: Code2, href: PERSONAL.leetcode, label: "LeetCode" },
  ];

  useEffect(() => {
    if (prefersReducedMotion) {
      setTypedHeading("THINK IN SYSTEMS.");
      setShowCursor(false);
      return;
    }

    let index = 0;
    let timeoutId = 0;
    const headline = "THINK IN SYSTEMS.";
    const interval = window.setInterval(() => {
      index += 1;
      setTypedHeading(headline.slice(0, index));

      if (index >= headline.length) {
        window.clearInterval(interval);
        timeoutId = window.setTimeout(() => setShowCursor(false), 500);
      }
    }, 55);

    return () => {
      window.clearInterval(interval);
      window.clearTimeout(timeoutId);
    };
  }, [prefersReducedMotion]);

  const handleRippleClick = (event: MouseEvent<HTMLButtonElement>) => {
    const button = event.currentTarget;
    const ripple = document.createElement("span");
    const rect = button.getBoundingClientRect();

    ripple.style.cssText = `
      position: absolute;
      width: 4px;
      height: 4px;
      border-radius: 999px;
      background: rgba(255,255,255,0.45);
      left: ${event.clientX - rect.left - 2}px;
      top: ${event.clientY - rect.top - 2}px;
      animation: ripple 0.6s ease-out forwards;
      pointer-events: none;
    `;

    button.style.position = "relative";
    button.style.overflow = "hidden";
    button.appendChild(ripple);
    window.setTimeout(() => ripple.remove(), 600);
  };

  return (
    <section id="hero" className="hero-bg relative flex min-h-screen items-center overflow-hidden px-6 pb-10 pt-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(155,114,255,0.16),transparent_34%),radial-gradient(circle_at_80%_20%,rgba(85,241,222,0.12),transparent_22%),linear-gradient(to_bottom,transparent,rgba(2,6,23,0.72),rgba(2,6,23,1))]" />
      <div className="pointer-events-none absolute -left-16 top-24 h-56 w-56 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-32 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl" />

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}>
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[11px] uppercase tracking-[0.32em] text-cyan-100/80 backdrop-blur-xl">
            <span>INDEPENDENT ENGINEER / SYSTEMS & AI</span>
          </div>
        </motion.div>

        <div className="grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
          <div className="text-center lg:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.82, delay: 0.15 }}
              className="font-heading text-[clamp(3.5rem,7vw,7rem)] font-black tracking-[-0.06em] text-white"
            >
              <span className="block text-white">I BUILD THINGS THAT</span>
              <span className="block bg-gradient-to-r from-white via-cyan-100 to-violet-200 bg-clip-text text-transparent">
                {typedHeading || "THINK IN SYSTEMS."}
                {showCursor ? <span className="type-cursor ml-1 inline-block text-cyan-300">|</span> : null}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="mt-6 max-w-2xl text-lg leading-8 text-cyan-100/80 md:text-[1.45rem]"
            >
              {PERSONAL.tagline}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="mt-4 max-w-xl text-base leading-7 text-muted-foreground md:text-lg"
            >
              {PERSONAL.intro}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:items-start"
            >
              <Button
                size="lg"
                className="group rounded-full bg-cyan-400 px-6 text-slate-950 transition-all hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(0,200,255,0.35)]"
                onClick={(event) => {
                  handleRippleClick(event);
                  document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
                }}
                data-cursor="OPEN"
              >
                Explore selected work
                <ArrowRight className="transition-transform group-hover:translate-x-1" size={18} />
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full border-white/15 bg-white/[0.03] text-white transition-all hover:-translate-y-1 hover:border-cyan-400/50 hover:bg-cyan-400/10"
              >
                <a href={PERSONAL.github} target="_blank" rel="noopener noreferrer" data-cursor="OPEN">
                  GitHub
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full border-white/15 bg-white/[0.03] text-white transition-all hover:-translate-y-1 hover:border-violet-400/50 hover:bg-violet-500/10"
              >
                <a href={PERSONAL.resume} target="_blank" rel="noopener noreferrer" data-cursor="OPEN">
                  Résumé
                  <ExternalLink className="ml-2 inline-block h-4 w-4" />
                </a>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.55 }}
              className="mt-8 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] shadow-[0_18px_60px_rgba(3,8,20,0.35)] backdrop-blur-xl"
            >
              <div className="grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
                {HERO_STATS.map((stat) => (
                  <StatCard
                    key={stat.label}
                    value={stat.value}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                    label={stat.label}
                  />
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.08 }}
                  className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-muted-foreground backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-cyan-400/30 hover:text-white"
                  aria-label={social.label}
                  data-cursor="OPEN"
                >
                  <social.icon size={18} className="text-cyan-300" />
                  <span>{social.label}</span>
                </motion.a>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="pointer-events-none absolute inset-x-10 top-8 h-28 rounded-full bg-cyan-400/15 blur-3xl" />
            <SingularityScene />
            <div className="mt-6 flex flex-wrap items-center gap-3 text-left">
              <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-200">
                <MapPin size={15} className="text-cyan-300" />
                {PERSONAL.location}
              </div>
              <div className="rounded-full border border-violet-400/30 bg-violet-500/10 px-4 py-2 text-xs uppercase tracking-[0.22em] text-violet-100">
                NIT Raipur
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
