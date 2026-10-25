import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Github } from "lucide-react";
import { PERSONAL } from "@/data";
import { ACHIEVEMENTS } from "@/data/achievements";
import { useCounter } from "@/hooks/useCounter";
import RevealOnScroll from "./RevealOnScroll";
import { SectionHeader } from "./SectionHeader";
import { CountUpMetric } from "./CountUpMetric";

const ratings = [
  { label: "LeetCode", value: 1904, title: "Knight", tone: "violet", href: PERSONAL.leetcode },
  { label: "Codeforces", value: 1406, title: "Specialist", tone: "mint", href: PERSONAL.codeforces },
  { label: "CodeChef", value: 1731, title: "3-Star", tone: "rose", href: PERSONAL.codechef },
] as const;

function Rating({ label, value, title, tone, href }: (typeof ratings)[number]) {
  const rowRef = useRef<HTMLAnchorElement>(null);
  const [visible, setVisible] = useState(false);
  const count = useCounter(value, 900, visible);

  useEffect(() => {
    const row = rowRef.current;
    if (!row || visible) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      setVisible(true);
      observer.disconnect();
    }, { threshold: 0.4 });
    observer.observe(row);
    return () => observer.disconnect();
  }, [visible]);

  return <a ref={rowRef} className={`rating-row rating-${tone}`} role="listitem" href={href} target="_blank" rel="noreferrer" aria-label={`${label}: ${value}, ${title}`}>
    <span className="rating-platform">{label}</span>
    <data value={value} className="rating-value"><span aria-hidden="true">{count.toLocaleString("en-IN")}</span></data>
    <span className="rating-title">{title}</span>
    <ArrowUpRight size={17} aria-hidden="true" />
  </a>;
}

export const Achievements = () => {
  const additional = ACHIEVEMENTS.filter((achievement) => achievement.id !== "cp" && achievement.id !== "contest-469");

  return <section id="achievements" className="achievement-section section-frame">
    <div className="mx-auto max-w-[1320px] px-6 md:px-10 lg:px-16">
      <SectionHeader eyebrow="Proof of practice" title="Milestones, earned in public." description="Competitive programming, open-source work, and early product validation—measured and specific." />
      <div className="achievement-feature">
        <div className="achievement-intro"><p className="systems-lens">COMPETITIVE PROGRAMMING</p><h3>Practice that compounds.</h3><p>Regular problem solving across timed contests and platform challenges.</p><div className="dsa-count"><CountUpMetric value={2000} suffix="+" /><span>DSA problems solved</span></div></div>
        <div className="rating-list" role="list" aria-label="Competitive programming ratings">{ratings.map((rating) => <Rating key={rating.label} {...rating} />)}</div>
      </div>
      <div className="achievement-profile-links"><a href={PERSONAL.github} target="_blank" rel="noreferrer"><Github size={15} aria-hidden="true" /> GitHub <ArrowUpRight size={13} aria-hidden="true" /></a><a href={PERSONAL.codolio} target="_blank" rel="noreferrer">Codolio <ArrowUpRight size={13} aria-hidden="true" /></a></div>
      <div className="achievement-ledger">
        {additional.map((achievement, index) => <RevealOnScroll key={achievement.id} delay={index * 70}>
          <article className="achievement-entry"><span className="achievement-index">0{index + 1}</span><h3>{achievement.title}</h3><p>{achievement.description}</p><span className="achievement-symbol" aria-hidden="true">↗</span></article>
        </RevealOnScroll>)}
      </div>
    </div>
  </section>;
};
