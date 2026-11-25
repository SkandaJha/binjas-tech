import Image from "next/image";
import React from "react";

/**
 * ---------------------------------------------------------------------------
 * CAMPUS TECHNOLOGY SHOWCASE — COMPACT SCREEN-FIT LAYOUT
 * ---------------------------------------------------------------------------
 * Optimized to fit entirely within standard screen viewports without scrolling.
 * Features:
 * - Scaled proportions & tighter gutters
 * - Sleek 2x2 activity cards with micro-tiles
 * - Streamlined College Portal browser window
 * - Compact "Latest Updates" floating card
 * - Integrated "OUR APPROACH" horizontal 4-step workflow
 * - Handwritten annotations & doodles
 */

export interface ActivityCardData {
  id: string;
  title: string;
  description: string;
  icon: "globe" | "calendar" | "code" | "settings";
  accent: "blue" | "red" | "green" | "purple";
}

export interface LatestUpdateItem {
  id: string;
  day: string;
  month: string;
  title: string;
  subtitle: string;
  href?: string;
  tagColor?: string;
}

export interface ApproachStep {
  step: string;
  title: string;
  description: string;
  colorScheme: "blue" | "amber" | "green" | "purple";
}

const ACTIVITIES: ActivityCardData[] = [
  {
    id: "website",
    title: "College Website",
    description: "Supporting online presence with updates, features and maintenance.",
    icon: "globe",
    accent: "blue",
  },
  {
    id: "events",
    title: "Programs & Events",
    description: "Keeping students informed about upcoming events and workshops.",
    icon: "calendar",
    accent: "red",
  },
  {
    id: "projects",
    title: "Digital Projects",
    description: "Building useful digital solutions for real campus needs.",
    icon: "code",
    accent: "green",
  },
  {
    id: "support",
    title: "Technical Support",
    description: "Helping departments & student bodies with technical execution.",
    icon: "settings",
    accent: "purple",
  },
];

const LATEST_UPDATES: LatestUpdateItem[] = [
  {
    id: "up-1",
    day: "15",
    month: "OCT",
    title: "Tech Talk on AI & ML",
    subtitle: "Organized by BINJAS Coding Club",
    href: "#",
    tagColor: "bg-slate-100 text-slate-800",
  },
  {
    id: "up-2",
    day: "12",
    month: "OCT",
    title: "Web Development Workshop",
    subtitle: "Open for all students",
    href: "#",
    tagColor: "bg-slate-100 text-slate-800",
  },
  {
    id: "up-3",
    day: "28",
    month: "SEP",
    title: "Hacklith 2024",
    subtitle: "College Level Hackathon",
    href: "#hackathons",
    tagColor: "bg-red-50 text-red-600",
  },
  {
    id: "up-4",
    day: "21",
    month: "SEP",
    title: "New Notice",
    subtitle: "Exam form submission deadline",
    href: "#",
    tagColor: "bg-purple-50 text-purple-700",
  },
];

const APPROACH_STEPS: ApproachStep[] = [
  {
    step: "01",
    title: "Identify",
    description: "Understand a technical campus need.",
    colorScheme: "blue",
  },
  {
    step: "02",
    title: "Build",
    description: "Students collaborate on the solution.",
    colorScheme: "amber",
  },
  {
    step: "03",
    title: "Publish",
    description: "Digital tools reach the college.",
    colorScheme: "green",
  },
  {
    step: "04",
    title: "Improve",
    description: "Continuously refine and support.",
    colorScheme: "purple",
  },
];

function ActivityIcon({ name, className = "size-4" }: { name: ActivityCardData["icon"]; className?: string }) {
  if (name === "globe") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    );
  }
  if (name === "calendar") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    );
  }
  if (name === "code") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  );
}

export function CampusTechnology() {
  return (
    <section id="about" className="relative bg-[#F8FAFC] pt-1.5 sm:pt-2 pb-6 sm:pb-8 transition-colors duration-200 dark:bg-[#070b14]">
      <div className="mx-auto w-full max-w-[1360px] px-3 sm:px-6">
        <div className="relative overflow-hidden rounded-[24px] sm:rounded-[32px] lg:rounded-[40px] border border-slate-200/80 bg-white p-4.5 sm:p-6 lg:p-7 shadow-[0_16px_40px_-20px_rgba(15,23,42,0.06),0_1px_3px_rgba(15,23,42,0.03)] transition-colors duration-200 dark:border-slate-800/80 dark:bg-[#0c1424] dark:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.7)]">

          {/* Micro dot grid pattern */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-[0.35] dark:opacity-[0.2]"
            style={{
              backgroundImage: "radial-gradient(#94A3B8 1.25px, transparent 1.25px)",
              backgroundSize: "20px 20px",
            }}
          />

          {/* Top-left math doodle */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute top-4 left-6 text-emerald-500 font-bold text-lg opacity-60 select-none hidden sm:block"
          >
            ÷
          </div>

          {/* Top-right script annotation */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute top-4 right-8 z-20 hidden lg:flex items-center gap-1.5 select-none"
          >
            <span className="font-[family-name:var(--font-script)] text-base text-slate-700 dark:text-slate-300 font-semibold leading-tight tracking-wide">
              Supporting a smarter campus
            </span>
            <svg className="w-5 h-5 text-slate-400 rotate-[45deg]" viewBox="0 0 32 32" fill="none">
              <path d="M6 6C14 14 20 20 26 26" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <path d="M20 26L26 26L26 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          {/* ====================================================================
              TOP SECTION: TWO COLUMNS (COMPACT)
              ==================================================================== */}
          <div className="relative z-10 grid gap-6 lg:grid-cols-12 lg:items-center">

            {/* LEFT COLUMN: Headings & 4 Activity Cards */}
            <div className="lg:col-span-6 flex flex-col justify-center">

              {/* Eyebrow badge */}
              <div>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white/90 px-3 py-0.5 text-[10px] font-bold tracking-wider text-slate-700 uppercase shadow-xs dark:border-slate-700/80 dark:bg-[#131f38] dark:text-slate-300">
                  <span className="size-1.5 rounded-full bg-[#00A3FF] shadow-[0_0_8px_#00A3FF]" />
                  CAMPUS TECHNOLOGY
                </span>
              </div>

              {/* Main Headline */}
              <h2 className="mt-2.5 text-[24px] sm:text-[30px] lg:text-[34px] font-bold tracking-[-0.03em] leading-[1.14] text-slate-900 dark:text-white">
                Technology that keeps our{" "}
                <span className="relative inline-block text-[#2563EB] dark:text-[#38BDF8]">
                  campus moving.
                  {/* Curved underline */}
                  <svg
                    className="absolute -bottom-1 left-0 w-full h-2.5 text-[#6366F1]"
                    viewBox="0 0 200 12"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M2 8C55 2 145 2 198 8"
                      stroke="currentColor"
                      strokeWidth="3.2"
                      strokeLinecap="round"
                    />
                  </svg>
                  {/* Yellow spark burst */}
                  <span
                    aria-hidden="true"
                    className="absolute -top-2.5 -right-3.5 text-[#F59E0B] text-xs font-bold select-none"
                  >
                    ✦
                  </span>
                </span>
              </h2>

              {/* Subtitle */}
              <p className="mt-2 max-w-[480px] text-[12.5px] sm:text-[13px] text-slate-500 font-normal leading-relaxed dark:text-slate-300">
                BINJAS Coding Club contributes to the college&apos;s digital ecosystem —
                from website updates and events to technical student-led solutions.
              </p>

              {/* 4 Activity Cards in 2x2 Grid */}
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {ACTIVITIES.map((act) => {
                  const colorMap = {
                    blue: {
                      tile: "bg-[#EFF6FF] text-[#2563EB] dark:bg-blue-950/70 dark:text-blue-400",
                      confetti: "text-blue-400",
                    },
                    red: {
                      tile: "bg-[#FEF2F2] text-[#EF4444] dark:bg-rose-950/70 dark:text-rose-400",
                      confetti: "text-red-400",
                    },
                    green: {
                      tile: "bg-[#F0FDF4] text-[#16A34A] dark:bg-emerald-950/70 dark:text-emerald-400",
                      confetti: "text-emerald-400",
                    },
                    purple: {
                      tile: "bg-[#FAF5FF] text-[#9333EA] dark:bg-purple-950/70 dark:text-purple-400",
                      confetti: "text-purple-400",
                    },
                  }[act.accent];

                  return (
                    <div
                      key={act.id}
                      className="group relative rounded-xl border border-slate-200/80 bg-white p-3 sm:p-3.5 shadow-xs transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm hover:border-slate-300 dark:border-slate-800 dark:bg-[#111a2e] hover:dark:border-slate-700"
                    >
                      {/* Decorative dashes at top-right */}
                      <span
                        aria-hidden="true"
                        className={`absolute top-2.5 right-2.5 text-[10px] font-bold tracking-tight select-none opacity-70 ${colorMap.confetti}`}
                      >
                        {"//"}
                      </span>

                      {/* Icon Tile */}
                      <div className={`flex size-8.5 items-center justify-center rounded-lg ${colorMap.tile}`}>
                        <ActivityIcon name={act.icon} className="size-4" />
                      </div>

                      {/* Card Content */}
                      <h3 className="mt-2.5 text-[13px] font-bold text-slate-900 group-hover:text-[#2563EB] dark:text-white dark:group-hover:text-[#38BDF8] transition-colors leading-tight">
                        {act.title}
                      </h3>
                      <p className="mt-1 text-[11px] leading-snug text-slate-500 line-clamp-2 dark:text-slate-400">
                        {act.description}
                      </p>

                      {/* Arrow action button at bottom-right */}
                      <div className="mt-1.5 flex justify-end">
                        <span className="flex size-5.5 items-center justify-center rounded-full border border-slate-200 text-slate-400 transition-all duration-200 group-hover:border-slate-400 group-hover:text-slate-900 group-hover:translate-x-0.5 dark:border-slate-700 dark:text-slate-400 dark:group-hover:border-slate-500 dark:group-hover:text-white">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="size-2.5">
                            <line x1="5" y1="12" x2="19" y2="12" />
                            <polyline points="12 5 19 12 12 19" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>

            {/* RIGHT COLUMN: Compact Browser Mockup + Updates Card */}
            <div className="lg:col-span-6 relative mt-4 lg:mt-0 flex justify-center">

              {/* Main Browser Mockup Container */}
              <div className="relative w-full max-w-[440px] xl:max-w-[470px]">

                {/* Floating "Updated from Admin" sync badge */}
                <div className="absolute -top-2.5 right-3 z-30 flex items-center gap-1.5 rounded-full border border-slate-200/90 bg-white/95 px-2.5 py-0.5 shadow-sm backdrop-blur-xs select-none dark:border-slate-700/80 dark:bg-[#131f38] dark:shadow-none">
                  <span className="text-[10.5px] font-semibold text-slate-700 dark:text-slate-200">Updated from Admin</span>
                  <span className="text-[#10B981] font-bold text-xs">⇄</span>
                </div>

                {/* Floating Code Glyph Squircle on Left Edge */}
                <div className="float-slow absolute -left-3.5 top-1/4 z-30 hidden sm:flex size-8.5 items-center justify-center rounded-lg bg-white border border-slate-100 shadow-md text-[#2563EB] font-bold select-none dark:bg-[#131f38] dark:border-slate-700 dark:text-blue-400 dark:shadow-none">
                  <span className="font-mono text-xs">&lt;/&gt;</span>
                </div>

                {/* College Portal Browser Window */}
                <div className="relative overflow-hidden rounded-xl sm:rounded-2xl border border-slate-200/90 bg-white shadow-[0_14px_35px_-12px_rgba(15,23,42,0.12)] dark:border-slate-800 dark:bg-[#0c1424] dark:shadow-[0_14px_35px_-12px_rgba(0,0,0,0.6)]">

                  {/* Browser Bar */}
                  <div className="flex items-center justify-between border-b border-slate-200/80 bg-slate-50/90 px-3 py-1.5 dark:border-slate-800 dark:bg-[#090d18]">
                    {/* Traffic light dots */}
                    <div className="flex items-center gap-1">
                      <span className="size-2 rounded-full bg-[#EF4444]" />
                      <span className="size-2 rounded-full bg-[#F59E0B]" />
                      <span className="size-2 rounded-full bg-[#10B981]" />
                    </div>

                    {/* College Brand Lockup */}
                    <div className="flex items-center gap-1 text-[10px] font-semibold text-slate-700 dark:text-slate-200 truncate max-w-[200px]">
                      <span className="size-3.5 rounded-full bg-slate-900 dark:bg-blue-600 text-[7px] text-white flex items-center justify-center font-bold">G</span>
                      <span className="truncate">Government Engineering College, Banka</span>
                    </div>

                    <span className="rounded bg-[#2563EB] px-1.5 py-0.5 text-[8.5px] font-semibold text-white">Contact</span>
                  </div>

                  {/* Browser Sub-bar */}
                  <div className="hidden sm:flex items-center justify-between border-b border-slate-100 bg-white px-3 py-1 text-[9px] text-slate-500 font-medium dark:border-slate-800 dark:bg-[#0c1424] dark:text-slate-400">
                    <div className="flex items-center gap-2.5">
                      <span className="text-slate-900 dark:text-white font-semibold">Home</span>
                      <span>About</span>
                      <span>Academics</span>
                      <span>Notices</span>
                    </div>
                    <span className="text-slate-400 text-[10px]">🔍</span>
                  </div>

                  {/* Browser Viewport: College Campus Hero */}
                  <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-900">
                    <Image
                      src="/college_campus.jpg"
                      alt="Government Engineering College, Banka Campus"
                      fill
                      priority
                      className="object-cover object-center"
                      sizes="(max-width: 1024px) 100vw, 470px"
                    />

                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/35 to-slate-950/15" />

                    {/* Hero copy inside browser */}
                    <div className="absolute inset-x-0 bottom-0 p-3.5 sm:p-4 text-white">
                      <span className="inline-block rounded bg-white/20 px-1.5 py-0.2 text-[8px] font-semibold tracking-wider text-white backdrop-blur-xs uppercase">
                        Estd. 2019
                      </span>

                      <h4 className="mt-0.5 text-sm sm:text-base font-bold tracking-tight text-white leading-tight truncate">
                        Government Engineering College, Banka
                      </h4>
                      <p className="text-[10px] text-white/80 font-medium">
                        Knowledge • Innovation • Progress
                      </p>

                      <div className="mt-2 flex items-center gap-1.5">
                        <span className="rounded-md bg-[#2563EB] px-2 py-0.5 text-[9.5px] font-semibold text-white shadow-2xs inline-flex items-center gap-0.5">
                          Explore College →
                        </span>
                        <span className="rounded-md border border-white/40 bg-white/10 px-2 py-0.5 text-[9.5px] font-medium text-white backdrop-blur-xs">
                          Notices
                        </span>
                      </div>
                    </div>
                  </div>

                </div>

                {/* Floating "Latest Updates" Card (Compact) */}
                <div className="relative sm:absolute sm:-bottom-5 sm:-right-4 mt-3 sm:mt-0 z-30 w-full sm:w-[280px] xl:w-[295px] rounded-xl border border-slate-200/90 bg-white/95 p-3 shadow-[0_16px_35px_-8px_rgba(15,23,42,0.16)] backdrop-blur-sm dark:border-slate-700/80 dark:bg-[#0f182e]/95 dark:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.7)]">

                  {/* Header Row */}
                  <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-1.5">
                    <div className="flex items-center gap-1">
                      <span className="text-[#F59E0B] text-xs">⚡</span>
                      <h4 className="text-[12px] font-bold text-slate-900 dark:text-white tracking-tight">
                        Latest Updates
                      </h4>
                    </div>
                    <a
                      href="#events"
                      className="text-[10px] font-semibold text-[#2563EB] dark:text-[#38BDF8] hover:underline inline-flex items-center"
                    >
                      View All →
                    </a>
                  </div>

                  {/* Updates list */}
                  <div className="mt-1.5 space-y-1">
                    {LATEST_UPDATES.map((item) => (
                      <a
                        key={item.id}
                        href={item.href ?? "#"}
                        className="group flex items-center justify-between gap-2 rounded-lg p-1 transition-colors hover:bg-slate-50 dark:hover:bg-slate-800/60"
                      >
                        <div className="flex items-center gap-2 min-w-0">
                          {/* Date Block */}
                          <div className={`flex flex-col items-center justify-center size-7.5 rounded-md border border-slate-200/60 dark:border-slate-700 font-bold shrink-0 ${item.tagColor} dark:bg-[#182746] dark:text-white`}>
                            <span className="text-[10px] leading-none">{item.day}</span>
                            <span className="text-[7px] font-medium tracking-tight text-slate-500 dark:text-slate-400 uppercase mt-0.5">{item.month}</span>
                          </div>

                          {/* Titles */}
                          <div className="min-w-0">
                            <p className="truncate text-[11px] font-bold text-slate-800 group-hover:text-[#2563EB] dark:text-slate-100 dark:group-hover:text-[#38BDF8] transition-colors leading-tight">
                              {item.title}
                            </p>
                            <p className="truncate text-[9.5px] text-slate-400 dark:text-slate-400 leading-tight">
                              {item.subtitle}
                            </p>
                          </div>
                        </div>

                        {/* Arrow */}
                        <span className="text-slate-300 group-hover:text-slate-700 dark:text-slate-500 dark:group-hover:text-white transition-colors shrink-0 text-[10px] font-bold">
                          →
                        </span>
                      </a>
                    ))}
                  </div>

                </div>

                {/* Bottom annotation */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -bottom-7 left-6 z-20 hidden lg:flex items-center gap-1 select-none"
                >
                  <span className="font-[family-name:var(--font-script)] text-sm text-slate-600 dark:text-slate-300 font-semibold leading-none">
                    From ideas to a better campus
                  </span>
                  <svg className="w-12 h-1 text-[#2563EB]" viewBox="0 0 100 8" fill="none">
                    <path d="M2 5C30 2 70 2 98 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>

              </div>

            </div>

          </div>

          {/* ====================================================================
              BOTTOM SECTION: "OUR APPROACH" STEPPER (COMPACT BAR)
              ==================================================================== */}
          <div className="relative z-10 mt-6 sm:mt-7 border-t border-slate-200/80 dark:border-slate-800 pt-3.5 sm:pt-4">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-4 items-center">

              {/* Eyebrow badge on the left */}
              <div className="lg:col-span-2">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-2.5 py-0.5 text-[10px] font-bold tracking-wider text-slate-700 uppercase shadow-xs dark:border-slate-700/80 dark:bg-[#131f38] dark:text-slate-300">
                  <span className="size-1.5 rounded-full bg-[#2563EB] shadow-[0_0_8px_#2563EB]" />
                  OUR APPROACH
                </span>
              </div>

              {/* 4 Connected Step Items */}
              <div className="lg:col-span-10 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3 items-center">
                {APPROACH_STEPS.map((step, index) => {
                  const badgeColors = {
                    blue: "bg-[#EFF6FF] text-[#2563EB] dark:bg-blue-950 dark:text-blue-400",
                    amber: "bg-[#FEF3C7] text-[#D97706] dark:bg-amber-950 dark:text-amber-400",
                    green: "bg-[#DCFCE7] text-[#16A34A] dark:bg-emerald-950 dark:text-emerald-400",
                    purple: "bg-[#F3E8FF] text-[#9333EA] dark:bg-purple-950 dark:text-purple-400",
                  }[step.colorScheme];

                  return (
                    <div key={step.step} className="flex items-center gap-2.5">
                      {/* Step Number Circle */}
                      <span className={`flex size-8 sm:size-8.5 shrink-0 items-center justify-center rounded-full font-bold text-xs ${badgeColors} shadow-xs`}>
                        {step.step}
                      </span>

                      {/* Step Content */}
                      <div className="min-w-0 flex-1">
                        <h4 className="text-[12.5px] font-bold text-slate-900 dark:text-white leading-snug">
                          {step.title}
                        </h4>
                        <p className="text-[10px] leading-snug text-slate-500 dark:text-slate-400 truncate">
                          {step.description}
                        </p>
                      </div>

                      {/* Connecting Arrow */}
                      {index < APPROACH_STEPS.length - 1 ? (
                        <span
                          aria-hidden="true"
                          className="hidden xl:inline-block text-slate-300 dark:text-slate-600 font-bold text-xs select-none px-1"
                        >
                          →
                        </span>
                      ) : null}
                    </div>
                  );
                })}
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
