# Design notes

## Colour

Tokens live in `src/app/globals.css` under `@theme`. Use them by name: `text-ink`, `text-body`,
`text-muted`, `border-line`, `bg-surface`, `bg-accent`, `bg-pastel-blue`, `bg-night` (footer).

- Coloured tiles (`accent`, `red`, `green`, `purple`, `yellow`) are **fills behind an icon, never body text**.
  The yellow tile is the only one with a dark glyph (`text-on-yellow`).
- Body text on white uses `text-body` or darker. Keep light-grey text to large sizes only.

## Surfaces

- Every section sits in one large rounded panel with a micro dot grid. Dark mode adds a soft blue glow at the top.
- `.card` is the rounded content card, `.panel` the wide stats panel, `.tile` the icon square,
  `.eyebrow` the pill above a heading, `.text-link` the arrow link. All are defined in `globals.css`.

## Dark mode

A `dark` class on `<html>` switches it. `src/providers.tsx` reads and sets it, remembers the choice in
`localStorage`, and an inline script in `layout.tsx` applies it before first paint.

## Type

Plus Jakarta Sans for text, Caveat (`--font-script`) for hand-written notes and doodles.

## Accessibility

Native `<details>` for the FAQ, labelled sections, a skip link, visible focus rings, and reduced-motion support.
