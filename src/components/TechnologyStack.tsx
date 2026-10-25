import {
  siCplusplus,
  siDocker,
  siExpress,
  siFastapi,
  siGit,
  siGithubactions,
  siJavascript,
  siLinux,
  siMongodb,
  siNodedotjs,
  siPostgresql,
  siPython,
  siReact,
  siRedis,
  siTypescript,
} from "simple-icons";
import type { ReactNode } from "react";
import CircularCarousel from "./CircularCarousel.jsx";

const TECHNOLOGIES = [
  { name: "C++", icon: siCplusplus },
  { name: "Python", icon: siPython },
  { name: "JavaScript", icon: siJavascript },
  { name: "TypeScript", icon: siTypescript },
  { name: "React", icon: siReact },
  { name: "Node.js", icon: siNodedotjs },
  { name: "Express", icon: siExpress },
  { name: "FastAPI", icon: siFastapi },
  { name: "PostgreSQL", icon: siPostgresql },
  { name: "MongoDB", icon: siMongodb },
  { name: "Redis", icon: siRedis },
  { name: "Docker", icon: siDocker },
  { name: "Git", icon: siGit },
  { name: "GitHub Actions", icon: siGithubactions },
  { name: "Linux", icon: siLinux },
] as const;

function TechnologyIcon({ icon }: (typeof TECHNOLOGIES)[number]) {
  return (
    <svg
      className="technology-logo-icon"
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
    >
      <path d={icon.path} fill="currentColor" />
    </svg>
  );
}

const carouselItems = TECHNOLOGIES.map(({ name, icon }) => {
  const viewBox = icon.svg.match(/viewBox="([^"]+)"/)?.[1] ?? "0 0 24 24";
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 128 128"><svg x="28" y="28" width="72" height="72" viewBox="${viewBox}" preserveAspectRatio="xMidYMid meet"><path d="${icon.path}" fill="#c8c4d5"/></svg></svg>`;

  return {
    src: `data:image/svg+xml,${encodeURIComponent(svg)}`,
    alt: `${name} technology logo`,
    title: name,
  };
});

const staticLogos: ReactNode[] = TECHNOLOGIES.map(({ name, icon }) => (
  <li className="technology-logo-static-item" key={name}>
    <TechnologyIcon name={name} icon={icon} />
    <span>{name}</span>
  </li>
));

export function TechnologyStack() {
  return (
    <section className="technology-stack" aria-labelledby="technology-stack-title">
      <div className="technology-stack-heading">
        <p className="technology-stack-eyebrow">TECHNOLOGY STACK</p>
        <h2 id="technology-stack-title">THE TOOLS BEHIND THE BUILDS</h2>
        <p>Technologies I use to turn ideas into working software.</p>
      </div>
      <div className="technology-carousel">
        <CircularCarousel
          items={carouselItems}
          preset="orbit"
          intro="rise"
          cardWidth={96}
          aspectRatio={1}
          gap={18}
          speed={6}
          pauseOnHover
          parallax={0}
          tilt={-12}
          captions
          depthFade={0.32}
          fadeColor="#0b0c14"
          cornerRadius={3}
        />
      </div>
      <div className="technology-logo-static" role="region" aria-label="Technology stack">
        <ul>{staticLogos}</ul>
      </div>
    </section>
  );
}
