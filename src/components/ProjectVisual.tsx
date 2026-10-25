import { useId, type ReactNode } from "react";

type DiagramProps = { title: string; children: ReactNode };

function Diagram({ title, children }: DiagramProps) {
  const id = useId().replace(/:/g, "");
  const gridId = `diagram-grid-${id}`;
  return <svg className="project-diagram" viewBox="0 0 760 470" role="img" aria-label={title}>
    <defs>
      <pattern id={gridId} width="32" height="32" patternUnits="userSpaceOnUse"><path d="M32 0H0v32" fill="none" stroke="rgba(210,205,242,.08)" strokeWidth=".7"/></pattern>
    </defs>
    <title>{title}</title>
    <rect width="760" height="470" fill={`url(#${gridId})`} opacity=".6" />
    {children}
  </svg>;
}

export function ProjectVisual({ projectId }: { projectId: string }) {
  if (projectId === "forkspace") return <Diagram title="ForkSpace architecture: two participants synchronize through a shared room, with rate limiting and external code execution.">
    <text x="42" y="57" className="diagram-overline">COLLABORATIVE SESSION / EVENT PROPAGATION</text>
    <path className="diagram-route" d="M180 159H270M180 303H270M490 230H570" />
    <path className="diagram-route diagram-route-secondary" d="M570 292C532 365 439 385 380 317M380 153C439 85 532 103 570 169" />
    <g className="diagram-participant"><circle cx="118" cy="150" r="29"/><text x="118" y="157" textAnchor="middle">D</text><text x="118" y="205" textAnchor="middle" className="diagram-label">DRIVER</text><text x="118" y="224" textAnchor="middle" className="diagram-caption">editor + run</text></g>
    <g className="diagram-participant"><circle cx="118" cy="294" r="29"/><text x="118" y="301" textAnchor="middle">N</text><text x="118" y="349" textAnchor="middle" className="diagram-label">NAVIGATOR</text><text x="118" y="368" textAnchor="middle" className="diagram-caption">review + guide</text></g>
    <g className="diagram-room"><rect x="270" y="137" width="220" height="185" rx="4"/><text x="294" y="168" className="diagram-overline">SHARED ROOM / SOCKET.IO</text><path d="M294 182H466" className="diagram-rule"/><text x="294" y="218" className="diagram-code">function solve(input) &#123;</text><text x="306" y="248" className="diagram-code diagram-code-accent">  return sharedState;</text><text x="294" y="278" className="diagram-code">&#125;</text><text x="294" y="304" className="diagram-caption">presence · edits · execution result</text></g>
    <g className="diagram-service"><rect x="570" y="140" width="150" height="88" rx="3"/><text x="589" y="174" className="diagram-label">REDIS</text><text x="589" y="198" className="diagram-caption">atomic rate limit</text><rect x="570" y="250" width="150" height="88" rx="3"/><text x="589" y="284" className="diagram-label">JUDGE0 / PISTON</text><text x="589" y="308" className="diagram-caption">isolated execution</text></g>
  </Diagram>;

  if (projectId === "recallloop") return <Diagram title="RecallLoop process: learner answer is checked against stored evidence, validated feedback guides remediation, and outcomes inform deterministic review planning.">
    <text x="42" y="57" className="diagram-overline">LEARNER STATE / GROUNDED FEEDBACK</text>
    <path className="diagram-route" d="M156 207H257M365 207H466M574 207H635" />
    <path className="diagram-route diagram-route-secondary" d="M690 260C670 375 208 392 125 261" />
    <g className="diagram-step"><circle cx="102" cy="207" r="50"/><text x="102" y="202" textAnchor="middle" className="diagram-label">ANSWER</text><text x="102" y="224" textAnchor="middle" className="diagram-caption">learner attempt</text></g>
    <g className="diagram-step"><rect x="257" y="157" width="108" height="100" rx="3"/><text x="311" y="198" textAnchor="middle" className="diagram-label">EVIDENCE</text><text x="311" y="221" textAnchor="middle" className="diagram-caption">stored state</text><text x="311" y="239" textAnchor="middle" className="diagram-caption">+ ranked context</text></g>
    <g className="diagram-step"><rect x="466" y="157" width="108" height="100" rx="3"/><text x="520" y="198" textAnchor="middle" className="diagram-label">VALIDATE</text><text x="520" y="221" textAnchor="middle" className="diagram-caption">structured</text><text x="520" y="239" textAnchor="middle" className="diagram-caption">feedback checks</text></g>
    <g className="diagram-step"><circle cx="682" cy="207" r="50"/><text x="682" y="202" textAnchor="middle" className="diagram-label">REVIEW</text><text x="682" y="224" textAnchor="middle" className="diagram-caption">planned next</text></g>
    <text x="380" y="365" textAnchor="middle" className="diagram-caption">ASSESS → TARGETED REMEDIATION → DETERMINISTIC REVIEW</text>
  </Diagram>;

  if (projectId === "rexcan") return <Diagram title="ReXcan invoice pipeline: validate an upload, queue an asynchronous job, read with OCR fallback, extract fields, normalize and check them, then route uncertain records for human review.">
    <text x="42" y="57" className="diagram-overline">INVOICE PIPELINE / VALIDATE BEFORE EXPORT</text>
    <path className="diagram-route" d="M100 171H660" />
    {[
      [100, "01", "UPLOAD", "PDF checks"], [212, "02", "QUEUE", "Redis job"], [324, "03", "READ / OCR", "text + scan"],
      [436, "04", "EXTRACT", "field candidates"], [548, "05", "NORMALIZE", "verify + dedupe"], [660, "06", "REVIEW", "human + audit"],
    ].map(([x, number, title, detail], index) => <g className={`diagram-pipeline-step ${index === 5 ? "diagram-step-review" : ""}`} key={number}>
      <circle cx={Number(x)} cy={171} r="25"/><text x={Number(x)} y="176" textAnchor="middle" className="diagram-number">{number}</text>
      <text x={Number(x)} y="222" textAnchor="middle" className="diagram-label">{title}</text><text x={Number(x)} y="244" textAnchor="middle" className="diagram-caption">{detail}</text>
    </g>)}
    <text x="380" y="320" textAnchor="middle" className="diagram-overline">LOW CONFIDENCE OR INCONSISTENCY → HUMAN CORRECTION</text>
    <text x="380" y="400" textAnchor="middle" className="diagram-caption">HUMAN CORRECTIONS RETURN TO THE AUDITABLE RECORD</text>
  </Diagram>;

  return <Diagram title="PeopleOps Copilot has three bounded workflows: cited policy retrieval, role-checked workforce analytics with a fixed query, and validated employee actions requiring manager approval and an audit record.">
    <text x="42" y="57" className="diagram-overline">THREE ROUTES / EXPLICIT PERMISSION BOUNDARIES</text>
    <path className="diagram-route" d="M205 151H292M469 151H554M205 244H292M469 244H554M205 337H292M469 337H554" />
    {[
      [105, 151, "01", "POLICY QUESTION", "BM25 + cited evidence", "CITED ANSWER", "source + section"],
      [105, 244, "02", "ANALYTICS", "role check + fixed query", "BOUNDED RESULT", "read-only access"],
      [105, 337, "03", "EMPLOYEE ACTION", "validate + authorize", "APPROVED WRITE", "manager + audit"],
    ].map(([cx, cy, num, title, detail, outcome, outcomeDetail]) => <g className="diagram-lane" key={num}>
      <circle cx={Number(cx)} cy={Number(cy)} r="28"/><text x={Number(cx)} y={Number(cy) + 5} textAnchor="middle" className="diagram-number">{num}</text>
      <rect x="166" y={Number(cy) - 31} width="242" height="62" rx="3"/><text x="184" y={Number(cy) - 4} className="diagram-label">{title}</text><text x="184" y={Number(cy) + 17} className="diagram-caption">{detail}</text>
      <rect x="438" y={Number(cy) - 31} width="244" height="62" rx="3"/><text x="456" y={Number(cy) - 4} className="diagram-label">{outcome}</text><text x="456" y={Number(cy) + 17} className="diagram-caption">{outcomeDetail}</text>
    </g>)}
  </Diagram>;
}
