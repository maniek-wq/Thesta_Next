"use client";

import { AboutLayout } from "@/components/about/about-layout";
import { AboutSubpagesTabs } from "@/components/about/about-subpages-tabs";
import { RevealOnScroll } from "@/components/reveal-on-scroll";
import { useLocale } from "@/components/locale-provider";

const PANEL = "#0C1219";
const BORDER = "rgba(22,32,48,0.3)";
const BORDER_ROW = "rgba(22,32,48,0.22)";

function RowScope({ lines }: { lines: readonly string[] }) {
  if (lines.length === 1) {
    return <span className="text-[#556478]">{lines[0]}</span>;
  }
  return (
    <>
      <p className="text-[#556478]">{lines[0]}</p>
      <ul className="mt-2 list-disc space-y-1 pl-5 marker:text-[rgba(0,212,177,0.35)]">
        {lines.slice(1).map((line, j) => (
          <li key={j} className="text-[#556478]">
            {line}
          </li>
        ))}
      </ul>
    </>
  );
}

export function AboutProjectsPage() {
  const { m } = useLocale();
  const p = m.aboutPages.projects;

  return (
    <AboutLayout>
      <AboutSubpagesTabs active="projects" />
      <RevealOnScroll>
        <header className="mt-10 space-y-4">
          <p className="offer-font-mono text-[10px] font-normal uppercase tracking-[0.15em] text-[rgba(0,212,177,0.5)]">
            {p.sectionKicker}
          </p>
          <h1 className="max-w-[22ch] text-[clamp(1.85rem,4vw,3rem)] font-medium leading-[1.1] tracking-[-0.03em] text-[#dce3ed]">
            {p.title}
          </h1>
          <p className="max-w-3xl text-[15px] leading-[1.8] text-[#556478]">{p.intro}</p>
        </header>
      </RevealOnScroll>

      <RevealOnScroll delayMs={40}>
        <div className="mt-12 space-y-4 md:hidden">
          {p.rows.map((row, i) => (
            <article
              key={i}
              className="border px-5 py-5 sm:px-6"
              style={{ backgroundColor: PANEL, borderColor: BORDER }}
            >
              <p className="offer-font-mono text-[10px] font-medium uppercase tracking-[0.08em] text-[rgba(85,100,120,0.55)]">
                {p.colUnit}
              </p>
              <p className="mt-1.5 text-[15px] font-medium text-[#dce3ed]">{row.unit}</p>
              <p className="offer-font-mono mt-5 text-[10px] font-medium uppercase tracking-[0.08em] text-[rgba(85,100,120,0.55)]">
                {p.colScope}
              </p>
              <div className="mt-2 text-[14px] leading-relaxed">
                <RowScope lines={row.lines} />
              </div>
            </article>
          ))}
        </div>

        <div
          className="mt-12 hidden overflow-hidden border md:block"
          style={{ backgroundColor: PANEL, borderColor: BORDER }}
        >
          <table className="w-full min-w-0 border-collapse text-left text-sm">
            <thead>
              <tr
                className="border-b"
                style={{ borderColor: BORDER_ROW, backgroundColor: "rgba(22,32,48,0.35)" }}
              >
                <th className="w-[min(28%,12rem)] px-5 py-4 sm:px-6">
                  <span className="offer-font-mono text-[10px] font-medium uppercase tracking-[0.1em] text-[rgba(0,212,177,0.5)]">
                    {p.colUnit}
                  </span>
                </th>
                <th className="px-5 py-4 sm:px-6">
                  <span className="offer-font-mono text-[10px] font-medium uppercase tracking-[0.1em] text-[rgba(0,212,177,0.5)]">
                    {p.colScope}
                  </span>
                </th>
              </tr>
            </thead>
            <tbody>
              {p.rows.map((row, i) => (
                <tr
                  key={i}
                  className="border-t"
                  style={{
                    borderColor: BORDER_ROW,
                    backgroundColor: i % 2 === 0 ? "transparent" : "rgba(6,10,16,0.35)",
                  }}
                >
                  <td className="align-top px-5 py-4 text-[15px] font-medium text-[#dce3ed] sm:px-6">
                    <span className="text-balance">{row.unit}</span>
                  </td>
                  <td className="px-5 py-4 text-[14px] leading-relaxed sm:px-6">
                    <RowScope lines={row.lines} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </RevealOnScroll>
    </AboutLayout>
  );
}
