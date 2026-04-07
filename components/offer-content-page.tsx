"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FigmaArrowDiagonal } from "@/components/icons/figma-icons";

export type OfferContentStep = {
  readonly title: string;
  readonly body?: string;
};

export type OfferContentBlock = {
  readonly caption: string;
  readonly body: string;
  readonly bullets?: readonly string[];
  readonly media?: "placeholder" | "none";
  readonly image?: { readonly src: string; readonly alt: string };
  readonly steps?: readonly OfferContentStep[];
};

type OfferContentPageProps = {
  backHref: string;
  backLabel: string;
  title: string;
  intro: string;
  placeholderCaption: string;
  blocks: readonly OfferContentBlock[];
  cta?: { readonly label: string; readonly href: string };
};

/* ── Scroll-reveal hook ── */
function useReveal(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e?.isIntersecting) setVisible(true); },
      { threshold },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

/* ── Single block ── */
function ContentBlock({
  block,
  index,
  placeholderCaption,
}: {
  block: OfferContentBlock;
  index: number;
  placeholderCaption: string;
}) {
  const { ref, visible } = useReveal(0.1);
  const num = String(index + 1).padStart(2, "0");
  const showMedia = block.media !== "none";
  const image = block.image;

  return (
    <div
      ref={ref}
      className="relative"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translateY(22px)",
        transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
      }}
    >
      {/* Left accent line */}
      <div
        className="absolute -left-6 top-0 w-px origin-top"
        style={{
          background: "linear-gradient(to bottom, rgba(0,212,177,0.55), transparent)",
          height: "100%",
          transform: visible ? "scaleY(1)" : "scaleY(0)",
          transition: "transform 0.7s cubic-bezier(0.4,0,0.2,1)",
          transitionDelay: "100ms",
        }}
        aria-hidden
      />

      {/* Block header */}
      <div className="flex items-start gap-4">
        {/* Number badge */}
        <span
          className="mt-0.5 shrink-0 font-mono text-[10px] font-medium tracking-[0.1em] text-sonar/50"
          style={{
            opacity: visible ? 1 : 0,
            transition: "opacity 0.5s ease-out",
            transitionDelay: "80ms",
          }}
        >
          {num}
        </span>

        <div className="flex-1 min-w-0">
          {/* Media */}
          {showMedia && (
            <div
              className="mb-5 relative aspect-video w-full overflow-hidden border border-bridge-dim/20 bg-sea-850/60"
              style={{
                opacity: visible ? 1 : 0,
                transition: "opacity 0.6s ease-out",
                transitionDelay: "50ms",
              }}
            >
              {image ? (
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 48rem, 100vw"
                />
              ) : (
                <div
                  className="flex h-full w-full flex-col items-center justify-center gap-2 px-4 text-center"
                  role="img"
                  aria-label={placeholderCaption}
                >
                  <span className="text-4xl text-sea-600" aria-hidden>▣</span>
                  <span className="text-xs text-sea-500">{placeholderCaption}</span>
                </div>
              )}
            </div>
          )}

          {/* Caption */}
          <h2
            className="text-[1.1rem] font-semibold leading-snug tracking-[-0.01em] text-[#dce3ed] sm:text-[1.2rem]"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "none" : "translateX(-8px)",
              transition: "opacity 0.5s ease-out, transform 0.5s ease-out",
              transitionDelay: "120ms",
            }}
          >
            {block.caption}
          </h2>

          {/* Sonar underline */}
          <div
            className="mt-2 h-px w-10 origin-left bg-sonar/40"
            style={{
              transform: visible ? "scaleX(1)" : "scaleX(0)",
              transition: "transform 0.5s ease-out",
              transitionDelay: "200ms",
            }}
            aria-hidden
          />

          {/* Body */}
          {block.body ? (
            <p
              className="mt-4 text-[0.94rem] leading-[1.85] text-[#8aafc8] whitespace-pre-line"
              style={{
                opacity: visible ? 1 : 0,
                transition: "opacity 0.55s ease-out",
                transitionDelay: "180ms",
              }}
            >
              {block.body}
            </p>
          ) : null}

          {/* Steps — mini-timeline */}
          {block.steps && block.steps.length > 0 && (
            <ol className="mt-5 space-y-0">
              {block.steps.map((step, k) => (
                <li
                  key={k}
                  className="relative flex gap-4 pb-6 last:pb-0"
                  style={{
                    opacity: visible ? 1 : 0,
                    transform: visible ? "none" : "translateX(-10px)",
                    transition: "opacity 0.5s ease-out, transform 0.5s ease-out",
                    transitionDelay: `${220 + k * 80}ms`,
                  }}
                >
                  {/* Vertical connector */}
                  {k < (block.steps?.length ?? 0) - 1 && (
                    <span
                      className="absolute left-[13px] top-7 h-full w-px"
                      style={{ background: "rgba(37,82,120,0.5)" }}
                      aria-hidden
                    />
                  )}
                  {/* Step dot */}
                  <span className="relative mt-1 flex h-7 w-7 shrink-0 items-center justify-center border border-sonar/30 bg-sea-950 font-mono text-[9px] text-sonar/70">
                    {String(k + 1).padStart(2, "0")}
                  </span>
                  <div className="min-w-0 flex-1 pt-0.5">
                    <p className="text-[0.9rem] font-medium text-[#dce3ed]">{step.title}</p>
                    {step.body && (
                      <p className="mt-1 text-[0.85rem] leading-[1.75] text-[#8aafc8]">{step.body}</p>
                    )}
                  </div>
                </li>
              ))}
            </ol>
          )}

          {/* Bullets */}
          {block.bullets && block.bullets.length > 0 && (
            <ul className="mt-4 space-y-2">
              {block.bullets.map((item, j) => (
                <li
                  key={j}
                  className="flex items-start gap-3 text-[0.9rem] leading-[1.7] text-[#dce3ed]/88"
                  style={{
                    opacity: visible ? 1 : 0,
                    transform: visible ? "none" : "translateX(-8px)",
                    transition: "opacity 0.45s ease-out, transform 0.45s ease-out",
                    transitionDelay: `${200 + j * 55}ms`,
                  }}
                >
                  <span className="mt-[6px] h-1.5 w-1.5 shrink-0 rounded-full bg-sonar/55" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

/* ── Page ── */
export function OfferContentPage({
  backHref,
  backLabel,
  title,
  intro,
  placeholderCaption,
  blocks,
  cta,
}: OfferContentPageProps) {
  const { ref: headerRef, visible: headerVisible } = useReveal(0.2);

  return (
    <div
      className="mx-auto max-w-3xl px-4 py-16 sm:px-6"
      style={{ backgroundColor: "var(--bg-deep, #0d2035)" }}
    >
      {/* Back link */}
      <Link
        href={backHref}
        className="group inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.12em] text-sonar/50 transition-colors hover:text-sonar"
      >
        <span className="transition-transform duration-200 group-hover:-translate-x-0.5">←</span>
        {backLabel}
      </Link>

      {/* Header */}
      <div
        ref={headerRef}
        className="mt-8"
        style={{
          opacity: headerVisible ? 1 : 0,
          transform: headerVisible ? "none" : "translateY(14px)",
          transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
        }}
      >
        {/* Sonar left accent */}
        <div className="flex items-start gap-4">
          <div className="mt-2 h-10 w-px shrink-0 bg-sonar/50" aria-hidden />
          <div>
            <h1 className="text-[2rem] font-semibold leading-[1.1] tracking-[-0.02em] text-white sm:text-[2.5rem]">
              {title}
            </h1>
            <p
              className="mt-5 text-[0.97rem] leading-[1.85] text-[#8aafc8]"
              style={{
                opacity: headerVisible ? 1 : 0,
                transition: "opacity 0.6s ease-out",
                transitionDelay: "200ms",
              }}
            >
              {intro}
            </p>
          </div>
        </div>

        {/* Divider */}
        <div
          className="mt-8 h-px w-full origin-left"
          style={{
            background: "linear-gradient(90deg, rgba(0,212,177,0.35) 0%, transparent 60%)",
            transform: headerVisible ? "scaleX(1)" : "scaleX(0)",
            transition: "transform 0.8s ease-out",
            transitionDelay: "300ms",
          }}
          aria-hidden
        />
      </div>

      {/* Blocks */}
      <div className="mt-12 space-y-12 pl-6">
        {blocks.map((block, i) => (
          <ContentBlock
            key={i}
            block={block}
            index={i}
            placeholderCaption={placeholderCaption}
          />
        ))}
      </div>

      {/* CTA */}
      {cta && (
        <div
          className="mt-14 border-t pt-10"
          style={{ borderColor: "rgba(37,82,120,0.3)" }}
        >
          <Link
            href={cta.href}
            className="group/cta relative inline-flex items-center gap-3 overflow-hidden bg-sonar/[0.12] px-6 py-3 text-sm font-medium text-white ring-1 ring-sonar/30 transition-[background-color,box-shadow] duration-300 hover:bg-sonar/[0.22] hover:shadow-[0_0_24px_-6px_rgba(0,212,177,0.35)] hover:ring-sonar/55"
          >
            <span
              className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-sonar/10 to-transparent transition-transform duration-500 group-hover/cta:translate-x-full"
              aria-hidden
            />
            <span className="relative">{cta.label}</span>
            <FigmaArrowDiagonal
              size={13}
              className="relative text-sonar/70 transition-transform duration-200 group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5 group-hover/cta:text-sonar"
            />
          </Link>
        </div>
      )}
    </div>
  );
}
