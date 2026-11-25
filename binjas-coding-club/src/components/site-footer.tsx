"use client";

import { usePathname } from "next/navigation";
import { club, footer, navLinks, socials } from "@/content/site";
import { HeartIcon, MailIcon, MapPinIcon, SocialGlyph } from "./icons";
import { LogoMark, hasLogo } from "./logo";
import { Container } from "./primitives";

export function SiteFooter() {
  const pathname = usePathname();

  // Do not render public footer on admin pages
  if (pathname?.startsWith("/admin")) {
    return null;
  }

  const year = new Date().getFullYear();
  // "Made with ♥ by the Binjas community" → the heart becomes an icon.
  const [creditBefore, creditAfter = ""] = footer.credit.split("♥");

  return (
    <footer id="contact" className="mt-auto scroll-mt-24 bg-night text-white/70">
      <Container>
        <div className="-mt-8 rounded-t-[28px] border-t border-white/10 bg-night px-6 pt-12 pb-8 sm:px-10">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="flex items-center gap-3">
                <LogoMark className="h-16" />
                {hasLogo ? null : (
                  <span className="text-lg font-semibold text-white">{club.name}</span>
                )}
              </div>
              <p className="mt-4 text-sm font-medium text-white">{footer.heading}</p>
              <p className="mt-1.5 max-w-xs text-[13px] leading-relaxed">{footer.tagline}</p>
            </div>

            <nav aria-label="Footer">
              <h2 className="text-[13px] font-medium text-white">Navigation</h2>
              <ul className="mt-4 space-y-2.5">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="text-[13px] transition-colors hover:text-white">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div>
              <h2 className="text-[13px] font-medium text-white">Contact</h2>
              <ul className="mt-4 space-y-3">
                {club.email ? (
                  <li>
                    <a
                      href={`mailto:${club.email}`}
                      className="flex items-start gap-2.5 text-[13px] transition-colors hover:text-white"
                    >
                      <MailIcon className="mt-0.5 size-4 shrink-0 text-white/40" />
                      {club.email}
                    </a>
                  </li>
                ) : null}
                <li className="flex items-start gap-2.5 text-[13px]">
                  <MapPinIcon className="mt-0.5 size-4 shrink-0 text-white/40" />
                  <span>
                    {club.institution}
                    {club.location ? (
                      <>
                        <br />
                        {club.location}
                      </>
                    ) : null}
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-[13px] font-medium text-white">Follow Us</h2>
              {socials.length > 0 ? (
                <ul className="mt-4 flex items-center gap-4">
                  {socials.map((social) => (
                    <li key={social.url}>
                      <a
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.platform}
                        className="text-white/60 transition-colors hover:text-white"
                      >
                        <SocialGlyph platform={social.platform} className="size-[18px]" />
                      </a>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="mt-4 text-[13px]">TODO: add the club&apos;s profiles.</p>
              )}
            </div>
          </div>

          <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 text-[13px] sm:flex-row sm:items-center">
            <p>
              © {club.foundedYear ? `${club.foundedYear}–` : ""}
              {year} {club.name}. All rights reserved.
            </p>
            <p className="inline-flex items-center gap-1.5">
              {creditBefore}
              <HeartIcon className="size-3.5 text-accent-red" />
              {creditAfter}
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
