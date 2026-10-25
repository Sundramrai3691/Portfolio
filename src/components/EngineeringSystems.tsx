import { lazy, Suspense, useEffect, useRef, useState } from "react";
import { SectionHeader } from "./SectionHeader";

const TechText = lazy(() => import("./TechText"));
const ScrambledText = lazy(() => import("./ScrambledText"));

const SYSTEMS = [
  {
    id: "forkspace", title: "ForkSpace", lens: "Shared state · event flow", color: "mint",
    intro: "A collaboration room is a live state machine: participants, edits, execution jobs, and results must converge without confusing who can do what.",
    stages: [
      { title: "Client events", detail: "Driver and Navigator actions—edits, presence, and session events—enter through the room client." },
      { title: "Socket.IO room", detail: "Room-scoped events synchronize participants and shared editor state over the Socket.IO transport." },
      { title: "Room state", detail: "The room coordinates roles, presence, editor content, and session context. Optional persistence is distinct from the live room state." },
      { title: "Rate limit", detail: "Redis token-bucket checks use atomic Lua scripts so concurrent requests share one consistent limit." },
      { title: "Execution provider", detail: "Code execution is delegated to Judge0 or Piston; the room does not run untrusted code in its own process." },
      { title: "Result + report", detail: "Execution results and hidden-test outcomes return to participants, with session reporting for the practice workflow." },
    ],
    note: "Role-aware room state controls who can drive. Authenticated room and run reports persist to MongoDB; Docker packages deployment, while Redis token buckets use atomic Lua scripts.",
  },
  {
    id: "recallloop", title: "RecallLoop", lens: "Learner evidence · deliberate review", color: "violet",
    intro: "RecallLoop separates durable learner state from model-assisted feedback. Retrieval and review planning stay grounded in what the learner has actually stored and demonstrated.",
    stages: [
      { title: "Request intake", detail: "React and TypeScript clients call Express routes, whose controllers hand work to domain services." },
      { title: "Domain service", detail: "Assessment and review logic live in application services, keeping requests and learning rules separate." },
      { title: "PostgreSQL", detail: "Repositories persist learner-owned content and state in PostgreSQL." },
      { title: "Evidence retrieval", detail: "Stored real[] vectors are ranked in application code with cosine similarity plus token overlap; this is not pgvector search." },
      { title: "Validate feedback", detail: "Optional provider responses use structured output checks so malformed or unsupported feedback can be rejected." },
      { title: "Assessment → review", detail: "Assessment outcomes feed remediation and deterministic review planning. URL/PDF ingestion and pgvector are roadmap work, not shipped features." },
    ],
    note: "Provider calls are optional. The implemented retrieval is learner-data based and application ranked; document ingestion and indexed vector search remain planned.",
  },
  {
    id: "rexcan", title: "ReXcan", lens: "Document intake · confidence · review", color: "rose",
    intro: "The pipeline keeps each transformation observable: document parsing, OCR fallback, field candidates, normalization, validation, then a human decision for flagged records.",
    stages: [
      { title: "Upload + validate", detail: "The API checks PDF type, MIME/magic bytes, corruption, empty files, and size before queuing a document." },
      { title: "Async job", detail: "Redis-backed jobs let clients poll a processing status while workers handle the invoice outside the upload request." },
      { title: "Read / OCR", detail: "Text extraction tries pdfplumber, then EasyOCR and Tesseract for scanned content." },
      { title: "Extract fields", detail: "Python heuristics produce invoice fields and line items; an LLM fallback can be used for low-confidence cases." },
      { title: "Normalize + check", detail: "Dates, currencies, vendors, and amounts are canonicalized. Arithmetic, field, and exact/near-duplicate checks can flag a record." },
      { title: "Review + audit", detail: "Low-confidence or inconsistent fields enter a human review flow. Corrections are logged and structured data can be exported." },
    ],
    note: "The portfolio-reported benchmark is 86% extraction accuracy and 2.56 invoices/s. The repository README currently reports 88% average accuracy on a validation dataset and 5–20 seconds per invoice; these results need a shared evaluation definition before they can be reconciled.",
  },
  {
    id: "peopleops-copilot", title: "PeopleOps Copilot", lens: "Policy · analytics · approvals", color: "mint",
    intro: "The assistant has three bounded routes. Authorization and validation shape what can run; sensitive employee actions wait for an approver and leave an audit record.",
    paths: [
      { name: "Policy retrieval", stages: [
        { title: "Employee question", detail: "A policy question is routed to retrieval over the synthetic policy corpus." },
        { title: "BM25 retrieval", detail: "Relevant policy passages are ranked with BM25, rather than an open-ended agent search." },
        { title: "Cited answer", detail: "The response carries source and section evidence so the policy basis can be checked." },
      ] },
      { name: "Workforce analytics", stages: [
        { title: "Role check", detail: "The requester’s role determines whether workforce analytics are available." },
        { title: "Bounded query", detail: "A fixed, parameterized department headcount query is used; free-form model-generated SQL is not executed." },
        { title: "Read-only result", detail: "Validated parameters run against the intended data, and the answer returns as bounded workforce information." },
      ] },
      { name: "Employee operations", stages: [
        { title: "Request + authorize", detail: "The leave request is validated and checked against role permissions before a state change." },
        { title: "Manager approval", detail: "The request remains pending until an authorized manager approves it." },
        { title: "Transactional write", detail: "Approval writes the leave record, balance update, and audit entry together in one database transaction." },
      ] },
    ],
    note: "The assistant does not have unrestricted SQL access or the ability to bypass role checks and approval. Policy evidence comes from a synthetic corpus.",
  },
] as const;

type Stage = { title: string; detail: string };

export const Systems = () => {
  const [activeId, setActiveId] = useState<(typeof SYSTEMS)[number]["id"]>("forkspace");
  const activeSystem = SYSTEMS.find((system) => system.id === activeId) ?? SYSTEMS[0];
  const [activePath, setActivePath] = useState(0);
  const [activeStage, setActiveStage] = useState(0);
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const flowRef = useRef<HTMLDivElement>(null);
  const paths = "paths" in activeSystem ? activeSystem.paths : undefined;
  const stages: readonly Stage[] = "paths" in activeSystem
    ? activeSystem.paths[Math.min(activePath, activeSystem.paths.length - 1)].stages
    : activeSystem.stages;

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { threshold: 0.08 });
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    setActivePath(0);
    setActiveStage(0);
  }, [activeId]);

  useEffect(() => {
    const onSelect = (event: Event) => {
      const id = (event as CustomEvent<string>).detail;
      if (SYSTEMS.some((system) => system.id === id)) {
        setActiveId(id as typeof activeId);
        document.getElementById("systems")?.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block: "start" });
      }
    };
    window.addEventListener("portfolio:select-system", onSelect);
    return () => window.removeEventListener("portfolio:select-system", onSelect);
  }, []);

  useEffect(() => {
    const root = flowRef.current;
    if (!root || !inView) return;
    const nodes = Array.from(root.querySelectorAll<HTMLElement>("[data-flow-index]"));
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
      if (visible) setActiveStage(Number((visible.target as HTMLElement).dataset.flowIndex));
    }, { rootMargin: "-38% 0px -48% 0px", threshold: 0 });
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [inView, activeId, activePath, stages.length]);

  return <section ref={sectionRef} id="systems" className="systems-section section-frame" aria-labelledby="systems-heading">
    <div className="mx-auto max-w-[1320px] px-6 md:px-10 lg:px-16">
      <div className="systems-tech-title" aria-hidden="true">
        <Suspense fallback={<span>SYSTEMS</span>}><TechText text="SYSTEMS" fontWeight={650} fontSize={108} letterSpacing={-0.07} color="rgba(214, 209, 235, 0.72)" accentColor="#55f1de" align="left" reach={160} softness={0.65} dashLength={4} dashGap={2} strokeWidth={1.3} reveal="letter" specks={8} selection={false} labels={false} draggable={false} bounce={0} sweep={false} speed={0.7} clickKick={false} intro="none" guides={false} className="systems-tech-canvas" /></Suspense>
      </div>
      <SectionHeader eyebrow="ENGINEERING ANATOMY" title="How each system moves." titleId="systems-heading" />
      <div className="systems-tabs" role="group" aria-label="Choose a system">
        {SYSTEMS.map((system, index) => <button key={system.id} id={`systems-${system.id}`} type="button" aria-pressed={activeId === system.id} aria-controls="systems-panel" onClick={() => setActiveId(system.id)}>
          <span>0{index + 1}</span>{system.title}<i aria-hidden="true">↗</i>
        </button>)}
      </div>
      <article className={`systems-panel tone-${activeSystem.color}`} id="systems-panel" aria-labelledby={`systems-${activeId}`}>
        <div className="systems-intro">
          <div><p className="systems-lens">{activeSystem.lens}</p><h3>{activeSystem.title}</h3></div>
          <p>{activeSystem.intro}</p>
        </div>
        {paths && <div className="systems-path-tabs" role="group" aria-label="PeopleOps workflow route">
          {paths.map((path, index) => <button key={path.name} type="button" aria-pressed={activePath === index} onClick={() => { setActivePath(index); setActiveStage(0); }}>{path.name}</button>)}
        </div>}
        <div className="systems-flow-layout">
          <div ref={flowRef} className="systems-flow" style={{ "--flow-index": activeStage } as React.CSSProperties}>
            <div className="flow-spine" aria-hidden="true"><span style={{ height: `${((activeStage + 1) / stages.length) * 100}%` }} /></div>
            <ol>
              {stages.map((stage, index) => <li key={`${activePath}-${stage.title}`} data-flow-index={index} className={activeStage === index ? "is-active" : index < activeStage ? "is-past" : ""}>
                <button type="button" aria-current={activeStage === index ? "step" : undefined} onClick={() => setActiveStage(index)}>
                  <span className="flow-number">{String(index + 1).padStart(2, "0")}</span><span className="flow-title">{stage.title}</span><span className="flow-mark" aria-hidden="true" />
                </button>
              </li>)}
            </ol>
          </div>
          <aside className="systems-detail" aria-live="polite">
            <p className="systems-detail-label">STAGE {String(activeStage + 1).padStart(2, "0")} / {String(stages.length).padStart(2, "0")}</p>
            <h4>{stages[activeStage]?.title}</h4>
            <p>{stages[activeStage]?.detail}</p>
            <div className="systems-boundary"><span>IMPLEMENTATION NOTE</span><p>{activeSystem.note}</p></div>
          </aside>
        </div>
      </article>
      <p className="systems-source-note">Flow summaries reflect the linked repositories and their documented implementation.</p>
    </div>
  </section>;
};

export const About = () => <section id="about" className="about-section section-frame">
  <div className="mx-auto grid max-w-[1320px] gap-12 px-6 md:px-10 lg:grid-cols-[1.1fr_.9fr] lg:px-16">
    <div>
      <SectionHeader eyebrow="About Sundram" title="Built from the inside out." description="I&apos;m an Electrical Engineering student at NIT Raipur, building backend systems, real-time tools, and AI workflows." align="left" />
      <p className="about-copy">I like making the important behavior visible, testable, and useful to the person on the other end.</p>
      <Suspense fallback={<p className="about-side-quest">Current side quest: convincing edge cases to behave.</p>}>
        <ScrambledText className="about-side-quest" effect="scramble" radius={54} strength={0.35} trail={0.35} duration={0.8} speed={0.6} scrambleChars=".:" clickBurst={false} intro>Current side quest: convincing edge cases to behave.</ScrambledText>
      </Suspense>
    </div>
    <div className="about-education"><p className="systems-lens">EDUCATION / 2023—2027</p><h3>National Institute of Technology, Raipur</h3><p>B.Tech · Electrical Engineering</p><div><strong>8.86</strong><span>/ 10 CGPA</span></div><p className="education-footnote">Engineering perspective grounded in algorithms, systems, and hands-on product work.</p></div>
  </div>
</section>;