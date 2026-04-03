"use client";

import Link from "next/link";
import { useLocale } from "@/components/locale-provider";
import {
  googleMapsEmbedSrc,
  googleMapsExternalUrl,
} from "@/lib/contact-map";

export function ContactPageView() {
  const { m, locale } = useLocale();
  const p = m.contactPage;
  const h = m.home.contact;
  const mapSrc = googleMapsEmbedSrc(locale);
  const mapOpenHref = googleMapsExternalUrl();

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <Link href="/" className="text-sm text-bridge hover:underline">
        ← {m.newsPage.back}
      </Link>
      <h1 className="mt-6 text-3xl font-semibold text-white">{p.title}</h1>
      <p className="mt-4 max-w-2xl text-sea-300">{p.intro}</p>

      <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(18rem,24rem)] lg:items-stretch lg:gap-12 xl:grid-cols-[minmax(0,1fr)_26rem] xl:gap-14">
        {/* Lewa kolumna: formularz (wysokość wiersza = ta kolumna) */}
        <section
          className="order-2 min-h-0 min-w-0 lg:order-1"
          aria-labelledby="contact-form-heading"
        >
          <h2
            id="contact-form-heading"
            className="text-xl font-semibold tracking-tight text-white"
          >
            {p.formHeading}
          </h2>

          <form
            className="mt-6 rounded-2xl border border-bridge-dim/25 bg-sea-850/35 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur-sm sm:p-8"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid gap-6 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-xs font-semibold uppercase tracking-wide text-sea-400"
                >
                  {p.form.name}
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  className="w-full rounded-xl border border-bridge-dim/35 bg-sea-950/70 px-4 py-3.5 text-sm text-white shadow-[inset_0_2px_4px_rgba(0,0,0,0.18)] transition-[border-color,box-shadow,background-color] focus-visible:border-bridge/55 focus-visible:bg-sea-950/95"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-xs font-semibold uppercase tracking-wide text-sea-400"
                >
                  {p.form.email}
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  inputMode="email"
                  className="w-full rounded-xl border border-bridge-dim/35 bg-sea-950/70 px-4 py-3.5 text-sm text-white shadow-[inset_0_2px_4px_rgba(0,0,0,0.18)] transition-[border-color,box-shadow,background-color] focus-visible:border-bridge/55 focus-visible:bg-sea-950/95"
                />
              </div>
            </div>

            <div className="mt-6">
              <label
                htmlFor="message"
                className="mb-2 block text-xs font-semibold uppercase tracking-wide text-sea-400"
              >
                {p.form.message}
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                className="min-h-[10rem] w-full resize-y rounded-xl border border-bridge-dim/35 bg-sea-950/70 px-4 py-3.5 text-sm leading-relaxed text-white shadow-[inset_0_2px_4px_rgba(0,0,0,0.18)] transition-[border-color,box-shadow,background-color] focus-visible:border-bridge/55 focus-visible:bg-sea-950/95"
              />
            </div>

            <div className="mt-8 space-y-6 border-t border-bridge-dim/15 pt-8">
              <label className="flex cursor-pointer gap-3 rounded-xl border border-transparent p-1 has-[:focus-visible]:border-bridge/30">
                <input
                  id="contact-privacy-consent"
                  name="privacyConsent"
                  type="checkbox"
                  required
                  className="mt-0.5 h-4 w-4 shrink-0 rounded border-bridge-dim/50 bg-sea-950 text-sonar-dim"
                />
                <span className="text-sm leading-relaxed text-sea-300">
                  {p.form.consent}{" "}
                  <Link
                    href="/privacy"
                    className="text-bridge underline-offset-2 hover:underline"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {p.form.consentPolicyLink}
                  </Link>
                  .
                </span>
              </label>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-end">
                <button
                  type="submit"
                  className="inline-flex w-full shrink-0 items-center justify-center gap-2 rounded-xl bg-sonar-dim px-8 py-3.5 text-sm font-semibold text-sea-950 shadow-[0_4px_20px_rgba(42,157,111,0.35)] transition-[background-color,transform,box-shadow] hover:bg-sonar hover:shadow-[0_6px_24px_rgba(42,157,111,0.45)] active:scale-[0.99] sm:w-auto sm:min-w-[11rem]"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden
                  >
                    <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                  </svg>
                  {p.form.submit}
                </button>
              </div>
            </div>
          </form>
        </section>

        {/* Prawa kolumna: firma + mapa */}
        <aside
          className="order-1 flex h-full min-h-0 min-w-0 flex-col gap-6 lg:order-2"
          aria-label={p.addressHeading}
        >
          <div className="shrink-0 rounded-2xl border border-bridge-dim/20 bg-sea-850/40 p-6 shadow-[0_4px_24px_rgba(0,0,0,0.2)]">
            <p className="text-sm font-medium text-sea-300">{h.company}</p>
            <p className="mt-4 text-sm text-sea-200">
              {h.phoneLabel}{" "}
              <a href="tel:+48725105207" className="text-bridge hover:text-bridge-glow">
                +48 725 105 207
              </a>
            </p>
            <p className="mt-2 text-sm text-sea-200">
              <a
                href="mailto:biuro@thesta.pl"
                className="text-bridge hover:text-bridge-glow"
              >
                biuro@thesta.pl
              </a>
            </p>
            <div className="mt-6 border-t border-bridge-dim/15 pt-6">
              <h3 className="text-xs font-semibold uppercase tracking-wide text-sea-500">
                {p.addressHeading}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-sea-100">
                {p.addressLine1}
              </p>
              <p className="text-sm leading-relaxed text-sea-100">
                {p.addressLine2}
              </p>
            </div>
          </div>

          <section
            className="flex min-h-[220px] flex-1 flex-col lg:min-h-0"
            aria-labelledby="contact-map-heading"
          >
            <h3
              id="contact-map-heading"
              className="shrink-0 text-base font-semibold text-white"
            >
              {p.mapHeading}
            </h3>
            <div className="mt-3 min-h-0 flex-1 overflow-hidden rounded-2xl border border-bridge-dim/25 bg-sea-900/50 shadow-[0_8px_32px_rgba(0,0,0,0.35)]">
              <iframe
                title={p.mapIframeTitle}
                src={mapSrc}
                className="h-full min-h-[200px] w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
            <p className="mt-3 shrink-0 text-center lg:text-left">
              <a
                href={mapOpenHref}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-bridge underline-offset-2 hover:underline"
              >
                {p.openInMaps}
              </a>
            </p>
          </section>
        </aside>
      </div>
    </div>
  );
}
