import { useMemo } from "react";
import type { CSSProperties } from "react";
import { cn } from "../lib/cn";

function mulberry32(seed: number) {
  let a = seed;
  return () => {
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

interface Px {
  left: number;
  top: number;
  dur: number;
  delay: number;
  filled: boolean;
}

/** A field of softly twinkling squares behind the top-left corner. */
export default function PixelField() {
  const squares = useMemo(() => {
    const rand = mulberry32(11);
    const out: Px[] = [];
    for (let r = 0; r < 16; r++) {
      for (let c = 0; c < 18; c++) {
        const d = Math.hypot((c * 24) / 440, (r * 24) / 380);
        if (rand() < Math.max(0, 0.62 - 0.55 * d)) {
          out.push({
            left: c * 24 + 4,
            top: r * 24 + 4,
            filled: rand() < 0.22,
            dur: 2.6 + rand() * 2.8,
            delay: rand() * 3.5,
          });
        }
      }
    }
    return out;
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute left-0 top-0 z-0 h-[380px] w-[440px] max-[860px]:opacity-60"
    >
      {squares.map((s, i) => (
        <span
          key={i}
          className={cn(
            "absolute size-[22px] animate-twinkle rounded-md border opacity-30 motion-reduce:animate-none motion-reduce:opacity-70",
            s.filled
              ? "border-[color-mix(in_srgb,var(--color-accent)_45%,var(--color-bg))] bg-[color-mix(in_srgb,var(--color-accent)_20%,var(--color-bg))]"
              : "border-[#2A2650]"
          )}
          style={
            {
              left: s.left,
              top: s.top,
              "--dur": `${s.dur.toFixed(1)}s`,
              "--dl": `${s.delay.toFixed(1)}s`,
            } as CSSProperties
          }
        />
      ))}
    </div>
  );
}
