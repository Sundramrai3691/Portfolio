import { useEffect, useState, type MouseEvent } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Code2, Github, Linkedin, MapPin } from "lucide-react";
import { PERSONAL, HERO_STATS } from "@/data";
import { useCounter } from "@/hooks/useCounter";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { Button } from "./ui/button";

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
  const [typedName, setTypedName] = useState(prefersReducedMotion ? PERSONAL.name : "");
  const [showCursor, setShowCursor] = useState(!prefersReducedMotion);

  const socialLinks = [
    {
      icon: Github,
      href: PERSONAL.github,
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: PERSONAL.linkedin,
      label: "LinkedIn",
    },
    { icon: Code2, href: PERSONAL.leetcode, label: "LeetCode" },
  ];

  useEffect(() => {
    if (prefersReducedMotion) {
      setTypedName(PERSONAL.name);
      setShowCursor(false);
      return;
    }

    let index = 0;
    let timeoutId = 0;
    const interval = window.setInterval(() => {
      index += 1;
      setTypedName(PERSONAL.name.slice(0, index));

      if (index >= PERSONAL.name.length) {
        window.clearInterval(interval);
        timeoutId = window.setTimeout(() => setShowCursor(false), 500);
      }
    }, 60);

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
    <section id="hero" className="hero-bg relative flex min-h-screen items-center overflow-hidden px-6 pt-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,200,255,0.14),transparent_34%),radial-gradient(circle_at_80%_20%,rgba(123,97,255,0.2),transparent_22%),linear-gradient(to_bottom,transparent,rgba(2,6,23,0.7),rgba(2,6,23,1))]" />
      <div className="pointer-events-none absolute -left-16 top-24 h-56 w-56 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-32 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-4 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.045] px-4 py-2 text-xs uppercase tracking-[0.26em] text-cyan-100/80 backdrop-blur-xl">
            <span>@{PERSONAL.handle}</span>
            <span className="h-1 w-1 rounded-full bg-cyan-300" />
            <span>{PERSONAL.education.duration}</span>
          </div>
        </motion.div>

        <div className="grid items-center gap-14 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="text-center lg:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-heading text-5xl font-bold tracking-tight text-white md:text-7xl lg:text-[5.5rem]"
            >
              <span className="bg-gradient-to-r from-white via-cyan-100 to-violet-200 bg-clip-text text-transparent">
                {typedName}
              </span>
              {showCursor ? <span className="type-cursor ml-1 inline-block text-cyan-300">|</span> : null}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground md:text-2xl"
            >
              {PERSONAL.tagline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.32 }}
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
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.42 }}
              className="mt-10 flex flex-col items-center gap-4 sm:flex-row lg:items-start"
            >
              <Button
                size="lg"
                className="group rounded-full bg-cyan-400 text-slate-950 transition-all hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(0,200,255,0.35)]"
                onClick={(event) => {
                  handleRippleClick(event);
                  window.location.href = `mailto:${PERSONAL.email}`;
                }}
                data-cursor="OPEN"
              >
                Contact Me
                <ArrowRight className="transition-transform group-hover:translate-x-1" size={18} />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full border-white/15 bg-white/[0.03] text-white transition-all hover:-translate-y-1 hover:border-cyan-400/50 hover:bg-cyan-400/10"
                onClick={(event) => {
                  handleRippleClick(event);
                  window.open("/resume.pdf", "_blank", "noopener,noreferrer");
                }}
                data-cursor="OPEN"
              >
                View Resume
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.52 }}
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
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.08 }}
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
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.28 }}
            className="relative"
          >
            <div className="absolute inset-x-10 top-0 h-32 rounded-full bg-cyan-400/10 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.045] p-8 shadow-[0_30px_80px_rgba(1,10,30,0.45)] backdrop-blur-xl">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,200,255,0.12),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(123,97,255,0.12),transparent_24%)]" />
              <div className="relative">
                <p className="font-mono text-xs uppercase tracking-[0.35em] text-cyan-200/70">Current Focus</p>
                <h2 className="font-heading mt-4 text-2xl font-semibold text-white md:text-3xl">
                  Shipping full-stack products with a strong ML edge.
                </h2>
                <p className="mt-4 text-sm leading-7 text-muted-foreground md:text-base">
                  I build real-time systems, practical ML workflows, and developer-facing products that feel fast,
                  clear, and reliable.
                </p>

                <div className="mt-8 grid gap-4 text-left">
                  <div className="rounded-2xl border border-white/10 bg-slate-950/30 p-4">
                    <p className="font-mono text-xs uppercase tracking-[0.28em] text-cyan-200/70">Education</p>
                    <p className="mt-2 text-lg font-semibold text-white">{PERSONAL.education.institute}</p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {PERSONAL.education.degree} • CGPA {PERSONAL.education.cgpa}
                    </p>
                  </div>
                  <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-950/30 p-4 text-sm text-muted-foreground">
                    <MapPin size={18} className="text-cyan-300" />
                    <span>{PERSONAL.location}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
