"use client";

import React from "react";
import { useTheme } from "@/providers";
import { MoonIcon, SunIcon } from "./icons";

/**
 * High-impact theme toggle button.
 * Includes smooth micro-animations, accessible aria attributes,
 * and zero hydration mismatch.
 */
export function ThemeToggle({ className = "" }: { className?: string }) {
  const { resolvedTheme, toggleTheme, mounted } = useTheme();

  if (!mounted) {
    return (
      <button
        type="button"
        aria-label="Toggle dark mode"
        disabled
        className={`relative grid size-10 place-items-center rounded-xl border border-slate-200/80 bg-white/80 text-slate-400 opacity-60 backdrop-blur-sm dark:border-slate-800 dark:bg-slate-900/80 ${className}`}
      >
        <div className="size-4.5 rounded-full border border-current border-t-transparent animate-spin opacity-40" />
      </button>
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className={`group relative grid size-10 place-items-center rounded-xl border transition-all duration-200 select-none cursor-pointer focus-visible:outline-2 focus-visible:outline-accent ${
        isDark
          ? "border-slate-700/80 bg-slate-900/90 text-amber-300 shadow-[0_0_16px_rgba(251,191,36,0.15)] hover:border-amber-400/50 hover:bg-slate-850 hover:text-amber-200 hover:shadow-[0_0_20px_rgba(251,191,36,0.25)]"
          : "border-slate-200/80 bg-white/90 text-slate-700 shadow-[0_1px_3px_rgba(15,23,42,0.06)] hover:border-slate-300 hover:bg-slate-50 hover:text-ink hover:shadow-[0_4px_12px_rgba(15,23,42,0.08)]"
      } backdrop-blur-md ${className}`}
    >
      <span className="sr-only">
        {isDark ? "Switch to light mode" : "Switch to dark mode"}
      </span>
      {isDark ? (
        <SunIcon className="size-5 transition-transform duration-300 ease-out group-hover:rotate-90 group-hover:scale-110" />
      ) : (
        <MoonIcon className="size-5 transition-transform duration-300 ease-out group-hover:-rotate-12 group-hover:scale-110" />
      )}
    </button>
  );
}

/**
 * Segmented Light/Dark pill selector used in the mobile drawer
 * for effortless finger tapping.
 */
export function ThemeSegmented({ className = "" }: { className?: string }) {
  const { resolvedTheme, setTheme, mounted } = useTheme();

  if (!mounted) return null;

  return (
    <div
      className={`flex items-center gap-1 rounded-xl border border-slate-200/80 bg-slate-100/80 p-1 dark:border-slate-800 dark:bg-slate-900/90 ${className}`}
    >
      <button
        type="button"
        onClick={() => setTheme("light")}
        aria-pressed={resolvedTheme === "light"}
        className={`flex flex-1 items-center justify-center gap-2 rounded-lg py-2 text-xs font-semibold transition-all duration-200 cursor-pointer ${
          resolvedTheme === "light"
            ? "bg-white text-slate-900 shadow-xs"
            : "text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
        }`}
      >
        <SunIcon className="size-4 text-amber-500" />
        <span>Light</span>
      </button>

      <button
        type="button"
        onClick={() => setTheme("dark")}
        aria-pressed={resolvedTheme === "dark"}
        className={`flex flex-1 items-center justify-center gap-2 rounded-lg py-2 text-xs font-semibold transition-all duration-200 cursor-pointer ${
          resolvedTheme === "dark"
            ? "bg-slate-800 text-white shadow-xs"
            : "text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
        }`}
      >
        <MoonIcon className="size-4 text-amber-300" />
        <span>Dark</span>
      </button>
    </div>
  );
}
