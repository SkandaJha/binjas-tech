"use client";

import { useTheme } from "@/providers";
import { MoonIcon, SunIcon } from "./icons";

/**
 * Floating light / dark switch, fixed to the bottom-right corner so it is
 * reachable from every section. It uses the same theme provider as the navbar
 * button, so both always agree. Renders nothing until the theme is known, which
 * avoids a hydration mismatch.
 */
export function FloatingThemeToggle() {
  const { resolvedTheme, toggleTheme, mounted } = useTheme();

  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";
  const label = isDark ? "Switch to light mode" : "Switch to dark mode";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={label}
      title={label}
      className="fixed right-4 bottom-[max(1rem,env(safe-area-inset-bottom))] z-40 inline-flex h-12 cursor-pointer items-center gap-2 rounded-full border border-slate-200 bg-white px-4 text-[14px] font-semibold text-slate-800 shadow-[0_10px_30px_-8px_rgba(15,23,42,0.35)] transition-all duration-200 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent motion-reduce:transition-none dark:border-slate-700 dark:bg-[#131f38] dark:text-white dark:shadow-[0_10px_30px_-8px_rgba(0,0,0,0.8)]"
    >
      {isDark ? (
        <SunIcon className="size-5 text-amber-300" />
      ) : (
        <MoonIcon className="size-5 text-slate-700" />
      )}
      <span className="hidden sm:inline">{isDark ? "Light mode" : "Dark mode"}</span>
    </button>
  );
}
