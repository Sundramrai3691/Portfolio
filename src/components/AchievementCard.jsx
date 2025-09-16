// src/components/AchievementCard.jsx
import React from "react";
import { Trophy, Star, Award, Code } from "lucide-react";

const iconMap = {
  trophy: <Trophy className="h-7 w-7 text-[#fbbc04]" />,
  star: <Star className="h-7 w-7 text-[#fdd663]" />,
  "award-blue": <Award className="h-7 w-7 text-[#1a73e8]" />,
  "award-slate": <Award className="h-7 w-7 text-[#5f6368]" />,
  code: <Code className="h-7 w-7 text-[#34a853]" />,
};

const AchievementCard = ({ icon, title, desc }) => (
  <div className="flex items-center gap-4 bg-white dark:bg-[#23272b] border border-[#e3e7ea] dark:border-[#23272b] rounded-2xl p-5 shadow-sm">
    <div className="flex-shrink-0 flex items-center justify-center bg-[#f1f3f4] dark:bg-slate-900 rounded-full p-2 shadow">
      {iconMap[icon] || <Award className="h-7 w-7 text-[#1a73e8]" />}
    </div>
    <div>
      <h4 className="font-semibold text-[#212121] dark:text-slate-100">
        {title}
      </h4>
      <p className="text-sm text-[#5f6368] dark:text-slate-400">{desc}</p>
    </div>
  </div>
);

export default AchievementCard;
