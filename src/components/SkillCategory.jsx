// src/components/SkillCategory.jsx
import React from "react";
import { Code, Server, Cpu, Palette } from "lucide-react";

// Map string icon names to Lucide icons for flexibility
const iconMap = {
  code: <Code className="text-[#1a73e8] dark:text-cyan-400" />,
  server: <Server className="text-[#1a73e8] dark:text-cyan-400" />,
  cpu: <Cpu className="text-[#1a73e8] dark:text-cyan-400" />,
  palette: <Palette className="text-[#1a73e8] dark:text-cyan-400" />,
};

const SkillCategory = ({ title, skills, icon }) => (
  <div className="bg-white dark:bg-[#23272b] border border-[#e3e7ea] dark:border-[#23272b] rounded-2xl p-5 shadow-sm transition-colors">
    <h3 className="text-lg font-semibold text-[#1a73e8] dark:text-cyan-400 mb-3 flex items-center">
      {typeof icon === "string" ? iconMap[icon] : icon}
      <span className="ml-2">{title}</span>
    </h3>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill, i) => (
        <span
          key={i}
          className="bg-[#e8f0fe] dark:bg-cyan-900/50 text-[#1a73e8] dark:text-cyan-300 text-sm font-medium px-3 py-1 rounded-full border border-[#c6dafc] dark:border-slate-600"
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
);

export default SkillCategory;
