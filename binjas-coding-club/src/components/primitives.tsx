import type { ReactNode } from "react";
import type { Tone } from "@/content/site";
import { ArrowRightIcon } from "./icons";

/**
 * Layout primitives. Every section renders through `Section` + `SectionHeader`
 * so gutters, vertical rhythm and the header row are identical by construction.
 */

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-[1200px] px-5 sm:px-6 ${className}`}>{children}</div>
  );
}

const TONES = {
  white: "bg-white dark:bg-[#070b14]",
  surface: "bg-surface dark:bg-[#090e1c]",
} as const;

export function Section({
  id,
  tone = "white",
  children,
  className = "",
}: {
  id: string;
  tone?: keyof typeof TONES;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`${TONES[tone]} py-16 sm:py-20 transition-colors duration-200 ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}

export function Eyebrow({
  children,
  dot = "accent",
}: {
  children: ReactNode;
  dot?: Tone;
}) {
  return (
    <span className="eyebrow">
      <span aria-hidden="true" className={`size-1.5 rounded-full ${TILE_DOT[dot]}`} />
      {children}
    </span>
  );
}

/**
 * Section header row: eyebrow + title + body on the left, an optional text link
 * on the right. Stacks on narrow screens.
 */
export function SectionHeader({
  eyebrow,
  title,
  body,
  action,
  dot,
}: {
  eyebrow?: string;
  title: string;
  body?: string;
  action?: { label: string; href: string };
  dot?: Tone;
}) {
  return (
    <div className="mb-8 flex flex-col gap-4 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
      <div className="max-w-2xl">
        {eyebrow ? <Eyebrow dot={dot}>{eyebrow}</Eyebrow> : null}
        <h2 className="mt-3 text-2xl font-semibold tracking-tight text-ink sm:text-[28px] dark:text-white">
          {title}
        </h2>
        {body ? <p className="mt-2 text-sm leading-relaxed text-body sm:text-[15px] dark:text-slate-400">{body}</p> : null}
      </div>
      {action ? (
        <a href={action.href} className="text-link shrink-0 dark:text-blue-400 dark:hover:text-blue-300">
          {action.label}
          <ArrowRightIcon className="size-4" />
        </a>
      ) : null}
    </div>
  );
}

/** Tile fill + matching glyph colour. Yellow is the one tile with a dark glyph. */
export const TILE_FILL: Record<Tone, string> = {
  accent: "bg-accent",
  red: "bg-accent-red",
  green: "bg-accent-green",
  purple: "bg-accent-purple",
  yellow: "bg-accent-yellow",
};

export const TILE_DOT: Record<Tone, string> = {
  accent: "bg-accent",
  red: "bg-accent-red",
  green: "bg-accent-green",
  purple: "bg-accent-purple",
  yellow: "bg-accent-yellow",
};

export const TILE_INK: Record<Tone, string> = {
  accent: "text-white",
  red: "text-white",
  green: "text-white",
  purple: "text-white",
  yellow: "text-on-yellow",
};

export function IconTile({
  tone,
  size = "md",
  className = "",
  children,
}: {
  tone: Tone;
  size?: "sm" | "md" | "lg";
  className?: string;
  children: ReactNode;
}) {
  const sizing =
    size === "lg"
      ? "size-12 rounded-[14px]"
      : size === "sm"
        ? "size-8 rounded-[10px]"
        : "size-11 rounded-xl";
  return (
    <span
      aria-hidden="true"
      className={`tile ${sizing} ${TILE_FILL[tone]} ${TILE_INK[tone]} ${className}`}
    >
      {children}
    </span>
  );
}
