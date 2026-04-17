"use client";

import { useEffect, useRef, useState } from "react";
import { Anchor, Layers, Crosshair } from "lucide-react";
import type { ElementType } from "react";

/* ── config ──────────────────────────────────────────── */
const CARDS: {
  key: string;
  target: number;
  suffix: string;
  Icon: ElementType;
  delayMs: number;
}[] = [
  { key: "years",    target: 9,    suffix: "+", Icon: Anchor,    delayMs: 0   },
  { key: "projects", target: 1200, suffix: "+", Icon: Layers,    delayMs: 180 },
  { key: "focus",    target: 100, suffix: "%", Icon: Crosshair, delayMs: 360 },
];

/* ── count-up hook ───────────────────────────────────── */
function useCountUp(
  target: number,
  enabled: boolean,
  suffix: string,
  delayMs: number,
) {
  const [v, setV] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!enabled) return;
    const prefersReduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReduce) {
      setV(target);
      setDone(true);
      return;
    }
    const timer = window.setTimeout(() => {
      const DUR = 1800;
      const t0 = performance.now();
      let raf: number;
      const tick = (now: number) => {
        const p = Math.min(1, (now - t0) / DUR);
        const eased = 1 - (1 - p) ** 3; // cubic ease-out
        setV(Math.round(eased * target));
        if (p < 1) raf = requestAnimationFrame(tick);
        else setDone(true);
      };
      raf = requestAnimationFrame(tick);
      return () => cancelAnimationFrame(raf);
    }, delayMs);
    return () => clearTimeout(timer);
  }, [enabled, target, delayMs]);

  return { display: `${v}${suffix}`, done };
}

/* ── single stat card ────────────────────────────────── */
function StatCard({
  target,
  suffix,
  label,
  Icon,
  delayMs,
  visible,
}: {
  target: number;
  suffix: string;
  label: string;
  Icon: ElementType;
  delayMs: number;
  visible: boolean;
}) {
  const { display, done } = useCountUp(target, visible, suffix, delayMs);

  return (
    <div
      className="group relative flex flex-col items-center justify-center overflow-hidden border px-6 py-10 text-center
        transition-[opacity,transform,border-color,box-shadow] duration-500 ease-out
        hover:border-sonar/40 hover:shadow-[0_0_36px_-6px_rgba(0,212,177,0.18)]"
      style={{
        minHeight: 168,
        borderColor: "rgba(37,82,120,0.45)",
        backgroundColor: "rgba(18,41,68,0.35)",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(22px)",
        transitionDelay: `${delayMs}ms`,
      }}
    >
      {/* sonar corner accent — top-left */}
      <span
        className="pointer-events-none absolute left-0 top-0 h-6 w-6 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "linear-gradient(135deg, rgba(0,212,177,0.25) 0%, transparent 60%)",
        }}
      />
      {/* sonar corner accent — bottom-right */}
      <span
        className="pointer-events-none absolute bottom-0 right-0 h-6 w-6 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "linear-gradient(315deg, rgba(0,212,177,0.25) 0%, transparent 60%)",
        }}
      />

      {/* icon */}
      <div className="mb-4 transition-[color,transform] duration-300 ease-out group-hover:-translate-y-0.5 group-hover:text-sonar text-sonar/35">
          <Icon size={20} strokeWidth={1.4} />
      </div>

      {/* number */}
      <p
        className={`font-mono text-[clamp(2.4rem,4.5vw,3rem)] font-bold leading-none tracking-tight tabular-nums transition-colors duration-700 ${
          done ? "text-sonar-glow" : "text-sonar/70"
        }`}
      >
        {display}
      </p>

      {/* one-shot ring when count-up finishes */}
      {done && (
        <span
          className="pointer-events-none absolute inset-0 animate-[ping_0.55s_cubic-bezier(0,0,0.2,1)_1] border border-sonar/30"
          style={{ animationFillMode: "forwards" }}
        />
      )}

      {/* label */}
      <p className="mt-3 max-w-[13rem] text-[13px] leading-snug text-[#8aafc8] transition-colors duration-300 group-hover:text-[#b0ccde]">
        {label}
      </p>
    </div>
  );
}

/* ── section ─────────────────────────────────────────── */
export function StatsSection({
  title,
  yearsLabel,
  projectsLabel,
  focusLabel,
  className = "",
}: {
  title: string;
  yearsLabel: string;
  projectsLabel: string;
  focusLabel: string;
  className?: string;
}) {
  const ref = useRef<HTMLElement>(null);
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

  const labels = [yearsLabel, projectsLabel, focusLabel];

  return (
    <section ref={ref} className={`w-full ${className}`} aria-labelledby="stats-heading">

      {/* title + animated underline */}
      <div className="flex flex-col items-center">
        <h2
          id="stats-heading"
          className="text-center text-2xl font-bold tracking-tight text-white sm:text-[1.75rem]"
        >
          {title}
        </h2>
        <div className="mt-4 h-px w-16 origin-left overflow-hidden">
          <div
            className="h-full w-full bg-sonar/50 transition-transform duration-700 ease-out"
            style={{
              transform: visible ? "scaleX(1)" : "scaleX(0)",
              transitionDelay: "200ms",
            }}
          />
        </div>
      </div>

      {/* cards */}
      <div className="mx-auto mt-10 grid max-w-[1100px] gap-px sm:mt-12 sm:grid-cols-3"
        style={{ backgroundColor: "rgba(37,82,120,0.2)" }}
      >
        {CARDS.map((c, i) => (
          <StatCard
            key={c.key}
            target={c.target}
            suffix={c.suffix}
            label={labels[i] ?? ""}
            Icon={c.Icon}
            delayMs={c.delayMs}
            visible={visible}
          />
        ))}
      </div>
    </section>
  );
}
