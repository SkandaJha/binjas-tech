"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { brand, navLinks, socialLabels, socials } from "@/content/site";
import { CloseIcon, MenuIcon, SocialGlyph } from "./icons";
import { ThemeSegmented, ThemeToggle } from "./theme-toggle";

/**
 * Navbar. Configuration — brand, navigation and social links — lives in
 * `src/content/site.ts`; this file is presentation only.
 *
 * Fully integrated with persistent light & dark mode system, animated
 * toggles, high contrast aesthetics, and mobile responsive drawer.
 */
export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  // Close on Escape and return focus to the toggle, so keyboard users are never
  // stranded inside the panel.
  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  // Collapse the panel when the viewport grows past the mobile breakpoint,
  // otherwise a resized window leaves it open and scrolling locked.
  useEffect(() => {
    if (!open) return;
    const query = window.matchMedia("(min-width: 768px)");
    const onChange = () => {
      if (query.matches) setOpen(false);
    };
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, [open]);

  // Do not render public navbar on admin pages
  if (pathname?.startsWith("/admin")) {
    return null;
  }

  return (
    <header className="sticky top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-4">
      <div className="mx-auto w-full max-w-[1360px]">
        <div className="flex h-[70px] items-center justify-between gap-4 rounded-2xl border border-slate-200/80 bg-white/95 px-5 shadow-[0_1px_3px_rgba(15,23,42,0.05),0_10px_25px_-10px_rgba(15,23,42,0.04)] backdrop-blur-md transition-colors duration-200 sm:px-7 dark:border-slate-800/80 dark:bg-[#0c1424]/90 dark:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.6)]">
          {/* Brand — real logo asset, never drawn in CSS */}
          <a
            href="#top"
            onClick={() => setOpen(false)}
            className="flex shrink-0 items-center gap-3 rounded-lg"
          >
            <Image
              src={brand.mark}
              alt=""
              width={44}
              height={44}
              priority
              className="size-11 shrink-0 object-contain"
            />
            <span className="flex flex-col leading-none">
              <span className="text-[19px] font-bold tracking-tight text-ink dark:text-white">
                {brand.name}
              </span>
              <span className="mt-1 text-[11.5px] font-medium text-muted dark:text-slate-400">
                {brand.descriptor}
              </span>
            </span>
          </a>

          {/* Centre navigation. Full hierarchy from `md` up; spacing tightens on
              tablet so the brand and Contact button still fit. */}
          <nav aria-label="Main" className="hidden md:block">
            <ul className="flex items-center gap-6 lg:gap-8">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="group relative inline-flex min-h-11 items-center text-[15px] font-medium text-body transition-colors hover:text-ink dark:text-slate-300 dark:hover:text-white"
                  >
                    {link.label}
                    <span
                      aria-hidden="true"
                      className="absolute inset-x-0 bottom-2 h-px origin-left scale-x-0 bg-accent transition-transform duration-200 group-hover:scale-x-100"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Controls: Socials, Theme Switcher, Contact Button */}
          <div className="flex shrink-0 items-center gap-3 sm:gap-4">
            {socials.length > 0 ? (
              <>
                <ul className="hidden items-center gap-3 lg:flex">
                  {socials.map((social, i) => (
                    <li key={social.url} className="flex items-center gap-3">
                      {i > 0 ? (
                        <span aria-hidden="true" className="h-5 w-px bg-line dark:bg-slate-800" />
                      ) : null}
                      <a
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${brand.name} on ${socialLabels[social.platform]}`}
                        className="grid size-9 place-items-center rounded-lg text-ink/75 transition-colors hover:text-ink dark:text-slate-400 dark:hover:text-white"
                      >
                        <SocialGlyph platform={social.platform} className="size-[18px]" />
                      </a>
                    </li>
                  ))}
                </ul>
                <span aria-hidden="true" className="hidden h-5 w-px bg-line dark:bg-slate-800 lg:block" />
              </>
            ) : null}

            {/* High-impact Dark Mode Toggle */}
            <ThemeToggle />

            {/* Contact CTA */}
            <a
              href={brand.contactHref}
              className="hidden h-10 min-w-[104px] items-center justify-center rounded-[20px] bg-ink px-6 text-[14px] font-semibold text-white transition-all duration-200 hover:bg-ink/90 active:scale-95 dark:bg-[#1D7BFD] dark:text-white dark:hover:bg-[#166FE5] dark:shadow-[0_0_20px_rgba(29,123,253,0.35)] md:inline-flex cursor-pointer"
            >
              Contact
            </a>

            {/* Mobile Menu Toggle */}
            <button
              ref={toggleRef}
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              className="-mr-2 grid size-11 place-items-center rounded-lg text-ink transition-colors hover:bg-surface dark:text-slate-200 dark:hover:bg-slate-800 md:hidden cursor-pointer"
            >
              {open ? <CloseIcon className="size-5" /> : <MenuIcon className="size-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        hidden={!open}
        className="mx-auto mt-2 w-full max-w-[1360px] overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-[0_8px_24px_-12px_rgb(15_23_42/0.18)] transition-colors duration-200 dark:border-slate-800 dark:bg-[#0c1424] dark:shadow-[0_12px_32px_-8px_rgba(0,0,0,0.8)] md:hidden"
      >
        <nav aria-label="Mobile" className="max-h-[calc(100vh-140px)] overflow-y-auto p-3">
          <ul className="space-y-0.5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex min-h-12 items-center rounded-lg px-4 text-[15px] font-medium text-body transition-colors hover:bg-surface hover:text-ink dark:text-slate-200 dark:hover:bg-slate-800/70 dark:hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="my-2.5 h-px bg-line dark:bg-slate-800" />

          {/* Dedicated appearance toggle in mobile menu */}
          <div className="px-3 py-2">
            <span className="block text-[11px] font-bold tracking-wider text-muted dark:text-slate-400 uppercase mb-2">
              Appearance
            </span>
            <ThemeSegmented />
          </div>

          {socials.length > 0 ? (
            <>
              <div className="my-2.5 h-px bg-line dark:bg-slate-800" />
              <ul className="flex items-center gap-4 px-3 py-1">
                {socials.map((social) => (
                  <li key={social.url}>
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${brand.name} on ${socialLabels[social.platform]}`}
                      className="grid size-10 place-items-center rounded-lg text-ink/75 transition-colors hover:text-ink dark:text-slate-300 dark:hover:text-white"
                    >
                      <SocialGlyph platform={social.platform} className="size-5" />
                    </a>
                  </li>
                ))}
              </ul>
            </>
          ) : null}

          <div className="pt-3 pb-1">
            <a
              href={brand.contactHref}
              onClick={() => setOpen(false)}
              className="flex h-11 w-full items-center justify-center rounded-[14px] bg-ink text-[14px] font-semibold text-white transition-colors hover:bg-ink/90 dark:bg-[#1D7BFD] dark:hover:bg-[#166FE5]"
            >
              Contact
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
