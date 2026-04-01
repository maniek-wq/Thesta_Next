"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import { BrandLogo } from "@/components/brand-logo";
import { useLocale } from "@/components/locale-provider";

const links: { href: string; key: string }[] = [
  { href: "/", key: "nav.home" },
  { href: "/offer", key: "nav.offer" },
  { href: "/news", key: "nav.news" },
  { href: "/contact", key: "nav.contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const { locale, setLocale, t, m } = useLocale();
  const [mobileOpen, setMobileOpen] = useState(false);
  const menuId = useId();
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!mobileOpen) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    if (!mobileOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [mobileOpen]);

  useEffect(() => {
    if (!mobileOpen) return;
    const onPointer = (e: MouseEvent | TouchEvent) => {
      const el = headerRef.current;
      if (el && !el.contains(e.target as Node)) setMobileOpen(false);
    };
    document.addEventListener("mousedown", onPointer);
    document.addEventListener("touchstart", onPointer, { passive: true });
    return () => {
      document.removeEventListener("mousedown", onPointer);
      document.removeEventListener("touchstart", onPointer);
    };
  }, [mobileOpen]);

  const toggleMobile = useCallback(() => {
    setMobileOpen((o) => !o);
  }, []);

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 max-w-full overflow-x-hidden border-b border-bridge-dim/15 bg-sea-950/90 backdrop-blur-md"
    >
      <div className="relative mx-auto max-w-6xl px-4 py-3 sm:px-6">
        <div className="flex items-center justify-between gap-3">
          <Link
            href="/"
            className="group flex min-w-0 items-center gap-3 leading-tight transition-colors hover:text-bridge"
            aria-label={`${m.brand.name} — ${m.brand.tagline}`}
            onClick={() => setMobileOpen(false)}
          >
            <BrandLogo
              alt=""
              className="h-9 w-[min(11rem,52vw)] max-h-9 shrink-0 opacity-95 group-hover:opacity-100 sm:h-10 sm:max-h-10 sm:w-[12.5rem]"
              priority
            />
            <span className="hidden min-w-0 truncate text-xs text-sea-300 group-hover:text-bridge/90 sm:inline">
              {m.brand.tagline}
            </span>
          </Link>

          <nav
            className="hidden items-center gap-1 md:flex"
            aria-label="Main"
          >
            {links.map(({ href, key }) => {
              const active = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  className={`rounded-lg px-3 py-2 text-sm transition-colors ${
                    active
                      ? "bg-sea-800/80 text-sonar-glow"
                      : "text-sea-200 hover:bg-sea-850/80 hover:text-white"
                  }`}
                >
                  {t(key)}
                </Link>
              );
            })}
          </nav>

          <div className="flex shrink-0 items-center gap-2">
            <div
              className="flex rounded-lg border border-bridge-dim/25 bg-sea-900/90 p-0.5"
              role="group"
              aria-label="Language"
            >
              <LangButton
                label="PL"
                active={locale === "pl"}
                onSelect={() => setLocale("pl")}
              />
              <LangButton
                label="EN"
                active={locale === "en"}
                onSelect={() => setLocale("en")}
              />
            </div>

            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-bridge-dim/25 bg-sea-900/90 text-sea-100 md:hidden"
              onClick={toggleMobile}
              aria-expanded={mobileOpen}
              aria-controls={menuId}
              aria-label={mobileOpen ? t("nav.menuClose") : t("nav.menuOpen")}
            >
              <span className="sr-only">{t("nav.menu")}</span>
              <HamburgerIcon open={mobileOpen} />
            </button>
          </div>
        </div>

        <div
          id={menuId}
          role="region"
          aria-label={t("nav.menu")}
          className={`overflow-hidden border-t border-bridge-dim/10 bg-sea-950/98 backdrop-blur-md transition-[max-height,opacity] duration-200 motion-reduce:transition-none md:hidden ${
            mobileOpen
              ? "max-h-[min(70vh,28rem)] opacity-100"
              : "pointer-events-none max-h-0 border-t-transparent opacity-0"
          }`}
          aria-hidden={!mobileOpen}
        >
          <nav
            className={`flex flex-col py-3 ${!mobileOpen ? "invisible" : ""}`}
            aria-label="Mobile"
          >
            {links.map(({ href, key }) => {
              const active = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  className={`px-2 py-3 text-base ${
                    active
                      ? "border-l-2 border-sonar bg-sea-850/50 pl-[calc(0.5rem-2px)] text-sonar-glow"
                      : "border-l-2 border-transparent pl-2 text-sea-200 hover:bg-sea-850/40 hover:text-white"
                  }`}
                  onClick={() => setMobileOpen(false)}
                >
                  {t(key)}
                </Link>
              );
            })}
            <Link
              href="/privacy"
              className="mt-1 border-t border-bridge-dim/10 px-2 py-3 text-sm text-sea-400 hover:text-sea-200"
              onClick={() => setMobileOpen(false)}
            >
              {t("nav.privacy")}
            </Link>
            <Link
              href="/cookies"
              className="px-2 py-3 text-sm text-sea-400 hover:text-sea-200"
              onClick={() => setMobileOpen(false)}
            >
              {t("nav.cookies")}
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

function LangButton({
  label,
  active,
  onSelect,
}: {
  label: string;
  active: boolean;
  onSelect: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={`min-w-[2.25rem] rounded-md px-2 py-1 text-xs font-medium transition-colors ${
        active
          ? "bg-bridge-dim/40 text-white shadow-inner"
          : "text-sea-300 hover:text-white"
      }`}
      aria-pressed={active}
    >
      {label}
    </button>
  );
}

function HamburgerIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      aria-hidden
      className="transition-transform duration-200 motion-reduce:transition-none"
    >
      {open ? (
        <>
          <path d="M6 6l12 12M18 6L6 18" />
        </>
      ) : (
        <>
          <path d="M4 7h16M4 12h16M4 17h16" />
        </>
      )}
    </svg>
  );
}
