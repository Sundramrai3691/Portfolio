import { lazy, Suspense, useState } from "react";
import { ArrowDown, ArrowRight, ExternalLink } from "lucide-react";
import { PERSONAL } from "@/data";
import SplitFlapText from "./SplitFlapText";

const ShapeWaves = lazy(() => import("./ShapeWaves"));

export const Hero = () => {
  const [shapeError, setShapeError] = useState(false);

  return (
  <section id="hero" className="hero-shell relative flex min-h-[min(900px,100svh)] items-center overflow-hidden px-6 pb-12 pt-28 md:px-10 lg:px-16">
    <div className="hero-atmosphere" aria-hidden="true" />
    <div className="hero-shape-waves" aria-hidden="true">
      <Suspense fallback={null}>
        {shapeError ? <svg className="hero-shape-fallback" viewBox="0 0 1200 760" preserveAspectRatio="none" role="presentation">
          <path d="M350 520C520 280 630 690 815 430S1050 190 1200 320" />
          <path d="M470 620C620 420 700 690 885 520S1080 330 1200 420" />
          <path d="M540 330C690 160 810 420 970 295S1100 200 1200 245" />
        </svg> : <ShapeWaves
          text="</>"
          fontFamily='Geist, "Geist Sans", system-ui, sans-serif'
          fontWeight={500}
          textSize={0.6}
          shapes="mixed"
          cellSize={10}
          dotSize={0.75}
          color="#8e8b9f"
          hoverColor="#55f1de"
          backgroundColor="#090a12"
          speed={0.72}
          scale={1}
          contrast={1}
          brightness={0.32}
          flow={0}
          direction={0}
          fade={0.25}
          interactive
          splashRadius={40}
          splashStrength={0.4}
          glow={0.35}
          intro
          introDuration={1.6}
                  onError={(error) => {
                    console.error("ShapeWaves renderer error:", error);
                    setShapeError(false);
                  }}
        />}
      </Suspense>
    </div>
    <div className="hero-layout relative z-10 mx-auto w-full max-w-[1500px]">
      <div className="hero-copy relative z-10">
        <p className="eyebrow hero-identity-label hero-enter hero-enter-1">
          <span className="signal-dot" /> INDEPENDENT ENGINEER <span className="eyebrow-slash">/</span> SYSTEMS &amp; AI
        </p>
        <h1 className="hero-title hero-enter hero-enter-2">{PERSONAL.name}<span className="hero-period">.</span></h1>
        <p className="hero-focus-line hero-enter hero-enter-3">Backend systems <span>·</span> Real-time software <span>·</span> Applied AI</p>
        <div className="hero-intro hero-enter hero-enter-4">
          <p className="hero-description">I&apos;m an Electrical Engineering student at NIT Raipur, building backend systems, real-time tools, and AI workflows. I also spend a weird amount of time convincing edge cases to behave.</p>
        </div>
        <div className="hero-flap-row hero-enter hero-enter-5">
          <span className="hero-flap-label">CURRENT FOCUS</span>
          <SplitFlapText words={["APPLIED AI", "BACKEND SYSTEMS", "REAL TIME TOOLS", "SYSTEM DESIGN"]} charset="alphanumeric" fontSize={13} gap={2} tileRadius={3} cycleDelay={5200} flipDuration={0.1} stagger={0.025} flipsPerChar={2} intro padTo={15} align="left" tileStyle="board" tileColor="#151522" textColor="#e3def4" depth={0.24} glare={0} className="hero-status-flap" />
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
  </section>
  );
};
