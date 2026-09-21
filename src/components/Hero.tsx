import { headline, intro, profile } from "../data/content";
import { cn } from "../lib/cn";

const btn =
  "inline-flex min-h-12 items-center rounded-[10px] border-2 px-[22px] font-ui text-base font-bold transition duration-150 hover:-translate-y-0.5 active:translate-y-0 motion-reduce:transition-none";
const btnOutline = `${btn} border-ink text-ink hover:bg-ink hover:text-bg`;
const btnMain = `${btn} border-pale bg-pale text-bg hover:border-accent hover:bg-accent`;

export default function Hero() {
  const words = headline.split(" ");
  const fade =
    "animate-fadein opacity-0 motion-reduce:animate-none motion-reduce:opacity-100";

  return (
    <section
      id="top"
      className="wrap grid items-center gap-[clamp(32px,5vw,72px)] pb-[clamp(56px,8vw,112px)] pt-[clamp(32px,6vw,80px)]"
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
    </section>
  );
}
