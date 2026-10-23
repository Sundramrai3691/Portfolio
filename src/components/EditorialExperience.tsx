import { EXPERIENCES } from "@/data/experiences";
import RevealOnScroll from "./RevealOnScroll";
import { SectionHeader } from "./SectionHeader";

export const Experience = () => <section id="experience" className="experience-section section-frame">
  <div className="mx-auto max-w-[1320px] px-6 md:px-10 lg:px-16">
    <SectionHeader eyebrow="Experience & education" title="Ideas, carried into practice." description="A compact record of product leadership, early-stage building, and the teams where I learned by making." />
    <ol className="experience-ledger">
      {EXPERIENCES.map((experience, index) => <RevealOnScroll key={experience.id} delay={index * 65}>
        <li className="experience-entry"><span className="experience-pin" aria-hidden="true" /><p className="experience-date">{experience.duration}</p><div className="experience-role"><h3>{experience.role}</h3><p>{experience.org}<span> · </span>{experience.location}</p></div><p className="experience-description">{experience.description}</p></li>
      </RevealOnScroll>)}
    </ol>
  </div>
</section>;
