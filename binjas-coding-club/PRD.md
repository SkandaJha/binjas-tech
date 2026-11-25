# PRD — Binjas Coding Club Landing Website

| Field | Value |
| --- | --- |
| **Project** | Binjas Coding Club — landing website & admin portal |
| **Organisation** | Government Engineering College, Banka |
| **Version** | 2.0 |
| **Status** | Approved — Admin Architecture & Dynamic Provider System |
| **Owner** | Vivek |
| **Last updated** | 2026-10-06 |

> This document is the single source of truth. Every requirement below is either
> **MUST**, **SHOULD**, or **COULD**. Anything marked `NEEDS INPUT` is a slot waiting on
> real content from the club — the site ships with working placeholders in the meantime.

---

## 1. Product overview

An **informational landing page** for **Binjas Coding Club**, a coding club at **Government
Engineering College**. It exists to explain what the club does and show what it has
produced.

### 1.1 The club does not accept signups

**This is a hard product decision, not an oversight.** The site must contain:

- No "Join the club" button, link or heading anywhere.
- No registration form, signup link, WhatsApp group, Discord invite or join URL.
- No membership-application copy, no "how to join", no fees or eligibility pitch.
- No recruitment CTA of any kind.

Contact details are still shown, and external links to the club's real profiles are still
fine — those are contact routes, not conversion routes.

### 1.2 Problem

The club has no public presence. Past work is invisible, and there is no single link to
share in a WhatsApp group, an Instagram bio, or a conversation with the college.

### 1.3 Primary goal

**Show what the club has done.** The recent hackathon run at Government Engineering College
is the centrepiece.

### 1.4 Non-goals

- Public member signups, open applications, payments, or ticketing (§1.1 remains strict).
- Public discussion / unmoderated user comments.
- Native mobile apps (web-first, responsive on all screen viewports).
- Custom database or custom runtime backend API server in the Next.js app (credentials and data are handled via the BaaS Provider architecture).

---

## 2. Audience

| Audience | What they need from the site | Priority |
| --- | --- | --- |
| **Prospective student** (primary) | "What do you actually do? What have you built?" | 1 |
| **College administration / faculty** | "Is this club active, and what does it produce?" | 2 |
| **Prospective collaborators / sponsors** | "What have you built? Who runs it?" | 3 |
| **Alumni / members** | "What's on? Let me share this link." | 4 |

---

## 3. Tech stack

| Layer | Choice | Rationale |
| --- | --- | --- |
| Framework | **Next.js 16** (App Router, Turbopack) | Vercel one-click deploy, image optimisation, SEO metadata API |
| Language | **TypeScript**, `strict: true` | Fewer content-plumbing bugs |
| Styling | **Tailwind CSS v4** | Design tokens live in CSS custom properties; no build step |
| Content | Single typed config file, `src/content/site.ts` | Swap placeholders for real content without touching components |
| Fonts | `next/font` (self-hosted) | No layout shift, no external requests |
| Hosting | Vercel | Zero-config for Next.js |
| Lint/format | ESLint, `npm run lint` / `npm run typecheck` | CI-able |

### 3.1 Explicit constraints

- **MUST** ship no runtime backend and no per-request data fetching. Fully static.
- **MUST NOT** depend on paid services, API keys, or databases to render.
- **MUST** use `next/image` for all photography.
- **SHOULD** target Lighthouse ≥ 95 on Performance, Accessibility, Best Practices, SEO.
- **MUST** keep client-side JavaScript to the two places that need it: the mobile nav
  (scroll state, scroll-spy) and nothing else. The FAQ uses native `<details>` specifically
  to avoid a JS accordion. The site **MUST** remain fully readable and navigable with
  JavaScript disabled — every FAQ answer stays reachable.
- **MUST NOT** adopt smooth-scroll hijacking (Lenis-style) or a full-page loading
  animation. Both degrade usability and accessibility for no gain on a static page.
- **MUST NOT** have nav links pointing at sections that are not on the page. Nav links are
  derived from the sections that actually render (§5.1).

---

## 4. Information architecture

Single route. Everything scrolls in one narrative.

```
/                      the entire site
├── Hero                     panel + sticker decorations, 2 links, mini stat strip
├── Stats bar                one panel, 4 icon tiles, students / hackathons / events / mentors
├── About / What we do       5 icon-tile activity cards
├── Hackathons               THE CENTREPIECE — photo collage + stats strip
├── Events                   upcoming carousel, big day/month blocks (hidden when empty)
├── Team / Leads             pastel-avatar carousel (hidden when empty)
├── FAQ                      horizontal row of collapsed items
└── Footer                   dark, rounded top — contact, nav, socials, credit
```

There are no other routes. Header and footer live in the root layout.

Events and Team use one shared `Carousel` component: a scroll-snap row with previous/next
buttons. The row is a real, keyboard-scrollable, labelled scroll region that works without
JavaScript; the buttons are convenience only and disable at each end.

---

## 5. Section-by-section requirements

### 5.1 Nav bar — `MUST`
- Fixed, cream at 95% with `backdrop-blur`, 2.5px black bottom border, 72px tall.
- Logo mark (see §7) on the left; section links on the right.
- **MUST NOT** contain a join/signup button.
- Nav links are **derived from rendered sections**, so a link to a hidden section is
  impossible by construction.
- Active section is highlighted, tracked by scroll-spy.
- Smooth-scroll with an offset that clears the fixed header.
- **On mobile:** hamburger → full panel, scroll locked, Escape closes.

### 5.2 Hero — `MUST`
- Club name as the H1, on a cream-light canvas with a faint grid and two blurred colour orbs.
- One-sentence value proposition: what the club is. `NEEDS INPUT — tagline`
- **2** internal links (See our hackathon / What we do). **No join CTA.**
- One-line eyebrow qualifier carrying the college name and the open-to-all message.
- **MUST** be visually strong — this is the first impression.
- `NEEDS INPUT` — hero background image (optional), tagline.

### 5.3 Stats bar — `SHOULD`
- 3–4 hard numbers: members, hackathons, events run, mentors.
- Numbers **MUST** be real. If a figure is not verifiable, omit it rather than invent it.
  Stats with no value are skipped, and the section disappears if none are set.

### 5.4 About / What we do — `MUST`
- 2–3 sentence story of the club: founded when, by whom, why it exists.
- 3–6 cards for activity types (workshops, hackathons, open source, mentorship, tech talks,
  competitions).
- Each card: icon in a tinted tile, title, one-line description.
- `NEEDS INPUT` — founding year, founder names, actual activity list.

### 5.5 Hackathons — `MUST` (the centrepiece)
The primary goal of the site. Lead with the hackathon the club ran at Government
Engineering College.

**Past hackathons — featured treatment**
- **MUST** show at least one real hackathon. Placeholder until the real one is supplied.
- Each entry:
  - cover photo (16:10), falling back to a neutral tile when there is no photo
  - date and optional theme, as chips
  - name as the H3, tagline, summary
  - story paragraphs: the brief → how the day ran → what came out of it
  - a stats strip: participants, teams, hours, projects shipped — real figures only
  - up to 3 gallery thumbnails
- **MUST NOT** render dead links. Only `registerUrl` on an *upcoming* hackathon, and only
  when it exists.

**Upcoming hackathons**
- **MUST** be visually subordinate to past ones: compact cards, no cover, no story.
- **MUST** render a register link only when `registerUrl` is set.
- **MUST** hide itself when the list is empty.

`NEEDS INPUT` — the hackathon name, date, theme, brief, summary, story, participant and
team counts, and photos. This is the single biggest content dependency.

### 5.6 Events — `SHOULD`
- Upcoming events with date, title, description, and an "Interested" link out when one
  exists.
- Past events as a compact archive below.
- **MUST** hide itself when there are no entries, and **MUST** then disappear from the nav.

### 5.7 Team — `COULD`
- Leads with photo, name, role, one-liner, GitHub or LinkedIn.
- **MUST** obtain explicit permission before publishing a photo and name of anyone who is
  not a public-facing lead.
- **MUST** hide itself when empty, and then disappear from the nav.
- `NEEDS INPUT` — team roster, photos, roles.

### 5.8 FAQ — `MUST`
Placed last, above the footer.
- **MUST** answer the questions people actually ask about the club: what it does, when and
  where it meets, what members need to bring, what it has built.
- **MUST NOT** ask about joining, fees, or eligibility — the club is not accepting anyone.
- **MUST** be an accordion, first item open by default.
- **MUST** be keyboard and screen-reader operable and readable with JavaScript disabled.
  Native `<details>`/`<summary>` is the intended mechanism.
- **MUST** use a real heading for the section and real headings for each question.
- **MUST** hide itself when there are no entries.
- `NEEDS INPUT` — the answers. Every answer is club policy and **MUST NOT** be guessed.
  The questions ship pre-written because they are what visitors ask; the replies are the
  club's to write.

### 5.9 Footer — `MUST`
- Stripe motif across the top edge, then a deep-green field.
- Club name with logo mark, one-line description, social links.
- **MUST NOT** contain a join or signup link.
- **MUST** show the college name, location, and contact email when one exists.
- Copyright with founding year.

---

## 6. Admin Panel & Dynamic Provider Architecture (v2.0)

To empower student leads and event organizers at Government Engineering College, Banka to update
events, workshops, and notifications dynamically without requiring code redeployments, the platform
features a dedicated **Admin Portal (`/admin`)** powered by a **Provider-First Architecture**.

### 6.1 Architectural Principles & Explicit Constraints

1. **Zero Custom API Server (`No Custom /api/ Routes`)**:
   - The Next.js runtime **MUST NOT** implement custom server-side `/api/auth` or `/api/events` backend
     routes or manage direct SQL/database connections on the application server.
   - All credentials authentication and data synchronization are delegated directly to the
     **Backend-as-a-Service (BaaS) Provider** (e.g., Supabase / Firebase / Identity Provider SDKs) via client
     and provider abstractions.
2. **Provider-Managed Credentials (`In Provider, Not the Admin`)**:
   - User credentials, password hashes, and OAuth tokens **MUST** reside exclusively in the external Auth
     Provider. The admin application never stores, persists, or hashes raw admin passwords.
   - Authentication tokens (JWT / Session) are managed securely by the provider client session.
3. **Dynamic Frontend Synchronization**:
   - An application-level React Context provider layer (`EventsProvider` and `AuthProvider`) connects the
     admin actions directly to the public frontend.
   - Updates made in `/admin/events` (add, edit, delete, toggle featured) trigger immediate state updates
     that dynamically reflect across the public landing page (`/#events` and campus updates).
   - Local persistent cache guarantees that changes persist across browser refreshes and are ready to sync
     with remote cloud providers.
4. **Theme & Visual Harmony**:
   - The admin panel **MUST** adopt the exact same aesthetic language as the public landing page:
     Plus Jakarta Sans typography, hairline slate borders (`border-slate-200/80`), white cards with subtle
     elevation shadows, micro-dot grid patterns, and curated accent badges.

### 6.2 Module Specifications

#### Module 1: Admin Authentication (`/admin/login`) — `MUST`
- **Branding**: Official Government Engineering College, Banka & Binjas Coding Club identity.
- **Provider Authentication**: Direct authentication via the Auth Provider interface.
- **Protected Route Guards**: Automatically checks session state; redirects unauthenticated visitors to
  `/admin/login` and authenticated users to `/admin`.
- **Session Lifecycle**: Secure session persistence with explicit logout capability.

#### Module 2: Executive Dashboard (`/admin`) — `MUST`
- **Metric Cards**:
  - Total Events & Workshops count.
  - Active & Upcoming sessions count.
  - Featured Flagship spotlight indicator.
  - Total student builders reached.
- **Live Sync & Provider Health**:
  - Live status indicator displaying current provider sync status (Local Reactive / Cloud BaaS).
- **Quick Action Bar**:
  - "New Event" direct launcher.
  - "View Public Site" quick link with target anchor.
  - "Reset Default Seed" safe rollback trigger for QA testing.
- **Recent Activity Feed**: Timeline of latest event modifications.

#### Module 3: Event Management Module (`/admin/events`) — `MUST`
- **Tabbed Category Filtering**: Filter between `All Sessions`, `Workshops`, `Tech Talks`, and `Coding Jams`.
- **Event List View**: High-density interactive cards displaying:
  - Event title, category badge, and ISO date with formatted day/month.
  - Venue, time, and tags.
  - Flagship / Featured badge status.
- **Event Creator / Editor (Modal / Drawer)**:
  - Form fields: Title, ISO Date, Time, Venue / Location, Category, Description, Tags (comma-separated),
    Curriculum highlights (bullet points), and "Featured Flagship" toggle.
  - Strict client-side validation for required fields.
- **Mutations & Real-Time Sync**:
  - **Create**: Inserts new event, assigns UUID, and notifies dynamic subscribers.
  - **Edit**: Updates existing event attributes in-place.
  - **Delete**: Safely removes event with confirmation.
  - **Toggle Featured**: Sets the primary flagship workshop showcased on the left spotlight of `/#events`.

#### Module 4: Dynamic Frontend Integration — `MUST`
- The public `Events` component (`src/components/events.tsx`) consumes live data via `useEvents()`.
- Initial static build renders seed data from `src/content/site.ts` for zero layout shift and SEO.
- Client hydration seamlessly adopts live provider data, allowing instant runtime adjustments without
  code rebuilds.

---

## 7. Brand assets

| Asset | Where it lives | Where it appears |
| --- | --- | --- |
| **Logo** | `public/logo.svg` (or `.png`) | Nav mark, footer mark |
| Favicon | `src/app/favicon.ico` | Browser tab |
| Share image | generated, `src/app/opengraph-image.tsx` | Link previews |

- **MUST** be square or near-square; the mark is rendered in a square slot.
- **SHOULD** be a vector SVG so one asset covers every size.
- The logo is wired through `club.logo` in `site.ts`. While it is `null` the site renders
  a neutral `</>` placeholder, so the layout is unaffected either way.
- ⚠️ The Open Graph image and the favicon still use the placeholder mark. Adding the real
  logo to those is a small follow-up.

---

## 8. Design requirements

- **Visual direction — decided:** clean, flat and light. White canvas, hairline borders, soft
  low-contrast shadows, generous radii, and colour carried entirely by small filled icon
  tiles. Modelled on a supplied design mockup. Full specification in
  [`docs/DESIGN.md`](./docs/DESIGN.md).
- **Palette:** slate neutrals on white (`ink` `#0F172A`, `body` `#475569`, `muted` `#64748B`,
  `line` `#E2E8F0`), with five flat accent fills — blue `#2563EB`, red `#EF4444`, green
  `#16A34A`, purple `#A855F7`, yellow `#EAB308`.
  - Accents are **fills behind icons, never body text.** The `TILE_FILL` / `TILE_INK` pairings
    in `primitives.tsx` encode this so a call site cannot get it wrong. Yellow takes a dark
    glyph; every other tile takes 
    hite.
  - Small text on a 10%-tint badge needs 4.5:1, which the raw accents do not reach — two
    darker `-ink` tokens exist for that case.
  - The brighter green `#22C55E` was rejected: white on it is 2.28:1, under the 3:1 floor.
  - Re-colouring is a seven-token change — see §13 and `docs/DESIGN.md` §9.
- **Typography:** Outfit throughout — body at 400, headings at 600. Hierarchy comes from weight
  and size, not a second family.
- **Alignment — the structural guarantee:** every section renders through one `Section`
  component and one `SectionHeader` component in `primitives.tsx`. Vertical rhythm, gutters,
  header measure and header-to-content gap are therefore identical everywhere by
  construction, not by remembering to type them. Components **MUST NOT** hand-roll their own
  section padding.
- **Responsive:** 360px → 1440px+, no horizontal scroll at any width.
- **Accessibility (WCAG 2.1 AA, MUST):**
  - Text contrast ≥ 4.5:1 (≥ 3:1 for large text). Verified with a checker, not by eye.
  - Keyboard navigable end to end; visible focus rings; skip-to-content link.
  - Semantic landmarks (`header`, `nav`, `main`, `section`, `footer`), exactly one `h1`,
    no skipped heading levels.
  - Every image has meaningful alt text, or is hidden from assistive tech.
  - All animation respects `prefers-reduced-motion`.
  - Touch targets ≥ 44×44px.
- **Performance (MUST):**
  - Optimised images via `next/image`, correct `sizes`, lazy below the fold.
  - No layout shift — reserve space for every image.
  - Fonts self-hosted via `next/font`.

---

## 9. SEO & sharing — `MUST`
- `<title>` and meta description written for the club, not the framework.
- Open Graph + Twitter card tags.
- A real share image, 1200×630.
- `robots.txt`, `sitemap.xml`.
- Canonical URL set to the production domain. `NEEDS INPUT — production domain`
- Semantic HTML so the page is readable as plain text by a crawler.
- Single `h1`; headings in order.

---

## 10. Content inventory — `NEEDS INPUT`

Everything below must come from the club. **No invented facts, names, numbers, or
testimonials.**

| Slot | Placeholder location | Status |
| --- | --- | --- |
| Club name | global | ✅ Binjas Coding Club |
| College | hero, join, footer | ✅ Government Engineering College |
| Tagline / one-liner | hero, OG image | ⬜ |
| Founding year | footer | ⬜ |
| Location | footer | ⬜ |
| Contact email | footer | ⬜ |
| Logo file | nav, footer | ⬜ |
| Activity list (3–6) | about cards | ⬜ |
| Stats | stats bar | ⬜ |
| **The hackathon**: name, date, theme, summary, story, participant/team counts, photos | hackathons | ⬜ |
| Events | events | ⬜ |
| Team roster + photos | team | ⬜ |
| FAQ answers (4) | faq | ⬜ |
| Social URLs | footer | ⬜ |
| Production domain | metadata, sitemap, robots | ⬜ |

### 10.1 Hackathon photo requirements

- 1600 × 1000 px for the cover (matches the 16:10 slot). Gallery thumbnails are 4:3.
- PNG or WebP, under 300 KB each. `next/image` handles resizing — do not pre-export
  multiple sizes.
- Captions written for a human; `alt` written for a screen reader, describing what is
  visible in that specific frame.

---

## 11. Technical acceptance criteria

The build is done when all of these pass:

1. `npm run lint` — clean, no errors.
2. `npm run typecheck` — clean under `strict`.
3. `npm run build` — succeeds, with `/` prerendered as static.
4. No `TODO`/placeholder text leaks into a build considered "launch-ready"; every
   remaining placeholder is an intentional, listed item from §10.
5. No console errors or warnings in the browser.
6. **Zero occurrences of recruitment copy**: no "join", signup, register, membership,
   WhatsApp or Discord link anywhere in the rendered HTML.
7. Keyboard-only pass: tab through the whole page, all interactive elements reachable,
   focus always visible, Escape closes the mobile menu.
8. Lighthouse ≥ 95 across Performance / Accessibility / Best Practices / SEO.
9. Verified at 360px, 768px, 1024px, 1440px with no overflow or clipping.
10. Every nav link resolves to a section that is actually rendered; every external link has
    `target="_blank"` + `rel="noopener noreferrer"`.
11. Every section shares the same left edge, gutter and header-to-content gap, and all
    sections sit on one vertical rhythm.
12. FAQ answers are readable with JavaScript disabled.
13. No coloured text on a light background uses a raw accent — only the darkened `-ink`
    variants. Verified with a contrast checker, not by eye.

---

## 12. Out of scope (v1)

- Any route beyond `/`.
- Signups, registration, applications, payments, ticketing — the club is not accepting
  anyone (§1.1).
- CMS, database, auth.
- Blog engine, comment system.
- Analytics beyond optionally adding a privacy-respecting one later.
- i18n / multi-language.
- Dark/light theme switcher (design is fixed to one theme in v1).
- Progressive web app / offline support.
- A design-token pipeline beyond the CSS custom properties in `globals.css`.

---

## 13. Open questions

1. Is the five-accent palette right, or does the club have its own brand colours?
   Re-colouring is a seven-token change (§8, `docs/DESIGN.md` §9).
2. Is the club official or student-run? Should the college's full name appear in the footer?
3. Where does the club announce things? Needed for the "How can I stay updated?" answer.
4. How many hackathons have there been, and is the college one the only case study?
5. Any events to list, or should that section be dropped?
6. Should member/team photos be shown?

---

## 14. Change log

| Date | Version | Change | By |
| --- | --- | --- | --- |
| 2026-10-06 | 2.0 | **Senior Architecture Update: Admin Portal & Dynamic Provider System.** Introduced full Admin Panel (`/admin`, `/admin/login`, `/admin/events`) and Provider-managed backend architecture. Core architectural rule: zero custom Next.js `/api/` routes; credentials and auth tokens are handled directly in the BaaS Provider, not the admin. Created `AuthProvider` and `EventsProvider` dynamic synchronization layer allowing real-time event updates to reflect on the public landing page. Full aesthetic alignment with the GEC Banka design system. | Vivek |
| 2026-10-04 | 1.4 | **Theme replaced.** Swapped the neo-brutalist system for a clean flat light theme: white canvas, hairline borders, soft shadows, five colour-filled icon tiles, pastel avatar backdrops, dark rounded footer, and Outfit/Plus Jakarta Sans. Added shared Carousel, section headers with actions, contrast re-audited. | Vivek |
| 2026-10-04 | 1.3 | Informational-only site. Removed all recruitment: join CTA section, nav CTA, join URL, and the join/fee FAQ questions. Replaced Projects with Hackathons around the college hackathon. Set college to Government Engineering College. | Vivek |
| 2026-10-04 | 1.2 | Full visual redesign to neo-brutalist direction. | Vivek |
| 2026-10-04 | 1.1 | Expanded Projects showcase with filters and lightbox. | Vivek |
| 2026-10-04 | 1.0 | Initial PRD | Vivek |