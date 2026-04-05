"use client";

import { FigmaChevronDown } from "@/components/icons/figma-icons";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  useCallback,
  useEffect,
  useId,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { BrandLogo } from "@/components/brand-logo";
import { useLocale } from "@/components/locale-provider";

type NavLink = { type: "link"; href: string; key: string };
type NavGroup = {
  type: "group";
  key: string;
  hubHref: string;
  children: { href: string; key: string }[];
};

const LINKEDIN_COMPANY_URL = "https://www.linkedin.com/company/thesta/";

const navItems: (NavLink | NavGroup)[] = [
  { type: "link", href: "/", key: "nav.home" },
  { type: "link", href: "/offer", key: "nav.offer" },
  {
    type: "group",
    key: "nav.about",
    hubHref: "/about",
    children: [
      { href: "/about", key: "nav.aboutOverview" },
      { href: "/about/certificates", key: "nav.aboutCertificates" },
      { href: "/about/projects", key: "nav.aboutProjects" },
      { href: "/about/partners", key: "nav.aboutPartners" },
    ],
  },
  { type: "link", href: "/news", key: "nav.news" },
  { type: "link", href: "/contact", key: "nav.contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const { locale, setLocale, t, m } = useLocale();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const menuId = useId();
  const aboutMenuId = useId();
  const headerRef = useRef<HTMLElement>(null);
  const topBarRef = useRef<HTMLDivElement>(null);
  const aboutWrapRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const el = topBarRef.current;
    if (!el) return;
    const apply = () => {
      document.documentElement.style.setProperty(
        "--nav-height",
        `${el.offsetHeight}px`,
      );
    };
    apply();
    const ro = new ResizeObserver(apply);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setAboutOpen(false);
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

  useEffect(() => {
    if (!aboutOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setAboutOpen(false);
    };
    const onPointer = (e: MouseEvent) => {
      const el = aboutWrapRef.current;
      if (el && !el.contains(e.target as Node)) setAboutOpen(false);
    };
    window.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onPointer);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onPointer);
    };
  }, [aboutOpen]);

  const toggleMobile = useCallback(() => {
    setMobileOpen((o) => !o);
  }, []);

  const aboutActive = pathname.startsWith("/about");

  return (
    <header
      ref={headerRef}
      className="fixed left-0 right-0 top-0 z-[80] max-w-full border-b border-bridge-dim/15 bg-sea-950/90 backdrop-blur-md"
    >
      <div className="relative mx-auto max-w-6xl min-w-0 px-4 py-3 sm:px-6">
        <div
          ref={topBarRef}
          className="flex min-w-0 items-center justify-between gap-3"
        >
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
            {navItems.map((item) => {
              if (item.type === "link") {
                const active = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`px-3 py-2 text-sm transition-colors ${
                      active
                        ? "bg-sea-800/80 text-sonar-glow"
                        : "text-sea-200 hover:bg-sea-850/80 hover:text-white"
                    }`}
                  >
                    {t(item.key)}
                  </Link>
                );
              }

              return (
                <div key={item.hubHref} className="relative" ref={aboutWrapRef}>
                  <button
                    type="button"
                    className={`flex items-center gap-1 px-3 py-2 text-sm transition-colors ${
                      aboutActive || aboutOpen
                        ? "bg-sea-800/80 text-sonar-glow"
                        : "text-sea-200 hover:bg-sea-850/80 hover:text-white"
                    }`}
                    aria-expanded={aboutOpen}
                    aria-haspopup="true"
                    aria-controls={aboutMenuId}
                    onClick={() => setAboutOpen((o) => !o)}
                  >
                    {t(item.key)}
                    <ChevronIcon open={aboutOpen} />
                  </button>
                  <div
                    id={aboutMenuId}
                    role="menu"
                    aria-label={t(item.key)}
                    className={`absolute left-0 top-full z-[90] pt-1 ${
                      aboutOpen ? "block" : "hidden"
                    }`}
                  >
                    <div className="min-w-[14rem] border border-bridge-dim/40 bg-sea-950 py-2 shadow-[0_16px_48px_rgba(0,0,0,0.55)]">
                      {item.children.map((c) => {
                        const active = pathname === c.href;
                        return (
                          <Link
                            key={c.href}
                            href={c.href}
                            role="menuitem"
                            className={`block px-4 py-2.5 text-sm transition-colors ${
                              active
                                ? "bg-sea-800/90 text-sonar-glow"
                                : "text-sea-200 hover:bg-sea-850/80 hover:text-white"
                            }`}
                            onClick={() => setAboutOpen(false)}
                          >
                            {t(c.key)}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })}
          </nav>

          <div className="flex shrink-0 items-center gap-2">
            <a
              href={LINKEDIN_COMPANY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden h-9 w-9 shrink-0 items-center justify-center border border-bridge-dim/25 bg-sea-900/90 text-sea-200 transition-colors hover:border-bridge/40 hover:text-bridge md:flex"
              aria-label={t("nav.linkedinAria")}
            >
              <span className="sr-only">{t("nav.linkedin")}</span>
              <LinkedInGlyph className="h-4 w-4" />
            </a>
            <div
              className="flex h-9 items-stretch border border-bridge-dim/25 bg-sea-900/90 p-0.5"
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
              className="flex h-9 w-9 items-center justify-center border border-bridge-dim/25 bg-sea-900/90 text-sea-100 md:hidden"
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
              ? "max-h-[min(85vh,36rem)] opacity-100"
              : "pointer-events-none max-h-0 border-t-transparent opacity-0"
          }`}
          aria-hidden={!mobileOpen}
        >
          <nav
            className={`flex flex-col py-3 ${!mobileOpen ? "invisible" : ""}`}
            aria-label="Mobile"
          >
            {navItems.map((item) => {
              if (item.type === "link") {
                const active = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`px-2 py-3 text-base ${
                      active
                        ? "border-l-2 border-sonar bg-sea-850/50 pl-[calc(0.5rem-2px)] text-sonar-glow"
                        : "border-l-2 border-transparent pl-2 text-sea-200 hover:bg-sea-850/40 hover:text-white"
                    }`}
                    onClick={() => setMobileOpen(false)}
                  >
                    {t(item.key)}
                  </Link>
                );
              }

              return (
                <div
                  key={`${item.hubHref}-mobile`}
                  className="border-l-2 border-transparent"
                >
                  <div className="px-2 py-2 text-xs font-semibold uppercase tracking-wide text-sea-500">
                    {t(item.key)}
                  </div>
                  {item.children.map((c) => {
                    const active = pathname === c.href;
                    return (
                      <Link
                        key={c.href}
                        href={c.href}
                        className={`block py-2.5 pl-6 pr-2 text-base ${
                          active
                            ? "border-l-2 border-sonar bg-sea-850/50 text-sonar-glow"
                            : "border-l-2 border-transparent text-sea-200 hover:bg-sea-850/40 hover:text-white"
                        }`}
                        onClick={() => setMobileOpen(false)}
                      >
                        {t(c.key)}
                      </Link>
                    );
                  })}
                </div>
              );
            })}
            <a
              href={LINKEDIN_COMPANY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 flex items-center gap-3 border-t border-bridge-dim/10 px-2 py-3 text-base text-sea-200 transition-colors hover:bg-sea-850/40 hover:text-white"
              onClick={() => setMobileOpen(false)}
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center border border-bridge-dim/25 bg-sea-900/90 text-bridge">
                <LinkedInGlyph className="h-4 w-4" />
              </span>
              <span>{t("nav.linkedin")}</span>
            </a>
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

function LinkedInGlyph({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <FigmaChevronDown
      className={`shrink-0 transition-transform duration-200 motion-reduce:transition-none ${
        open ? "rotate-180" : ""
      }`}
    />
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
      className={`flex h-full min-h-0 min-w-[2.25rem] items-center justify-center px-2 py-0 text-xs font-medium transition-colors ${
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
