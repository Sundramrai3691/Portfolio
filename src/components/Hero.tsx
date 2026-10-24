import { ArrowDown, ArrowRight, ExternalLink } from "lucide-react";
import { PERSONAL } from "@/data";
import SplitFlapText from "./SplitFlapText";

export const Hero = () => {
  return <section id="hero" className="hero-shell relative flex min-h-[min(900px,100svh)] items-center overflow-hidden px-6 pb-12 pt-28 md:px-10 lg:px-16">
    <div className="hero-atmosphere" aria-hidden="true" />
    <svg className="hero-signals" viewBox="0 0 900 620" fill="none" aria-hidden="true" preserveAspectRatio="xMidYMid slice">
      <defs><linearGradient id="signal-gradient" x1="0" y1="0" x2="900" y2="620" gradientUnits="userSpaceOnUse"><stop stopColor="#9B72FF" stopOpacity="0"/><stop offset=".48" stopColor="#9B72FF" stopOpacity=".62"/><stop offset="1" stopColor="#55F1DE" stopOpacity="0"/></linearGradient></defs>
      <path className="signal-path signal-path-a" d="M260 620V410c0-56 45-101 101-101h83c49 0 89-40 89-89V0"/>
      <path className="signal-path signal-path-b" d="M0 470h155c58 0 105-47 105-105v-50c0-59 48-107 107-107h182c70 0 126-56 126-126V0"/>
      <path className="signal-path signal-path-c" d="M512 620V470c0-55 45-100 100-100h66c53 0 96-43 96-96V0"/>
      <circle className="signal-node signal-node-a" cx="260" cy="365" r="3"/><circle className="signal-node signal-node-b" cx="512" cy="219" r="3"/><circle className="signal-node signal-node-c" cx="678" cy="370" r="3"/>
    </svg>
    <div className="relative z-10 mx-auto w-full max-w-[1500px]">
      <div className="hero-copy relative z-10">
        <p className="eyebrow hero-identity-label hero-enter hero-enter-1">
          <span className="signal-dot" /> INDEPENDENT ENGINEER <span className="eyebrow-slash">/</span> SYSTEMS &amp; AI
        </p>
        <h1 className="hero-title hero-enter hero-enter-2">{PERSONAL.name}<span className="hero-period">.</span></h1>
        <p className="hero-focus-line hero-enter hero-enter-3">Backend systems <span>·</span> Real-time software <span>·</span> Applied AI</p>
        <div className="hero-intro hero-enter hero-enter-4">
          <p className="hero-description">I&apos;m an Electrical Engineering student at NIT Raipur, building software systems, infrastructure, and applied AI.</p>
        </div>
        <div className="hero-flap-row hero-enter hero-enter-5">
          <span className="hero-flap-label">CURRENT FOCUS</span>
          <SplitFlapText words={["APPLIED AI", "REAL-TIME SYSTEMS", "RELIABLE BACKENDS"]} fontSize={10} gap={2} tileRadius={2} cycleDelay={5200} flipDuration={0.1} stagger={0.025} flipsPerChar={2} intro padTo={19} align="left" tileStyle="board" tileColor="#151522" textColor="#e3def4" depth={0.15} glare={0} className="hero-status-flap" />
        </div>
        <div className="hero-actions hero-enter hero-enter-6">
          <a className="action-primary" href="#projects">Explore selected work <ArrowRight size={17} /></a>
          <a className="action-text" href={PERSONAL.github} target="_blank" rel="noreferrer">GitHub <ExternalLink size={13} /></a>
        </div>
        <div className="hero-byline hero-enter hero-enter-7">
          <span className="hero-byline-rule" />
          <span className="hero-location">RAIPUR, IN</span>
        </div>
      </div>
    </div>
    <a className="hero-scroll" href="#projects"><span>Scroll to selected work</span><ArrowDown size={15} /></a>
  </section>;
};
