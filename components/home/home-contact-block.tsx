"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { SectionShell } from "@/components/section-shell";
import type { Messages } from "@/lib/messages";

type Contact = Messages["home"]["contact"];

export function HomeContactBlock({ contact }: { contact: Contact }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e?.isIntersecting) setVisible(true); },
      { threshold: 0.2 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <SectionShell id="kontakt" variant="band" aria-labelledby="contact-heading">
      <div
        ref={ref}
        className="relative overflow-hidden border border-bridge-dim/25 bg-gradient-to-br from-sea-850/90 to-sea-900/90 p-8 shadow-inner sm:p-12"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "none" : "translateY(16px)",
          transition: "opacity 0.7s ease-out, transform 0.7s ease-out",
        }}
      >
        {/* ── Sonar radial glow — wchodzi po pojawieniu się sekcji ── */}
        <div
          className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(0,212,177,0.09) 0%, transparent 65%)",
            opacity: visible ? 1 : 0,
            transition: "opacity 1.2s ease-out",
            transitionDelay: "300ms",
          }}
          aria-hidden
        />

        {/* ── Animated sonar ring ── */}
        <div
          className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full border border-sonar/10"
          style={{
            opacity: visible ? 1 : 0,
            transition: "opacity 0.8s ease-out",
            transitionDelay: "400ms",
            animation: visible ? "contact-ring-pulse 3.5s ease-in-out infinite" : "none",
          }}
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -right-8 -top-8 h-48 w-48 rounded-full border border-sonar/[0.07]"
          style={{
            opacity: visible ? 1 : 0,
            transition: "opacity 0.8s ease-out",
            transitionDelay: "550ms",
            animation: visible ? "contact-ring-pulse 3.5s ease-in-out 0.8s infinite" : "none",
          }}
          aria-hidden
        />

        {/* ── Corner accent — top-left ── */}
        <span
          className="pointer-events-none absolute left-0 top-0 h-16 w-16"
          style={{
            background: "linear-gradient(135deg, rgba(0,212,177,0.1) 0%, transparent 60%)",
            opacity: visible ? 1 : 0,
            transition: "opacity 0.8s ease-out",
            transitionDelay: "200ms",
          }}
          aria-hidden
        />

        {/* ── Content ── */}
        <div className="relative z-10">
          {/* Kicker */}
          <p
            className="font-mono text-[10px] uppercase tracking-[0.2em] text-sonar/50"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "none" : "translateY(8px)",
              transition: "opacity 0.5s ease-out, transform 0.5s ease-out",
              transitionDelay: "150ms",
            }}
          >
            Thesta · kontakt
          </p>

          <h2
            id="contact-heading"
            className="mt-3 text-2xl font-semibold text-white sm:text-3xl"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "none" : "translateY(10px)",
              transition: "opacity 0.55s ease-out, transform 0.55s ease-out",
              transitionDelay: "220ms",
            }}
          >
            {contact.title}
          </h2>

          <p
            className="mt-4 max-w-2xl text-sea-300"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "none" : "translateY(10px)",
              transition: "opacity 0.55s ease-out, transform 0.55s ease-out",
              transitionDelay: "300ms",
            }}
          >
            {contact.body}
          </p>

          {/* Contact details */}
          <p
            className="mt-6 text-sm text-sea-300"
            style={{
              opacity: visible ? 1 : 0,
              transition: "opacity 0.5s ease-out",
              transitionDelay: "380ms",
            }}
          >
            {contact.phoneLabel}{" "}
            <a href="tel:+48725105207" className="text-bridge transition-colors hover:text-sonar hover:underline">
              +48 725 105 207
            </a>
            {" · "}
            <a href="mailto:biuro@thesta.pl" className="text-bridge transition-colors hover:text-sonar hover:underline">
              biuro@thesta.pl
            </a>
          </p>

          {/* CTA button */}
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "none" : "translateY(8px)",
              transition: "opacity 0.5s ease-out, transform 0.5s ease-out",
              transitionDelay: "460ms",
            }}
          >
            <Link
              href="/contact"
              className="group/cta relative mt-8 inline-flex items-center gap-3 overflow-hidden bg-sonar/[0.12] px-6 py-3 text-sm font-medium text-white ring-1 ring-sonar/30 transition-[background-color,box-shadow,ring-color] duration-300 hover:bg-sonar/[0.2] hover:ring-sonar/55 hover:shadow-[0_0_24px_-6px_rgba(0,212,177,0.35)]"
            >
              {/* Sweep shimmer on hover */}
              <span
                className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-sonar/10 to-transparent transition-transform duration-500 group-hover/cta:translate-x-full"
                aria-hidden
              />
              <span className="relative">{contact.formCta}</span>
              {/* Arrow */}
              <span className="relative transition-transform duration-200 group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5 text-sonar/70 group-hover/cta:text-sonar">
                <svg width="11" height="11" viewBox="0 0 11 11" fill="none" aria-hidden>
                  <path d="M1.5 9.5L9.5 1.5M9.5 1.5H3.5M9.5 1.5V7.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
