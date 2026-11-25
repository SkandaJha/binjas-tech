import Image from "next/image";
import { club } from "@/content/site";

type Props = {
  /** Tailwind height utility. The logo is square, so width follows. */
  className?: string;
  /**
   * Leave empty by default: the mark is decorative beside text that already
   * names the club. Only give it real alt text where nothing else on screen
   * identifies it.
   */
  alt?: string;
  priority?: boolean;
};

/**
 * The Binjas mark: an orange `</>` inside a ringed planet, over the BINJAS
 * wordmark and the "Code. Create. Conquer." tagline.
 *
 * It is a full lockup, not an isolated glyph — so the tagline is illegible below
 * roughly 56px. Size it accordingly: 40px in the nav reads as the wordmark, 64px
 * in the footer is where the tagline becomes readable.
 *
 * TO USE THE REAL LOGO:
 *   1. save the file as `public/logo.png` (or `.svg`)
 *   2. set `club.logo` to "/logo.png" in `src/content/site.ts`
 * The browser tab favicon is separate — see `docs/CONTENT.md` §4.
 *
 * While `club.logo` is null a neutral `</>` placeholder is rendered instead, so
 * the layout never shifts when the logo arrives.
 */
export function LogoMark({ className = "h-10", alt = "", priority = false }: Props) {
  if (club.logo) {
    return (
      <Image
        src={club.logo}
        alt={alt}
        width={512}
        height={512}
        priority={priority}
        className={`${className} w-auto shrink-0 object-contain`}
      />
    );
  }

  return (
    <span
      aria-hidden="true"
      className={`${className} grid w-auto shrink-0 place-items-center rounded-xl bg-accent font-mono text-sm font-semibold text-white`}
    >
      {"</>"}
    </span>
  );
}

/**
 * True when the real logo is in use. Callers use it to drop the text wordmark,
 * which would otherwise sit next to a wordmark that already says "BINJAS".
 */
export const hasLogo = club.logo !== null;
