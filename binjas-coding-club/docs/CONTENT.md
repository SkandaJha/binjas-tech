# Content guide

Everything is in `src/content/site.ts`. Fields and what they drive:

| Export | Drives |
| --- | --- |
| `brand`, `club` | Navbar and footer text, logo path, email, location, production URL |
| `hero` | Headline area: sub-headline, buttons, sticker text |
| `stats` | The four numbers under the hero. `null` hides a stat; all `null` hides the bar |
| `about` | The "What We Do" activity cards |
| `hackathons`, `hackathonHeading` | Hackathon data used by the Hackathons section |
| `events`, `eventsHeading` | Events section and its filter tabs |
| `teamGroups`, `teamHeading` | Members section, in the order written |
| `requestKinds`, `requestTypes`, `requestHeading` | Request section |
| `roadmaps`, `roadmapHeading` | Roadmap.sh section |
| `faqs`, `faqHeading` | FAQ |
| `socials`, `footer` | Social icons and footer text |
| `navLinks` | Navbar and footer links. Sections with no content are dropped automatically |

## Logo

Put the logo at `public/logo.png` (navbar, footer, share image) and the same file at `src/app/icon.png` (browser tab).
`club.logo` is the path. Set it to `null` to show a neutral `</>` placeholder.

## Rules

- Do not invent facts, names or numbers. Leave `TODO` until you have the real value.
- Empty arrays and `null` numbers hide an element instead of showing a broken one.
