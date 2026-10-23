import { SKILLS } from "@/data/skills";
import { SectionHeader } from "./SectionHeader";

const CAPABILITIES = [
  { key: "languages", title: "Languages", note: "Product code, scripting, and data", projects: [["ForkSpace", "forkspace"], ["RecallLoop", "recallloop"]] },
  { key: "systems", title: "Backend & systems", note: "Services, persistence, and coordination", projects: [["ForkSpace", "forkspace"], ["ReXcan", "rexcan"], ["RecallLoop", "recallloop"]] },
  { key: "ai", title: "AI engineering", note: "Retrieval, output checks, and extraction", projects: [["RecallLoop", "recallloop"], ["ReXcan", "rexcan"], ["PeopleOps", "peopleops-copilot"]] },
  { key: "tools", title: "Tools & delivery", note: "Build, test, ship, and operate", projects: [["ForkSpace", "forkspace"], ["PeopleOps", "peopleops-copilot"]] },
  { key: "fundamentals", title: "Computer science", note: "Reasoning that shapes the implementation", projects: [["ForkSpace", "forkspace"], ["RecallLoop", "recallloop"]] },
] as const;

const FUNDAMENTALS = ["Data structures & algorithms", "Concurrency and shared state", "Relational data modeling", "API boundaries and validation", "Failure handling and observability"];

export const Skills = () => <section id="skills" className="capability-section section-frame">
  <div className="mx-auto max-w-[1320px] px-6 md:px-10 lg:px-16">
    <SectionHeader eyebrow="Capability map" title="Tools are only half the picture." description="The useful part is knowing where a technology fits, what boundary it protects, and which product problem it helps solve." />
    <div className="capability-map">
      {CAPABILITIES.map((category, index) => {
        const values = category.key === "fundamentals" ? FUNDAMENTALS : SKILLS[category.key as keyof typeof SKILLS];
        return <article className="capability-row" key={category.key}>
          <div className="capability-heading"><span>0{index + 1}</span><h3>{category.title}</h3><p>{category.note}</p></div>
          <ul aria-label={`${category.title} capabilities`}>{values.map((value) => <li key={value}>{value}</li>)}</ul>
          <nav className="capability-projects" aria-label={`Projects using ${category.title}`}><span>IN PRACTICE</span>{category.projects.map(([name, id]) => <a key={id} href={`#${id}`}>{name}<i aria-hidden="true">↗</i></a>)}</nav>
        </article>;
      })}
    </div>
  </div>
</section>;
