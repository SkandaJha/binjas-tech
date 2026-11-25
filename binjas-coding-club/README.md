# Binjas Coding Club — landing site

Informational landing page for Binjas Coding Club at Government Engineering College.
Requirements live in [`PRD.md`](./PRD.md).

## Stack

Next.js 16 (App Router, Turbopack) · React 19 · TypeScript (strict) · Tailwind CSS v4

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Dev server |
| `npm run build` | Production build |
| `npm start` | Serve the production build |
| `npm run lint` | ESLint |
| `npm run typecheck` | `tsc --noEmit` |

## Routes

| Route | What |
| --- | --- |
| `/` | The entire site |
| `/robots.txt`, `/sitemap.xml`, `/opengraph-image`, `/icon.png` | Generated from `site.ts` and the logo |

## Sections (in page order)

Hero · Stats · About (campus technology) · Hackathons (Hacklith 1.0) · Events ·
Members (grouped teams) · Request (opens the visitor's email app) · Roadmap.sh ·
FAQ · Contact (footer). A floating button at the bottom-right switches light and dark mode;
the navbar has one too.

## Editing content

**All copy lives in [`src/content/site.ts`](./src/content/site.ts).** You should not need to
open a component to change text or swap a link.

- **Members:** add `student("Full Name", "CSE")` to a group in `teamGroups` and put `full-name.jpg` in `public/team/`.
- **Request:** set `club.email`. Until then the Send button is off and a TODO shows.
- **Roadmap.sh:** edit the cards in `roadmaps`.
- **Events:** edit `events`. They reach the page through `EventsProvider` in `src/providers.tsx`,
  which an admin screen can replace with `setEvents`.
- **Hacklith:** the card links to https://www.binjas.org/ (see `src/components/hackathons.tsx`).

Anything still marked `TODO` renders as a visible placeholder. Nothing is invented on your behalf.

## Fonts

Plus Jakarta Sans and Caveat load in the visitor's browser from Google Fonts (see `src/app/layout.tsx`),
so `npm run dev` and `npm run build` never download fonts. Offline, the page falls back to system fonts.
This avoids the Turbopack "Can't resolve @vercel/turbopack-next/internal/font/google/font" error.

## Images to check

- `public/logo.png` and `src/app/icon.png`: the logo, cut from a poster. Replace with the original.
- `public/college_campus.jpg`: **a placeholder.** Put the real campus photo here.
- `public/hacklith_preview.png`: a screenshot of the Hacklith website.
- `public/team/*.jpg`: cut from the team posters. Replace with originals if you have them.

## Before launch

- [ ] Set `club.email` and replace the `REPLACE_ME` social links in `site.ts`.
- [ ] Replace the campus photo and logo.
- [ ] Fill in the FAQ answers and the other `TODO` text.
- [ ] Set `club.url` to the live address.
- [ ] Only list members who agreed to appear by name and photo.
- [ ] Run `npm run lint`, `npm run typecheck` and `npm run build`.

## Deploying

Push the repository to GitHub, then import it into Vercel. Set `club.url` in `src/content/site.ts`
to the live address so the canonical link, Open Graph tags, `robots.txt` and `sitemap.xml` point at the
right domain.

## Contributing

1. Create a branch, make your change, and run `npm run lint`, `npm run typecheck` and `npm run build`.
2. Open a pull request. Content changes (text, people, events, links) belong in `src/content/site.ts`.
3. Only add a member's name and photo with their permission.
