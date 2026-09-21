import { checks, headline, intro, profile } from "../data/content";
import { cn } from "../lib/cn";

const btn =
  "inline-flex min-h-12 items-center rounded-[10px] border-2 px-[22px] font-ui text-base font-bold transition duration-150 hover:-translate-y-0.5 active:translate-y-0 motion-reduce:transition-none";
const btnOutline = `${btn} border-ink text-ink hover:bg-ink hover:text-bg`;
const btnMain = `${btn} border-pale bg-pale text-bg hover:border-accent hover:bg-accent`;

function Tick({ delay }: { delay: number }) {
  return (
    <span className="mt-px inline-flex size-[26px] flex-none items-center justify-center rounded-full bg-ok text-white">
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={3.2}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path
          d="M5 12.5l4.5 4.5L19 7.5"
          className="animate-draw [stroke-dasharray:24] [stroke-dashoffset:24] motion-reduce:animate-none motion-reduce:[stroke-dashoffset:0]"
          style={{ animationDelay: `${delay + 0.25}s` }}
        />
      </svg>
    </span>
  );
}

export default function Hero() {
  const words = headline.split(" ");
  const fade =
    "animate-fadein opacity-0 motion-reduce:animate-none motion-reduce:opacity-100";

  return (
    <section
      id="top"
      className="wrap grid items-center gap-[clamp(32px,5vw,72px)] pb-[clamp(56px,8vw,112px)] pt-[clamp(32px,6vw,80px)] min-[861px]:grid-cols-[minmax(0,1.3fr)_minmax(0,0.8fr)]"
    >
      <div>
        <h1 className="mb-7 font-ui text-[clamp(38px,5.2vw,72px)] font-extrabold leading-[1.04] tracking-[-0.025em] [font-stretch:116%]">
          {words.map((w, i) => (
            <span key={i}>
              <span className="-mb-[0.14em] inline-block overflow-hidden pb-[0.14em] align-bottom">
                <span
                  className="inline-block translate-y-[110%] animate-rise motion-reduce:translate-y-0 motion-reduce:animate-none"
                  style={{ animationDelay: `${0.1 + i * 0.07}s` }}
                >
                  {w}
                </span>
              </span>{" "}
            </span>
          ))}
        </h1>
        <p
          className={cn("mb-8 max-w-[34em] text-xl", fade)}
          style={{ animationDelay: "1s" }}
        >
          {intro}
        </p>
        <div
          className={cn("flex flex-wrap gap-3", fade)}
          style={{ animationDelay: "1.2s" }}
        >
          <a className={btnMain} href="#projects">
            See my work
          </a>
          <a
            className={btnOutline}
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a className={btnOutline} href="#contact">
            Email me
          </a>
        </div>
      </div>

      <div className="animate-cardin overflow-hidden rounded-2xl border border-line bg-surface opacity-0 motion-reduce:animate-none motion-reduce:opacity-100">
        <div className="flex items-center justify-between gap-3 border-b border-line px-5 py-4 font-ui text-base font-bold">
          <span>Availability</span>
          <span
            className={cn(
              "inline-flex items-center gap-2 text-sm font-semibold text-okt",
              fade
            )}
            style={{ animationDelay: "1.9s" }}
          >
            <span className="size-2.5 animate-pulse-ring rounded-full bg-okt motion-reduce:animate-none" />
            All checks passed
          </span>
        </div>
        <ul>
          {checks.map((c, i) => {
            const d = 0.5 + i * 0.25;
            return (
              <li
                key={c.title}
                className={cn(
                  "flex gap-3.5 border-line px-5 py-4",
                  i > 0 && "border-t",
                  fade
                )}
                style={{ animationDelay: `${d}s` }}
              >
                <Tick delay={d} />
                <div>
                  <div className="font-ui text-base font-semibold leading-[1.35]">
                    {c.title}
                  </div>
                  {c.sub && (
                    <div className="mt-0.5 font-ui text-[14.5px] leading-[1.4] text-muted">
                      {c.sub}
                    </div>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
