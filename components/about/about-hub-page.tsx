"use client";

import Link from "next/link";
import { useLocale } from "@/components/locale-provider";

export function AboutHubPage() {
  const { m, t } = useLocale();
  const h = m.aboutPages.hub;

  const cards: { href: string; title: string; desc: string }[] = [
      {
        href: "/about/certificates",
        title: t("nav.aboutCertificates"),
        desc: h.certificatesDesc,
      },
      {
        href: "/about/projects",
        title: t("nav.aboutProjects"),
        desc: h.projectsDesc,
      },
      {
        href: "/about/partners",
        title: t("nav.aboutPartners"),
        desc: h.partnersDesc,
      },
    ];

  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
      <Link href="/" className="text-sm text-bridge hover:underline">
        ← {m.aboutPages.common.back}
      </Link>
      <h1 className="mt-6 text-3xl font-semibold text-white">{h.title}</h1>
      <p className="mt-4 text-lg text-sea-300">{h.intro}</p>
      <ul className="mt-12 grid gap-6 sm:grid-cols-1">
        {cards.map((c) => (
          <li key={c.href}>
            <Link
              href={c.href}
              className="block rounded-2xl border border-bridge-dim/15 bg-sea-850/40 p-6 transition-colors hover:border-bridge-dim/35 hover:bg-sea-850/60"
            >
              <span className="text-lg font-semibold text-sonar-glow">
                {c.title}
              </span>
              <p className="mt-2 text-sm text-sea-300">{c.desc}</p>
              <span className="mt-4 inline-block text-sm text-bridge">
                {h.cta} →
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
