"use client";

import Link from "next/link";
import { useLocale } from "@/components/locale-provider";

export function ContactPageView() {
  const { m } = useLocale();
  const p = m.contactPage;
  const h = m.home.contact;

  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6">
      <Link
        href="/"
        className="text-sm text-bridge hover:underline"
      >
        ← {m.newsPage.back}
      </Link>
      <h1 className="mt-6 text-3xl font-semibold text-white">{p.title}</h1>
      <p className="mt-4 text-sea-300">{p.intro}</p>

      <div className="mt-10 rounded-2xl border border-bridge-dim/20 bg-sea-850/40 p-6">
        <p className="text-sm text-sea-400">{h.company}</p>
        <p className="mt-3 text-sm text-sea-300">
          {h.phoneLabel}{" "}
          <a href="tel:+48725105207" className="text-bridge">
            +48 725 105 207
          </a>
          {" · "}
          <a href="mailto:biuro@thesta.pl" className="text-bridge">
            biuro@thesta.pl
          </a>
        </p>
      </div>

      <form
        className="mt-10 space-y-4"
        onSubmit={(e) => e.preventDefault()}
      >
        <div>
          <label htmlFor="name" className="block text-sm text-sea-300">
            {p.form.name}
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            className="mt-1 w-full rounded-lg border border-bridge-dim/25 bg-sea-900/80 px-4 py-2 text-white outline-none ring-bridge/40 focus:ring-2"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm text-sea-300">
            {p.form.email}
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            className="mt-1 w-full rounded-lg border border-bridge-dim/25 bg-sea-900/80 px-4 py-2 text-white outline-none ring-bridge/40 focus:ring-2"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm text-sea-300">
            {p.form.message}
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            className="mt-1 w-full rounded-lg border border-bridge-dim/25 bg-sea-900/80 px-4 py-2 text-white outline-none ring-bridge/40 focus:ring-2"
          />
        </div>
        <button
          type="submit"
          className="rounded-xl bg-sonar-dim px-6 py-3 text-sm font-medium text-sea-950 hover:bg-sonar"
        >
          {p.form.submit}
        </button>
        <p className="text-xs text-sea-500">{p.form.hint}</p>
      </form>
    </div>
  );
}
