import { roadmapHeading, roadmaps } from "@/content/site";
import { ArrowRightIcon } from "./icons";
import { IconTile, SectionHeader } from "./primitives";

/**
 * Learning paths from roadmap.sh. Every link opens roadmap.sh in a new tab.
 * Edit the cards in `roadmaps` in src/content/site.ts; an empty list hides
 * this section and its nav link.
 */
export function RoadmapSection() {
  if (roadmaps.length === 0) return null;

  return (
    <section
      id="roadmap"
      className="scroll-mt-24 bg-[#F8FAFC] py-4 transition-colors duration-200 sm:py-6 dark:bg-[#070b14]"
    >
      <div className="mx-auto w-full max-w-[1360px] px-3 sm:px-6">
        <div className="relative overflow-hidden rounded-[28px] border border-slate-200/80 bg-white px-3 pt-7 pb-8 shadow-[0_20px_50px_-20px_rgba(15,23,42,0.06),0_1px_3px_rgba(15,23,42,0.04)] transition-colors duration-200 sm:rounded-[36px] sm:px-5 sm:pt-9 sm:pb-10 lg:rounded-[44px] lg:px-10 lg:pt-11 lg:pb-12 dark:border-slate-800/80 dark:bg-[#0c1424] dark:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)]">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-[0.42] dark:opacity-[0.22]"
            style={{
              backgroundImage: "radial-gradient(#94A3B8 1.25px, transparent 1.25px)",
              backgroundSize: "20px 20px",
            }}
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-40 left-1/2 h-[380px] w-[650px] -translate-x-1/2 rounded-full bg-blue-500/0 blur-[120px] dark:bg-blue-600/15"
          />

          <div className="relative z-10 mx-auto w-full max-w-[1200px]">
            <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div className="[&>div]:mb-0">
                <SectionHeader
                  eyebrow={roadmapHeading.eyebrow}
                  title={roadmapHeading.heading}
                  body={roadmapHeading.body}
                />
              </div>
              <a
                href={roadmapHeading.action.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 shrink-0 items-center justify-center gap-1.5 self-start rounded-[14px] bg-[#1D7BFD] px-5 text-[15px] font-semibold whitespace-nowrap text-white shadow-[0_10px_25px_-6px_rgba(29,123,253,0.45)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#166FE5] motion-reduce:transition-none md:self-auto"
              >
                {roadmapHeading.action.label}
                <ArrowRightIcon className="size-4 -rotate-45" />
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            </div>

            <ul className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              {roadmaps.map((item) => (
                <li key={item.url} className="flex">
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card group relative flex flex-1 items-center gap-3 bg-white p-3.5 transition duration-200 hover:-translate-y-0.5 hover:border-accent motion-reduce:transition-none motion-reduce:hover:translate-y-0 xl:flex-col xl:items-start xl:gap-2.5 xl:p-4 dark:bg-[#0f1a2e]"
                  >
                    <IconTile tone={item.tone}>
                      <span className="font-mono text-[13.5px] font-semibold">{item.badge}</span>
                    </IconTile>
                    <div className="min-w-0">
                      <h3 className="text-[15px] leading-tight font-semibold text-ink dark:text-white">
                        {item.title}
                        <span className="sr-only"> (opens roadmap.sh in a new tab)</span>
                      </h3>
                      <p className="mt-0.5 text-[13px] text-muted dark:text-slate-400">
                        {item.description}
                      </p>
                    </div>
                    <ArrowRightIcon
                      aria-hidden="true"
                      className="ml-auto size-4 shrink-0 -rotate-45 text-muted transition-colors group-hover:text-ink xl:absolute xl:top-3.5 xl:right-4 xl:ml-0 dark:text-slate-400 dark:group-hover:text-white"
                    />
                  </a>
                </li>
              ))}
            </ul>

            <p className="mt-5 text-[13px] text-muted dark:text-slate-400">
              Roadmaps are made and maintained by the roadmap.sh community. Links open roadmap.sh
              in a new tab.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
