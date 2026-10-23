# Sundram Rai — Systems & AI Engineer

A custom portfolio built with React, Vite, Tailwind, Framer Motion, Three.js, and React Three Fiber. The visual system pairs a restrained chromatic-noir palette with an interactive procedural orbital sculpture and editorial project studies.

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
- Project screenshot paths are reserved under `public/images/projects/` (`forkspace.webp`, `recallloop.webp`, `rexcan.webp`, and `peopleops-copilot.webp`). No genuine project screenshots were present in the repository or task attachments when this redesign was implemented. Until supplied, the gallery uses original abstract system studies, clearly labeled as such; it does not present them as application captures.

## Design notes

The hero uses a low-poly iridescent core, incomplete orbital rings, sparse signal points, and damped pointer response. It falls back to an art-directed static graphic for reduced motion and small/touch devices, pauses when outside the viewport, and is lazy-loaded. The text reveal borrows the masked-heading idea; the liquid-metal, glass, and portal references informed the material, depth, and orbit language without embedding third-party scenes or demos. Project compositions use real repository content and asymmetrical layouts rather than simulated product screens.

## Checks

```bash
npm run lint
npm run build
```

## Reference adaptations

- **Spline: Reeded liquid glass.** Inspired the sculpture’s selective reflected highlights and layered depth; no community scene was embedded.
- **Shader Lab: Liquid Metal and Glass.** Informed the iridescent procedural core and restrained reflective material, using local geometry instead of importing a model or demo gallery.
- **Spline: Reactive Orb.** Informed the damped pointer tilt on the hero object.
- **React Bits: Masked Heading.** Informed the one-time clipped, staggered headline reveal. Particle text was intentionally not stacked on top.
- **pmndrs: Portal Shapes.** Informed the framed apertures and spatial shift between project studies; no external scene is loaded.
