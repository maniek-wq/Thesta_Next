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

/** Całkowity czas jednego przejścia slajdu (wyjście tekstu + crossfade zdjęcia). */
const TRANSITION_TOTAL_MS = 500 + 700;
const NAV_LOCK_MS = Math.max(620, TRANSITION_TOTAL_MS + 80);
const TOUCH_THRESHOLD = 56;
/** Zgodne z `duration-500` na bloku tekstu — wyjście przed zmianą zdjęcia. */
const TEXT_EXIT_MS = 500;
/** Zgodne z `duration-700` na warstwie zdjęć. */
const INTRO_IMAGE_TRANSITION_MS = 700;
/** Po pierwszym kadrze zdjęcia — potem slide-in tekstu slajdu 0. */
const INTRO_FIRST_TEXT_DELAY_MS = 160;
/** Rozsuwanie kurtyny (góra/dół) — zgodne z `duration-[1200ms]` na panelach. */
const CURTAIN_OPEN_MS = 1200;
const CURTAIN_DONE_BUFFER_MS = 60;

type Phase = "intro" | "curtain" | "done";

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

function clearTimeoutList(ids: number[]) {
  ids.forEach((id) => window.clearTimeout(id));
  ids.length = 0;
}

export function HomeIntroPanels({
  intro,
  onIntroEnd,
}: {
  intro: IntroPanels;
  onIntroEnd?: () => void;
}) {
  const slideCount = intro.panels.length;
  const lastSlide = slideCount - 1;

  const onIntroEndRef = useRef(onIntroEnd);
  onIntroEndRef.current = onIntroEnd;

  const notifyIntroEnd = useCallback(() => {
    onIntroEndRef.current?.();
  }, []);

  const [phase, setPhase] = useState<Phase>("intro");
  const [slideIndex, setSlideIndex] = useState(0);
  const [textSlide, setTextSlide] = useState(0);
  const [textVisible, setTextVisible] = useState(false);
  const [curtainOpen, setCurtainOpen] = useState(false);
  const lastNavAt = useRef(0);
  const touchStartY = useRef<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isNavigating = useRef(false);
  const transitionTimersRef = useRef<number[]>([]);
  const firstTextTimerRef = useRef<number | null>(null);
  const curtainDoneTimerRef = useRef<number | null>(null);

  const clearTransitionTimers = useCallback(() => {
    clearTimeoutList(transitionTimersRef.current);
  }, []);

  const cancelFirstTextTimer = useCallback(() => {
    if (firstTextTimerRef.current != null) {
      window.clearTimeout(firstTextTimerRef.current);
      firstTextTimerRef.current = null;
    }
  }, []);

  const cancelCurtainDoneTimer = useCallback(() => {
    if (curtainDoneTimerRef.current != null) {
      window.clearTimeout(curtainDoneTimerRef.current);
      curtainDoneTimerRef.current = null;
    }
  }, []);

  useLayoutEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setPhase("done");
      notifyIntroEnd();
    }
  }, [notifyIntroEnd]);

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
    if (phase !== "curtain") return;
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      isNavigating.current = false;
      notifyIntroEnd();
      setPhase("done");
      window.scrollTo(0, 0);
      return;
    }

    setCurtainOpen(false);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setCurtainOpen(true);
      });
    });

    cancelCurtainDoneTimer();
    curtainDoneTimerRef.current = window.setTimeout(() => {
      curtainDoneTimerRef.current = null;
      isNavigating.current = false;
      notifyIntroEnd();
      setPhase("done");
      window.scrollTo(0, 0);
    }, CURTAIN_OPEN_MS + CURTAIN_DONE_BUFFER_MS);

    return () => {
      cancelCurtainDoneTimer();
    };
  }, [phase, cancelCurtainDoneTimer, notifyIntroEnd]);

  useEffect(() => {
    return () => {
      clearTransitionTimers();
      cancelFirstTextTimer();
      cancelCurtainDoneTimer();
    };
  }, [cancelFirstTextTimer, cancelCurtainDoneTimer, clearTransitionTimers]);

  /** Pierwsze wejście: samo zdjęcie, potem slide-in tekstu slajdu 0. */
  useEffect(() => {
    if (phase !== "intro") return;
    cancelFirstTextTimer();
    firstTextTimerRef.current = window.setTimeout(() => {
      firstTextTimerRef.current = null;
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setTextVisible(true));
      });
    }, INTRO_FIRST_TEXT_DELAY_MS);
    return () => cancelFirstTextTimer();
  }, [phase, cancelFirstTextTimer]);

  const runSlideTransition = useCallback(
    (target: number) => {
      if (phase !== "intro") return;
      if (isNavigating.current) return;
      if (target === slideIndex) return;
      if (Math.abs(target - slideIndex) !== 1) return;

      cancelFirstTextTimer();
      isNavigating.current = true;
      clearTransitionTimers();
      setTextVisible(false);

      transitionTimersRef.current.push(
        window.setTimeout(() => {
          setSlideIndex(target);
          setTextSlide(target);
        }, TEXT_EXIT_MS),
        window.setTimeout(() => {
          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              setTextVisible(true);
              isNavigating.current = false;
            });
          });
        }, TEXT_EXIT_MS + INTRO_IMAGE_TRANSITION_MS),
      );
    },
    [phase, slideIndex, cancelFirstTextTimer, clearTransitionTimers],
  );

  const tryStep = useCallback(
    (dir: 1 | -1) => {
      if (phase !== "intro") return;
      if (isNavigating.current) return;
      const now = Date.now();
      if (now - lastNavAt.current < NAV_LOCK_MS) return;

      if (dir === 1) {
        if (slideIndex < lastSlide) {
          lastNavAt.current = now;
          runSlideTransition(slideIndex + 1);
        } else {
          lastNavAt.current = now;
          cancelFirstTextTimer();
          isNavigating.current = true;
          clearTransitionTimers();
          setTextVisible(false);
          transitionTimersRef.current.push(
            window.setTimeout(() => {
              setPhase("curtain");
            }, TEXT_EXIT_MS),
          );
        }
      } else if (slideIndex > 0) {
        lastNavAt.current = now;
        runSlideTransition(slideIndex - 1);
      }
    },
    [
      phase,
      slideIndex,
      lastSlide,
      runSlideTransition,
      cancelFirstTextTimer,
      clearTransitionTimers,
    ],
  );

  const skipIntro = useCallback(() => {
    clearTransitionTimers();
    cancelFirstTextTimer();
    cancelCurtainDoneTimer();
    isNavigating.current = false;
    notifyIntroEnd();
    setPhase("done");
    window.scrollTo(0, 0);
  }, [cancelCurtainDoneTimer, cancelFirstTextTimer, clearTransitionTimers, notifyIntroEnd]);

  useEffect(() => {
    if (phase !== "intro" && phase !== "curtain") return;
    const el = containerRef.current;
    if (!el) return;
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (phase === "intro") {
        if (e.deltaY > 8) tryStep(1);
        else if (e.deltaY < -8) tryStep(-1);
      }
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, [phase, tryStep]);

  useEffect(() => {
    if (phase !== "intro" && phase !== "curtain") return;
    const onKey = (e: KeyboardEvent) => {
      if (phase !== "intro") return;
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

  const panel = intro.panels[textSlide];
  const [layoutBase, textOff, textOn] = TEXT_LAYOUT[textSlide];

  return (
    <div
      ref={containerRef}
      role="region"
      aria-label={intro.regionLabel}
      className="fixed inset-0 z-40 touch-none opacity-100"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {phase === "intro" ? (
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
      ) : null}

      <div className="pointer-events-none relative z-[2] flex h-full min-h-0 flex-col pt-16 sm:pt-20">
        {phase === "intro" ? (
          <>
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
                  <p className="mt-4 max-w-prose text-pretty text-sm font-medium leading-snug text-bridge/95 sm:text-base">
                    {panel.tagline}
                  </p>
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
                {textVisible
                  ? `${slideIndex + 1} / ${slideCount} — ${panel.title}. ${panel.tagline}`
                  : `${slideIndex + 1} / ${slideCount}`}
              </div>
            </div>
          </>
        ) : null}

        <button
          type="button"
          onClick={skipIntro}
          className="pointer-events-auto absolute right-4 top-20 z-[15] rounded-lg border border-bridge-dim/30 bg-sea-950/70 px-3 py-1.5 text-xs text-sea-300 backdrop-blur-sm transition-colors hover:border-bridge/50 hover:text-white sm:right-6 sm:top-24"
        >
          {intro.skip}
        </button>
      </div>

      {phase === "curtain" ? (
        <div
          className="pointer-events-none absolute inset-0 z-[10]"
          aria-hidden
        >
          <div
            className={`absolute left-0 right-0 top-0 h-1/2 origin-top bg-black transform-gpu transition-transform duration-[1200ms] ease-in-out motion-reduce:transition-none ${
              curtainOpen ? "-translate-y-full" : "translate-y-0"
            }`}
          />
          <div
            className={`absolute bottom-0 left-0 right-0 h-1/2 origin-bottom bg-black transform-gpu transition-transform duration-[1200ms] ease-in-out motion-reduce:transition-none ${
              curtainOpen ? "translate-y-full" : "translate-y-0"
            }`}
          />
        </div>
      ) : null}
    </div>
  );
}
