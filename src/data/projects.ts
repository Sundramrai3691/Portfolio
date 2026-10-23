export const PROJECTS = [
  {
    id: "forkspace",
    title: "ForkSpace",
    subtitle: "Concurrency-first collaborative coding",
    date: "March 2026",
    description:
      "A real-time coding workspace for live collaboration, synced execution, and AI-assisted feedback in the same session.",
    bullets: [
      "Built shared rooms with live cursors, role gating, and synchronized execution across multiple collaborators using WebSockets and Redis pub/sub.",
      "Integrated Judge0-based execution for C++, Python, and JavaScript with atomic session coordination and resilient recovery flows.",
      "Designed the system around concurrency and rate-control fundamentals to keep collaborative sessions stable under load.",
    ],
    tags: ["React", "Socket.IO", "Node.js", "Express", "MongoDB", "Redis", "CodeMirror"],
    category: "systems",
    featured: true,
    github: "https://github.com/Sundramrai3691",
    liveUrl: "https://fork-space.vercel.app/",
  },
  {
    id: "recallloop",
    title: "RecallLoop",
    subtitle: "Evidence-grounded remediation workflow",
    date: "January 2026",
    description:
      "A remediation loop that validates AI-generated fixes against structured evidence instead of trusting weak heuristics.",
    bullets: [
      "Created deterministic validation steps that grounded each recommendation in observable evidence before suggesting remediation.",
      "Designed retrieval and review stages around context quality, reducing noisy or speculative fixes in the feedback pipeline.",
      "Transformed AI output from suggestion-first to evidence-first, making each remediation step auditable and verifiable.",
    ],
    tags: ["Python", "FastAPI", "RAG", "LLM", "Validation", "Retrieval"],
    category: "ai",
    featured: true,
    github: "https://github.com/Sundramrai3691",
    liveUrl: "",
  },
  {
    id: "rexcan",
    title: "ReXcan",
    subtitle: "Multi-stage OCR and document extraction",
    date: "November 2025",
    description:
      "An invoice-processing pipeline that extracts, normalizes, and validates structured fields from noisy vendor documents.",
    bullets: [
      "Implemented a multi-stage OCR and NLP pipeline that converted unstructured invoices into ERP-ready JSON and CSV outputs.",
      "Added per-field confidence scoring, deduplication, and a review interface for human-in-the-loop validation of extracted data.",
      "Built scalable API workflows to keep extraction resilient across varied layouts, edge cases, and incomplete documents.",
    ],
    tags: ["FastAPI", "OCR", "LLMs", "Node.js", "React", "Python"],
    category: "ai",
    featured: true,
    github: "https://github.com/Sundramrai3691",
    liveUrl: "https://rexcan.vercel.app/",
  },
  {
    id: "peopleops-copilot",
    title: "PeopleOps Copilot",
    subtitle: "AI assistant for HR workflow operations",
    date: "May 2026",
    description:
      "A project lead initiative for an AI-powered PeopleOps workflow with authorization checks, approval gates, and audit-friendly operations.",
    bullets: [
      "Built a workflow assistant for operational HR tasks with explicit approval gates, access controls, and traceable action history.",
      "Combined retrieval, structured outputs, and policy-aware validation to make AI recommendations more trustworthy in people-centric workflows.",
      "Designed the system to surface risks early and keep human review in the loop for sensitive decisions.",
    ],
    tags: ["Node.js", "FastAPI", "AI", "Auditability", "Authorization", "LLM"],
    category: "workflow",
    featured: true,
    github: "https://github.com/Sundramrai3691",
    liveUrl: "",
  },
] as const;