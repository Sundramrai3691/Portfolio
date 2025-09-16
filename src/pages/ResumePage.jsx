// src/pages/ResumePage.jsx
import React from "react";
import {
  skills,
  projects,
  experiences,
  achievements,
  responsibilities,
  miscellaneous,
  academic,
  codingProfiles,
} from "../data";
import Header from "../components/Header";
import Section from "../components/Section";
import SkillCategory from "../components/SkillCategory";
import ProjectCard from "../components/ProjectCard";
import ExperienceCard from "../components/ExperienceCard";
import AchievementCard from "../components/AchievementCard";
import ResponsibilityTimelineCard from "../components/ResponsibilityTimelineCard";
import MiscCard from "../components/MiscCard";
import AcademicCard from "../components/AcademicCard";
import Footer from "../components/Footer";
import CodingProfiles from "../components/CodingProfiles";
import ThemeToggle from "../components/ThemeToggle";

const ResumePage = () => {
  return (
    <div className="min-h-screen bg-[#f8fafc] dark:bg-[#181c20] text-[#222] dark:text-slate-300 font-sans leading-relaxed transition-colors">
      <div className="container mx-auto p-4 sm:p-6 lg:p-8">
        <main className="max-w-5xl mx-auto">
          <Header />

          <Section title="Coding Profiles" icon="code">
            <CodingProfiles profiles={codingProfiles} />
          </Section>

          <Section title="Technical Skills" icon="brain">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <SkillCategory
                title="Languages"
                skills={skills.languages}
                icon="code"
              />
              <SkillCategory
                title="Web/Mobile Development"
                skills={skills.web}
                icon="server"
              />
              <SkillCategory
                title="Utilities & Tools"
                skills={skills.utilities}
                icon="cpu"
              />
              <SkillCategory
                title="Soft Skills"
                skills={skills.soft}
                icon="palette"
              />
            </div>
          </Section>

          <Section title="Projects" icon="briefcase">
            <div className="space-y-8">
              {projects.map((project, i) => (
                <ProjectCard key={i} {...project} />
              ))}
            </div>
          </Section>

          <Section title="Work Experience" icon="briefcase">
            <div className="space-y-8">
              {experiences.map((exp, i) => (
                <ExperienceCard key={i} {...exp} />
              ))}
            </div>
          </Section>

          <Section title="Achievements" icon="trophy">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {achievements.map((ach, i) => (
                <AchievementCard key={i} {...ach} />
              ))}
            </div>
          </Section>

          <Section title="Positions of Responsibility" icon="users">
            <div className="space-y-6">
              {responsibilities.map((orgItem, i) => (
                <ResponsibilityTimelineCard key={i} {...orgItem} />
              ))}
            </div>
          </Section>

      

          {/* New Miscellaneous Section */}
          <Section title="Miscellaneous" icon="book-open">
            <div className="flex flex-wrap gap-3">
              {miscellaneous.map((item, i) => (
                <MiscCard key={i} {...item} />
              ))}
            </div>
          </Section>
        </main>
        <Footer />
      </div>
      {/* Fixed Theme Toggle Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <ThemeToggle />
      </div>
    </div>
  );
};

export default ResumePage;
