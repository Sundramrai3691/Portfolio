export const SKILLS = {
  languages: ["C++", "Python", "JavaScript", "TypeScript", "Java"],
  webDev: ["React", "Node.js", "Express", "FastAPI", "Tailwind CSS", "shadcn/ui", "Vite", "HTML5", "CSS"],
  databases: ["MongoDB", "PostgreSQL", "Redis"],
  toolsTech: ["Socket.IO", "Docker", "Jest", "Postman", "Git", "GitHub", "Linux/CLI", "Vercel"],
  aiMl: ["PyTorch", "scikit-learn", "YOLOv8", "OpenCV", "EasyOCR", "NLTK", "LLM APIs", "Roboflow"],
  softSkills: ["Leadership", "Team Management", "Problem Solving", "Project Management", "Technical Mentoring"],
} as const;

export const LANGUAGE_PROFICIENCY: Record<string, string> = {
  "C++": "Primary DSA language",
  Python: "ML/Scripting",
  JavaScript: "Full-Stack",
  TypeScript: "Full-Stack",
};
