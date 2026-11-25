import { club, hero } from "@/content/site";
import {
  AppLogoSquircle,
  IntegrationsCard,
  RemindersCard,
  StickyNoteCard,
  TasksCard,
} from "./hero-decor";

/**
 * ---------------------------------------------------------------------------
 * HERO / MAIN SECTION — BINJAS CODING CLUB
 * ---------------------------------------------------------------------------
 * Recreates the exact UI mockup design, typography, 3D claymorphic squircle,
 * micro-dot grid, and interactive corner cards, fully customized for
 * Binjas Coding Club at Government Engineering College.
 */
export function Hero() {
  return (
    <section id="top" className="relative bg-[#F8FAFC] pt-3 sm:pt-4 pb-1.5 sm:pb-2 transition-colors duration-200 dark:bg-[#070b14]">
      <div className="mx-auto w-full max-w-[1360px] px-3 sm:px-6">
        <div className="relative overflow-hidden rounded-[28px] sm:rounded-[36px] lg:rounded-[44px] border border-slate-200/80 bg-white shadow-[0_20px_50px_-20px_rgba(15,23,42,0.06),0_1px_3px_rgba(15,23,42,0.04)] min-h-[660px] md:min-h-[720px] lg:min-h-[780px] flex flex-col items-center justify-center text-center px-4 sm:px-6 py-20 lg:py-28 transition-colors duration-200 dark:border-slate-800/80 dark:bg-[#0c1424] dark:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)]">
          
          {/* Subtle micro dot grid pattern */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-[0.42] dark:opacity-[0.22]"
            style={{
              backgroundImage: "radial-gradient(#94A3B8 1.25px, transparent 1.25px)",
              backgroundSize: "20px 20px",
            }}
          />

          {/* Atmospheric ambient glow for dark mode */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[650px] h-[380px] rounded-full bg-blue-500/0 dark:bg-blue-600/15 blur-[120px]"
          />

          {/* Floating decorative elements around the 4 corners (desktop / tablet) */}
          <StickyNoteCard />
          <RemindersCard />
          <TasksCard />
          <IntegrationsCard />

          {/* Centered Main Content Column */}
          <div className="relative z-10 mx-auto flex max-w-[760px] flex-col items-center text-center">
            {/* Top 3D App Icon Squircle */}
            <AppLogoSquircle />

            {/* Eyebrow badge */}
            <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3.5 py-1 text-[12px] font-semibold text-slate-600 shadow-sm dark:border-slate-700/80 dark:bg-[#131f38] dark:text-slate-300 dark:shadow-none">
              <span className="size-1.5 rounded-full bg-[#00A3FF] shadow-[0_0_8px_#00A3FF]" />
              <span>{club.institution}</span>
            </div>

            {/* Headline matching mockup typography */}
            <h1 className="mt-6 text-[36px] sm:text-[52px] md:text-[60px] lg:text-[68px] font-bold tracking-[-0.035em] leading-[1.08]">
              <span className="block text-[#0F172A] dark:text-white">Code, create, and conquer</span>
              <span className="block font-normal sm:font-medium text-[#94A3B8] dark:text-slate-400 mt-1">
                with {club.name}
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="mt-5 max-w-[500px] text-[15px] sm:text-[17px] text-slate-500 font-normal leading-relaxed text-balance dark:text-slate-300">
              {hero.subheading}
            </p>

            {/* Primary Action Button */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href={hero.primaryAction.href}
                className="inline-flex items-center justify-center rounded-xl sm:rounded-2xl bg-[#1D7BFD] px-8 py-3.5 text-[15px] sm:text-base font-semibold text-white shadow-[0_10px_25px_-4px_rgba(29,123,253,0.45),0_4px_10px_-2px_rgba(29,123,253,0.3)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#166FE5] hover:shadow-[0_14px_30px_-4px_rgba(29,123,253,0.55)] dark:shadow-[0_0_30px_-4px_rgba(29,123,253,0.5)] active:translate-y-0 cursor-pointer"
              >
                {hero.primaryAction.label}
              </a>
              <a
                href={hero.secondaryAction.href}
                className="inline-flex items-center justify-center rounded-xl sm:rounded-2xl border border-slate-200 bg-white px-7 py-3.5 text-[15px] sm:text-base font-semibold text-slate-700 hover:bg-slate-50 transition-all duration-200 dark:border-slate-700/80 dark:bg-[#131f38] dark:text-slate-200 hover:dark:bg-[#182746] dark:hover:border-slate-600"
              >
                {hero.secondaryAction.label}
              </a>
            </div>
          </div>

          {/* Mobile Card Grid */}
          <div className="relative z-10 mt-12 grid w-full max-w-sm grid-cols-1 gap-4 md:hidden text-left">
            <div className="rounded-2xl border border-slate-200/80 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-[#131f38]">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-800 dark:text-white">Hackathons</span>
                <span className="text-[10px] text-[#0284C7] bg-[#E0F2FE] px-2 py-0.5 rounded-full font-medium dark:bg-sky-950/80 dark:text-sky-300">
                  24H Sprint • 10:00 AM
                </span>
              </div>
              <p className="mt-1 text-sm font-semibold text-slate-900 dark:text-white">Annual College Hackathon</p>
              <p className="text-xs text-slate-400 dark:text-slate-400">{club.institution}</p>
            </div>

            <div className="rounded-2xl border border-slate-200/80 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-[#131f38]">
              <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
                <span className="text-xs font-bold text-slate-800 dark:text-white">Active Club Sprints</span>
                <span className="text-[10px] font-semibold text-[#00A3FF]">85%</span>
              </div>
              <p className="mt-2 text-xs font-semibold text-slate-800 dark:text-slate-200">Hackathon Web Platform</p>
              <div className="mt-1.5 h-1.5 w-full rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                <div className="h-full w-[85%] rounded-full bg-[#00A3FF]" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
