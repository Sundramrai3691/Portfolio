import { SKILLS } from "@/data/skills";
import { SectionHeader } from "./SectionHeader";

const CAPABILITIES = [
  { key: "languages", title: "Languages", note: "Product code, scripting, and data", projects: [["ForkSpace", "forkspace"], ["RecallLoop", "recallloop"]] },
  { key: "systems", title: "Backend & systems", note: "Services, persistence, and coordination", projects: [["ForkSpace", "forkspace"], ["ReXcan", "rexcan"], ["RecallLoop", "recallloop"]] },
  { key: "ai", title: "AI engineering", note: "Retrieval, output checks, and extraction", projects: [["RecallLoop", "recallloop"], ["ReXcan", "rexcan"], ["PeopleOps", "peopleops-copilot"]] },
  { key: "tools", title: "Engineering tools & delivery", note: "Build, test, ship, and operate", projects: [["ForkSpace", "forkspace"], ["PeopleOps", "peopleops-copilot"]] },
  { key: "fundamentals", title: "Relevant computer science fundamentals", note: "Reasoning that shapes the implementation", projects: [["ForkSpace", "forkspace"], ["RecallLoop", "recallloop"]] },
] as const;

const CAPABILITY_LINKS: Record<string, readonly [string, string][]> = {
  Python: [["ReXcan", "rexcan"], ["PeopleOps", "peopleops-copilot"]],
  TypeScript: [["RecallLoop", "recallloop"]],
  "Node.js": [["ForkSpace", "forkspace"], ["RecallLoop", "recallloop"]],
  Express: [["RecallLoop", "recallloop"]],
  FastAPI: [["ReXcan", "rexcan"], ["PeopleOps", "peopleops-copilot"]],
  WebSockets: [["ForkSpace", "forkspace"]],
  PostgreSQL: [["RecallLoop", "recallloop"], ["PeopleOps", "peopleops-copilot"]],
  MongoDB: [["ForkSpace", "forkspace"]],
  Redis: [["ForkSpace", "forkspace"], ["ReXcan", "rexcan"]],
  "Rate Limiting": [["ForkSpace", "forkspace"]],
  Retrieval: [["RecallLoop", "recallloop"], ["PeopleOps", "peopleops-copilot"]],
  "LLM integrations": [["RecallLoop", "recallloop"], ["ReXcan", "rexcan"]],
  "Structured outputs": [["RecallLoop", "recallloop"]],
  Validation: [["ReXcan", "rexcan"], ["PeopleOps", "peopleops-copilot"]],
  "AI agents": [["PeopleOps", "peopleops-copilot"]],
  "OCR pipelines": [["ReXcan", "rexcan"]],
};

export const Skills = () => <section id="skills" className="capability-section section-frame">
  <div className="mx-auto max-w-[1320px] px-6 md:px-10 lg:px-16">
    <SectionHeader eyebrow="Capability map" title="Tools are only half the picture." description="The useful part is knowing where a technology fits, what boundary it protects, and which product problem it helps solve." />
    <div className="capability-map">
      {CAPABILITIES.map((category, index) => {
        const values = SKILLS[category.key as keyof typeof SKILLS];
        return <article className="capability-row" key={category.key}>
          <div className="capability-heading"><span>0{index + 1}</span><h3>{category.title}</h3><p>{category.note}</p></div>
          <ul aria-label={`${category.title} capabilities`}>{values.map((value) => <li key={value}><span>{value}</span>{CAPABILITY_LINKS[value] && <small>{CAPABILITY_LINKS[value].map(([name, id]) => <a href={`#${id}`} key={id} aria-label={`${value} in ${name}`}>{name} ↗</a>)}</small>}</li>)}</ul>
          <nav className="capability-projects" aria-label={`Projects using ${category.title}`}><span>IN PRACTICE</span>{category.projects.map(([name, id]) => <a key={id} href={`#${id}`}>{name}<i aria-hidden="true">↗</i></a>)}</nav>
        </article>;
      })}
    </div>
  </div>
</section>;
