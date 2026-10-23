import { useEffect, useRef, useState } from "react";
import { ACHIEVEMENTS } from "@/data/achievements";
import { useCounter } from "@/hooks/useCounter";
import RevealOnScroll from "./RevealOnScroll";
import { SectionHeader } from "./SectionHeader";

const ratings = [
  { label: "LeetCode", value: 1904, title: "Knight", tone: "violet" },
  { label: "Codeforces", value: 1406, title: "Specialist", tone: "mint" },
  { label: "CodeChef", value: 1731, title: "3-Star", tone: "rose" },
] as const;

function Rating({ label, value, title, tone, start }: (typeof ratings)[number] & { start: boolean }) {
  const count = useCounter(value, 1450, start);
  return <div className={`rating-row rating-${tone}`}>
    <span className="rating-platform">{label}</span>
    <data value={value} aria-label={`${value} ${label} rating`} className="rating-value">{count.toLocaleString("en-IN")}</data>
    <span className="rating-title">{title}</span>
  </div>;
}

export const Achievements = () => {
  const ref = useRef<HTMLElement>(null);
  const [started, setStarted] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setStarted(true); observer.disconnect(); }
    }, { threshold: 0.18 });
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  const additional = ACHIEVEMENTS.filter((achievement) => achievement.id !== "cp" && achievement.id !== "contest-469");

  return <section ref={ref} id="achievements" className="achievement-section section-frame">
    <div className="mx-auto max-w-[1320px] px-6 md:px-10 lg:px-16">
      <SectionHeader eyebrow="Proof of practice" title="Milestones, earned in public." description="Competitive programming, open-source work, and early product validation—measured and specific." />
      <div className="achievement-feature">
        <div className="achievement-intro"><p className="systems-lens">COMPETITIVE PROGRAMMING</p><h3>Practice that compounds.</h3><p>Regular problem solving across timed contests and platform challenges.</p><div className="dsa-count"><data value="1500">1,500+</data><span>problems solved</span></div></div>
        <div className="rating-list" aria-label="Competitive programming ratings">{ratings.map((rating) => <Rating key={rating.label} {...rating} start={started} />)}</div>
      </div>
      <div className="achievement-ledger">
        {additional.map((achievement, index) => <RevealOnScroll key={achievement.id} delay={index * 70}>
          <article className="achievement-entry"><span className="achievement-index">0{index + 1}</span><h3>{achievement.title}</h3><p>{achievement.description}</p><span className="achievement-symbol" aria-hidden="true">↗</span></article>
        </RevealOnScroll>)}
      </div>
    </div>
  </section>;
};
