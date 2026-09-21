import { useEffect, useState } from "react";
import { nav, profile } from "../data/content";
import { useActiveSection } from "../hooks/useActiveSection";
import { cn } from "../lib/cn";

const ids = nav.map((n) => n.id);

export default function Header() {
  const [stuck, setStuck] = useState(false);
  const active = useActiveSection(ids);

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const link =
    "inline-flex min-h-11 items-center rounded-lg px-2 font-ui text-[15px] font-semibold decoration-accent decoration-2 underline-offset-[6px] hover:underline min-[561px]:px-3";

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b bg-bg/80 backdrop-blur-md transition-colors",
        stuck ? "border-line" : "border-transparent"
      )}
    >
      <div className="wrap flex min-h-[72px] flex-wrap items-center justify-between gap-x-6 gap-y-1">
        <a
          href="#top"
          className="inline-flex items-center font-ui text-[30px] tracking-[-0.01em] [font-stretch:100%] py-4"
        >
          {profile.name}
        </a>
        <nav
          aria-label="Sections"
          className="flex flex-wrap items-center gap-1"
        >
          {nav.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              className={cn(link, active === n.id && "underline")}
              aria-current={active === n.id ? "true" : undefined}
            >
              {n.label}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-2 hidden min-h-11 items-center rounded-lg bg-pale px-[18px] font-ui text-[15px] font-semibold text-bg transition-colors hover:bg-accent min-[561px]:inline-flex"
          >
            Contact me
          </a>
        </nav>
      </div>
    </header>
  );
}
