import React from "react";

const AcademicCard = ({ exam, year, details, desc }) => (
  <div
    className={`
      bg-white dark:bg-[#23272b]
      border border-[#e3e7ea] dark:border-[#23272b]
      rounded-xl shadow-sm transition-colors
      flex flex-col
      p-3 text-xs
      w-[200px] h-[140px]
      overflow-hidden
    `}
  >
    <div className="flex items-center justify-between mb-1">
      <h4 className="font-semibold text-[#1a73e8] dark:text-cyan-300 text-sm">
        {exam}
      </h4>
      <span className="text-[10px] text-[#5f6368] dark:text-slate-400 font-mono">
        {year}
      </span>
    </div>
    <p className="font-medium text-[#212121] dark:text-white">{details}</p>
    {desc && (
      <p className="text-[11px] text-[#5f6368] dark:text-slate-400 mt-1">
        {desc}
      </p>
    )}
  </div>
);

export default AcademicCard;
