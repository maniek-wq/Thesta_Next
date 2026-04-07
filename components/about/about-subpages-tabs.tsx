"use client";

import Link from "next/link";
import { useLocale } from "@/components/locale-provider";

export type AboutSubpageTab = "projects" | "certificates" | "partners";

const HREFS: Record<AboutSubpageTab, string> = {
  projects: "/about/projects",
  certificates: "/about/certificates",
  partners: "/about/partners",
};

const TABS: { id: AboutSubpageTab; labelKey: string }[] = [
  { id: "projects", labelKey: "nav.aboutProjects" },
  { id: "certificates", labelKey: "nav.aboutCertificates" },
  { id: "partners", labelKey: "nav.aboutPartners" },
];

/** Pasek jak w Figmie (17-4306): tytuł klastra + zakładki z aktywną na #00D4B1. */
export function AboutSubpagesTabs({ active }: { active: AboutSubpageTab }) {
  const { t } = useLocale();
  const cluster = `${t("nav.aboutProjects")} · ${t("nav.aboutCertificates")} · ${t("nav.aboutPartners")}`;

  return (
    <div className="mt-10 space-y-5">
      <p className="text-[15px] font-medium leading-snug tracking-tight text-[#dce3ed] sm:text-base">
        {cluster}
      </p>
      <nav aria-label={cluster}>
        <div
          className="flex flex-wrap divide-x divide-[rgba(37,82,120,0.4)] border border-[rgba(37,82,120,0.4)]"
          style={{ backgroundColor: "rgba(18,41,68,0.35)" }}
        >
          {TABS.map((tab) => {
            const isActive = active === tab.id;
            return (
              <Link
                key={tab.id}
                href={HREFS[tab.id]}
                aria-current={isActive ? "page" : undefined}
                className={`offer-font-mono min-h-[44px] flex-1 px-3 py-2.5 text-center text-[10px] font-medium uppercase tracking-[0.12em] transition-colors sm:min-w-[9.5rem] sm:flex-none sm:px-5 ${
                  isActive
                    ? "bg-[#00D4B1] text-[#060A10]"
                    : "bg-[#122944] text-[#7faacc] hover:bg-[rgba(37,82,120,0.6)] hover:text-[#a0c4dd]"
                } `}
              >
                {t(tab.labelKey)}
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
