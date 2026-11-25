import { faqHeading, faqs, requestKinds } from "@/content/site";
import { ArrowRightIcon, MailIcon } from "./icons";
import { IconTile, SectionHeader } from "./primitives";

/**
 * Native `<details>`/`<summary>` accordion: keyboard and screen-reader correct
 * with zero JavaScript, and still readable when scripting is off. Giving every
 * item the same `name` makes the browser keep only one open at a time.
 * The first question starts open.
 *
 * The "Ask a question" card only appears when the Request section exists, so it
 * can never point at a missing anchor.
 */
export function Faq() {
  if (faqs.length === 0) return null;

  return (
    <section
      id="faq"
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

          <div className="relative z-10 mx-auto grid w-full max-w-[1200px] gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
            {/* Left: heading and the "ask us" card */}
            <div className="lg:sticky lg:top-24 lg:self-start">
              <div className="[&>div]:mb-0">
                <SectionHeader
                  eyebrow={faqHeading.eyebrow}
                  title={faqHeading.heading}
                  body={faqHeading.body}
                />
              </div>

              {requestKinds.length > 0 ? (
                <div className="card mt-6 flex items-center gap-3.5 bg-white p-4 sm:p-[18px] dark:bg-[#0f1a2e]">
                  <IconTile tone="green">
                    <MailIcon className="size-5" />
                  </IconTile>
                  <div>
                    <h3 className="text-[15.5px] leading-tight font-semibold text-ink dark:text-white">
                      Still have a question?
                    </h3>
                    <p className="mt-0.5 text-[13.5px] text-muted dark:text-slate-400">
                      Send it to the club and we will get back to you.
                    </p>
                    <a
                      href="#request"
                      className="mt-2.5 inline-flex h-[38px] items-center gap-1.5 rounded-xl bg-[#1D7BFD] px-4 text-[14px] font-semibold text-white transition-all duration-200 hover:-translate-y-px hover:bg-[#166FE5] motion-reduce:transition-none"
                    >
                      Ask a question
                      <ArrowRightIcon className="size-4" />
                    </a>
                  </div>
                </div>
              ) : null}
            </div>

            {/* Right: the questions */}
            <ul className="space-y-3">
              {faqs.map((faq, index) => (
                <li key={faq.id}>
                  <details
                    {...{ name: "faq" }}
                    open={index === 0}
                    className="group card bg-white p-0 transition-colors hover:border-accent open:border-accent dark:bg-[#0f1a2e] dark:open:bg-[#12203a] [&::-webkit-details-marker]:hidden"
                  >
                    <summary className="flex cursor-pointer list-none items-center gap-3.5 rounded-[18px] p-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:px-[18px] [&::-webkit-details-marker]:hidden">
                      <span
                        aria-hidden="true"
                        className="grid size-[38px] shrink-0 place-items-center rounded-[11px] bg-blue-100 font-mono text-[13.5px] font-semibold text-blue-800 group-open:bg-accent group-open:text-white dark:bg-blue-500/15 dark:text-blue-300 dark:group-open:bg-accent dark:group-open:text-white"
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="text-[15.5px] leading-snug font-semibold text-ink dark:text-white">
                        {faq.question}
                      </span>
                      <span
                        aria-hidden="true"
                        className="ml-auto grid size-[30px] shrink-0 place-items-center rounded-full border border-line text-muted transition-transform duration-200 group-open:rotate-45 group-open:bg-blue-100 group-open:text-blue-800 motion-reduce:transition-none dark:border-white/10 dark:text-slate-400 dark:group-open:bg-blue-500/15 dark:group-open:text-blue-300"
                      >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="size-3.5">
                          <path d="M12 5v14M5 12h14" strokeLinecap="round" />
                        </svg>
                      </span>
                    </summary>
                    <p className="px-4 pb-[18px] text-[14.5px] leading-relaxed text-body sm:pl-[70px] dark:text-slate-300">
                      {faq.answer}
                    </p>
                  </details>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
