"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { BrandLogo } from "@/components/brand-logo";
import { useLocale } from "@/components/locale-provider";

const MIN_MS = 1600;
const MAX_MS = 2800;
/** Zgodne z `animate-radar-spin` w globals.css */
const RADAR_PERIOD_MS = 2200;
/** Kąt wiązki w conic-gradient: podświetlenie ~270°–360° (lokalnie na tarczy) */
const SWEEP_START = 265;
const SWEEP_END = 362;

const BLIPS: { id: string; angleDeg: number }[] = [
  { id: "a", angleDeg: 28 },
  { id: "b", angleDeg: 118 },
  { id: "c", angleDeg: 196 },
  { id: "d", angleDeg: 252 },
  { id: "e", angleDeg: 332 },
];

function sweepRotationAt(now: number, start: number): number {
  const elapsed = Math.max(0, now - start);
  return ((elapsed % RADAR_PERIOD_MS) / RADAR_PERIOD_MS) * 360;
}

function isBlipInSweep(blipAngleDeg: number, sweepRotDeg: number): boolean {
  const rel = (blipAngleDeg - sweepRotDeg + 540) % 360;
  return rel >= SWEEP_START && rel <= SWEEP_END;
}

export function RadarLoader() {
  const { m } = useLocale();
  const [visible, setVisible] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const sweepStartRef = useRef(0);
  const [, setFrame] = useState(0);

  useLayoutEffect(() => {
    if (typeof window === "undefined") return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setReducedMotion(reduce);
    if (reduce) return;
    setVisible(true);
  }, []);

  useLayoutEffect(() => {
    if (visible && !reducedMotion) {
      sweepStartRef.current = performance.now();
    }
  }, [visible, reducedMotion]);

  useEffect(() => {
    if (!visible || reducedMotion || fadeOut) return;
    let id: number;
    const loop = () => {
      setFrame((n) => n + 1);
      id = requestAnimationFrame(loop);
    };
    id = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(id);
  }, [visible, reducedMotion, fadeOut]);

  useEffect(() => {
    if (!visible) return;

    const duration = MIN_MS + Math.random() * (MAX_MS - MIN_MS);

    const done = () => {
      setFadeOut(true);
      window.setTimeout(() => setVisible(false), 500);
    };

    const id = window.setTimeout(done, duration);
    return () => window.clearTimeout(id);
  }, [visible]);

  if (!visible) return null;

  const now = typeof performance !== "undefined" ? performance.now() : 0;
  const sweepRot = reducedMotion ? 0 : sweepRotationAt(now, sweepStartRef.current);

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-sea-950 transition-opacity duration-500 ${
        fadeOut ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
      aria-busy="true"
      aria-live="polite"
      role="status"
    >
      <div className="relative h-48 w-48 sm:h-56 sm:w-56">
        <div
          className="absolute inset-0 rounded-full border border-bridge-dim/30"
          style={{ boxShadow: "inset 0 0 40px rgba(62, 184, 232, 0.06)" }}
        />
        <div className="absolute inset-4 rounded-full border border-bridge-dim/20" />
        <div className="absolute inset-[22%] rounded-full border border-sonar-dim/25" />
        <div className="absolute inset-0 z-[1] flex items-center justify-center">
          <div
            className="motion-reduce:animate-none h-[88%] w-[88%] animate-radar-spin rounded-full"
            style={{
              background:
                "conic-gradient(from 0deg, transparent 0deg, transparent 270deg, rgba(61, 217, 160, 0.45) 310deg, rgba(94, 184, 232, 0.2) 360deg)",
            }}
          />
        </div>

        <div
          className="pointer-events-none absolute inset-0 z-[2]"
          aria-hidden
        >
          {BLIPS.map((blip) => (
            <RadarBlip
              key={blip.id}
              angleDeg={blip.angleDeg}
              detected={
                !reducedMotion && !fadeOut && isBlipInSweep(blip.angleDeg, sweepRot)
              }
            />
          ))}
        </div>

        <div className="absolute left-1/2 top-1/2 z-[3] h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sonar shadow-[0_0_12px_rgba(61,217,160,0.9)]" />
      </div>
      <BrandLogo
        alt={m.brand.name}
        className="mt-10 h-12 w-[min(14rem,78vw)] opacity-95 sm:h-14 sm:w-[16rem]"
        priority
      />
      <p className="mt-6 font-mono text-sm text-bridge/90 motion-reduce:hidden">
        {m.radar.status}
      </p>
    </div>
  );
}

function RadarBlip({
  angleDeg,
  detected,
}: {
  angleDeg: number;
  detected: boolean;
}) {
  const rad = (angleDeg * Math.PI) / 180;
  const leftPct = 50 + Math.sin(rad) * 38;
  const topPct = 50 - Math.cos(rad) * 38;

  return (
    <div
      className="absolute"
      style={{
        left: `${leftPct}%`,
        top: `${topPct}%`,
        transform: "translate(-50%, -50%)",
      }}
    >
      <div
        className={`rounded-full transition-all duration-75 motion-reduce:transition-none ${
          detected
            ? "h-2.5 w-2.5 bg-red-500 shadow-[0_0_14px_3px_rgba(248,113,113,0.95),0_0_4px_rgba(220,38,38,1)] ring-2 ring-red-400/60"
            : "h-1.5 w-1.5 bg-sea-600/90 opacity-70 ring-1 ring-bridge-dim/20"
        }`}
      />
    </div>
  );
}
