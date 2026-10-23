import { lazy, Suspense } from "react";
import { motion } from "framer-motion";
import { ArrowDown, ArrowRight, ExternalLink, Github, Linkedin } from "lucide-react";
import { PERSONAL } from "@/data";

const FoldedScene = lazy(() => import("./FoldedScene").then((module) => ({ default: module.FoldedScene })));

export const Hero = () => (
  <section id="hero" className="hero-shell relative flex min-h-[min(900px,100svh)] items-center overflow-hidden px-6 pb-12 pt-28 md:px-10 lg:px-16">
    <div className="hero-atmosphere" aria-hidden="true" />
    <div className="hero-gridline" aria-hidden="true" />
    <div className="relative z-10 mx-auto grid w-full max-w-[1500px] items-center gap-3 lg:grid-cols-[1.12fr_0.88fr]">
      <div className="hero-copy relative z-10">
        <motion.p className="eyebrow mb-7" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="signal-dot" /> Independent engineer <span className="eyebrow-slash">/</span> Systems &amp; AI
        </motion.p>
        <motion.h1 className="hero-title" initial="hidden" animate="show" variants={{ hidden: {}, show: { transition: { staggerChildren: 0.13 } } }}>
          <span className="hero-line-wrap"><motion.span className="hero-line" variants={{ hidden: { y: "110%" }, show: { y: 0, transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] } } }}>I build software</motion.span></span>
          <span className="hero-line-wrap"><motion.span className="hero-line hero-line-accent" variants={{ hidden: { y: "110%" }, show: { y: 0, transition: { duration: 0.95, ease: [0.22, 1, 0.36, 1] } } }}>that holds up</motion.span></span>
          <span className="hero-line-wrap"><motion.span className="hero-line hero-line-last" variants={{ hidden: { y: "110%" }, show: { y: 0, transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } } }}>in the real world<span className="hero-period">.</span></motion.span></span>
        </motion.h1>
        <motion.div className="hero-intro" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.62, duration: 0.65 }}>
          <p className="hero-tagline">{PERSONAL.tagline}</p>
          <p className="hero-description">I&apos;m <strong>{PERSONAL.name}</strong>, an Electrical Engineering student at NIT Raipur building software where algorithms, infrastructure, and AI meet.</p>
        </motion.div>
        <motion.div className="hero-actions" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.78, duration: 0.6 }}>
          <a className="action-primary" href="#projects">Explore selected work <ArrowRight size={17} /></a>
          <a className="action-text" href={PERSONAL.github} target="_blank" rel="noreferrer">GitHub <ExternalLink size={13} /></a>
          <a className="action-text" href={PERSONAL.resume} target="_blank" rel="noreferrer">Résumé <ExternalLink size={13} /></a>
        </motion.div>
        <motion.div className="hero-byline" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.05, duration: 0.7 }}>
          <span className="hero-name">{PERSONAL.name}</span><span className="hero-byline-rule" />
          <a href={PERSONAL.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile"><Linkedin size={15} /></a>
          <a href={PERSONAL.github} target="_blank" rel="noreferrer" aria-label="GitHub profile"><Github size={15} /></a>
          <span className="hero-location">Raipur, IN</span>
        </motion.div>
      </div>
      <motion.div className="hero-object-wrap" initial={{ opacity: 0, scale: 0.88, y: 24 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ delay: 0.3, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}>
        <div className="object-index" aria-hidden="true"><span>FIG. 01</span><span>COMPUTATIONAL SINGULARITY</span></div>
        <div className="object-halo" aria-hidden="true" />
        <Suspense fallback={<div className="scene-fallback" role="img" aria-label="A folded, iridescent computational sculpture" />}><FoldedScene /></Suspense>
        <div className="object-coordinate object-coordinate-top" aria-hidden="true">N 21°14′ / E 81°38′</div>
        <div className="object-coordinate object-coordinate-bottom" aria-hidden="true"><span>CORE SIGNAL</span><span>01 — 04</span></div>
      </motion.div>
    </div>
    <a className="hero-scroll" href="#projects"><span>Scroll to selected work</span><ArrowDown size={15} /></a>
    <div className="hero-side-index" aria-hidden="true">PORTFOLIO · 2026</div>
  </section>
);
