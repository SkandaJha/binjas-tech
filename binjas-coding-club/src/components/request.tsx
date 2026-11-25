"use client";

import { useId, useState, type FormEvent } from "react";
import { club, requestHeading, requestKinds, requestTypes } from "@/content/site";
import { ActivityGlyph, MailIcon } from "./icons";
import { IconTile, SectionHeader } from "./primitives";

const FIELD =
  "w-full rounded-xl border border-slate-300 bg-slate-50 px-3.5 py-2.5 text-[15px] text-ink placeholder:text-muted focus-visible:outline-2 focus-visible:outline-accent dark:border-white/15 dark:bg-[#0a1222] dark:text-white dark:placeholder:text-slate-500";

const LABEL = "mb-1.5 block text-[13.5px] font-medium text-ink dark:text-slate-200";

/**
 * Request form. There is no backend, so submitting opens the visitor's email
 * app with the message already written, addressed to `club.email`.
 * While `club.email` is null the button is disabled and a TODO is shown.
 */
export function RequestSection() {
  const uid = useId();
  const [status, setStatus] = useState("");
  const email = club.email;

  if (requestKinds.length === 0) return null;

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!email) return;
    if (!form.checkValidity()) {
      form.reportValidity();
      setStatus("Please fill in your name, a valid email and a message.");
      return;
    }

    const data = new FormData(form);
    const clean = (key: string) => String(data.get(key) ?? "").trim();
    const name = clean("name").replace(/[\r\n]+/g, " ");
    const type = clean("type");

    const subject = `[${type}] Request from ${name}`;
    const body = `Name: ${name}\nEmail: ${clean("email")}\nType: ${type}\n\n${clean("message")}`;

    setStatus("Opening your email app…");
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section
      id="request"
      className="scroll-mt-24 bg-[#F8FAFC] py-4 transition-colors duration-200 sm:py-6 dark:bg-[#070b14]"
    >
      <div className="mx-auto w-full max-w-[1360px] px-3 sm:px-6">
        <div className="relative overflow-hidden rounded-[28px] border border-slate-200/80 bg-white px-4 py-12 shadow-[0_20px_50px_-20px_rgba(15,23,42,0.06),0_1px_3px_rgba(15,23,42,0.04)] transition-colors duration-200 sm:rounded-[36px] sm:px-6 sm:py-14 lg:rounded-[44px] lg:px-12 lg:py-20 dark:border-slate-800/80 dark:bg-[#0c1424] dark:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)]">
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

          <div className="relative z-10 mx-auto grid w-full max-w-[1200px] gap-8 lg:grid-cols-[1fr_1.05fr] lg:items-start lg:gap-12">
            {/* Left: what you can ask for */}
            <div>
              <SectionHeader
                eyebrow={requestHeading.eyebrow}
                title={requestHeading.heading}
                body={requestHeading.body}
              />

              <ul className="space-y-3">
                {requestKinds.map((kind) => (
                  <li
                    key={kind.title}
                    className="card flex items-center gap-3.5 bg-white p-3.5 dark:bg-[#0f1a2e]"
                  >
                    <IconTile tone={kind.tone}>
                      <ActivityGlyph name={kind.icon} className="size-5" />
                    </IconTile>
                    <div>
                      <h3 className="text-[15.5px] leading-tight font-semibold text-ink dark:text-white">
                        {kind.title}
                      </h3>
                      <p className="mt-0.5 text-[13.5px] text-muted dark:text-slate-400">
                        {kind.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>

              <p className="mt-6 flex items-center gap-2.5 text-[14px] text-body dark:text-slate-300">
                <MailIcon className="size-[18px] shrink-0 text-muted dark:text-slate-400" />
                <span>
                  Or write to us directly:{" "}
                  {email ? (
                    <a
                      href={`mailto:${email}`}
                      className="font-semibold text-ink underline-offset-4 hover:underline dark:text-white"
                    >
                      {email}
                    </a>
                  ) : (
                    <span className="font-semibold text-ink dark:text-white">
                      TODO: add the club email
                    </span>
                  )}
                </span>
              </p>
            </div>

            {/* Right: the form */}
            <form
              onSubmit={onSubmit}
              noValidate
              className="card bg-white p-5 sm:p-7 dark:bg-[#0f1a2e]"
            >
              <h3 className="text-lg font-semibold text-ink dark:text-white">Send a request</h3>
              <p className="mt-1 text-[13.5px] text-muted dark:text-slate-400">
                Fields marked * are required.
              </p>

              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor={`${uid}-name`} className={LABEL}>
                    Name *
                  </label>
                  <input
                    id={`${uid}-name`}
                    name="name"
                    required
                    autoComplete="name"
                    placeholder="Your name"
                    className={FIELD}
                  />
                </div>
                <div>
                  <label htmlFor={`${uid}-email`} className={LABEL}>
                    Email *
                  </label>
                  <input
                    id={`${uid}-email`}
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="you@example.com"
                    className={FIELD}
                  />
                </div>
              </div>

              <fieldset className="mt-4">
                <legend className={LABEL}>Request type</legend>
                <div className="flex flex-wrap gap-2">
                  {requestTypes.map((type, index) => (
                    <div key={type} className="contents">
                      <input
                        type="radio"
                        name="type"
                        id={`${uid}-type-${index}`}
                        value={type}
                        defaultChecked={index === 0}
                        className="peer sr-only"
                      />
                      <label
                        htmlFor={`${uid}-type-${index}`}
                        className="cursor-pointer rounded-full border border-slate-300 bg-slate-50 px-3.5 py-1.5 text-[13.5px] font-medium text-body transition-colors peer-checked:border-accent peer-checked:bg-blue-50 peer-checked:text-blue-800 peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-accent dark:border-white/15 dark:bg-[#0a1222] dark:text-slate-300 dark:peer-checked:bg-blue-500/15 dark:peer-checked:text-blue-300"
                      >
                        {type}
                      </label>
                    </div>
                  ))}
                </div>
              </fieldset>

              <div className="mt-4">
                <label htmlFor={`${uid}-message`} className={LABEL}>
                  Message *
                </label>
                <textarea
                  id={`${uid}-message`}
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell us what you have in mind"
                  className={`${FIELD} min-h-[120px] resize-y`}
                />
              </div>

              <button
                type="submit"
                disabled={!email}
                className="mt-5 inline-flex h-12 w-full cursor-pointer items-center justify-center rounded-[14px] bg-[#1D7BFD] text-[15.5px] font-semibold text-white shadow-[0_10px_25px_-6px_rgba(29,123,253,0.45)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#166FE5] disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-y-0 motion-reduce:transition-none"
              >
                Send request
              </button>

              <p role="status" aria-live="polite" className="mt-3 min-h-[1.4em] text-center text-[13.5px] text-blue-800 dark:text-blue-300">
                {status}
              </p>
              <p className="text-center text-[12.5px] text-muted dark:text-slate-400">
                {email
                  ? "Sending opens your email app with the message ready to go."
                  : "TODO: set club.email in src/content/site.ts to turn sending on."}
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
