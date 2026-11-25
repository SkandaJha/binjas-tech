"use client";

import React, { useState } from "react";
import { eventsHeading, type ClubEventCategory } from "@/content/site";
import { useEvents } from "@/providers";

/**
 * ---------------------------------------------------------------------------
 * EVENTS & WORKSHOPS SECTION — ATTRACTIVE CAMPUS-ALIGNED DESIGN
 * ---------------------------------------------------------------------------
 * Redesigned to match the exact aesthetic of Hero, Campus Tech, and Hacklith 1.0:
 * - Unified 1360px container with rounded-4xl hairline border & micro-dot grid
 * - Plus Jakarta Sans typography + Caveat handwritten script notes & doodles
 * - Eyebrow pill + royal blue headline accent with curved hand-drawn underline
 * - Interactive category filter tabs (All, Workshops, Tech Talks, Coding Jams)
 * - Two-column main view:
 *    • Left: Flagship Upcoming Bootcamp Spotlight Card with live beacon,
 *            venue, time, curriculum chips, mentor avatars & action buttons.
 *    • Right: Interactive Upcoming Sessions Stream with date chips, category tags,
 *            and hover micro-interactions.
 * - Bottom "EVENT EXPERIENCE" 4-step horizontal stepper (01 Hands-On Code,
 *   02 Senior Mentorship, 03 Free for Everyone, 04 Recognition & Swag).
 * - Script note: "Code. Collaborate. Conquer."
 */

const EVENT_PILLARS = [
  {
    step: "01",
    title: "Hands-On Code",
    description: "Real implementations and live coding, zero passive slide decks.",
  },
  {
    step: "02",
    title: "Senior Mentors",
    description: "1-on-1 guidance and peer reviews from experienced builders.",
  },
  {
    step: "03",
    title: "Free for All",
    description: "100% free participation for all students at GEC Banka.",
  },
  {
    step: "04",
    title: "Badges & Swag",
    description: "Verifiable certificates of completion, stickers, and awards.",
  },
];

export function Events() {
  const { events } = useEvents();
  const [activeCategory, setActiveCategory] = useState<ClubEventCategory>("all");

  if (!events || events.length === 0) return null;

  // Filter events based on active category
  const filteredEvents = events.filter((ev) => {
    if (activeCategory === "all") return true;
    return ev.category === activeCategory;
  });

  // Featured flagship event (default to first featured, or first event)
  const featuredEvent = events.find((ev) => ev.featured) || events[0];

  // Secondary stream events (excluding featured when showing "all" or matching filter)
  const streamEvents = filteredEvents.filter((ev) => ev.id !== featuredEvent.id);

  return (
    <section id="events" className="relative bg-[#F8FAFC] pt-1.5 sm:pt-2 pb-6 sm:pb-8 transition-colors duration-200 dark:bg-[#070b14]">
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

          {/* Top-right handwritten annotation */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute top-4 right-8 z-20 hidden lg:flex items-center gap-1.5 select-none"
          >
            <span className="font-[family-name:var(--font-script)] text-base text-slate-700 dark:text-slate-300 font-semibold leading-tight tracking-wide">
              Hands-on learning, real momentum
            </span>
            <svg
              className="w-5 h-5 text-slate-400 rotate-[45deg]"
              viewBox="0 0 32 32"
              fill="none"
            >
              <path
                d="M6 6C14 14 20 20 26 26"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M20 26L26 26L26 20"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-blue-500 font-bold text-xs select-none ml-1">
              {"\\ | /"}
            </span>
          </div>

          {/* ====================================================================
              TOP HEADER & FILTER TABS
              ==================================================================== */}
          <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-5">
            <div>
              {/* Eyebrow badge */}
              <div>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white/90 px-3 py-0.5 text-[10px] font-bold tracking-wider text-slate-700 uppercase shadow-xs dark:border-slate-700/80 dark:bg-[#131f38] dark:text-slate-300">
                  <span className="size-1.5 rounded-full bg-[#2563EB] shadow-[0_0_8px_#2563EB] animate-pulse" />
                  {eventsHeading.eyebrow}
                </span>
              </div>

              {/* Headline */}
              <h2 className="mt-2 text-[26px] sm:text-[34px] lg:text-[40px] font-bold tracking-[-0.03em] leading-[1.12] text-slate-900 dark:text-white">
                Where ideas turn into{" "}
                <span className="relative inline-block text-[#2563EB] dark:text-[#38BDF8]">
                  action.
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
              <p className="mt-2 max-w-[560px] text-[12.5px] sm:text-[13px] text-slate-500 font-normal leading-relaxed dark:text-slate-300">
                {eventsHeading.body}
              </p>
            </div>

            {/* Category Filter Tabs */}
            <div className="flex flex-wrap items-center gap-1.5 self-start md:self-end bg-slate-100/80 dark:bg-[#131f38] p-1 rounded-xl border border-slate-200/60 dark:border-slate-700/80">
              {(
                [
                  { id: "all", label: "All Sessions", count: events.length },
                  {
                    id: "workshop",
                    label: "Workshops",
                    count: events.filter((e) => e.category === "workshop").length,
                  },
                  {
                    id: "tech-talk",
                    label: "Tech Talks",
                    count: events.filter((e) => e.category === "tech-talk").length,
                  },
                  {
                    id: "coding-jam",
                    label: "Coding Jams",
                    count: events.filter((e) => e.category === "coding-jam").length,
                  },
                ] as const
              ).map((tab) => {
                const isActive = activeCategory === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveCategory(tab.id)}
                    type="button"
                    className={`flex items-center gap-1.5 rounded-lg px-2.5 py-1 text-[11.5px] font-semibold transition-all duration-150 cursor-pointer ${
                      isActive
                        ? "bg-white text-slate-900 shadow-2xs border border-slate-200/80 dark:bg-slate-800 dark:text-white dark:border-slate-600"
                        : "text-slate-600 hover:text-slate-900 hover:bg-white/50 dark:text-slate-400 dark:hover:text-white dark:hover:bg-slate-800/50"
                    }`}
                  >
                    <span>{tab.label}</span>
                    <span
                      className={`rounded-full px-1.5 py-0.2 text-[9.5px] font-bold ${
                        isActive
                          ? "bg-blue-50 text-[#2563EB] dark:bg-blue-950 dark:text-blue-300"
                          : "bg-slate-200/70 text-slate-600 dark:bg-slate-700 dark:text-slate-300"
                      }`}
                    >
                      {tab.count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* ====================================================================
              TWO-COLUMN MAIN SHOWCASE
              ==================================================================== */}
          <div className="relative z-10 mt-5 sm:mt-6 grid gap-5 lg:grid-cols-12 items-stretch">
            {/* ------------------------------------------------------------------
                LEFT COLUMN: SPOTLIGHT FLAGSHIP BOOTCAMP CARD (5 cols)
                ------------------------------------------------------------------ */}
            <div className="lg:col-span-5 flex flex-col justify-between rounded-2xl border border-blue-200/90 bg-gradient-to-b from-blue-50/50 via-white to-white p-4.5 sm:p-5 shadow-[0_4px_24px_-10px_rgba(37,99,235,0.12)] relative overflow-hidden group dark:border-slate-700/80 dark:from-[#111c33] dark:via-[#0c1424] dark:to-[#0c1424] dark:shadow-[0_4px_24px_-10px_rgba(0,0,0,0.6)]">
              {/* Soft decorative glow in top-right */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -top-12 -right-12 size-40 rounded-full bg-blue-500/10 dark:bg-blue-500/20 blur-2xl"
              />

              <div>
                {/* Status Bar */}
                <div className="flex items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-white px-2.5 py-0.5 text-[10px] font-bold tracking-wider text-[#2563EB] uppercase shadow-2xs dark:border-blue-500/30 dark:bg-blue-950/80 dark:text-blue-300">
                    <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    UPCOMING FLAGSHIP
                  </span>

                  <span className="text-[11px] font-bold tracking-tight text-slate-600 bg-white/90 border border-slate-200/80 px-2.5 py-0.5 rounded-md shadow-2xs dark:bg-[#182746] dark:border-slate-700 dark:text-slate-300">
                    📅 18 NOV 2026
                  </span>
                </div>

                {/* Bootcamp Title */}
                <h3 className="mt-3.5 text-[19px] sm:text-[21px] font-bold text-slate-900 dark:text-white leading-snug tracking-tight">
                  {featuredEvent.title}
                </h3>

                {/* Description */}
                <p className="mt-2 text-[12.5px] leading-relaxed text-slate-600 dark:text-slate-300">
                  {featuredEvent.description}
                </p>

                {/* Event Specs Grid */}
                <div className="mt-4 grid grid-cols-2 gap-2 text-[11.5px] text-slate-700 dark:text-slate-300">
                  <div className="flex items-center gap-2 rounded-lg border border-slate-200/70 bg-white/80 p-2 shadow-2xs dark:border-slate-700/80 dark:bg-[#15223c]">
                    <span className="text-sm">📍</span>
                    <div className="min-w-0">
                      <span className="font-semibold text-slate-900 dark:text-white block truncate">
                        Seminar Hall
                      </span>
                      <span className="text-[10px] text-slate-500 dark:text-slate-400 block truncate">
                        GEC Banka
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 rounded-lg border border-slate-200/70 bg-white/80 p-2 shadow-2xs dark:border-slate-700/80 dark:bg-[#15223c]">
                    <span className="text-sm">⏰</span>
                    <div className="min-w-0">
                      <span className="font-semibold text-slate-900 dark:text-white block truncate">
                        10 AM – 4 PM
                      </span>
                      <span className="text-[10px] text-slate-500 dark:text-slate-400 block truncate">
                        Full-Day Hands-on
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 rounded-lg border border-slate-200/70 bg-white/80 p-2 shadow-2xs dark:border-slate-700/80 dark:bg-[#15223c]">
                    <span className="text-sm">💻</span>
                    <div className="min-w-0">
                      <span className="font-semibold text-slate-900 dark:text-white block truncate">
                        Bring Laptop
                      </span>
                      <span className="text-[10px] text-slate-500 dark:text-slate-400 block truncate">
                        Code along live
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 rounded-lg border border-slate-200/70 bg-white/80 p-2 shadow-2xs dark:border-slate-700/80 dark:bg-[#15223c]">
                    <span className="text-sm">🎓</span>
                    <div className="min-w-0">
                      <span className="font-semibold text-slate-900 dark:text-white block truncate">
                        Free Certificate
                      </span>
                      <span className="text-[10px] text-slate-500 dark:text-slate-400 block truncate">
                        For attendees
                      </span>
                    </div>
                  </div>
                </div>

                {/* Key Curriculum Modules */}
                {featuredEvent.highlights && featuredEvent.highlights.length > 0 ? (
                  <div className="mt-3.5">
                    <p className="text-[10px] font-bold tracking-wider text-slate-400 uppercase mb-1.5">
                      CURRICULUM MODULES
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {featuredEvent.highlights.map((item) => (
                        <span
                          key={item}
                          className="inline-flex items-center gap-1 rounded-md bg-white border border-slate-200 px-2 py-0.5 text-[10.5px] font-medium text-slate-700 shadow-2xs dark:bg-[#15223c] dark:border-slate-700 dark:text-slate-200"
                        >
                          <span className="size-1 rounded-full bg-[#2563EB]" />
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ) : null}
              </div>

              {/* Bottom Area: Attendees & CTA buttons */}
              <div className="mt-5 pt-3.5 border-t border-slate-200/80 dark:border-slate-800">
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <div className="flex -space-x-1.5 overflow-hidden">
                      <span className="inline-flex size-6 items-center justify-center rounded-full bg-blue-600 text-[10px] font-bold text-white ring-2 ring-white dark:ring-slate-900">
                        BK
                      </span>
                      <span className="inline-flex size-6 items-center justify-center rounded-full bg-indigo-600 text-[10px] font-bold text-white ring-2 ring-white dark:ring-slate-900">
                        VS
                      </span>
                      <span className="inline-flex size-6 items-center justify-center rounded-full bg-emerald-600 text-[10px] font-bold text-white ring-2 ring-white dark:ring-slate-900">
                        RS
                      </span>
                    </div>
                    <span className="text-[11px] font-semibold text-slate-700 dark:text-slate-300">
                      45+ Registered Builders
                    </span>
                  </div>

                  <span className="text-[10.5px] font-bold text-emerald-600 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full dark:bg-emerald-950/80 dark:border-emerald-800/80 dark:text-emerald-300">
                    Free Entry
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href="#events"
                    className="flex-1 inline-flex items-center justify-center rounded-xl bg-[#0B1220] hover:bg-slate-800 px-4 py-2 text-[12.5px] font-semibold text-white shadow-xs transition-all duration-200 hover:-translate-y-0.5 text-center dark:bg-[#1D7BFD] dark:hover:bg-[#166FE5] dark:shadow-[0_0_20px_rgba(29,123,253,0.35)]"
                  >
                    View Bootcamp Agenda →
                  </a>
                  <a
                    href="#faq"
                    className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white hover:bg-slate-50 px-3.5 py-2 text-[12.5px] font-semibold text-slate-700 shadow-2xs transition-all duration-200 text-center dark:border-slate-700 dark:bg-[#15223c] dark:text-slate-200 hover:dark:bg-[#1c2e50]"
                  >
                    FAQs
                  </a>
                </div>
              </div>
            </div>

            {/* ------------------------------------------------------------------
                RIGHT COLUMN: EVENT SESSIONS STREAM (7 cols)
                ------------------------------------------------------------------ */}
            <div className="lg:col-span-7 flex flex-col justify-between gap-3">
              {/* Event Cards */}
              <div className="space-y-2.5 flex-1">
                {streamEvents.length > 0 ? (
                  streamEvents.map((event) => {
                    const parsed = new Date(event.date);
                    const valid = !Number.isNaN(parsed.getTime());
                    const day = valid
                       ? parsed.toLocaleDateString("en-US", { day: "2-digit" })
                      : "—";
                    const month = valid
                      ? parsed.toLocaleDateString("en-US", { month: "short" }).toUpperCase()
                      : "TBD";

                    // Determine color badge style based on category
                    const isTechTalk = event.category === "tech-talk";
                    const isCodingJam = event.category === "coding-jam";

                    const badgeClasses = isTechTalk
                      ? "bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-950/80 dark:text-purple-300 dark:border-purple-800/80"
                      : isCodingJam
                      ? "bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/80 dark:text-emerald-300 dark:border-emerald-800/80"
                      : "bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950/80 dark:text-blue-300 dark:border-blue-800/80";

                    return (
                      <div
                        key={event.id}
                        className="group flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3.5 rounded-xl border border-slate-200/80 bg-white p-3.5 shadow-xs transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm hover:border-slate-300 dark:border-slate-800 dark:bg-[#111a2e] hover:dark:border-slate-700"
                      >
                        {/* Left: Date tile & Content */}
                        <div className="flex items-start gap-3.5 min-w-0 flex-1">
                          {/* Modern Date Tile */}
                          <div className="flex flex-col items-center justify-center size-13 shrink-0 rounded-xl border border-slate-200 bg-slate-50/80 p-1 text-center shadow-2xs group-hover:border-blue-300 group-hover:bg-blue-50/30 transition-colors dark:border-slate-700/80 dark:bg-[#182746] dark:text-white">
                            <span className="text-[17px] font-bold leading-none text-slate-900 group-hover:text-[#2563EB] dark:text-white dark:group-hover:text-[#38BDF8] transition-colors">
                              {day}
                            </span>
                            <span className="text-[9.5px] font-extrabold tracking-wider text-slate-400 uppercase mt-0.5">
                              {month}
                            </span>
                          </div>

                          {/* Info */}
                          <div className="min-w-0 flex-1">
                            <div className="flex flex-wrap items-center gap-1.5 mb-1">
                              {event.categoryLabel ? (
                                <span
                                  className={`inline-flex items-center rounded-md border px-1.5 py-0.2 text-[9.5px] font-bold uppercase tracking-wider ${badgeClasses}`}
                                >
                                  {event.categoryLabel}
                                </span>
                              ) : null}

                              {event.time ? (
                                <span className="text-[10.5px] text-slate-500 dark:text-slate-400 font-medium flex items-center gap-1">
                                  <span>⏰</span> {event.time}
                                </span>
                              ) : null}

                              {event.location ? (
                                <span className="text-[10.5px] text-slate-500 dark:text-slate-400 font-medium hidden md:inline-flex items-center gap-1">
                                  <span>📍</span> {event.location}
                                </span>
                              ) : null}
                            </div>

                            <h4 className="text-[13.5px] font-bold text-slate-900 group-hover:text-[#2563EB] dark:text-white dark:group-hover:text-[#38BDF8] transition-colors leading-tight">
                              {event.title}
                            </h4>

                            <p className="mt-1 text-[11.5px] leading-relaxed text-slate-500 dark:text-slate-400 line-clamp-2">
                              {event.description}
                            </p>

                            {/* Tags list */}
                            {event.tags.length > 0 ? (
                              <div className="mt-2 flex flex-wrap gap-1">
                                {event.tags.map((tag) => (
                                  <span
                                    key={tag}
                                    className="rounded bg-slate-100 px-1.5 py-0.2 text-[10px] font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-300"
                                  >
                                    {tag}
                                  </span>
                                ))}
                              </div>
                            ) : null}
                          </div>
                        </div>

                        {/* Right: Action arrow button */}
                        <div className="self-end sm:self-center shrink-0">
                          <span className="flex size-7 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-400 transition-all duration-200 group-hover:border-slate-400 group-hover:text-slate-900 group-hover:translate-x-0.5 shadow-2xs dark:border-slate-700 dark:bg-[#15223c] dark:text-slate-400 dark:group-hover:text-white">
                            <svg
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2.2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="size-3"
                            >
                              <line x1="5" y1="12" x2="19" y2="12" />
                              <polyline points="12 5 19 12 12 19" />
                            </svg>
                          </span>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <div className="rounded-xl border border-dashed border-slate-200 dark:border-slate-800 p-8 text-center text-slate-400">
                    <p className="text-xs">No sessions found in this category.</p>
                  </div>
                )}
              </div>

              {/* Informational Sub-card */}
              <div className="rounded-xl border border-slate-200/80 bg-slate-50/70 p-3 flex items-center justify-between gap-3 shadow-2xs dark:border-slate-800 dark:bg-[#111a2e]">
                <div className="flex items-center gap-2 text-[11.5px] text-slate-600 dark:text-slate-300">
                  <span className="text-base">💡</span>
                  <span>
                    Have a topic you want covered in an upcoming workshop? Share ideas with mentors.
                  </span>
                </div>
                <a
                  href="#faq"
                  className="shrink-0 text-[11.5px] font-semibold text-[#2563EB] dark:text-[#38BDF8] hover:underline"
                >
                  Learn how →
                </a>
              </div>
            </div>
          </div>

          {/* ====================================================================
              BOTTOM SECTION: "EVENT EXPERIENCE" STEPPER (4 Connected Value Pillars)
              ==================================================================== */}
          <div className="relative z-10 mt-5 sm:mt-6 border-t border-slate-200/80 dark:border-slate-800 pt-3.5 sm:pt-4">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-4 items-center">
              {/* Eyebrow badge on the left */}
              <div className="lg:col-span-2">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-2.5 py-0.5 text-[10px] font-bold tracking-wider text-slate-700 uppercase shadow-xs dark:border-slate-700/80 dark:bg-[#131f38] dark:text-slate-300">
                  <span className="size-1.5 rounded-full bg-[#2563EB] shadow-[0_0_8px_#2563EB]" />
                  EVENT EXPERIENCE
                </span>
              </div>

              {/* 4 Connected Step Items */}
              <div className="lg:col-span-10 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3 items-center">
                {EVENT_PILLARS.map((step, index) => (
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
                    {index < EVENT_PILLARS.length - 1 ? (
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

          {/* Bottom-right handwritten note: "Code. Collaborate. Conquer." */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-4 right-8 z-20 hidden lg:flex items-center gap-1 select-none"
          >
            <span className="font-[family-name:var(--font-script)] text-sm text-slate-600 dark:text-slate-300 font-semibold leading-none">
              Code. Collaborate. Conquer.
            </span>
            <svg
              className="w-5 h-5 text-slate-400 rotate-[-120deg]"
              viewBox="0 0 32 32"
              fill="none"
            >
              <path
                d="M6 6C14 14 20 20 26 26"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M20 26L26 26L26 20"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
