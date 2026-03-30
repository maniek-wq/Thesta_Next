"use client";

import Link from "next/link";
import { useLocale } from "@/components/locale-provider";

export function Footer() {
  const { t, m } = useLocale();

  return (
    <footer className="mt-24 max-w-full overflow-x-hidden border-t border-bridge-dim/15 bg-sea-900/40">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="font-semibold text-white">{m.brand.name}</p>
            <p className="mt-1 text-sm text-sea-300">{m.brand.tagline}</p>
            <p className="mt-4 max-w-sm text-sm text-sea-400">
              {m.home.contact.company}
            </p>
            <p className="mt-2 text-sm text-sea-300">
              {m.home.contact.phoneLabel}{" "}
              <a
                href="tel:+48725105207"
                className="text-bridge hover:text-bridge-glow"
              >
                +48 725 105 207
              </a>
              {" · "}
              <a
                href="mailto:biuro@thesta.pl"
                className="text-bridge hover:text-bridge-glow"
              >
                biuro@thesta.pl
              </a>
            </p>
          </div>
          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm" aria-label="Footer">
            <Link href="/offer" className="text-sea-200 hover:text-sonar-glow">
              {t("footer.offer")}
            </Link>
            <Link href="/news" className="text-sea-200 hover:text-sonar-glow">
              {t("footer.news")}
            </Link>
            <Link
              href="/contact"
              className="text-sea-200 hover:text-sonar-glow"
            >
              {t("footer.contact")}
            </Link>
            <Link
              href="/privacy"
              className="text-sea-200 hover:text-sonar-glow"
            >
              {t("footer.privacy")}
            </Link>
            <Link
              href="/cookies"
              className="text-sea-200 hover:text-sonar-glow"
            >
              {t("footer.cookies")}
            </Link>
          </nav>
        </div>
        <p className="mt-10 text-center text-xs text-sea-500 md:text-left">
          © {new Date().getFullYear()} {m.brand.name}. {t("footer.rights")}
        </p>
      </div>
    </footer>
  );
}
