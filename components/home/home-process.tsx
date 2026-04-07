"use client";

import { Fragment, useState } from "react";
import { SectionShell } from "@/components/section-shell";
import type { Messages } from "@/lib/messages";

type Process = Messages["home"]["process"];
type Step = Process["steps"][number];

/* ─────────────────────────────────────────
   Numbered circle button (desktop + mobile)
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
      {/* Radar glow — radial gradient behind the circle */}
      <span
        className={`absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(0,212,177,0.22)_0%,transparent_65%)] transition-opacity duration-500 ${
          active
            ? "opacity-100"
            : "opacity-25 group-hover/c:opacity-70"
        }`}
      />
      {/* Outer faint ring */}
      <span
        className={`absolute inset-0 rounded-full border transition-colors duration-300 ${
          active
            ? "border-sonar/35"
            : "border-white/15 group-hover/c:border-white/30"
        }`}
      />
      {/* Inner dark circle with sonar border */}
      <span
        className={`absolute inset-[5px] rounded-full border bg-sea-950 transition-colors duration-300 ${
          active ? "border-sonar" : "border-sonar/55 group-hover/c:border-sonar"
        }`}
      />
      {/* Number */}
      <span
        className={`relative font-mono text-[11px] font-medium tracking-wide transition-colors duration-200 ${
          active ? "text-sonar" : "text-sonar/65 group-hover/c:text-sonar"
        }`}
      >
        {num}
      </span>
    </button>
  );
}

/* ─────────────────────────────────────────
   Slide-reveal body (CSS grid-rows trick)
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
          <p
            className={`text-[13px] leading-[1.75] text-[#8aafc8] ${
              align === "right" ? "text-right" : "text-left"
            }`}
          >
            {children}
          </p>
          {tags && tags.length > 0 && (
            <div
              className={`mt-3 flex flex-wrap gap-1.5 ${
                align === "right" ? "justify-end" : "justify-start"
              }`}
            >
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
   Desktop step card (left / right)
───────────────────────────────────────── */
function StepCard({
  step,
  align,
  isOpen,
  onToggle,
}: {
  step: Step;
  align: "left" | "right";
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className={`group w-full max-w-[320px] ${
        align === "right" ? "text-right" : "text-left"
      }`}
    >
      {/* Title */}
      <h3
        className={`text-[17px] font-medium leading-[1.5] transition-colors duration-200 ${
          isOpen
            ? "text-sonar-glow"
            : "text-[#dce3ed] group-hover:text-sonar-glow"
        }`}
      >
        {step.title}
      </h3>

      {/* +/− toggle */}
      <p
        className={`mt-0.5 font-mono text-[14px] font-medium transition-colors duration-200 ${
          isOpen ? "text-sonar/70" : "text-[#8aafc8] group-hover:text-sonar/60"
        }`}
      >
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
  isOpen,
  onToggle,
}: {
  step: Step;
  num: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-[rgba(37,82,120,0.5)] last:border-b-0">
      <button
        type="button"
        onClick={onToggle}
        className="group flex w-full items-center gap-4 py-5 text-left"
      >
        {/* Circle */}
        <div className="relative flex h-10 w-10 shrink-0 items-center justify-center">
          {/* Radar glow */}
          <span
            className={`absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(0,212,177,0.22)_0%,transparent_65%)] transition-opacity duration-500 ${
              isOpen ? "opacity-100" : "opacity-25 group-hover:opacity-60"
            }`}
          />
          <span
            className={`absolute inset-0 rounded-full border transition-colors ${
              isOpen ? "border-sonar/35" : "border-white/15"
            }`}
          />
          <span
            className={`absolute inset-[4px] rounded-full border bg-sea-950 transition-colors ${
              isOpen ? "border-sonar" : "border-sonar/55"
            }`}
          />
          <span
            className={`relative font-mono text-[11px] font-medium transition-colors ${
              isOpen ? "text-sonar" : "text-sonar/65"
            }`}
          >
            {num}
          </span>
        </div>

        {/* Title + toggle */}
        <div className="flex flex-1 items-center justify-between gap-4">
          <span
            className={`text-[16px] font-medium leading-snug transition-colors duration-200 ${
              isOpen
                ? "text-sonar-glow"
                : "text-[#dce3ed] group-hover:text-sonar-glow"
            }`}
          >
            {step.title}
          </span>
          <span
            className={`shrink-0 font-mono text-[14px] font-medium transition-colors duration-200 ${
              isOpen ? "text-sonar/70" : "text-[#8aafc8]"
            }`}
          >
            {isOpen ? "−" : "+"}
          </span>
        </div>
      </button>

      {/* Slide body */}
      <div
        className={`grid transition-all duration-300 ease-out ${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div
            className={`pb-5 pl-14 transition-all duration-300 ease-out ${
              isOpen ? "translate-y-0 opacity-100" : "-translate-y-1 opacity-0"
            }`}
          >
            <p className="text-[13px] leading-[1.75] text-[#8aafc8]">
              {step.body}
            </p>
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

  function toggle(i: number) {
    setOpenIndex((prev) => (prev === i ? null : i));
  }

  return (
    <SectionShell
      id="wspolpraca"
      variant="ridge"
      aria-labelledby="process-heading"
    >
      {/* ── Header ── */}
      <div className="mx-auto max-w-2xl text-center">
        <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-sonar/60">
          {process.kicker}
        </p>
        <h2
          id="process-heading"
          className="mt-3 text-[2.25rem] font-medium leading-[1.12] tracking-[-0.02em] text-[#dce3ed] sm:text-[2.75rem]"
        >
          {process.heading}
        </h2>
        <p className="mt-4 text-[13px] text-[#8aafc8]">{process.hint}</p>
      </div>

      {/* ── Desktop zigzag timeline ── */}
      <div className="relative mt-16 hidden md:block">
        {/* Vertical connecting line */}
        <div className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-[rgba(37,82,120,0.5)] to-transparent" />

        <div className="grid grid-cols-[1fr_44px_1fr]">
          {process.steps.map((step, i) => {
            const isLeft = i % 2 === 0;
            const num = String(i + 1).padStart(2, "0");
            const isOpen = openIndex === i;

            return (
              <Fragment key={i}>
                {/* Left panel */}
                <div
                  className={`flex items-start py-10 ${
                    isLeft ? "justify-end pr-12" : ""
                  }`}
                >
                  {isLeft && (
                    <StepCard
                      step={step}
                      align="right"
                      isOpen={isOpen}
                      onToggle={() => toggle(i)}
                    />
                  )}
                </div>

                {/* Center circle (sits on the vertical line) */}
                <div className="flex items-start justify-center py-10">
                  <StepCircle
                    num={num}
                    active={isOpen}
                    onClick={() => toggle(i)}
                  />
                </div>

                {/* Right panel */}
                <div
                  className={`flex items-start py-10 ${
                    !isLeft ? "pl-12" : ""
                  }`}
                >
                  {!isLeft && (
                    <StepCard
                      step={step}
                      align="left"
                      isOpen={isOpen}
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
          <MobileStep
            key={i}
            step={step}
            num={String(i + 1).padStart(2, "0")}
            isOpen={openIndex === i}
            onToggle={() => toggle(i)}
          />
        ))}
      </div>
    </SectionShell>
  );
}
