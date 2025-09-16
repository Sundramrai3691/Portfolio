// src/components/ProjectCard.jsx
import React from "react";
import { ChevronRight, ExternalLink } from "lucide-react";

const ProjectCard = ({ title, date, description, points, tech, link }) => (
  <div className="bg-white dark:bg-[#23272b] p-6 rounded-2xl border border-[#e3e7ea] dark:border-[#23272b] shadow-sm hover:shadow-md transition-shadow duration-200">
    <div className="flex justify-between items-start gap-4">
      <div>
        <h3 className="text-xl font-bold text-[#212121] dark:text-white">
          {title}
        </h3>
        {date && (
          <p className="text-sm text-[#5f6368] dark:text-slate-400 font-mono">
            {date}
          </p>
        )}
      </div>
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#1a73e8] dark:text-cyan-400 hover:underline flex items-center whitespace-nowrap"
          aria-label={`View ${title} on GitHub`}
        >
          View Project <ExternalLink className="ml-2 h-4 w-4" />
        </a>
      )}
    </div>
    {description && (
      <p className="mt-3 text-[#444] dark:text-slate-300">{description}</p>
    )}
    {points && points.length > 0 && (
      <ul className="mt-4 space-y-2">
        {points.map((point, idx) => (
          <li key={idx} className="flex items-start">
            <ChevronRight className="h-4 w-4 mt-1 text-[#1a73e8] dark:text-cyan-400 flex-shrink-0" />
            <span className="ml-2 text-[#444] dark:text-slate-200">
              {point}
            </span>
          </li>
        ))}
      </ul>
    )}
    {tech && tech.length > 0 && (
      <div className="mt-4 flex flex-wrap gap-2">
        {tech.map((t, idx) => (
          <span
            key={idx}
            className="bg-[#f1f3f4] dark:bg-cyan-900/50 text-[#1a73e8] dark:text-cyan-300 text-xs font-mono px-2 py-1 rounded"
          >
            {t}
          </span>
        ))}
      </div>
    )}
  </div>
);

export default ProjectCard;
