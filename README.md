# Sundram Rai — Systems & AI Engineer

A custom portfolio built with React, Vite, Tailwind, Framer Motion, Three.js, and React Three Fiber. Its chromatic-noir art direction centers on an interactive folded-ribbon sculpture and engineering case studies.

Live site: [sundram-rai.vercel.app](https://sundram-rai.vercel.app/)

## Run locally

```bash
npm install
npm run dev
```

## Content and assets

- Portfolio facts and links live in `src/data/`.
- Flagship project descriptions and repository URLs are in `src/data/projects.ts`.
- The resume is served from `public/resume.pdf`.
- The hero artwork replacement location is `public/images/hero-sculpture.webp`. The current sculpture is procedural geometry, with an original static SVG fallback in `src/components/FoldedScene.tsx`.
- Project screenshot locations are `public/images/projects/forkspace.webp`, `recallloop.webp`, `rexcan.webp`, and `peopleops-copilot.webp`. No genuine project screenshots were present in the repository or task attachments when this redesign was implemented. The gallery therefore shows original system illustrations, explicitly labeled as illustrations; it does not present them as application captures.

## Design notes

The hero sculpture is formed from three custom folded, iridescent ribbon meshes with sparse atmospheric points and a damped pointer response. It falls back to an original SVG composition for reduced motion and small/touch devices, pauses outside the viewport, and is lazy-loaded. The masked hero-heading reveal is a restrained adaptation of the React Bits masked-heading reference. The liquid-glass references informed the layered clearcoat and iridescence material; no third-party scene, external model, or demo code is embedded. Project compositions use repository content and a reusable case-study structure rather than simulated product screens. The Systems Under the Surface selector shows source-checked flows, with stage descriptions and distinct PeopleOps routes for policy retrieval, analytics, and employee operations.

## Creative references applied

- **Liquid glass / liquid metal (Spline and Shader Lab):** adapted as controlled clearcoat and Three.js iridescence on procedural folded ribbons. There is no downloaded Spline scene or external model.
- **Pointer-reactive sculpture (Spline):** adapted as a damped pointer tilt on the complete ribbon form, with low-power rendering and static reduced-motion/mobile fallback.
- **Masked heading (React Bits):** adapted as one short, staggered hero headline reveal. Particle text was not added because it would compete with legibility.
- **Portal Shapes (pmndrs):** used as a reference for section depth and spatial framing; no portal transition was added because natural vertical reading better fits these case studies.
- **Shader Lab particle examples:** adapted only as a sparse set of static points around the hero form, avoiding continuous particle simulation.

## Checks

```bash
npm run lint
npm run build
```
