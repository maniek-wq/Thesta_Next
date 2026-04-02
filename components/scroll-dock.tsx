"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { useLocale } from "@/components/locale-provider";

const TEL_HREF = "tel:+48725105207";
/** Pasek widoczny po przewinięciu w dół (px) */
const SHOW_AFTER_PX = 140;
/** Ukryty z powrotem dopiero blisko góry (px) — mniej migania */
const HIDE_BELOW_PX = 72;
/** Wysokość strefy u dołu ekranu zajmowana przez dock + margines — ukryj, gdy footer ją przecina */
const DOCK_ZONE_PX = 104;

function footerIntersectsDockZone(): boolean {
  const el = document.getElementById("site-footer");
  if (!el) return false;
  const rect = el.getBoundingClientRect();
  const h = window.innerHeight;
  return rect.top < h && rect.bottom > h - DOCK_ZONE_PX;
}

export function ScrollDock() {
  const { t } = useLocale();
  const [scrollShown, setScrollShown] = useState(false);
  const [footerHidesDock, setFooterHidesDock] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrollShown((prev) => {
        if (y > SHOW_AFTER_PX) return true;
        if (y < HIDE_BELOW_PX) return false;
        return prev;
      });
      setFooterHidesDock(footerIntersectsDockZone());
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const visible = scrollShown && !footerHidesDock;

  const scrollTop = useCallback(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
  }, []);

  return (
    <div
      className="pointer-events-none fixed bottom-0 left-0 right-0 z-[95] box-border overflow-x-hidden px-3"
      style={{
        paddingBottom: "max(0.5rem, env(safe-area-inset-bottom))",
        width: "100%",
        maxWidth: "100%",
      }}
    >
      <div
        role="toolbar"
        aria-label={t("dock.barAria")}
        aria-hidden={!visible}
        className={`mx-auto box-border grid min-h-10 min-w-0 w-full max-w-xl grid-cols-[minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)_auto] items-center gap-0.5 rounded-full border border-bridge/25 bg-[#0a1624]/95 px-1 py-1 shadow-[0_4px_24px_rgba(0,0,0,0.55)] backdrop-blur-md transition-[transform,opacity] duration-300 ease-out motion-reduce:transition-none sm:gap-1 sm:px-2 sm:py-1.5 ${
          visible
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none translate-y-[calc(100%+1rem)] opacity-0"
        }`}
      >
        <a
          href={TEL_HREF}
          title={t("dock.call")}
          className="inline-flex min-h-10 min-w-0 items-center justify-center truncate rounded-full bg-[#2a9d6f] px-1 py-2 text-center text-[10px] font-semibold leading-tight text-sea-950 hover:bg-[#34a878] active:bg-[#2a9d6f] sm:px-2.5 sm:text-sm"
        >
          {t("dock.call")}
        </a>
        <Link
          href="/contact"
          title={t("dock.book")}
          className="inline-flex min-h-10 min-w-0 items-center justify-center truncate rounded-full border border-bridge/45 bg-transparent px-1 py-2 text-center text-[10px] font-medium leading-tight text-white hover:border-bridge hover:bg-sea-800/40 sm:px-2.5 sm:text-sm"
        >
          {t("dock.book")}
        </Link>
        <Link
          href="/offer"
          title={t("nav.offer")}
          className="inline-flex min-h-10 min-w-0 items-center justify-center truncate rounded-full border border-bridge/45 bg-transparent px-1 py-2 text-center text-[10px] font-medium leading-tight text-white hover:border-bridge hover:bg-sea-800/40 sm:px-2.5 sm:text-sm"
        >
          {t("nav.offer")}
        </Link>
        <button
          type="button"
          onClick={scrollTop}
          className="inline-flex h-9 w-9 shrink-0 items-center justify-center justify-self-end rounded-full border border-bridge/45 bg-sea-850/50 text-bridge hover:border-bridge hover:bg-sea-800/70 sm:h-10 sm:w-10"
          aria-label={t("dock.backToTop")}
          title={t("dock.backToTop")}
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.25"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
          >
            <path d="M12 19V5M5 12l7-7 7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}
