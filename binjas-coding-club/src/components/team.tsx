import Image from "next/image";
import type { CSSProperties, ReactElement, SVGProps } from "react";
import { teamGroups, teamHeading, type Member, type TeamGroup } from "@/content/site";
import {
  BracesIcon,
  CalendarIcon,
  CodeIcon,
  HeartIcon,
  MailIcon,
  RocketIcon,
  SparkleIcon,
  TrophyIcon,
  WalletIcon,
} from "./icons";
import { IconTile, SectionHeader, TILE_FILL } from "./primitives";

type Glyph = (props: SVGProps<SVGSVGElement>) => ReactElement;

/** One icon per team, shown in the coloured tile beside the team name. */
const GROUP_ICONS: Record<string, Glyph> = {
  leadership: TrophyIcon,
  "web-app": CodeIcon,
  "social-media": HeartIcon,
  "content-writers": BracesIcon,
  graphics: SparkleIcon,
  "event-outreach": CalendarIcon,
  "query-events": MailIcon,
  marketing: RocketIcon,
  finance: WalletIcon,
};

const PASTELS: Record<NonNullable<Member["tone"]>, string> = {
  blue: "bg-pastel-blue dark:bg-sky-950/40",
  yellow: "bg-pastel-yellow dark:bg-amber-950/40",
  pink: "bg-pastel-pink dark:bg-rose-950/40",
  purple: "bg-pastel-purple dark:bg-purple-950/40",
  teal: "bg-pastel-teal dark:bg-teal-950/40",
};

const ORDER: NonNullable<Member["tone"]>[] = ["blue", "yellow", "pink", "purple", "teal"];

/**
 * Equal spacing: for `count` people and at most `max` per row, pick the column
 * count that gives the most even rows (8 people at max 6 -> 4 + 4, not 6 + 2).
 * Each person then takes 1/cols of the row, and an incomplete last row is
 * centred, so people are spread evenly at every screen size.
 */
function balancedColumns(count: number, max: number) {
  const rows = Math.ceil(count / max);
  return Math.ceil(count / rows);
}

/** Max people per row at: base, sm, md, xl. */
const LIMITS = [3, 4, 5, 6] as const;
const LEADER_LIMITS = [2, 2, 2, 2] as const;

function initials(name: string) {
  return name
    .replace(/^(Dr|Prof)\.?\s+/i, "")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0]?.toUpperCase() ?? "")
    .join("");
}

/** Round photo with a blue ring. Falls back to initials when there is no photo. */
function Avatar({
  member,
  tone,
  large = false,
}: {
  member: Member;
  tone: NonNullable<Member["tone"]>;
  large?: boolean;
}) {
  const box = large ? "size-[104px]" : "size-[84px]";
  return (
    <div
      className={`relative ${box} overflow-hidden rounded-full border-[3px] border-blue-700 shadow-[0_8px_18px_-8px_rgba(29,78,216,0.45)] transition duration-200 group-hover:-translate-y-0.5 group-hover:shadow-[0_14px_24px_-10px_rgba(29,78,216,0.6)] motion-reduce:transition-none motion-reduce:group-hover:translate-y-0 dark:border-blue-400 ${PASTELS[tone]}`}
    >
      {member.photo ? (
        <Image
          src={member.photo}
          alt={`Photo of ${member.name}`}
          fill
          sizes={large ? "104px" : "84px"}
          className="object-cover"
        />
      ) : (
        <span
          aria-hidden="true"
          className="absolute inset-0 grid place-items-center text-2xl font-semibold text-ink/25 dark:text-white/20"
        >
          {initials(member.name)}
        </span>
      )}
    </div>
  );
}

function Person({
  member,
  index,
  large = false,
}: {
  member: Member;
  index: number;
  large?: boolean;
}) {
  const tone = member.tone ?? ORDER[index % ORDER.length];
  return (
    <li className="group flex min-w-0 basis-[calc(100%/var(--c0))] flex-col items-center px-1 text-center sm:basis-[calc(100%/var(--c1))] md:basis-[calc(100%/var(--c2))] xl:basis-[calc(100%/var(--c3))]">
      <Avatar member={member} tone={tone} large={large} />
      <h4 className="mt-2 text-[14px] leading-tight font-semibold text-ink dark:text-white">
        {member.name}
      </h4>
      <p className="mt-px text-[12.5px] font-medium text-blue-800 dark:text-blue-300">
        {member.branch ?? member.role}
      </p>
      {member.quote ? (
        <p className="mt-1.5 max-w-[240px] text-[12.5px] leading-relaxed text-muted italic dark:text-slate-400">
          &ldquo;{member.quote}&rdquo;
        </p>
      ) : null}
    </li>
  );
}

function Group({ group }: { group: TeamGroup }) {
  const Icon = GROUP_ICONS[group.id] ?? CodeIcon;
  const headingId = `team-${group.id}`;
  const count = group.members.length;
  const isLeadership = group.id === "leadership";

  const limits = isLeadership ? LEADER_LIMITS : LIMITS;
  const columns = {
    "--c0": balancedColumns(count, limits[0]),
    "--c1": balancedColumns(count, limits[1]),
    "--c2": balancedColumns(count, limits[2]),
    "--c3": balancedColumns(count, limits[3]),
  } as CSSProperties;

  return (
    <section
      aria-labelledby={headingId}
      className="card bg-white p-4 pb-5 sm:px-5 sm:pt-[18px] sm:pb-[22px] dark:bg-[#0f1a2e]"
    >
      <div className="mb-4 flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <IconTile tone={group.tone} size="sm">
            <Icon className="size-[18px]" />
          </IconTile>
          <div>
            <h3 id={headingId} className="text-base leading-tight font-semibold text-ink dark:text-white">
              {group.title}
            </h3>
            <span
              aria-hidden="true"
              className={`mt-1 block h-[3px] w-10 rounded-full ${TILE_FILL[group.tone]}`}
            />
          </div>
        </div>
        <p className="shrink-0 text-[13px] text-muted dark:text-slate-400">
          {count} {count === 1 ? "Member" : "Members"}
        </p>
      </div>

      <ul style={columns} className="flex flex-wrap justify-center gap-y-[18px]">
        {group.members.map((member, index) => (
          <Person
            key={`${group.id}-${member.name}`}
            member={member}
            index={index}
            large={isLeadership}
          />
        ))}
      </ul>
    </section>
  );
}

/**
 * The whole section sits in one large rounded panel with the same dot grid and
 * glow as the hero, so it reads as part of the same page.
 */
export function Team() {
  if (teamGroups.length === 0) return null;

  return (
    <section
      id="members"
      className="scroll-mt-24 bg-[#F8FAFC] py-4 transition-colors duration-200 sm:py-6 dark:bg-[#070b14]"
    >
      <div className="mx-auto w-full max-w-[1360px] px-3 sm:px-6">
        <div className="relative overflow-hidden rounded-[28px] border border-slate-200/80 bg-white px-3 pt-7 pb-8 shadow-[0_20px_50px_-20px_rgba(15,23,42,0.06),0_1px_3px_rgba(15,23,42,0.04)] transition-colors duration-200 sm:rounded-[36px] sm:px-5 sm:pt-9 sm:pb-10 lg:rounded-[44px] lg:px-10 lg:pt-11 lg:pb-12 dark:border-slate-800/80 dark:bg-[#0c1424] dark:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)]">
          {/* Micro dot grid */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-[0.42] dark:opacity-[0.22]"
            style={{
              backgroundImage: "radial-gradient(#94A3B8 1.25px, transparent 1.25px)",
              backgroundSize: "20px 20px",
            }}
          />
          {/* Ambient glow, dark mode only */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-40 left-1/2 h-[380px] w-[650px] -translate-x-1/2 rounded-full bg-blue-500/0 blur-[120px] dark:bg-blue-600/15"
          />

          <div className="relative z-10 mx-auto w-full max-w-[1200px]">
            <div className="[&>div]:mb-5 sm:[&>div]:mb-6">
              <SectionHeader
                eyebrow={teamHeading.eyebrow}
                title={teamHeading.heading}
                body={teamHeading.body}
              />
            </div>

            <div className="space-y-3.5">
              {teamGroups.map((group) => (
                <Group key={group.id} group={group} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
