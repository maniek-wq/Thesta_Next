"use client";

import { AboutLayout } from "@/components/about/about-layout";
import { useLocale } from "@/components/locale-provider";

function RowScope({ lines }: { lines: readonly string[] }) {
  if (lines.length === 1) {
    return <span className="text-sea-200">{lines[0]}</span>;
  }
  return (
    <>
      <p className="text-sea-200">{lines[0]}</p>
      <ul className="mt-2 list-disc space-y-1 pl-5 marker:text-bridge/80">
        {lines.slice(1).map((line, j) => (
          <li key={j}>{line}</li>
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
      <h1 className="mt-6 text-3xl font-semibold text-white">{p.title}</h1>
      <p className="mt-4 text-lg text-sea-300">{p.intro}</p>

      <div className="mt-10 space-y-4 md:hidden">
        {p.rows.map((row, i) => (
          <article
            key={i}
            className="rounded-2xl border border-bridge-dim/15 bg-sea-850/30 p-4 sm:p-5"
          >
            <p className="text-[10px] font-semibold uppercase tracking-wide text-sea-500">
              {p.colUnit}
            </p>
            <p className="mt-1 text-base font-semibold text-white">{row.unit}</p>
            <p className="mt-4 text-[10px] font-semibold uppercase tracking-wide text-sea-500">
              {p.colScope}
            </p>
            <div className="mt-2 text-sm leading-relaxed">
              <RowScope lines={row.lines} />
            </div>
          </article>
        ))}
      </div>

      <div className="mt-10 hidden overflow-hidden rounded-2xl border border-bridge-dim/15 bg-sea-850/30 md:block">
        <table className="w-full min-w-0 border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-bridge-dim/25 bg-sea-900/80">
              <th className="w-[min(28%,12rem)] px-4 py-4 font-semibold text-sonar-glow sm:px-6">
                {p.colUnit}
              </th>
              <th className="px-4 py-4 font-semibold text-sonar-glow sm:px-6">
                {p.colScope}
              </th>
            </tr>
          </thead>
          <tbody>
            {p.rows.map((row, i) => (
              <tr
                key={i}
                className={
                  i % 2 === 0
                    ? "bg-sea-900/20"
                    : "bg-sea-850/25 border-t border-bridge-dim/10"
                }
              >
                <td className="align-top px-4 py-4 font-medium text-white sm:px-6">
                  <span className="text-balance">{row.unit}</span>
                </td>
                <td className="px-4 py-4 text-sea-200 sm:px-6">
                  <RowScope lines={row.lines} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AboutLayout>
  );
}
