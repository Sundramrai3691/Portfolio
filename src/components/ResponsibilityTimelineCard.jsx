// src/components/ResponsibilityTimelineCard.jsx
import React from "react";

const ResponsibilityTimelineCard = ({ org, roles }) => (
  <div className="bg-white dark:bg-[#23272b] border border-[#e3e7ea] dark:border-[#23272b] rounded-2xl p-5 shadow-sm transition-colors">
    <h4 className="font-bold text-[#1a73e8] dark:text-cyan-400 text-lg mb-2">
      {org}
    </h4>
    <ol className="relative border-l border-[#e3e7ea] dark:border-slate-700 ml-2">
      {roles.map((role, idx) => (
        <li key={idx} className="mb-8 ml-6">
          <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-[#1a73e8] dark:bg-cyan-400 rounded-full ring-4 ring-white dark:ring-[#23272b]">
            {/* Dot */}
          </span>
          <div>
            <p className="font-semibold text-[#212121] dark:text-white">
              {role.title}
            </p>
            <p className="text-xs text-[#5f6368] dark:text-slate-400 font-mono">
              {role.date}
            </p>
            <p className="mt-1 text-sm text-[#444] dark:text-slate-300">
              {role.desc}
            </p>
          </div>
        </li>
      ))}
    </ol>
  </div>
);

export default ResponsibilityTimelineCard;
