## Dutch History Bilingual Educational Site (NL/EN)

This repository will host a production‑ready starter for a fast, accessible (WCAG 2.2 AA) Dutch history website using Next.js 14 (App Router), TypeScript, Tailwind CSS, MDX content, i18n (nl/en), static generation, and a lightweight client search (Fuse.js).

> Initial placeholder. Full generated specification (design system, component specs, content model, accessibility, SEO, performance, governance) will be added in subsequent steps.

### Planned Stack
- Next.js 14 (app) + TypeScript
- Tailwind CSS with CSS variable tokens (light/dark)
- MDX content in `/content`
- Contentlayer (or custom MDX loader) for type safety
- Fuse.js static JSON search index

### Target Collections
`periods`, `events`, `people`, `places`, `themes`, `glossary`, `sources`.

### Performance Budget (Targets)
- LCP < 2.5s (3G Fast) / <1.5s broadband
- CLS < 0.1
- INP < 200ms

### Accessibility Principles
Semantic first; ARIA minimal. All interactive components keyboard reachable, visible focus ring, color contrast >= 4.5:1 body text.

### Upcoming Deliverables
1. Sitemap & content model
2. Design system (tokens JSON + tables)
3. Component library spec (props, a11y)
4. Page templates & wireframes
5. Editorial & SEO standards
6. Accessibility checklist mapping
7. Performance strategy & analytics (no tracking cookies)
8. Next.js scaffold codebase
9. Seed MDX content (NL/EN)
10. Deployment commands & governance

---

Scaffold generation will follow scripted AI steps from the playbook.
