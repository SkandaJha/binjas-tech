import React from "react";

/**
 * ---------------------------------------------------------------------------
 * HERO DECORATIVE & INTERACTIVE CARDS — BINJAS CODING CLUB
 * ---------------------------------------------------------------------------
 * Faithfully maintains the exact visual layout, 3D claymorphic squircle,
 * handwriting sticky note with pushpin, folder tabs, progress bars, and app
 * tiles, tailored specifically to Binjas Coding Club at Government Engineering College.
 */

/* ==========================================================================
   1. TOP-CENTER 3D CLAYMORPHIC APP ICON (4-Dot Squircle)
   ========================================================================== */
export function AppLogoSquircle() {
  return (
    <div
      aria-hidden="true"
      className="relative flex size-18 sm:size-20 items-center justify-center rounded-[22px] sm:rounded-[26px] bg-gradient-to-b from-white via-[#F8FAFC] to-[#EEF2F6] p-4 shadow-[0_20px_40px_-10px_rgba(15,23,42,0.22),0_8px_16px_-4px_rgba(15,23,42,0.1),inset_0_2px_4px_rgba(255,255,255,1),inset_0_-2px_4px_rgba(15,23,42,0.06)] border border-white ring-1 ring-slate-900/5 select-none transition-all duration-200 dark:from-[#1b263b] dark:via-[#0f172a] dark:to-[#080d1a] dark:border-slate-700/80 dark:shadow-[0_20px_45px_-10px_rgba(0,0,0,0.7),inset_0_1px_2px_rgba(255,255,255,0.12)] dark:ring-white/10"
    >
      {/* 2x2 grid representing binary code dots */}
      <div className="grid grid-cols-2 gap-2 sm:gap-2.5">
        {/* Top-left: vibrant cyan/blue dot */}
        <span className="size-3.5 sm:size-4 rounded-full sm:rounded-[5px] bg-[#00A3FF] shadow-[0_2px_6px_rgba(0,163,255,0.4),inset_0_1px_1px_rgba(255,255,255,0.6)] dark:shadow-[0_0_12px_rgba(0,163,255,0.85)]" />
        {/* Top-right: dark charcoal / slate dot */}
        <span className="size-3.5 sm:size-4 rounded-full sm:rounded-[5px] bg-[#111827] shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)] dark:bg-slate-700 dark:shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]" />
        {/* Bottom-left: dark charcoal / slate dot */}
        <span className="size-3.5 sm:size-4 rounded-full sm:rounded-[5px] bg-[#111827] shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)] dark:bg-slate-700 dark:shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]" />
        {/* Bottom-right: dark charcoal / slate dot */}
        <span className="size-3.5 sm:size-4 rounded-full sm:rounded-[5px] bg-[#111827] shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)] dark:bg-slate-700 dark:shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]" />
      </div>
    </div>
  );
}

/* ==========================================================================
   2. TOP-LEFT: YELLOW STICKY NOTE + RED PUSHPIN + FLOATING CHECKBOX
   ========================================================================== */
export function StickyNoteCard() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute top-4 left-3 sm:top-8 sm:left-6 lg:top-10 lg:left-10 z-20 hidden md:block select-none"
    >
      <div className="relative">
        {/* White under-paper note tilted slightly counter-clockwise */}
        <div className="absolute top-2 left-0 h-[155px] w-[170px] sm:h-[175px] sm:w-[190px] -rotate-[5deg] rounded-md bg-white border border-slate-100 shadow-[0_8px_20px_-6px_rgba(15,23,42,0.08)] dark:bg-[#131f38] dark:border-slate-800 dark:shadow-none" />

        {/* Yellow sticky note tilted clockwise */}
        <div className="relative h-[155px] w-[170px] sm:h-[175px] sm:w-[190px] rotate-[4deg] rounded-md bg-gradient-to-b from-[#FFF7A1] via-[#FEE868] to-[#FDE047] p-5 pt-6 shadow-[0_14px_30px_-6px_rgba(15,23,42,0.16)] border border-[#FACC15]/40 flex flex-col justify-between">
          {/* Red 3D pushpin */}
          <div className="absolute -top-2 left-1/2 -translate-x-1/2 flex flex-col items-center">
            {/* Sphere head */}
            <div className="size-3.5 sm:size-4 rounded-full bg-gradient-to-br from-[#F87171] via-[#EF4444] to-[#B91C1C] shadow-[0_3px_6px_rgba(0,0,0,0.35),inset_0_2px_3px_rgba(255,255,255,0.8)] ring-1 ring-black/10" />
            {/* Shadow on paper */}
            <div className="h-1 w-2.5 -mt-0.5 rounded-full bg-black/25 blur-[0.6px]" />
          </div>

          {/* Handwritten text for Binjas builders */}
          <p className="font-[family-name:var(--font-script)] text-[15px] sm:text-[17px] leading-[1.28] font-medium text-[#292524] tracking-wide">
            Brainstorm bold ideas, write clean code, and turn rough prototypes into winning hackathon solutions with ease.
          </p>
        </div>

        {/* Floating 3D Checkbox Squircle (Shipped code indicator) */}
        <div className="absolute -bottom-5 -left-4 sm:-bottom-6 sm:-left-5 z-30 flex size-14 sm:size-16 items-center justify-center rounded-[18px] bg-gradient-to-b from-white to-[#F8FAFC] border border-white shadow-[0_16px_32px_-6px_rgba(15,23,42,0.18),0_4px_8px_-2px_rgba(15,23,42,0.08),inset_0_1px_2px_rgba(255,255,255,1)] dark:from-[#1b263b] dark:to-[#0f172a] dark:border-slate-700/80 dark:shadow-[0_16px_32px_-6px_rgba(0,0,0,0.6)]">
          <div className="flex size-7 sm:size-8 items-center justify-center rounded-lg sm:rounded-xl bg-[#1D7BFD] text-white shadow-[0_4px_10px_rgba(29,123,253,0.35)] dark:shadow-[0_0_12px_rgba(29,123,253,0.6)]">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="size-4 sm:size-4.5"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ==========================================================================
   3. TOP-RIGHT: "REMINDERS" FOLDER CARD + FLOATING STOPWATCH SQUIRCLE
   ========================================================================== */
export function RemindersCard() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute top-4 right-3 sm:top-8 sm:right-6 lg:top-10 lg:right-10 z-20 hidden md:block select-none"
    >
      <div className="relative">
        {/* White under-card */}
        <div className="absolute top-2 right-0 h-[170px] w-[210px] sm:h-[190px] sm:w-[240px] rotate-[6deg] rounded-2xl bg-slate-50 border border-slate-100 shadow-[0_8px_20px_-6px_rgba(15,23,42,0.06)] dark:bg-[#131f38]/50 dark:border-slate-800" />

        {/* Tabbed Reminders Folder Card */}
        <div className="relative w-[210px] sm:w-[240px] rounded-2xl bg-white/95 backdrop-blur-sm border border-slate-200/80 p-4 sm:p-5 shadow-[0_18px_38px_-10px_rgba(15,23,42,0.12)] rotate-[1.5deg] dark:border-slate-700/80 dark:bg-[#0f182e]/95 dark:shadow-[0_20px_45px_-10px_rgba(0,0,0,0.6)]">
          {/* Header tab */}
          <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-2.5">
            <span className="text-[13px] sm:text-[14px] font-bold tracking-tight text-slate-800 dark:text-white">
              Hackathons
            </span>
            <span className="text-[10px] font-medium text-slate-400 dark:text-slate-400">GEC Campus</span>
          </div>

          {/* Hackathon event details */}
          <div className="mt-3 text-left">
            <h4 className="text-[13px] sm:text-[14px] font-bold text-slate-900 dark:text-white leading-tight">
              Annual College Hackathon
            </h4>
            <p className="mt-0.5 text-[10.5px] text-slate-400 font-medium">
              Government Engineering College, Banka
            </p>

            <span className="mt-3 block text-[9.5px] font-semibold uppercase tracking-wider text-slate-400">
              Schedule
            </span>

            {/* Time badge pill */}
            <div className="mt-1.5 inline-flex items-center gap-1.5 rounded-full border border-[#BAE6FD] bg-[#E0F2FE] px-2.5 py-0.5 text-[11px] font-semibold text-[#0284C7] dark:border-sky-500/30 dark:bg-sky-950/80 dark:text-sky-300">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="size-3.5"
              >
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              <span>24H Sprint • 10:00 AM</span>
            </div>
          </div>
        </div>

        {/* Floating 3D Stopwatch Squircle (24-hour sprint timer) */}
        <div className="absolute top-6 -left-6 sm:top-8 sm:-left-8 z-30 flex size-14 sm:size-16 items-center justify-center rounded-[20px] bg-gradient-to-b from-white to-[#F8FAFC] border border-white shadow-[0_16px_32px_-6px_rgba(15,23,42,0.18),0_4px_8px_-2px_rgba(15,23,42,0.08),inset_0_1px_2px_rgba(255,255,255,1)] dark:from-[#1b263b] dark:to-[#0f172a] dark:border-slate-700/80 dark:shadow-[0_16px_32px_-6px_rgba(0,0,0,0.6)]">
          {/* Stopwatch Icon */}
          <div className="relative size-8 sm:size-9 flex items-center justify-center">
            {/* Top crown */}
            <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-1 rounded-sm bg-slate-500" />
            {/* Dial circle */}
            <div className="relative size-7 sm:size-8 rounded-full border-2 border-slate-800 bg-white flex items-center justify-center dark:border-slate-600 dark:bg-slate-900">
              {/* Dial markings */}
              <div className="absolute inset-0.5 rounded-full border border-dashed border-slate-200 dark:border-slate-700" />
              {/* Hands */}
              <div className="absolute h-2.5 w-[1.5px] bg-slate-800 dark:bg-white origin-bottom -rotate-45 -translate-y-1" />
              <div className="absolute h-3 w-[1.5px] bg-[#EF4444] origin-bottom rotate-60 -translate-y-1" />
              {/* Center pivot dot */}
              <div className="size-1 rounded-full bg-[#EF4444] z-10" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ==========================================================================
   4. BOTTOM-LEFT: "CLUB SPRINTS" TABBED FOLDER CARD
   ========================================================================== */
export function TasksCard() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute bottom-4 left-3 sm:bottom-8 sm:left-6 lg:bottom-10 lg:left-10 z-20 hidden md:block select-none"
    >
      <div className="w-[240px] sm:w-[270px] rounded-2xl bg-white/95 backdrop-blur-sm border border-slate-200/80 p-4 sm:p-5 shadow-[0_18px_40px_-12px_rgba(15,23,42,0.12)] -rotate-[1deg] text-left dark:border-slate-700/80 dark:bg-[#0f182e]/95 dark:shadow-[0_20px_45px_-10px_rgba(0,0,0,0.6)]">
        {/* Tab header */}
        <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-2.5">
          <span className="text-[13px] sm:text-[14px] font-bold tracking-tight text-slate-800 dark:text-white">
            Active Club Sprints
          </span>
        </div>

        {/* Task 1 */}
        <div className="mt-3 border-b border-slate-100 dark:border-slate-800 pb-3">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2 min-w-0">
              <span className="flex size-4 shrink-0 items-center justify-center rounded bg-[#EF4444] text-[10px] font-bold text-white">
                1
              </span>
              <span className="truncate text-[12px] sm:text-[12.5px] font-semibold text-slate-800 dark:text-white">
                Hackathon Web Platform
              </span>
            </div>
            {/* Student avatars */}
            <div className="flex -space-x-1.5 shrink-0">
              <span className="size-4.5 rounded-full ring-2 ring-white dark:ring-slate-800 bg-[#DBEAFE] dark:bg-blue-950 flex items-center justify-center text-[9px] font-bold text-[#1E40AF] dark:text-blue-300">
                VK
              </span>
              <span className="size-4.5 rounded-full ring-2 ring-white dark:ring-slate-800 bg-[#FCE7F3] dark:bg-pink-950 flex items-center justify-center text-[9px] font-bold text-[#9D174D] dark:text-pink-300">
                AS
              </span>
            </div>
          </div>
          {/* Progress row */}
          <div className="mt-2.5 flex items-center justify-between gap-2">
            <span className="text-[10px] font-medium text-slate-400">Oct 2026</span>
            <div className="flex items-center gap-2">
              <div className="h-1.5 w-20 sm:w-24 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                <div className="h-full w-[85%] rounded-full bg-[#00A3FF]" />
              </div>
              <span className="text-[10px] font-bold text-slate-600 dark:text-slate-300">85%</span>
            </div>
          </div>
        </div>

        {/* Task 2 */}
        <div className="mt-3">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2 min-w-0">
              <span className="flex size-4 shrink-0 items-center justify-center rounded bg-[#10B981] text-[10px] font-bold text-white">
                2
              </span>
              <span className="truncate text-[12px] sm:text-[12.5px] font-semibold text-slate-800 dark:text-white">
                Open Source Portal
              </span>
            </div>
            {/* Student avatars */}
            <div className="flex -space-x-1.5 shrink-0">
              <span className="size-4.5 rounded-full ring-2 ring-white dark:ring-slate-800 bg-[#FEF3C7] dark:bg-amber-950 flex items-center justify-center text-[9px] font-bold text-[#92400E] dark:text-amber-300">
                RK
              </span>
              <span className="size-4.5 rounded-full ring-2 ring-white dark:ring-slate-800 bg-[#CCFBF1] dark:bg-teal-950 flex items-center justify-center text-[9px] font-bold text-[#115E59] dark:text-teal-300">
                VN
              </span>
            </div>
          </div>
          {/* Progress row */}
          <div className="mt-2.5 flex items-center justify-between gap-2">
            <span className="text-[10px] font-medium text-slate-400">Nov 2026</span>
            <div className="flex items-center gap-2">
              <div className="h-1.5 w-20 sm:w-24 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                <div className="h-full w-full rounded-full bg-[#00A3FF]" />
              </div>
              <span className="text-[10px] font-bold text-slate-600 dark:text-slate-300">100%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ==========================================================================
   5. BOTTOM-RIGHT: "DEVELOPER TOOLS & APIS" TABBED FOLDER CARD + 3D SQUIRCLES
   ========================================================================== */
export function IntegrationsCard() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute bottom-4 right-3 sm:bottom-8 sm:right-6 lg:bottom-10 lg:right-10 z-20 hidden md:block select-none"
    >
      <div className="w-[230px] sm:w-[260px] rounded-2xl bg-white/95 backdrop-blur-sm border border-slate-200/80 p-4 sm:p-5 pb-6 shadow-[0_18px_40px_-12px_rgba(15,23,42,0.12)] rotate-[1.5deg] text-left dark:border-slate-700/80 dark:bg-[#0f182e]/95 dark:shadow-[0_20px_45px_-10px_rgba(0,0,0,0.6)]">
        {/* Tab header */}
        <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-2.5">
          <span className="text-[13px] sm:text-[14px] font-bold tracking-tight text-slate-800 dark:text-white">
            Dev Stack & Ecosystem
          </span>
        </div>

        {/* 3 Floating 3D Squircles: GitHub, Slack/Discord, Google Cloud */}
        <div className="mt-4 flex items-center justify-center">
          {/* GitHub Squircle */}
          <div className="relative -rotate-[4deg] flex size-12 sm:size-13 items-center justify-center rounded-2xl bg-white border border-white/80 shadow-[0_12px_24px_-6px_rgba(15,23,42,0.16),inset_0_1px_2px_rgba(255,255,255,1)] dark:bg-[#152038] dark:border-slate-700/80 dark:shadow-none">
            <svg viewBox="0 0 24 24" className="size-6 sm:size-7 text-[#0F172A] dark:text-white" fill="currentColor">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
              />
            </svg>
          </div>

          {/* Slack Squircle (center, slightly elevated) */}
          <div className="relative z-10 -ml-2 -mt-2 flex size-12 sm:size-13 items-center justify-center rounded-2xl bg-white border border-white/80 shadow-[0_16px_28px_-6px_rgba(15,23,42,0.2),inset_0_1px_2px_rgba(255,255,255,1)] dark:bg-[#152038] dark:border-slate-700/80 dark:shadow-none">
            <svg viewBox="0 0 127 127" className="size-6 sm:size-7" fill="none">
              <path
                d="M27.2 80c0 7.3-5.9 13.2-13.2 13.2C6.7 93.2.8 87.3.8 80c0-7.3 5.9-13.2 13.2-13.2h13.2V80zm6.6 0c0-7.3 5.9-13.2 13.2-13.2 7.3 0 13.2 5.9 13.2 13.2v33c0 7.3-5.9 13.2-13.2 13.2-7.3 0-13.2-5.9-13.2-13.2V80z"
                fill="#E01E5A"
              />
              <path
                d="M47 27.2c-7.3 0-13.2-5.9-13.2-13.2C33.8 6.7 39.7.8 47 .8c7.3 0 13.2 5.9 13.2 13.2v13.2H47zm0 6.6c7.3 0 13.2 5.9 13.2 13.2 0 7.3-5.9 13.2-13.2 13.2H14C6.7 60.2.8 54.3.8 47c0-7.3 5.9-13.2 13.2-13.2H47z"
                fill="#36C5F0"
              />
              <path
                d="M99.8 47c0-7.3 5.9-13.2 13.2-13.2 7.3 0 13.2 5.9 13.2 13.2 0 7.3-5.9 13.2-13.2 13.2H99.8V47zm-6.6 0c0 7.3-5.9 13.2-13.2 13.2-7.3 0-13.2-5.9-13.2-13.2V14c0-7.3 5.9-13.2 13.2-13.2 7.3 0 13.2 5.9 13.2 13.2v33z"
                fill="#2EB67D"
              />
              <path
                d="M80 99.8c7.3 0 13.2 5.9 13.2 13.2 0 7.3-5.9 13.2-13.2 13.2-7.3 0-13.2-5.9-13.2-13.2V99.8H80zm0-6.6c-7.3 0-13.2-5.9-13.2-13.2 0-7.3 5.9-13.2 13.2-13.2h33c7.3 0 13.2 5.9 13.2 13.2 0 7.3-5.9 13.2-13.2H80z"
                fill="#ECB22E"
              />
            </svg>
          </div>

          {/* Google Dev Squircle */}
          <div className="relative -ml-2 rotate-[4deg] flex size-12 sm:size-13 items-center justify-center rounded-2xl bg-white border border-white/80 shadow-[0_12px_24px_-6px_rgba(15,23,42,0.16),inset_0_1px_2px_rgba(255,255,255,1)] dark:bg-[#152038] dark:border-slate-700/80 dark:shadow-none">
            <svg viewBox="0 0 48 48" className="size-6 sm:size-7">
              <path
                fill="#EA4335"
                d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
              />
              <path
                fill="#4285F4"
                d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
              />
              <path
                fill="#FBBC05"
                d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
              />
              <path
                fill="#34A853"
                d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
