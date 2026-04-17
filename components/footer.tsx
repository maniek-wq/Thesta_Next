"use client";

import Link from "next/link";
import { BrandLogo } from "@/components/brand-logo";
import { useLocale } from "@/components/locale-provider";

export function Footer() {
  const { t, m } = useLocale();

  return (
    <footer
      id="site-footer"
      className="max-w-full overflow-x-clip border-t border-bridge-dim/15 bg-sea-900/40"
    >
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <BrandLogo
              alt=""
              className="mb-4 h-10 w-[min(13rem,85vw)] max-h-10 opacity-90 sm:h-11 sm:max-h-11 sm:w-[14.5rem]"
            />
            <p className="mt-4 text-sm text-sea-400">
              {m.home.contact.company.split(" · ")[0]}
            </p>
            <p className="text-sm text-sea-400">
              {m.home.contact.company.split(" · ")[1]}
            </p>
            <p className="mt-2 text-sm text-sea-300">
              {m.home.contact.phoneLabel}{" "}
              <a
                href="tel:+48725105207"
                className="text-bridge hover:text-bridge-glow"
              >
                +48 725 105 207
              </a>
            </p>
            <p className="mt-1 text-sm text-sea-300">
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
            <Link href="/about" className="text-sea-200 hover:text-sonar-glow">
              {t("footer.about")}
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
