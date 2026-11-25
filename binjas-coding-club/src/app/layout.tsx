import type { Metadata } from "next";
import type { ReactNode } from "react";
import { SiteFooter } from "@/components/site-footer";
import { Navbar } from "@/components/site-header";
import { club, hero } from "@/content/site";
import { EventsProvider, ThemeProvider } from "@/providers";
import "./globals.css";

/** Runs before first paint so there is no flash of the wrong theme. */
const THEME_INIT_SCRIPT = `(function(){try{var t=localStorage.getItem("theme");if(t!=="light"&&t!=="dark"){t=matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}document.documentElement.classList.toggle("dark",t==="dark")}catch(e){}})();`;

export const metadata: Metadata = {
  metadataBase: new URL(club.url),
  title: { default: `${club.name} | ${club.institution}`, template: `%s | ${club.name}` },
  description: hero.subheading,
  alternates: { canonical: "/" },
  openGraph: {
    title: club.name,
    description: hero.subheading,
    url: club.url,
    siteName: club.name,
    type: "website",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Fonts load in the visitor's browser, so `npm run dev` and `npm run build` never
            need to download them. If they cannot load, the page falls back to system fonts. */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
        />
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
      </head>
      <body className="flex min-h-dvh flex-col">
        <ThemeProvider>
          <EventsProvider>
            <a
              href="#main"
              className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-ink"
            >
              Skip to content
            </a>
            <Navbar />
            {children}
            <SiteFooter />
          </EventsProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
