import React from "react";
import { ExternalLink } from "lucide-react";

// Platform icon mapping using your SVG assets from public/assets
const platformIcons = {
  LeetCode: (
    <img
      src="/assets/lc.svg"
      alt="LeetCode"
      className="h-6 w-6 mr-2 rounded-full bg-white p-0.5"
      style={{ boxShadow: "0 1px 4px rgba(26,115,232,0.08)" }}
    />
  ),
  CodeChef: (
    <img
      src="/assets/cc.svg"
      alt="CodeChef"
      className="h-6 w-6 mr-2 rounded-full bg-white p-0.5"
      style={{ boxShadow: "0 1px 4px rgba(26,115,232,0.08)" }}
    />
  ),
  Codeforces: (
    <img
      src="/assets/cf.svg"
      alt="Codeforces"
      className="h-6 w-6 mr-2 rounded-full bg-white p-0.5"
      style={{ boxShadow: "0 1px 4px rgba(26,115,232,0.08)" }}
    />
  ),
  GeeksforGeeks: (
    <img
      src="/assets/gfg.svg"
      alt="GeeksforGeeks"
      className="h-6 w-6 mr-2 rounded-full bg-white p-0.5"
      style={{ boxShadow: "0 1px 4px rgba(26,115,232,0.08)" }}
    />
  ),
  Codolio: (
    <span className="inline-block h-6 w-6 mr-2 rounded-full bg-gradient-to-tr from-green-400 to-cyan-400 flex items-center justify-center text-white font-bold text-sm shadow">
      C
    </span>
  ),
};

const CodingProfiles = ({ profiles }) => (
  <div className="flex flex-wrap gap-4">
    {profiles.map((profile) => (
      <a
        key={profile.name}
        href={profile.url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center px-5 py-3 bg-white dark:bg-[#23272b] border border-[#e3e7ea] dark:border-[#23272b] rounded-2xl shadow-sm hover:shadow-md transition-all min-w-[220px] group"
        style={{ minWidth: 220 }}
        aria-label={`Visit ${profile.name} profile`}
      >
        {platformIcons[profile.name]}
        <div className="flex flex-col flex-1">
          <span className="font-semibold text-[#1a73e8] dark:text-cyan-300 group-hover:underline transition-colors">
            {profile.name}
          </span>
          <span className="text-xs text-[#5f6368] dark:text-slate-400">
            @{profile.username}
          </span>
        </div>
        <ExternalLink className="ml-2 h-4 w-4 text-[#1a73e8] dark:text-cyan-400 group-hover:text-cyan-300 transition-colors" />
      </a>
    ))}
  </div>
);

export default CodingProfiles;
