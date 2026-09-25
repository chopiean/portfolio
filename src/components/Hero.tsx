import {
  featuredSkills,
  headline,
  intro,
  otherSkills,
  profile,
} from "../data/content";
import { cn } from "../lib/cn";
import type { ReactNode } from "react";
import HeroCanvas from "./HeroCanvas";

const wordIcons: Record<(typeof headline.rotating)[number], ReactNode> = {
  Ideas: (
    <>
      <path d="M9 18h6M10 22h4" />
      <path d="M12 2a7 7 0 0 0-4 12.7c.6.5 1 1.3 1 2.1V17h6v-.2c0-.8.4-1.6 1-2.1A7 7 0 0 0 12 2z" />
    </>
  ),
  Concepts: (
    <>
      <circle cx="7" cy="7" r="4" />
      <rect x="13" y="13" width="8" height="8" rx="1" />
      <path d="M17 2l4 7h-8z" />
    </>
  ),
  Designs: (
    <>
      <path d="M12 19l7-7 3 3-7 7-3-3z" />
      <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
      <path d="M2 2l7.6 7.6" />
      <circle cx="11" cy="11" r="2" />
    </>
  ),
  Code: <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" />,
};

// Cycles through headline.rotating. The first word is repeated at the end so
// the loop snaps back invisibly; the `slide` keyframes assume 4 words.
function RotatingWord() {
  const list = [...headline.rotating, headline.rotating[0]];
  return (
    <span className="inline-block h-[1.2em] overflow-hidden align-bottom">
      <span
        className="flex animate-slide flex-col motion-reduce:animate-none"
        style={{ animationDelay: "1.4s" }}
      >
        {list.map((w, i) => (
          <span
            key={i}
            className="flex h-[1.2em] items-center gap-[0.22em] text-accent"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="size-[0.78em] shrink-0 rounded-full border-2 border-line bg-surface2 p-[0.14em]"
            >
              {wordIcons[w]}
            </svg>
            {w}
          </span>
        ))}
      </span>
    </span>
  );
}

const btn =
  "inline-flex min-h-12 items-center rounded-[10px] border-2 px-[22px] font-ui text-base font-bold transition duration-150 hover:-translate-y-0.5 active:translate-y-0 motion-reduce:transition-none";
const btnOutline = `${btn} border-ink text-ink hover:bg-ink hover:text-bg`;
const btnMain = `${btn} border-pale bg-pale text-bg hover:border-accent hover:bg-accent`;

const tickerSkills = [
  ...featuredSkills.map((s) => s.name),
  ...otherSkills
    .replace(/\.$/, "")
    .split(", ")
    .map((s) => s.trim()),
];

function Ticker() {
  return (
    <div className="group relative left-1/2 right-1/2 -mx-[50vw] w-screen overflow-hidden border-y border-line bg-surface py-4">
      <span className="sr-only">{tickerSkills.join(", ")}</span>
      <div
        aria-hidden="true"
        className="flex w-max animate-marquee gap-14 group-hover:[animation-play-state:paused] motion-reduce:animate-none"
      >
        {[...tickerSkills, ...tickerSkills].map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-14 whitespace-nowrap font-ui text-2xl font-bold min-[560px]:text-2xl"
          >
            {item}
            <span className="text-accent">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Hero() {
  const fade =
    "animate-fadein opacity-0 motion-reduce:animate-none motion-reduce:opacity-100";

  return (
    <section
      id="top"
      className="wrap grid items-center gap-[clamp(32px,4vw,72px)] pb-[clamp(16px,2.5vw,32px)] pt-[clamp(32px,6vw,80px)]"
    >
      <div className="relative">
        {/* 3D shapes float behind the headline, top-right. Purely
            decorative — HeroCanvas itself hides on small screens and for
            visitors who prefer reduced motion or lack WebGL. */}
        <div className="pointer-events-none absolute -right-20 -z-10 hidden size-[410px] min-[861px]:block">
          <HeroCanvas />
        </div>

        <h1 className="mb-7 font-ui text-[clamp(30px,3.2vw,62px)] font-extrabold leading-[1.04] [font-stretch:100%]">
          <span className="sr-only">
            {headline.lead} {headline.rotating.join(", ")}{" "}
            {headline.rest.join(" ")}
          </span>
          {[
            <>
              {headline.lead} <RotatingWord />
            </>,
            ...headline.rest,
          ].map((line, i) => (
            <span
              key={i}
              aria-hidden="true"
              className="-mb-[0.1em] block overflow-hidden pb-[0.12em]"
            >
              <span
                className="inline-block animate-rise [transform:translateY(110%)] motion-reduce:animate-none motion-reduce:[transform:none]"
                style={{ animationDelay: `${0.1 + i * 0.12}s` }}
              >
                {line}
              </span>
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
          className={cn("mt-8 flex flex-wrap gap-3", fade)}
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
      <Ticker />
    </section>
  );
}
