import React, { useCallback, useRef } from "react";

export function useTilt<T extends HTMLElement>(maxDeg = 4.5) {
  const ref = useRef<T>(null);
  const reduce =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const onPointerMove = useCallback(
    (e: React.PointerEvent<HTMLElement>) => {
      if (reduce || e.pointerType === "touch") return;
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      el.style.setProperty("--tilt-x", `${(-py * maxDeg).toFixed(2)}deg`);
      el.style.setProperty("--tilt-y", `${(px * maxDeg).toFixed(2)}deg`);
      el.style.setProperty("--glow-x", `${(px * 0.5 + 0.5) * 100}%`);
      el.style.setProperty("--glow-y", `${(py * 0.5 + 0.5) * 100}%`);
    },
    [maxDeg, reduce]
  );
  const onPointerLeave = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--tilt-x", "0deg");
    el.style.setProperty("--tilt-y", "0deg");
  }, []);

  return { ref, onPointerMove, onPointerLeave };
}
