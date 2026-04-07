"use client";

import { Fragment, useEffect, useRef, useState } from "react";
import { MessageSquare, Settings2, Cpu, LifeBuoy, Anchor } from "lucide-react";
import { motion } from "motion/react";
import type { ElementType } from "react";
import { SectionShell } from "@/components/section-shell";
import type { Messages } from "@/lib/messages";

type Process = Messages["home"]["process"];
type Step = Process["steps"][number];

/* icon per step index */
const STEP_ICONS: ElementType[] = [MessageSquare, Settings2, Cpu, LifeBuoy];

/* ─────────────────────────────────────────
   Traveling anchor
───────────────────────────────────────── */
function TravelingAnchor({
  fromY,
  toY,
  onComplete,
}: {
  fromY: number;
  toY: number;
  onComplete: () => void;
}) {
  const ICON = 16;
  const goingDown = toY > fromY;
  return (
    <motion.div
      style={{
        position: "absolute",
        left: "50%",
        x: "-50%",
        y: fromY - ICON / 2,
        zIndex: 20,
        pointerEvents: "none",
        rotate: goingDown ? 0 : 180,
      }}
      animate={{ y: toY - ICON / 2 }}
      transition={{ duration: 0.52, ease: [0.4, 0, 0.2, 1] }}
      onAnimationComplete={onComplete}
    >
      <Anchor
        size={ICON}
        strokeWidth={1.5}
        className="text-sonar"
        style={{
          display: "block",
          filter: "drop-shadow(0 0 7px rgba(0,212,177,0.85))",
        }}
      />
    </motion.div>
  );
}

/* ─────────────────────────────────────────
   Numbered circle button
───────────────────────────────────────── */
function StepCircle({
  num,
  active,
  onClick,
}: {
  num: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-expanded={active}
      className="group/c relative z-10 flex h-11 w-11 shrink-0 items-center justify-center"
    >
      {/* Radar glow */}
      <span
        className={`absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full transition-opacity duration-500
          bg-[radial-gradient(circle,rgba(0,212,177,0.22)_0%,transparent_65%)]
          ${active ? "opacity-100" : "opacity-25 group-hover/c:opacity-70"}`}
      />
      {/* Outer faint ring */}
      <span
        className={`absolute inset-0 rounded-full border transition-colors duration-300
          ${active ? "border-sonar/35" : "border-white/15 group-hover/c:border-white/30"}`}
      />
      {/* Inner dark circle */}
      <span
        className={`absolute inset-[5px] rounded-full border bg-sea-950 transition-colors duration-300
          ${active ? "border-sonar" : "border-sonar/55 group-hover/c:border-sonar"}`}
      />
      {/* Sonar ping ring when active */}
      {active && (
        <span className="absolute inset-0 animate-ping rounded-full border border-sonar/30"
          style={{ animationDuration: "1.6s" }}
        />
      )}
      {/* Number */}
      <span
        className={`relative font-mono text-[11px] font-medium tracking-wide transition-colors duration-200
          ${active ? "text-sonar" : "text-sonar/65 group-hover/c:text-sonar"}`}
      >
        {num}
      </span>
    </button>
  );
}

/* ─────────────────────────────────────────
   Slide-reveal body
───────────────────────────────────────── */
function SlideBody({
  open,
  align,
  children,
  tags,
}: {
  open: boolean;
  align: "left" | "right";
  children: React.ReactNode;
  tags?: readonly string[];
}) {
  return (
    <div
      className={`grid transition-all duration-300 ease-out ${
        open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
      }`}
    >
      <div className="overflow-hidden">
        <div
          className={`pt-3 transition-all duration-300 ease-out ${
            open ? "translate-y-0 opacity-100" : "-translate-y-1 opacity-0"
          }`}
        >
          <p className={`text-[13px] leading-[1.75] text-[#8aafc8] ${
            align === "right" ? "text-right" : "text-left"
          }`}>
            {children}
          </p>
          {tags && tags.length > 0 && (
            <div className={`mt-3 flex flex-wrap gap-1.5 ${
              align === "right" ? "justify-end" : "justify-start"
            }`}>
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="border border-sonar/45 bg-sonar/[0.07] px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.1em] text-sonar/85"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────
   Desktop step card
───────────────────────────────────────── */
function StepCard({
  step,
  align,
  isOpen,
  Icon,
  onToggle,
}: {
  step: Step;
  align: "left" | "right";
  isOpen: boolean;
  Icon: ElementType;
  onToggle: () => void;
}) {
  const isRight = align === "right"; // card on LEFT side, text right-aligned

  return (
    <button
      type="button"
      onClick={onToggle}
      className={`group relative w-full px-5 py-4 transition-[background-color,box-shadow] duration-300 ${
        align === "right" ? "text-right" : "text-left"
      } ${isOpen ? "bg-sonar/[0.045]" : "hover:bg-sonar/[0.025]"}`}
      style={
        isOpen
          ? {
              boxShadow: isRight
                ? "2px 0 0 0 rgba(0,212,177,0.45)"   // right edge → toward timeline
                : "-2px 0 0 0 rgba(0,212,177,0.45)",  // left edge → toward timeline
            }
          : undefined
      }
    >
      {/* Icon */}
      <div className={`mb-2.5 flex ${isRight ? "justify-end" : "justify-start"}`}>
        <Icon
          size={14}
          strokeWidth={1.5}
          className={`transition-colors duration-300 ${
            isOpen ? "text-sonar/70" : "text-sonar/30 group-hover:text-sonar/55"
          }`}
        />
      </div>

      {/* Title */}
      <h3 className={`text-[17px] font-medium leading-[1.5] transition-colors duration-200 ${
        isOpen ? "text-sonar-glow" : "text-[#dce3ed] group-hover:text-sonar-glow"
      }`}>
        {step.title}
      </h3>

      {/* +/− toggle */}
      <p className={`mt-0.5 font-mono text-[14px] font-medium transition-colors duration-200 ${
        isOpen ? "text-sonar/70" : "text-[#8aafc8] group-hover:text-sonar/60"
      }`}>
        {isOpen ? "−" : "+"}
      </p>

      {/* Slide-reveal body */}
      <SlideBody open={isOpen} align={align} tags={step.tags}>
        {step.body}
      </SlideBody>
    </button>
  );
}

/* ─────────────────────────────────────────
   Mobile step row (accordion)
───────────────────────────────────────── */
function MobileStep({
  step,
  num,
  Icon,
  isOpen,
  onToggle,
}: {
  step: Step;
  num: string;
  Icon: ElementType;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-[rgba(37,82,120,0.5)] last:border-b-0">
      <button
        type="button"
        onClick={onToggle}
        className={`group flex w-full items-center gap-4 py-5 text-left transition-colors duration-200 ${
          isOpen ? "bg-sonar/[0.03]" : ""
        }`}
      >
        {/* Circle */}
        <div className="relative flex h-10 w-10 shrink-0 items-center justify-center">
          <span
            className={`absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full transition-opacity duration-500
              bg-[radial-gradient(circle,rgba(0,212,177,0.22)_0%,transparent_65%)]
              ${isOpen ? "opacity-100" : "opacity-25 group-hover:opacity-60"}`}
          />
          <span className={`absolute inset-0 rounded-full border transition-colors ${
            isOpen ? "border-sonar/35" : "border-white/15"
          }`} />
          <span className={`absolute inset-[4px] rounded-full border bg-sea-950 transition-colors ${
            isOpen ? "border-sonar" : "border-sonar/55"
          }`} />
          {isOpen && (
            <span className="absolute inset-0 animate-ping rounded-full border border-sonar/25"
              style={{ animationDuration: "1.6s" }}
            />
          )}
          <span className={`relative font-mono text-[11px] font-medium transition-colors ${
            isOpen ? "text-sonar" : "text-sonar/65"
          }`}>
            {num}
          </span>
        </div>

        {/* Title + icon + toggle */}
        <div className="flex flex-1 items-center justify-between gap-4 min-w-0">
          <div className="flex min-w-0 items-center gap-2">
            <Icon
              size={13}
              strokeWidth={1.5}
              className={`shrink-0 transition-colors duration-200 ${
                isOpen ? "text-sonar/60" : "text-sonar/25 group-hover:text-sonar/50"
              }`}
            />
            <span className={`text-[16px] font-medium leading-snug transition-colors duration-200 ${
              isOpen ? "text-sonar-glow" : "text-[#dce3ed] group-hover:text-sonar-glow"
            }`}>
              {step.title}
            </span>
          </div>
          <span className={`shrink-0 font-mono text-[14px] font-medium transition-colors duration-200 ${
            isOpen ? "text-sonar/70" : "text-[#8aafc8]"
          }`}>
            {isOpen ? "−" : "+"}
          </span>
        </div>
      </button>

      {/* Slide body */}
      <div className={`grid transition-all duration-300 ease-out ${
        isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
      }`}>
        <div className="overflow-hidden">
          <div className={`pb-5 pl-14 transition-all duration-300 ease-out ${
            isOpen ? "translate-y-0 opacity-100" : "-translate-y-1 opacity-0"
          }`}>
            <p className="text-[13px] leading-[1.75] text-[#8aafc8]">{step.body}</p>
            {step.tags && step.tags.length > 0 && (
              <div className="mt-3 flex flex-wrap gap-1.5">
                {step.tags.map((tag) => (
                  <span
                    key={tag}
                    className="border border-sonar/45 bg-sonar/[0.07] px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.1em] text-sonar/85"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────
   Main section
───────────────────────────────────────── */
export function HomeProcess({ process }: { process: Process }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const circleRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [anchorAnim, setAnchorAnim] = useState<{
    fromY: number;
    toY: number;
    key: number;
  } | null>(null);

  /* default-open first step on mobile */
  useEffect(() => {
    if (window.innerWidth < 768) setOpenIndex(0);
  }, []);

  /* scroll-triggered reveal */
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e?.isIntersecting) setVisible(true); },
      { threshold: 0.1 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  function toggle(i: number) {
    // Animate anchor along the timeline when switching between steps on desktop
    if (
      openIndex !== null &&
      openIndex !== i &&
      typeof window !== "undefined" &&
      window.innerWidth >= 768 &&
      timelineRef.current
    ) {
      const containerRect = timelineRef.current.getBoundingClientRect();
      const fromEl = circleRefs.current[openIndex];
      const toEl = circleRefs.current[i];
      if (fromEl && toEl) {
        const fromRect = fromEl.getBoundingClientRect();
        const toRect = toEl.getBoundingClientRect();
        setAnchorAnim({
          fromY: fromRect.top + fromRect.height / 2 - containerRect.top,
          toY: toRect.top + toRect.height / 2 - containerRect.top,
          key: Date.now(),
        });
      }
    }
    setOpenIndex((prev) => (prev === i ? null : i));
  }

  return (
    <SectionShell
      id="wspolpraca"
      variant="ridge"
      aria-labelledby="process-heading"
    >
      {/* ── Header ── */}
      <div
        ref={sectionRef}
        className="mx-auto max-w-2xl text-center"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "none" : "translateY(12px)",
          transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
        }}
      >
        <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-sonar/60">
          {process.kicker}
        </p>
        <h2
          id="process-heading"
          className="mt-3 text-[2.25rem] font-medium leading-[1.12] tracking-[-0.02em] text-[#dce3ed] sm:text-[2.75rem]"
        >
          {process.heading}
        </h2>
        {/* animated underline */}
        <div className="mx-auto mt-4 h-px w-12 overflow-hidden">
          <div
            className="h-full w-full bg-sonar/45 origin-left"
            style={{
              transform: visible ? "scaleX(1)" : "scaleX(0)",
              transition: "transform 0.7s ease-out",
              transitionDelay: "300ms",
            }}
          />
        </div>
        <p className="mt-4 text-[13px] text-[#8aafc8]">{process.hint}</p>
      </div>

      {/* ── Desktop zigzag timeline ── */}
      <div ref={timelineRef} className="relative mt-16 hidden md:block">

        {/* Traveling anchor between steps */}
        {anchorAnim && (
          <TravelingAnchor
            key={anchorAnim.key}
            fromY={anchorAnim.fromY}
            toY={anchorAnim.toY}
            onComplete={() => setAnchorAnim(null)}
          />
        )}

        {/* Vertical connecting line — draws itself on scroll entry */}
        <div
          className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 origin-top"
          style={{
            background: "linear-gradient(to bottom, transparent, rgba(37,82,120,0.55), transparent)",
            transform: visible ? "scaleY(1)" : "scaleY(0)",
            transition: "transform 1.1s cubic-bezier(0.4,0,0.2,1)",
            transitionDelay: "200ms",
          }}
        />

        <div className="grid grid-cols-[1fr_44px_1fr]">
          {process.steps.map((step, i) => {
            const isLeft = i % 2 === 0;
            const num = String(i + 1).padStart(2, "0");
            const isOpen = openIndex === i;
            const Icon = STEP_ICONS[i] ?? MessageSquare;
            const stepDelay = i * 160 + 150; // stagger per row

            return (
              <Fragment key={i}>
                {/* Left panel — enters from left */}
                <div
                  className="flex items-start py-10"
                  style={{
                    justifyContent: isLeft ? "flex-end" : "flex-start",
                    paddingRight: isLeft ? "2rem" : 0,
                    opacity: visible ? 1 : 0,
                    transform: visible ? "none" : "translateX(-22px)",
                    transition: "opacity 0.55s ease-out, transform 0.55s ease-out",
                    transitionDelay: `${stepDelay}ms`,
                  }}
                >
                  {isLeft && (
                    <StepCard
                      step={step}
                      align="right"
                      isOpen={isOpen}
                      Icon={Icon}
                      onToggle={() => toggle(i)}
                    />
                  )}
                </div>

                {/* Center circle — fades in */}
                <div
                  ref={(el) => { circleRefs.current[i] = el; }}
                  className="flex items-start justify-center py-10"
                  style={{
                    opacity: visible ? 1 : 0,
                    transition: "opacity 0.5s ease-out",
                    transitionDelay: `${stepDelay + 80}ms`,
                  }}
                >
                  <StepCircle
                    num={num}
                    active={isOpen}
                    onClick={() => toggle(i)}
                  />
                </div>

                {/* Right panel — enters from right */}
                <div
                  className="flex items-start py-10"
                  style={{
                    paddingLeft: !isLeft ? "2rem" : 0,
                    opacity: visible ? 1 : 0,
                    transform: visible ? "none" : "translateX(22px)",
                    transition: "opacity 0.55s ease-out, transform 0.55s ease-out",
                    transitionDelay: `${stepDelay}ms`,
                  }}
                >
                  {!isLeft && (
                    <StepCard
                      step={step}
                      align="left"
                      isOpen={isOpen}
                      Icon={Icon}
                      onToggle={() => toggle(i)}
                    />
                  )}
                </div>
              </Fragment>
            );
          })}
        </div>
      </div>

      {/* ── Mobile accordion ── */}
      <div className="mt-12 md:hidden">
        {process.steps.map((step, i) => (
          <div
            key={i}
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "none" : "translateY(14px)",
              transition: "opacity 0.5s ease-out, transform 0.5s ease-out",
              transitionDelay: `${i * 100}ms`,
            }}
          >
            <MobileStep
              step={step}
              num={String(i + 1).padStart(2, "0")}
              Icon={STEP_ICONS[i] ?? MessageSquare}
              isOpen={openIndex === i}
              onToggle={() => toggle(i)}
            />
          </div>
        ))}
      </div>
    </SectionShell>
  );
}
