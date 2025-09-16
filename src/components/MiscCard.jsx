// src/components/MiscCard.jsx
import React from "react";

const MiscCard = ({ title, icon, desc, points, links }) => (
  <div className="bg-white dark:bg-[#23272b] border border-[#e3e7ea] dark:border-[#23272b] rounded-2xl p-5 shadow-sm transition-colors flex flex-col gap-2">
    <div className="flex items-center gap-2 mb-1">
      {icon && (
        <img
          src={icon}
          alt=""
          className="h-6 w-6 rounded bg-white border border-[#e3e7ea] dark:border-[#23272b]"
        />
      )}
      <h4 className="font-semibold text-[#212121] dark:text-white">{title}</h4>
    </div>
    {desc && (
      <p className="text-sm text-[#5f6368] dark:text-slate-400">{desc}</p>
    )}
    {points && (
      <ul className="list-disc list-inside text-sm text-[#5f6368] dark:text-slate-400 pl-2">
        {points.map((pt, i) => (
          <li key={i}>{pt}</li>
        ))}
      </ul>
    )}
    {links && (
      <div className="flex gap-3 mt-1">
        {links.map((link, i) => (
          <a
            key={i}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#1a73e8] dark:text-cyan-400 underline text-xs font-medium hover:text-cyan-600 dark:hover:text-cyan-300 transition-colors"
          >
            {link.label}
          </a>
        ))}
      </div>
    )}
  </div>
);

export default MiscCard;
