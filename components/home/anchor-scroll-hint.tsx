"use client";

import { motion } from "motion/react";
import { Anchor } from "lucide-react";

const ICON_SIZE = 18;
const WATER_Y   = 56;   // top of the water surface line
const FALL_Y    = WATER_Y - ICON_SIZE + 2; // anchor lands so bottom edge breaks water

export function AnchorScrollHint() {
  const CYCLE       = 3.6;
  const DROP_DUR    = 0.7;
  const SPLASH_START = DROP_DUR - 0.05;

  return (
    <div
      style={{ position: "relative", width: 64, height: 96 }}
      aria-hidden
    >
      {/* ── Chain / line ── */}
      <motion.div
        style={{
          position: "absolute",
          left: "50%",
          x: "-50%",           // Motion owns the transform — no Tailwind conflict
          top: 0,
          width: 1,
          height: FALL_Y,      // chain reaches exactly to top of anchor landing spot
          background: "linear-gradient(to bottom, transparent, rgba(0,212,177,0.28))",
          transformOrigin: "top center",
        }}
        animate={{ scaleY: [0, 1, 1, 0] }}
        transition={{
          duration: CYCLE,
          times: [0, DROP_DUR / CYCLE, (DROP_DUR + 0.6) / CYCLE, 1],
          repeat: Infinity,
          ease: "easeOut",
        }}
      />

      {/* ── Anchor icon ── */}
      <motion.div
        style={{
          position: "absolute",
          left: "50%",
          x: "-50%",           // center horizontally via Motion
          top: 0,
        }}
        animate={{
          y: [0, FALL_Y, FALL_Y, FALL_Y, 0],
          opacity: [0.75, 1, 0.65, 0, 0.75],
          scale: [0.85, 1, 0.9, 0.7, 0.85],
        }}
        transition={{
          duration: CYCLE,
          times: [0, DROP_DUR / CYCLE, (DROP_DUR + 0.3) / CYCLE, (DROP_DUR + 0.8) / CYCLE, 1],
          repeat: Infinity,
          ease: [0.45, 0, 0.55, 1],
        }}
      >
        <Anchor
          size={ICON_SIZE}
          strokeWidth={1.5}
          className="text-sonar"
          style={{ filter: "drop-shadow(0 0 6px rgba(0,212,177,0.55))", display: "block" }}
        />
      </motion.div>

      {/* ── Water surface line ── */}
      <motion.div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: WATER_Y,
          height: 1,
          background: "rgba(0,212,177,0.14)",
        }}
        animate={{ opacity: [0.14, 0.35, 0.14] }}
        transition={{ duration: CYCLE, repeat: Infinity }}
      />

      {/* ── Ripple rings — centered via x:'-50%' which scales with width ── */}
      {[0, 0.2, 0.42].map((extraDelay, i) => (
        <motion.div
          key={i}
          style={{
            position: "absolute",
            left: "50%",
            top: WATER_Y - 2,   // visually sit on the water line
            x: "-50%",          // Motion keeps this centered as width changes
            y: "-50%",
            width: 4,
            height: 4,
            border: "1px solid rgba(0,212,177,0.55)",
            borderRadius: "50%",
          }}
          animate={{
            width:   [4, 36 + i * 14],
            height:  [4, 13 + i * 4],
            opacity: [0, 0.55 - i * 0.13, 0],
          }}
          transition={{
            duration:    1.25,
            delay:       SPLASH_START + extraDelay,
            repeat:      Infinity,
            repeatDelay: CYCLE - 1.25 - extraDelay,
            ease:        "easeOut",
          }}
        />
      ))}

      {/* ── Splash droplets — wrapper centers origin, motion moves each drop ── */}
      {[
        { xEnd: -13, yEnd: -15, size: 3 },
        { xEnd:  11, yEnd: -17, size: 2.5 },
        { xEnd:  -7, yEnd: -11, size: 2 },
        { xEnd:  15, yEnd:  -9, size: 2 },
        { xEnd:  -3, yEnd: -19, size: 1.5 },
        { xEnd:   5, yEnd: -13, size: 1.5 },
      ].map((d, i) => (
        // Outer div places origin at water-center; motion.div does the splash movement
        <div
          key={`drop-${i}`}
          style={{
            position: "absolute",
            left: "50%",
            top: WATER_Y,
            width: 0,
            height: 0,
          }}
        >
          <motion.div
            style={{
              position: "absolute",
              width:  d.size,
              height: d.size,
              background: "#00d4b1",
              borderRadius: "50%",
              x: -d.size / 2,  // center the dot on the origin point
              y: -d.size / 2,
            }}
            animate={{
              x: [-d.size / 2, -d.size / 2 + d.xEnd * 0.5, -d.size / 2 + d.xEnd],
              y: [-d.size / 2, d.yEnd, d.yEnd * 0.35],
              opacity: [0, 0.85, 0],
              scale:   [0.4, 1, 0.25],
            }}
            transition={{
              duration:    0.62,
              delay:       SPLASH_START + i * 0.03,
              repeat:      Infinity,
              repeatDelay: CYCLE - 0.62 - i * 0.03,
              ease:        "easeOut",
            }}
          />
        </div>
      ))}

      {/* ── "SCROLL" micro-label ── */}
      <motion.span
        style={{
          position: "absolute",
          bottom: 0,
          left: "50%",
          x: "-50%",
          fontSize: 8,
          letterSpacing: "0.2em",
          whiteSpace: "nowrap",
          fontFamily: "var(--font-geist-mono)",
          color: "rgba(126,204,233,0.75)",
        }}
        animate={{ opacity: [0.55, 1, 0.55] }}
        transition={{ duration: CYCLE, repeat: Infinity }}
      >
        SCROLL
      </motion.span>
    </div>
  );
}
