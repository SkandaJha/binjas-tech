import type { ReactElement, SVGProps } from "react";
import type { ActivityIcon, SocialPlatform, Tone } from "@/content/site";

type GlyphProps = SVGProps<SVGSVGElement>;

function Glyph({ children, ...props }: GlyphProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {children}
    </svg>
  );
}

function Solid({ children, ...props }: GlyphProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false" {...props}>
      {children}
    </svg>
  );
}

/* ---- interface ---------------------------------------------------------- */

export function ArrowRightIcon(props: GlyphProps) {
  return (
    <Glyph {...props}>
      <path d="M4 12h15M13 6l6 6-6 6" />
    </Glyph>
  );
}

export function ArrowDownIcon(props: GlyphProps) {
  return (
    <Glyph {...props}>
      <path d="M12 5v14M6 13l6 6 6-6" />
    </Glyph>
  );
}

export function ChevronLeftIcon(props: GlyphProps) {
  return (
    <Glyph {...props}>
      <path d="M15 5l-7 7 7 7" />
    </Glyph>
  );
}

export function ChevronRightIcon(props: GlyphProps) {
  return (
    <Glyph {...props}>
      <path d="M9 5l7 7-7 7" />
    </Glyph>
  );
}

export function MenuIcon(props: GlyphProps) {
  return (
    <Glyph {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </Glyph>
  );
}

export function CloseIcon(props: GlyphProps) {
  return (
    <Glyph {...props}>
      <path d="M6 6l12 12M18 6L6 18" />
    </Glyph>
  );
}

export function CheckIcon(props: GlyphProps) {
  return (
    <Glyph {...props}>
      <path d="M5 13l4 4L19 7" />
    </Glyph>
  );
}

export function MailIcon(props: GlyphProps) {
  return (
    <Glyph {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="M3.6 6.8l8.4 6 8.4-6" />
    </Glyph>
  );
}

export function MapPinIcon(props: GlyphProps) {
  return (
    <Glyph {...props}>
      <path d="M12 21s7-5.6 7-11a7 7 0 10-14 0c0 5.4 7 11 7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </Glyph>
  );
}

export function HeartIcon(props: GlyphProps) {
  return (
    <Glyph {...props}>
      <path d="M12 20s-7-4.4-7-9.3A4.2 4.2 0 0112 8a4.2 4.2 0 017 2.7C19 15.6 12 20 12 20z" />
    </Glyph>
  );
}

export function CodeIcon(props: GlyphProps) {
  return (
    <Glyph {...props}>
      <path d="M9 7l-5 5 5 5M15 7l5 5-5 5" />
    </Glyph>
  );
}

export function BracesIcon(props: GlyphProps) {
  return (
    <Glyph {...props}>
      <path d="M9 4c-1.7 0-2.5 1-2.5 2.5V9c0 1.4-.6 2-2 2 1.4 0 2 .6 2 2v2.5C6.5 19 7.3 20 9 20M15 4c1.7 0 2.5 1 2.5 2.5V9c0 1.4.6 2 2 2-1.4 0-2 .6-2 2v2.5c0 1.5-.8 2.5-2.5 2.5" />
    </Glyph>
  );
}

export function WalletIcon(props: GlyphProps) {
  return (
    <Glyph {...props}>
      <path d="M17 7V6a2 2 0 00-2-2H6a2.5 2.5 0 00-2.5 2.5" />
      <rect x="3.5" y="6.5" width="17" height="13" rx="2.5" />
      <path d="M16 13h2.5" />
    </Glyph>
  );
}

/* ---- feature tiles ------------------------------------------------------ */

export function TrophyIcon(props: GlyphProps) {
  return (
    <Glyph {...props}>
      <path d="M8 4h8v5a4 4 0 01-8 0z" />
      <path d="M8 5.5H5.5V7A3 3 0 008.5 10M16 5.5h2.5V7a3 3 0 01-3 3M12 13v3.5M9 20h6M10 16.5h4" />
    </Glyph>
  );
}

export function UsersIcon(props: GlyphProps) {
  return (
    <Glyph {...props}>
      <circle cx="9" cy="8.5" r="3" />
      <path d="M3.5 19.5a5.5 5.5 0 0111 0M16 6.2a3 3 0 010 5.6M17.5 14.6a5.5 5.5 0 013 4.9" />
    </Glyph>
  );
}

export function CalendarIcon(props: GlyphProps) {
  return (
    <Glyph {...props}>
      <rect x="3.5" y="5" width="17" height="15" rx="2.5" />
      <path d="M3.5 9.5h17M8 3v4M16 3v4" />
    </Glyph>
  );
}

export function ClockIcon(props: GlyphProps) {
  return (
    <Glyph {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </Glyph>
  );
}

export function RocketIcon(props: GlyphProps) {
  return (
    <Glyph {...props}>
      <path d="M12 3c3.5 2 5.5 5.5 5.5 9.5L14 16h-4l-3.5-3.5C6.5 8.5 8.5 5 12 3z" />
      <path d="M9.5 16.5L7 21l3.5-1.5M14.5 16.5L17 21l-3.5-1.5" />
      <circle cx="12" cy="10" r="1.75" />
    </Glyph>
  );
}

export function MicIcon(props: GlyphProps) {
  return (
    <Glyph {...props}>
      <rect x="9" y="3" width="6" height="11" rx="3" />
      <path d="M5.5 11.5a6.5 6.5 0 0013 0M12 18v3" />
    </Glyph>
  );
}

/* ---- social (solid brand marks) ------------------------------------------ */

/*
 * Brand marks are the official filled glyphs, not outlined reconstructions —
 * an outline of the GitHub octocat or the LinkedIn "in" is not that brand's
 * logo and reads as a generic icon at 18px. Generic UI icons above stay as
 * strokes; only brand marks are solid.
 */

export function GithubIcon(props: GlyphProps) {
  return (
    <Solid {...props}>
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23a11.4 11.4 0 013-.405c1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </Solid>
  );
}

export function LinkedinIcon(props: GlyphProps) {
  return (
    <Solid {...props}>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.44-2.14 2.94v5.66H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 11-.01-4.13 2.06 2.06 0 01.01 4.13zm1.78 13.02H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
    </Solid>
  );
}

export function InstagramIcon(props: GlyphProps) {
  return (
    <Solid {...props}>
      <path d="M12 2.16c3.2 0 3.58.02 4.85.07 1.17.05 1.8.25 2.22.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.59-.07 4.85c-.06 1.17-.26 1.8-.42 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.59-.01-4.86-.07c-1.17-.06-1.81-.26-2.23-.42-.57-.22-.96-.48-1.38-.9-.42-.42-.69-.82-.9-1.38-.16-.42-.36-1.06-.42-2.23-.05-1.26-.06-1.65-.06-4.84s.01-3.59.06-4.86c.06-1.17.25-1.81.42-2.23.21-.57.48-.96.9-1.38.42-.42.81-.69 1.38-.9.42-.16 1.05-.36 2.22-.42 1.28-.04 1.65-.06 4.86-.06zM12 0C8.74 0 8.33.01 7.05.07c-1.28.06-2.15.26-2.91.56-.79.3-1.46.72-2.13 1.38-.66.67-1.08 1.34-1.38 2.13-.3.76-.5 1.63-.56 2.91C.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.28.26 2.15.56 2.91.3.79.72 1.46 1.38 2.13.67.66 1.34 1.08 2.13 1.38.76.3 1.63.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.28-.06 2.15-.26 2.91-.56.79-.3 1.46-.72 2.13-1.38.66-.67 1.08-1.34 1.38-2.13.3-.76.5-1.63.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.28-.26-2.15-.56-2.91-.3-.79-.72-1.46-1.38-2.13C21.31 1.35 20.65.93 19.86.63c-.76-.3-1.63-.5-2.91-.56C15.67.01 15.26 0 12 0zm0 5.84a6.16 6.16 0 100 12.32 6.16 6.16 0 000-12.32zM12 16a4 4 0 110-8 4 4 0 010 8zm7.85-10.4a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
    </Solid>
  );
}

export function DiscordIcon(props: GlyphProps) {
  return (
    <Solid {...props}>
      <path d="M20.32 4.37a19.8 19.8 0 00-4.93-1.51 13.8 13.8 0 00-.64 1.28 18.3 18.3 0 00-5.5 0 12.6 12.6 0 00-.64-1.28c-1.71.29-3.37.8-4.93 1.51A20.3 20.3 0 000 18.06a19.9 19.9 0 005.93 3.03c.48-.66.91-1.36 1.28-2.1-.7-.26-1.37-.59-2-.97.17-.13.33-.26.49-.4a14.2 14.2 0 0012.6 0c.16.14.32.27.49.4-.63.38-1.3.71-2 .97.37.74.8 1.44 1.28 2.1a19.8 19.8 0 005.93-3.03 20.1 20.1 0 00-3.68-13.69zM8.02 15.33c-1.18 0-2.16-1.08-2.16-2.42 0-1.33.95-2.42 2.16-2.42 1.21 0 2.18 1.1 2.16 2.42 0 1.34-.95 2.42-2.16 2.42zm7.97 0c-1.18 0-2.15-1.08-2.15-2.42 0-1.33.95-2.42 2.15-2.42 1.22 0 2.18 1.1 2.16 2.42 0 1.34-.94 2.42-2.16 2.42z" />
    </Solid>
  );
}

/* ---- decorative --------------------------------------------------------- */

export function SparkleIcon({ className = "", ...props }: GlyphProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
      className={className}
      {...props}
    >
      <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
    </svg>
  );
}

export function SunIcon(props: GlyphProps) {
  return (
    <Glyph {...props}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
    </Glyph>
  );
}

export function MoonIcon(props: GlyphProps) {
  return (
    <Glyph {...props}>
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </Glyph>
  );
}

/* ---- mappings ----------------------------------------------------------- */

const activityGlyphs: Record<ActivityIcon, (props: GlyphProps) => ReactElement> = {
  code: CodeIcon,
  trophy: TrophyIcon,
  github: GithubIcon,
  mentor: UsersIcon,
  mic: MicIcon,
  rocket: RocketIcon,
  workshop: UsersIcon,
};

export function ActivityGlyph({ name, ...props }: GlyphProps & { name: ActivityIcon }) {
  const Cmp = activityGlyphs[name];
  return <Cmp {...props} />;
}

const statGlyphs: Record<Tone, (props: GlyphProps) => ReactElement> = {
  accent: UsersIcon,
  red: CalendarIcon,
  green: UsersIcon,
  purple: TrophyIcon,
  yellow: TrophyIcon,
};

export function StatGlyph({ tone, ...props }: GlyphProps & { tone: Tone }) {
  const Cmp = statGlyphs[tone];
  return <Cmp {...props} />;
}

const socialGlyphs: Record<SocialPlatform, (props: GlyphProps) => ReactElement> = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  instagram: InstagramIcon,
  discord: DiscordIcon,
};

export function SocialGlyph({ platform, ...props }: GlyphProps & { platform: SocialPlatform }) {
  const Cmp = socialGlyphs[platform];
  return <Cmp {...props} />;
}

export { Solid };
