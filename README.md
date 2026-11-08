# OBSIDIAN — Experimental Architecture Studio

An experimental, geometry-driven landing page. Every shape is built from polygons: `clip-path` for layout, SVG for illustration, no photographs.

## Stack

React 18 · TypeScript · Vite · Tailwind CSS 3 · Framer Motion · Lucide React

## Run

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # type-check + production build into dist/
npm run preview    # serve the production build
```

Requires Node.js 18+.

## Structure

```
src/
├─ components/
│  ├─ layout/      Navigation (diagonal menu), Footer
│  ├─ sections/    Hero, Philosophy, Projects, GeometryLab, Studio
│  ├─ geometry/    HeroStructure, ParallaxLayer, ProjectArt, LogoMark (SVG)
│  └─ ui/          Button, Reveal, Cursor
├─ data/           navigation, projects, philosophy fragments, lab polygons
├─ hooks/          useMouseParallax (spring-smoothed pointer position)
├─ constants/      colour tokens, studio details
└─ styles/         index.css (Tailwind layers + component styles)
```

## Editing content

- Navigation items: `src/data/navigation.ts`
- Projects (name, meta, copy): `src/data/projects.ts`; add a new `ProjectVariant` and a matching drawing in `components/geometry/ProjectArt.tsx`
- Philosophy blocks: `src/data/philosophy.ts`
- Colours: CSS variables at the top of `src/styles/index.css` (mirrored in `src/constants/tokens.ts` for SVG fills)
- Contacts: `src/constants/tokens.ts`

## Design notes

- Palette: `#10110F` background, `#B6FF36` acid lime, `#F2F2EC` off-white
- Type: Archivo Black (display), Syne (headings), Space Grotesk (body)
- Motion respects `prefers-reduced-motion`; the custom cursor is hidden on touch devices
