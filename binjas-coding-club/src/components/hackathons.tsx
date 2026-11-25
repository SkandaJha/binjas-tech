import Image from "next/image";
import React from "react";

/**
 * ---------------------------------------------------------------------------
 * FEATURED PROJECT: HACKLITH 1.0 — FLAGSHIP COLLEGE HACKATHON
 * ---------------------------------------------------------------------------
 * Recreates the exact UI mockup:
 * - "Build with purpose." headline with hand-drawn underline accent
 * - Featured Hacklith 1.0 meta card with schedule, college, and eligibility
 * - Explore Hacklith & View Project action buttons
 * - Interactive Hacklith 1.0 browser mockup window with cyber-neon poster banner
 * - 3 Feature cards: Student Builders, Real-World Problems, Tech for Impact
 * - "FROM IDEA TO IMPACT" 4-step workflow (01 Identify, 02 Ideate, 03 Build, 04 Impact)
 * - Handwritten Caveat annotations: "Our Flagship Hackathon", "Ideas to Impact"
 */

/* ==========================================================================
   DATA STRUCTURES (Ready for Admin/Dynamic Backend)
   ========================================================================== */

export interface HackathonFeature {
  id: string;
  title: string;
  subtitle: string;
  icon: "users" | "target" | "lightbulb";
}

export interface ImpactStep {
  step: string;
  title: string;
  description: string;
}

const HACKATHON_FEATURES: HackathonFeature[] = [
  {
    id: "builders",
    title: "Student Builders",
    subtitle: "Learn by building together.",
    icon: "users",
  },
  {
    id: "problems",
    title: "Real-World Problems",
    subtitle: "Focus on meaningful challenges.",
    icon: "target",
  },
  {
    id: "impact",
    title: "Tech for Impact",
    subtitle: "Build solutions with practical value.",
    icon: "lightbulb",
  },
];

const IMPACT_STEPS: ImpactStep[] = [
  {
    step: "01",
    title: "Identify",
    description: "Find real problems and opportunities on campus.",
  },
  {
    step: "02",
    title: "Ideate",
    description: "Brainstorm and shape ideas into solutions.",
  },
  {
    step: "03",
    title: "Build",
    description: "Work together and develop working prototypes.",
  },
  {
    step: "04",
    title: "Impact",
    description: "Showcase, deploy and create real value for society.",
  },
];


/* ==========================================================================
   ICONS
   ========================================================================== */

function FeatureIcon({ name, className = "size-4" }: { name: HackathonFeature["icon"]; className?: string }) {
  if (name === "users") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    );
  }
  if (name === "target") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M9 18h6" />
      <path d="M10 22h4" />
      <path d="M12 2v1" />
      <path d="M12 17a5 5 0 0 0 5-5c0-2-1.5-3.5-3-4.5V4a2 2 0 0 0-4 0v3.5C8.5 8.5 7 10 7 12a5 5 0 0 0 5 5z" />
    </svg>
  );
}

/* ==========================================================================
   MAIN COMPONENT
   ========================================================================== */

export function Hackathons() {
  return (
    <section id="hackathons" className="relative bg-[#F8FAFC] pt-1.5 sm:pt-2 pb-6 sm:pb-8 transition-colors duration-200 dark:bg-[#070b14]">
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

          {/* Top-right annotation: "Our Flagship Hackathon" */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute top-4 right-8 z-20 hidden lg:flex items-center gap-1.5 select-none"
          >
            <span className="font-[family-name:var(--font-script)] text-base text-slate-700 dark:text-slate-300 font-semibold leading-tight tracking-wide">
              Our Flagship Hackathon
            </span>
            <svg className="w-5 h-5 text-slate-400 rotate-[45deg]" viewBox="0 0 32 32" fill="none">
              <path d="M6 6C14 14 20 20 26 26" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <path d="M20 26L26 26L26 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="text-blue-500 font-bold text-xs select-none ml-1">{"\\ | /"}</span>
          </div>

          {/* ====================================================================
              TOP SECTION: TWO COLUMNS
              ==================================================================== */}
          <div className="relative z-10 grid gap-6 lg:grid-cols-12 lg:items-center">

            {/* LEFT COLUMN: Headings, Hackathon Info & Buttons */}
            <div className="lg:col-span-5 flex flex-col justify-center">

              {/* Eyebrow badge */}
              <div>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white/90 px-3 py-0.5 text-[10px] font-bold tracking-wider text-slate-700 uppercase shadow-xs dark:border-slate-700/80 dark:bg-[#131f38] dark:text-slate-300">
                  <span className="size-1.5 rounded-full bg-[#2563EB] shadow-[0_0_8px_#2563EB]" />
                  FEATURED PROJECT
                </span>
              </div>

              {/* Main Headline */}
              <h2 className="mt-2.5 text-[26px] sm:text-[34px] lg:text-[40px] font-bold tracking-[-0.03em] leading-[1.12] text-slate-900 dark:text-white">
                Build with{" "}
                <span className="relative inline-block text-[#2563EB] dark:text-[#38BDF8]">
                  purpose.
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
                  {/* Decorative dashes */}
                  <span
                    aria-hidden="true"
                    className="absolute -top-2.5 -right-4 text-blue-400 text-xs font-bold select-none"
                  >
                    {"//"}
                  </span>
                </span>
              </h2>

              {/* Subtitle */}
              <p className="mt-2 max-w-[420px] text-[12.5px] sm:text-[13px] text-slate-500 font-normal leading-relaxed dark:text-slate-300">
                Hacklith brings student builders together to turn meaningful problems
                into practical technology.
              </p>

              {/* Featured Hackathon Meta Card */}
              <div className="mt-4 rounded-2xl border border-slate-200/80 bg-white p-3.5 sm:p-4 shadow-xs dark:border-slate-800 dark:bg-[#111a2e]">
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-center">
                  {/* Left branding */}
                  <div className="sm:col-span-5 flex items-center gap-2.5 border-b sm:border-b-0 sm:border-r border-slate-100 dark:border-slate-800 pb-2.5 sm:pb-0 sm:pr-3">
                    <div className="size-9 rounded-xl bg-gradient-to-br from-[#FEF08A] to-[#F59E0B] flex items-center justify-center shadow-xs shrink-0 text-slate-900 font-bold text-xs">
                      &lt;/&gt;
                    </div>
                    <div>
                      <h3 className="text-[14px] font-bold text-slate-900 dark:text-white leading-tight">
                        Hacklith 1.0
                      </h3>
                      <p className="text-[9.5px] font-bold tracking-wider text-slate-400 dark:text-slate-400 uppercase mt-0.5">
                        TECH FOR IMPACT
                      </p>
                    </div>
                  </div>

                  {/* Right metadata rows */}
                  <div className="sm:col-span-7 space-y-1.5 text-[11px] text-slate-600 dark:text-slate-300">
                    <div className="flex items-start gap-1.5">
                      <span className="text-slate-400 text-xs shrink-0 mt-0.5">📅</span>
                      <div>
                        <span className="font-semibold text-slate-800 dark:text-white">20 September 2026</span>
                        <span className="text-[10px] text-slate-400 dark:text-slate-400 block">Team: 2-4 members</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-1.5">
                      <span className="text-slate-400 text-xs shrink-0 mt-0.5">📍</span>
                      <span className="truncate text-slate-700 dark:text-slate-300">Government Engineering College, Banka</span>
                    </div>
                    <div className="flex items-start gap-1.5">
                      <span className="text-slate-400 text-xs shrink-0 mt-0.5">👥</span>
                      <div>
                        <span className="font-semibold text-slate-800 dark:text-white">Free participation</span>
                        <span className="text-[10px] text-slate-400 dark:text-slate-400 block">Open for all students</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-4 flex flex-wrap items-center gap-2.5">
                <a
                  href="#hackathons"
                  className="inline-flex items-center justify-center rounded-xl bg-[#0B1220] hover:bg-slate-800 px-5 py-2.5 text-[13px] font-semibold text-white shadow-xs transition-all duration-200 hover:-translate-y-0.5 dark:bg-[#1D7BFD] dark:hover:bg-[#166FE5] dark:shadow-[0_0_20px_rgba(29,123,253,0.35)]"
                >
                  Explore Hacklith →
                </a>
                <a
                  href="https://www.binjas.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white hover:bg-slate-50 px-4 py-2.5 text-[13px] font-semibold text-slate-800 shadow-xs transition-all duration-200 dark:border-slate-700 dark:bg-[#131f38] dark:text-slate-200 hover:dark:bg-[#182746]"
                >
                  View Project ↗
                </a>
              </div>

            </div>

            {/* RIGHT COLUMN: Hacklith 1.0 Browser Mockup Window */}
            <div className="lg:col-span-7 relative flex justify-center">
              <div className="w-full max-w-[620px] rounded-xl sm:rounded-2xl border border-slate-200/90 bg-white shadow-[0_16px_40px_-12px_rgba(15,23,42,0.14)] overflow-hidden dark:border-slate-800 dark:bg-[#0c1424] dark:shadow-[0_20px_45px_-12px_rgba(0,0,0,0.6)]">

                {/* Browser Top Bar with URL */}
                <div className="flex items-center justify-between border-b border-slate-200/80 bg-slate-50 px-3 py-1.5 dark:border-slate-800 dark:bg-[#090d18]">
                  {/* Traffic light dots */}
                  <div className="flex items-center gap-1 shrink-0">
                    <span className="size-2 rounded-full bg-[#EF4444]" />
                    <span className="size-2 rounded-full bg-[#F59E0B]" />
                    <span className="size-2 rounded-full bg-[#10B981]" />
                  </div>

                  {/* Centered URL Bar */}
                  <div className="flex items-center gap-1 rounded-full border border-slate-200 bg-white px-3 py-0.5 text-[10.5px] font-medium text-slate-600 shadow-2xs dark:border-slate-700/80 dark:bg-[#131f38] dark:text-slate-300">
                    <span className="text-[10px] text-slate-400">🔒</span>
                    <span>https://www.binjas.org/</span>
                  </div>

                  <div className="w-8 shrink-0" />
                </div>

                {/* Inside Browser: Official Hacklith 1.0 Website */}
                <div className="relative w-full overflow-hidden bg-[#070D22]">
                  <Image
                    src="/hacklith_preview.png"
                    alt="Hacklith 1.0 Official Website"
                    width={1024}
                    height={432}
                    priority
                    className="h-auto w-full block object-contain"
                    sizes="(max-width: 1024px) 100vw, 620px"
                  />
                </div>

              </div>
            </div>

          </div>

          {/* ====================================================================
              MIDDLE SECTION: 3 FEATURE CARDS
              ==================================================================== */}
          <div className="relative z-10 mt-5 sm:mt-6 grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3">
            {HACKATHON_FEATURES.map((feat) => (
              <div
                key={feat.id}
                className="group flex items-center justify-between gap-3 rounded-xl border border-slate-200/80 bg-white p-3 shadow-xs transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm hover:border-slate-300 dark:border-slate-800 dark:bg-[#111a2e] hover:dark:border-slate-700"
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <div className="flex size-8.5 shrink-0 items-center justify-center rounded-lg bg-[#EFF6FF] text-[#2563EB] dark:bg-blue-950/70 dark:text-blue-400">
                    <FeatureIcon name={feat.icon} className="size-4" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-[13px] font-bold text-slate-900 group-hover:text-[#2563EB] dark:text-white dark:group-hover:text-[#38BDF8] transition-colors leading-tight">
                      {feat.title}
                    </h4>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-tight mt-0.5">
                      {feat.subtitle}
                    </p>
                  </div>
                </div>

                <span className="flex size-5.5 shrink-0 items-center justify-center rounded-full border border-slate-200 text-slate-400 transition-all duration-200 group-hover:border-slate-400 group-hover:text-slate-900 group-hover:translate-x-0.5 dark:border-slate-700 dark:text-slate-400 dark:group-hover:border-slate-500 dark:group-hover:text-white">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="size-2.5">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </span>
              </div>
            ))}
          </div>

          {/* ====================================================================
              BOTTOM SECTION: "FROM IDEA TO IMPACT" STEPPER (4 Connected Steps)
              ==================================================================== */}
          <div className="relative z-10 mt-5 sm:mt-6 border-t border-slate-200/80 dark:border-slate-800 pt-3.5 sm:pt-4">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-4 items-center">

              {/* Eyebrow badge on the left */}
              <div className="lg:col-span-2">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-2.5 py-0.5 text-[10px] font-bold tracking-wider text-slate-700 uppercase shadow-xs dark:border-slate-700/80 dark:bg-[#131f38] dark:text-slate-300">
                  <span className="size-1.5 rounded-full bg-[#2563EB] shadow-[0_0_8px_#2563EB]" />
                  FROM IDEA TO IMPACT
                </span>
              </div>

              {/* 4 Connected Step Items */}
              <div className="lg:col-span-10 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3 items-center">
                {IMPACT_STEPS.map((step, index) => (
                  <div key={step.step} className="flex items-center gap-2.5">
                    {/* Step Number Circle */}
                    <span className="flex size-8 sm:size-8.5 shrink-0 items-center justify-center rounded-full font-bold text-xs bg-[#EFF6FF] text-[#2563EB] dark:bg-blue-950 dark:text-blue-400 shadow-xs">
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
                    {index < IMPACT_STEPS.length - 1 ? (
                      <span
                        aria-hidden="true"
                        className="hidden xl:inline-block text-slate-300 dark:text-slate-600 font-bold text-xs select-none px-1"
                      >
                        →
                      </span>
                    ) : null}
                  </div>
                ))}
              </div>

            </div>
          </div>

          {/* Bottom-right annotation: "Ideas to Impact" */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-4 right-8 z-20 hidden lg:flex items-center gap-1 select-none"
          >
            <span className="font-[family-name:var(--font-script)] text-sm text-slate-600 dark:text-slate-300 font-semibold leading-none">
              Ideas to Impact
            </span>
            <svg className="w-5 h-5 text-slate-400 rotate-[-120deg]" viewBox="0 0 32 32" fill="none">
              <path d="M6 6C14 14 20 20 26 26" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <path d="M20 26L26 26L26 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

        </div>
      </div>
    </section>
  );
}
