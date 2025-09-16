// src/components/ResponsibilityCard.jsx
import React from "react";

const ResponsibilityCard = ({ role, org, date, desc }) => (
  <div className="bg-white dark:bg-[#23272b] border border-[#e3e7ea] dark:border-[#23272b] rounded-2xl p-5 shadow-sm transition-colors">
    <h4 className="font-bold text-[#212121] dark:text-white">{role}</h4>
    <p className="text-[#1a73e8] dark:text-cyan-400 font-medium">{org}</p>
    <p className="text-xs text-[#5f6368] dark:text-slate-500 font-mono">
      {date}
    </p>
    <p className="mt-1 text-sm text-[#444] dark:text-slate-300">{desc}</p>
  </div>
);

export default ResponsibilityCard;
