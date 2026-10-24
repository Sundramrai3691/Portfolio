import { useEffect, useRef, useState } from "react";
import { motion, useScroll } from "framer-motion";
import { EXPERIENCES } from "@/data/experiences";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { SectionHeader } from "./SectionHeader";

export const Experience = () => {
  const listRef = useRef<HTMLOListElement>(null);
  const [activeEntry, setActiveEntry] = useState(0);
  const reduceMotion = usePrefersReducedMotion();
  const { scrollYProgress } = useScroll({ target: listRef, offset: ["start center", "end center"] });

  useEffect(() => {
    const list = listRef.current;
    if (!list) return;
    const observer = new IntersectionObserver((entries) => {
      const current = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => Math.abs(a.boundingClientRect.top + a.boundingClientRect.height / 2 - window.innerHeight / 2) - Math.abs(b.boundingClientRect.top + b.boundingClientRect.height / 2 - window.innerHeight / 2))[0];
      if (current) setActiveEntry(Number((current.target as HTMLElement).dataset.experienceIndex));
    }, { rootMargin: "-38% 0px -42% 0px", threshold: 0 });
    list.querySelectorAll("[data-experience-index]").forEach((entry) => observer.observe(entry));
    return () => observer.disconnect();
  }, []);

  return <section id="experience" className="experience-section section-frame">
    <div className="mx-auto max-w-[1320px] px-6 md:px-10 lg:px-16">
    <SectionHeader eyebrow="Experience & education" title="Ideas, carried into practice." description="A compact record of product leadership, early-stage building, and the teams where I learned by making." />
    <div className="experience-timeline">
      <div className="experience-spine" aria-hidden="true"><motion.span style={{ scaleY: reduceMotion ? 1 : scrollYProgress }} /></div>
      <ol ref={listRef} className="experience-ledger">
        {EXPERIENCES.map((experience, index) => <li key={experience.id} className={`experience-entry ${activeEntry === index ? "is-active" : ""}`} data-experience-index={index} aria-current={activeEntry === index ? "step" : undefined}>
          <span className="experience-pin" aria-hidden="true" /><p className="experience-date">{experience.duration}</p><div className="experience-role"><h3>{experience.role}</h3><p>{experience.org}<span> · </span>{experience.location}</p></div><p className="experience-description">{experience.description}</p>
        </li>)}
      </ol>
    </div>
    </div>
  </section>;
};
