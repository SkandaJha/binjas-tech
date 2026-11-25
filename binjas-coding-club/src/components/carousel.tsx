"use client";

import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "./icons";

/**
 * Horizontal scroll-snap row with previous/next buttons.
 *
 * The row is a real scroll container: it is keyboard focusable, has an
 * accessible name, and works with touch and trackpad without JavaScript. The
 * buttons only add convenience, and are disabled at each end so they can never
 * scroll past the content.
 */
export function Carousel({
  children,
  label,
}: {
  children: ReactNode;
  /** Accessible name for the scroll region, e.g. "Core team". */
  label: string;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const sync = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 1);
    setAtEnd(el.scrollLeft >= el.scrollWidth - el.clientWidth - 1);
  }, []);

  useEffect(() => {
    sync();
    const el = trackRef.current;
    if (!el) return;
    const observer = new ResizeObserver(sync);
    observer.observe(el);
    return () => observer.disconnect();
  }, [sync]);

  const nudge = (direction: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: direction * el.clientWidth * 0.8, behavior: "smooth" });
  };

  const button =
    "absolute top-1/2 z-10 grid size-9 -translate-y-1/2 place-items-center rounded-full border border-line dark:border-white/10 bg-white dark:bg-[#111A2E] text-ink dark:text-white shadow-sm transition hover:bg-surface dark:hover:bg-white/10 disabled:pointer-events-none disabled:opacity-0";

  return (
    <div className="relative">
      <div
        ref={trackRef}
        onScroll={sync}
        role="region"
        aria-label={label}
        tabIndex={0}
        className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-1"
      >
        {children}
      </div>

      <button
        type="button"
        onClick={() => nudge(-1)}
        disabled={atStart}
        aria-label={`Previous in ${label.toLowerCase()}`}
        className={`${button} -left-3 lg:-left-4`}
      >
        <ChevronLeftIcon className="size-4" />
      </button>
      <button
        type="button"
        onClick={() => nudge(1)}
        disabled={atEnd}
        aria-label={`Next in ${label.toLowerCase()}`}
        className={`${button} -right-3 lg:-right-4`}
      >
        <ChevronRightIcon className="size-4" />
      </button>
    </div>
  );
}
