export const SKILLS = {
  languages: ["C++", "C", "Python", "JavaScript", "TypeScript", "SQL"],
  systems: ["Node.js", "Express", "FastAPI", "REST APIs", "WebSockets", "PostgreSQL", "MongoDB", "Redis", "Concurrency", "Rate Limiting"],
  ai: ["RAG", "LLM integrations", "Structured outputs", "Validation", "AI agents", "Retrieval", "OCR pipelines", "Async AI workflows"],
  tools: ["Docker", "Git", "GitHub Actions", "CI/CD", "Linux", "Postman", "Pytest", "Vitest", "ESLint"],
  leadership: ["Technical mentoring", "Problem solving", "System design", "Execution", "Communication"],
} as const;

export const LANGUAGE_PROFICIENCY: Record<string, string> = {
  "C++": "Systems and DSA",
  C: "Low-level fundamentals",
  Python: "AI and scripting",
  JavaScript: "Frontend and backend",
  TypeScript: "Product engineering",
  SQL: "Data modeling and queries",
};
