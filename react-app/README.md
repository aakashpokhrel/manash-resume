# Manash Pokhrel — Personal Resume Website

A single-page, responsive portfolio built with React, TypeScript, Vite, and Tailwind CSS, generated
from the content of Manash Pokhrel's resume (SEO Specialist | Digital Marketing Professional).

## Tech Stack

- React 18 + TypeScript
- Vite
- Tailwind CSS (with dark mode via the `class` strategy)
- No external UI/icon libraries — all icons are hand-written inline SVG components

## Getting Started

```bash
npm install
npm run dev
```

Then open the printed local URL (typically `http://localhost:5173`).

### Other scripts

```bash
npm run build     # type-check and build for production into dist/
npm run preview   # preview the production build locally
npm run lint      # run ESLint
```

## Project Structure

```
src/
  components/     # One component per UI section (Navbar, Hero, About, Skills, ...)
  data/resume.ts  # Single source of truth for all resume content
  hooks/          # useTheme (dark/light + localStorage), useActiveSection, useScrollTop
  App.tsx         # Composes all sections
  index.css       # Tailwind entrypoint + smooth-scroll / reduced-motion rules
public/
  favicon.svg     # Generated placeholder favicon (initials "MP")
  og-image.svg    # Generated placeholder Open Graph image
  profile.jpg     # Generated placeholder avatar (initials "MP") — swap for a real photo any time
```

## Content Notes

All copy is sourced from the provided resume PDF. A few notes on how it was adapted:

- **Skills** — grouped into *Core Skills* by function (SEO & Content, Analytics & Advertising, Web &
  Design Tools, Business & Leadership) rather than as a flat list.
- **Achievements** — a dedicated section separate from Certifications, covering the Springwood
  Advertisement Competition win and the operational highlights from the General Manager role.
- **Projects** — the source resume did not list any projects, and there was no reasonable web-portfolio
  equivalent to invent, so the section was omitted rather than shipped as an empty placeholder.
- **Photo** — no profile photo file was available, so the hero section uses a generated placeholder
  avatar at `public/profile.jpg` (initials "MP"). Replace that file with a real photo (same filename)
  to update it everywhere.
- **Personal details omitted** — date of birth, gender, nationality, and marital status appear on the
  original resume PDF but were intentionally left off this public website, since they're sensitive
  personal details unrelated to professional qualifications.
- **Links** — the resume did not list GitHub, LinkedIn, or a portfolio URL, so only Email and Phone
  appear as contact links.

## Deployment

This is a static Vite app — deploy the `dist/` output (after `npm run build`) to Vercel, Netlify, or
any static host. No environment variables or backend are required.

```bash
npx vercel --prod
```

## Accessibility

- Semantic landmarks (`header`, `nav`, `main`, `footer`)
- Skip-to-content link
- `aria-current` on the active nav link, `aria-label`/`aria-pressed` on icon-only buttons
- Respects `prefers-reduced-motion`
