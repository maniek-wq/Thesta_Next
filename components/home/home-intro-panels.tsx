"use client";

import Image from "next/image";
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import type { Messages } from "@/lib/messages";

type IntroPanels = Messages["home"]["introPanels"];

const NAV_LOCK_MS = 620;
const TOUCH_THRESHOLD = 56;

type Phase = "intro" | "exiting" | "done";

/** [kontener tekstu, klasy „wyjścia”, klasy „wejścia”] — różne pozycje i kierunki motion per slajd */
const TEXT_LAYOUT: [string, string, string][] = [
  [
    "flex h-full w-full flex-col justify-end items-start pb-16 sm:pb-24",
    "translate-y-10 opacity-0 motion-reduce:translate-y-0 motion-reduce:opacity-100",
    "translate-y-0 opacity-100",
  ],
  [
    "flex h-full w-full flex-col justify-center items-end pr-2 text-right sm:pr-10",
    "translate-x-10 opacity-0 motion-reduce:translate-x-0 motion-reduce:opacity-100",
    "translate-x-0 opacity-100",
  ],
  [
    "flex h-full w-full flex-col justify-start items-start pt-4 sm:pt-16",
    "-translate-y-10 opacity-0 motion-reduce:translate-y-0 motion-reduce:opacity-100",
    "translate-y-0 opacity-100",
  ],
];

export function HomeIntroPanels({ intro }: { intro: IntroPanels }) {
  const [phase, setPhase] = useState<Phase>("intro");
  const [slideIndex, setSlideIndex] = useState(0);
  const [textVisible, setTextVisible] = useState(true);
  const lastNavAt = useRef(0);
  const touchStartY = useRef<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const skipInitialTextAnim = useRef(true);

  useLayoutEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setPhase("done");
    }
  }, []);

  useEffect(() => {
    if (phase === "done") return;
    const html = document.documentElement;
    const body = document.body;
    const prevHtml = html.style.overflow;
    const prevBody = body.style.overflow;
    html.style.overflow = "hidden";
    body.style.overflow = "hidden";
    return () => {
      html.style.overflow = prevHtml;
      body.style.overflow = prevBody;
    };
  }, [phase]);

  useEffect(() => {
    if (phase !== "exiting") return;
    const t = window.setTimeout(() => {
      setPhase("done");
      window.scrollTo(0, 0);
    }, 520);
    return () => window.clearTimeout(t);
  }, [phase]);

  const tryStep = useCallback(
    (dir: 1 | -1) => {
      if (phase !== "intro") return;
      const now = Date.now();
      if (now - lastNavAt.current < NAV_LOCK_MS) return;

      if (dir === 1) {
        if (slideIndex < 2) {
          lastNavAt.current = now;
          setSlideIndex((i) => i + 1);
        } else {
          lastNavAt.current = now;
          setPhase("exiting");
        }
      } else if (slideIndex > 0) {
        lastNavAt.current = now;
        setSlideIndex((i) => i - 1);
      }
    },
    [phase, slideIndex],
  );

  useEffect(() => {
    if (skipInitialTextAnim.current) {
      skipInitialTextAnim.current = false;
      return;
    }
    setTextVisible(false);
    const id = requestAnimationFrame(() => {
      requestAnimationFrame(() => setTextVisible(true));
    });
    return () => cancelAnimationFrame(id);
  }, [slideIndex]);

  const skipIntro = useCallback(() => {
    setPhase("done");
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (phase !== "intro") return;
    const el = containerRef.current;
    if (!el) return;
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (e.deltaY > 8) tryStep(1);
      else if (e.deltaY < -8) tryStep(-1);
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, [phase, tryStep]);

  useEffect(() => {
    if (phase !== "intro") return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" || e.key === "PageDown") {
        e.preventDefault();
        tryStep(1);
      } else if (e.key === "ArrowUp" || e.key === "PageUp") {
        e.preventDefault();
        tryStep(-1);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [phase, tryStep]);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartY.current = e.touches[0].clientY;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartY.current == null) return;
    const dy = touchStartY.current - e.changedTouches[0].clientY;
    touchStartY.current = null;
    if (Math.abs(dy) < TOUCH_THRESHOLD) return;
    if (dy > 0) tryStep(1);
    else tryStep(-1);
  };

  if (phase === "done") return null;

  const panel = intro.panels[slideIndex];
  const [layoutBase, textOff, textOn] = TEXT_LAYOUT[slideIndex];

  return (
    <div
      ref={containerRef}
      role="region"
      aria-label={intro.regionLabel}
      className={`fixed inset-0 z-40 touch-none transition-opacity duration-500 ease-in-out motion-reduce:transition-none ${
        phase === "exiting" ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <div className="absolute inset-0 bg-sea-950">
        {intro.panels.map((p, i) => (
          <div
            key={p.title}
            className={`absolute inset-0 transition-all duration-700 ease-in-out motion-reduce:transition-none ${
              i === slideIndex
                ? "z-[1] scale-100 opacity-100"
                : "pointer-events-none z-0 scale-[1.05] opacity-0"
            }`}
            aria-hidden={i !== slideIndex}
          >
            <Image
              src={p.image}
              alt=""
              fill
              priority={i === 0}
              sizes="100vw"
              className="object-cover"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-sea-950 via-sea-950/75 to-sea-950/30"
              aria-hidden
            />
          </div>
        ))}
      </div>

      <div className="pointer-events-none relative z-[2] flex h-full min-h-0 flex-col pt-16 sm:pt-20">
        <div className="mx-auto flex min-h-0 w-full max-w-6xl flex-1 px-4 sm:px-6">
          <div className={`relative min-h-0 flex-1 ${layoutBase}`}>
            <div
              className={`max-w-2xl transition-all duration-500 ease-in-out motion-reduce:duration-0 motion-reduce:transition-none ${
                textVisible ? textOn : textOff
              }`}
            >
              <h2 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
                {panel.title}
              </h2>
              <p className="mt-5 max-w-prose text-pretty text-base leading-relaxed text-sea-200 sm:text-lg">
                {panel.body}
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-2 pb-8">
          <p
            className="font-mono text-xs uppercase tracking-[0.2em] text-bridge/80 animate-pulse motion-reduce:animate-none"
            aria-hidden
          >
            {intro.scrollHint}
          </p>
          <div className="sr-only" aria-live="polite" aria-atomic="true">
            {`${slideIndex + 1} / 3 — ${panel.title}`}
          </div>
        </div>

        <button
          type="button"
          onClick={skipIntro}
          className="pointer-events-auto absolute right-4 top-20 z-[3] rounded-lg border border-bridge-dim/30 bg-sea-950/70 px-3 py-1.5 text-xs text-sea-300 backdrop-blur-sm transition-colors hover:border-bridge/50 hover:text-white sm:right-6 sm:top-24"
        >
          {intro.skip}
        </button>
      </div>
    </div>
  );
}
