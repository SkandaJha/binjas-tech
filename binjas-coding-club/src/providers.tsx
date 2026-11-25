"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import { events as defaultEvents, type ClubEvent } from "@/content/site";

type Theme = "light" | "dark";

type ThemeContextValue = {
  resolvedTheme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
  /** False on the server and during hydration, so the toggle never flickers. */
  mounted: boolean;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
  return () => observer.disconnect();
}

const readTheme = (): Theme => (document.documentElement.classList.contains("dark") ? "dark" : "light");
const serverTheme = (): Theme => "light";
const noopSubscribe = () => () => {};

export function ThemeProvider({ children }: { children: ReactNode }) {
  const resolvedTheme = useSyncExternalStore(subscribe, readTheme, serverTheme);
  const mounted = useSyncExternalStore(noopSubscribe, () => true, () => false);

  const setTheme = useCallback((theme: Theme) => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    try {
      localStorage.setItem("theme", theme);
    } catch {
      /* storage can be blocked; the theme still changes for this visit */
    }
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme(readTheme() === "dark" ? "light" : "dark");
  }, [setTheme]);

  const value = useMemo(
    () => ({ resolvedTheme, setTheme, toggleTheme, mounted }),
    [resolvedTheme, setTheme, toggleTheme, mounted],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme(): ThemeContextValue {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used inside <ThemeProvider>");
  return ctx;
}

/* ---- events ------------------------------------------------------------- */

type EventsContextValue = {
  events: ClubEvent[];
  /** For the admin section: replace the list shown on the public Events section. */
  setEvents: (events: ClubEvent[]) => void;
};

const EventsContext = createContext<EventsContextValue | null>(null);

/**
 * Holds the events shown in the Events section. It starts from `events` in
 * src/content/site.ts; an admin screen can swap the list with `setEvents`.
 */
export function EventsProvider({ children }: { children: ReactNode }) {
  const [events, setEvents] = useState<ClubEvent[]>(defaultEvents);
  const value = useMemo(() => ({ events, setEvents }), [events]);
  return <EventsContext.Provider value={value}>{children}</EventsContext.Provider>;
}

export function useEvents(): EventsContextValue {
  const ctx = useContext(EventsContext);
  if (!ctx) throw new Error("useEvents must be used inside <EventsProvider>");
  return ctx;
}
