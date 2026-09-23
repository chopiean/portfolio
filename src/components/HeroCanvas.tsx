import { lazy, Suspense, useEffect, useState } from "react";

const HeroScene = lazy(() => import("./HeroScene"));

export default function HeroCanvas() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const smallScreen = window.innerWidth < 560;
    let hasWebgl = false;
    try {
      const c = document.createElement("canvas");
      hasWebgl = !!(c.getContext("webgl2") || c.getContext("webgl"));
    } catch {
      hasWebgl = false;
    }
    setEnabled(!reduce && !smallScreen && hasWebgl);
  }, []);

  if (!enabled) return null;

  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden="true">
      <Suspense>
        <HeroScene></HeroScene>
      </Suspense>
    </div>
  );
}
