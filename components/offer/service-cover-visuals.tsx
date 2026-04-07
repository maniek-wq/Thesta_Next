/**
 * Ilustracje okładek usług (S01–S03) — styl Figma: cienkie linie #00D4B1, ostre rogi.
 */

const TEAL = "#00D4B1";
const TEAL_DIM = "rgba(0,212,177,0.45)";
const MUTED = "rgba(85,100,120,0.85)";

type BridgeCover = {
  eyebrowSmall: string;
  eyebrowWide: string;
  systemTags: readonly string[];
  protocolLine: string;
};

type StatCell = { primary: string; secondary?: string };

/** S01 — schemat IBS / hub & spoke (jak w Figmie). */
export function ServiceCoverBridgeVisual({
  eyebrowSmall,
  eyebrowWide,
  systemTags,
  protocolLine,
}: BridgeCover) {
  const tags = Array.from({ length: 7 }, (_, i) => systemTags[i] ?? "");

  const slots: { x: number; y: number; w: number; h: number; anchor: string }[] =
    [
      { x: 158, y: 8, w: 44, h: 22, anchor: "middle" },
      { x: 268, y: 42, w: 52, h: 28, anchor: "start" },
      { x: 288, y: 108, w: 48, h: 22, anchor: "start" },
      { x: 268, y: 172, w: 44, h: 22, anchor: "start" },
      { x: 158, y: 198, w: 48, h: 22, anchor: "middle" },
      { x: 48, y: 172, w: 44, h: 22, anchor: "end" },
      { x: 24, y: 108, w: 40, h: 22, anchor: "end" },
    ];

  const hub = { cx: 180, cy: 118, w: 92, h: 44 };

  return (
    <div className="relative min-h-[200px] flex-1 overflow-hidden bg-sea-950">
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 360 232"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        {/* linie z centrum do satelitów */}
        {slots.map((s, i) => {
          if (!tags[i]) return null;
          const isGmdss = tags[i]!.toUpperCase().includes("GMDSS");
          const bh = isGmdss ? s.h + 10 : s.h;
          const tcx = s.x + s.w / 2;
          const tcy = s.y + bh / 2;
          return (
            <path
              key={i}
              d={`M${hub.cx},${hub.cy} L${tcx},${tcy}`}
              stroke={TEAL_DIM}
              strokeWidth={0.75}
              vectorEffect="non-scaling-stroke"
            />
          );
        })}

        {/* hub */}
        <rect
          x={hub.cx - hub.w / 2}
          y={hub.cy - hub.h / 2}
          width={hub.w}
          height={hub.h}
          stroke={TEAL}
          strokeWidth={0.85}
          fill="rgba(0,212,177,0.04)"
        />

        {/* satelity */}
        {slots.map((s, i) => {
          const label = tags[i];
          if (!label) return null;
          const isGmdss = label.toUpperCase().includes("GMDSS");
          const bh = isGmdss ? s.h + 10 : s.h;
          return (
            <g key={i}>
              <rect
                x={s.x}
                y={s.y}
                width={s.w}
                height={bh}
                stroke={TEAL_DIM}
                strokeWidth={0.75}
                fill="rgba(6,10,16,0.85)"
              />
              <text
                x={
                  s.anchor === "middle"
                    ? s.x + s.w / 2
                    : s.anchor === "end"
                      ? s.x - 4
                      : s.x + 4
                }
                y={s.y + (isGmdss ? 10 : 14)}
                textAnchor={
                  s.anchor === "middle"
                    ? "middle"
                    : s.anchor === "end"
                      ? "end"
                      : "start"
                }
                fill={TEAL}
                style={{ fontSize: 7, fontFamily: "var(--font-offer-mono), monospace" }}
              >
                {label}
              </text>
              {isGmdss ? (
                <text
                  x={
                    s.anchor === "middle"
                      ? s.x + s.w / 2
                      : s.anchor === "end"
                        ? s.x - 4
                        : s.x + 4
                  }
                  y={s.y + 22}
                  textAnchor={
                    s.anchor === "middle"
                      ? "middle"
                      : s.anchor === "end"
                        ? "end"
                        : "start"
                  }
                  fill={MUTED}
                  style={{ fontSize: 5.5, fontFamily: "var(--font-offer-mono), monospace" }}
                >
                  AREA A1 · A2 · A3 · A4
                </text>
              ) : null}
            </g>
          );
        })}

        <text
          x={hub.cx}
          y={hub.cy - 6}
          textAnchor="middle"
          fill={TEAL}
          style={{ fontSize: 9, fontFamily: "var(--font-offer-mono), monospace" }}
        >
          {eyebrowSmall}
        </text>
        <text
          x={hub.cx}
          y={hub.cy + 8}
          textAnchor="middle"
          fill={MUTED}
          style={{ fontSize: 6, fontFamily: "var(--font-offer-mono), monospace" }}
        >
          {eyebrowWide}
        </text>
      </svg>

      <p
        className="offer-font-mono absolute bottom-3 left-4 right-4 text-[8px] tracking-[0.12em] text-[rgba(0,212,177,0.35)]"
        style={{ textShadow: "0 1px 8px #060a10" }}
      >
        {protocolLine}
      </p>
    </div>
  );
}

type StatsCover = { cells: readonly StatCell[] };

/** S02 — radar + metryki (jak w Figmie). */
export function ServiceCoverStatsVisual({ cells }: StatsCover) {
  const c = cells.slice(0, 4);
  return (
    <div className="relative grid min-h-[200px] flex-1 grid-cols-[1.15fr_1fr] gap-0 bg-sea-950">
      <div className="relative flex items-center justify-center border-r border-white/[0.06] p-3">
        <svg
          viewBox="0 0 200 200"
          className="h-[min(100%,11rem)] w-[min(100%,11rem)]"
          fill="none"
          aria-hidden
        >
          <circle
            cx="100"
            cy="100"
            r="78"
            stroke={TEAL_DIM}
            strokeWidth={0.75}
          />
          <circle
            cx="100"
            cy="100"
            r="52"
            stroke={TEAL_DIM}
            strokeWidth={0.65}
            opacity={0.85}
          />
          <circle
            cx="100"
            cy="100"
            r="26"
            stroke={TEAL_DIM}
            strokeWidth={0.55}
            opacity={0.7}
          />
          <line
            x1="100"
            y1="22"
            x2="100"
            y2="178"
            stroke={TEAL_DIM}
            strokeWidth={0.5}
            opacity={0.5}
          />
          <line
            x1="22"
            y1="100"
            x2="178"
            y2="100"
            stroke={TEAL_DIM}
            strokeWidth={0.5}
            opacity={0.5}
          />
          <line
            x1="45"
            y1="45"
            x2="155"
            y2="155"
            stroke={TEAL_DIM}
            strokeWidth={0.45}
            opacity={0.35}
          />
          <line
            x1="155"
            y1="45"
            x2="45"
            y2="155"
            stroke={TEAL_DIM}
            strokeWidth={0.45}
            opacity={0.35}
          />
          <circle cx="100" cy="100" r="4" fill={TEAL} opacity={0.9} />
          <path
            d="M100 100 L100 38"
            stroke={TEAL}
            strokeWidth={1}
            strokeLinecap="round"
            opacity={0.65}
          />
        </svg>
      </div>
      <div className="flex flex-col">
        {c.map((cell, i) => (
          <div
            key={i}
            className={`flex flex-1 flex-col justify-center px-4 py-3 ${
              i < c.length - 1 ? "border-b border-white/[0.06]" : ""
            }`}
          >
            <span className="offer-font-mono text-[10px] font-medium tracking-[0.08em] text-[#dce3ed]/90">
              {cell.primary}
            </span>
            {cell.secondary ? (
              <span className="offer-font-mono mt-1 text-[8px] tracking-[0.15em] text-[#8aafc8]">
                {cell.secondary}
              </span>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}

type CertsCover = { primary: string; secondary: string };

/** S03 — monitory / dashboard (jak w Figmie). */
export function ServiceCoverMonitorsVisual({ primary, secondary }: CertsCover) {
  return (
    <div className="relative flex min-h-[200px] flex-1 flex-col justify-between bg-sea-950 p-4">
      <svg
        viewBox="0 0 320 140"
        className="w-full shrink-0"
        fill="none"
        aria-hidden
      >
        {/* 3 monitory */}
        {[0, 1, 2].map((i) => {
          const x = 12 + i * 104;
          return (
            <g key={i} transform={`translate(${x}, 8)`}>
              <rect
                width={96}
                height={64}
                stroke={TEAL_DIM}
                strokeWidth={0.75}
                fill="rgba(6,10,16,0.9)"
              />
              <rect
                x={6}
                y={6}
                width={84}
                height={44}
                stroke={TEAL_DIM}
                strokeWidth={0.5}
                fill="none"
                opacity={0.5}
              />
              {i === 0 ? (
                <g transform="translate(48, 28)">
                  <circle r={14} stroke={TEAL} strokeWidth={0.6} fill="none" />
                  <circle r={6} stroke={TEAL_DIM} strokeWidth={0.5} fill="none" />
                  <circle r={2} fill={TEAL} opacity={0.8} />
                </g>
              ) : null}
              {i === 1 ? (
                <path
                  d="M14 42 L28 30 L42 38 L56 22 L70 34 L84 28"
                  stroke={TEAL}
                  strokeWidth={0.7}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              ) : null}
              {i === 2 ? (
                <g transform="translate(18, 22)">
                  {[0, 1, 2, 3, 4].map((b) => (
                    <rect
                      key={b}
                      x={b * 14}
                      y={22 - b * 4}
                      width={10}
                      height={8 + b * 4}
                      fill="rgba(0,212,177,0.2)"
                      stroke={TEAL_DIM}
                      strokeWidth={0.4}
                    />
                  ))}
                </g>
              ) : null}
            </g>
          );
        })}

        {/* rack / pasek na dole */}
        <rect
          x={12}
          y={88}
          width={296}
          height={40}
          stroke={TEAL_DIM}
          strokeWidth={0.75}
          fill="rgba(0,212,177,0.03)"
        />
        {[0, 1, 2].map((i) => (
          <rect
            key={i}
            x={24 + i * 96}
            y={98}
            width={72}
            height={20}
            stroke={TEAL_DIM}
            strokeWidth={0.55}
            fill="rgba(6,10,16,0.85)"
          />
        ))}
      </svg>

      <div className="flex items-baseline justify-between gap-2 border-t border-white/[0.06] pt-3">
        <span className="offer-font-mono text-[22px] font-medium tracking-[-0.02em] text-[rgba(0,212,177,0.45)]">
          {primary}
        </span>
        <span className="offer-font-mono text-[9px] tracking-[0.2em] text-[rgba(220,227,237,0.4)]">
          {secondary}
        </span>
      </div>
    </div>
  );
}
