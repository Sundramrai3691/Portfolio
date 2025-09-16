// src/components/ExperienceCard.jsx
import React from "react";

const ExperienceCard = ({ company, location, role, date, description }) => (
  <div className="relative pl-8 border-l-2 border-[#1a73e8]/30 dark:border-cyan-400/40 bg-white dark:bg-[#23272b] rounded-2xl py-5 mb-2 shadow-sm border border-[#e3e7ea] dark:border-[#23272b]">
    {/* Timeline marker */}
    <div className="absolute -left-[13px] top-6 h-5 w-5 bg-[#f1f3f4] dark:bg-slate-900 border-2 border-[#1a73e8] dark:border-cyan-400 rounded-full shadow-md"></div>
    <h3 className="text-xl font-bold text-[#212121] dark:text-white">{role}</h3>
    <p className="text-md text-[#5f6368] dark:text-slate-400">
      {company}
      <span className="mx-1 text-[#1a73e8] dark:text-cyan-400">|</span>
      {location}
    </p>
    <p className="text-sm text-[#5f6368] dark:text-slate-500 font-mono mb-3">
      {date}
    </p>
    <p className="text-[#444] dark:text-slate-300">{description}</p>
  </div>
);

export default ExperienceCard;
