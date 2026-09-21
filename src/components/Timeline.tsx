import type { TimelineEntry } from "../data/types";
import { useInView } from "../hooks/useInView";
import { cn } from "../lib/cn";
import Section from "./Section";

const mono =
  "inline-flex items-center justify-center rounded-full border border-line bg-surface2 font-ui font-extrabold tracking-[0.02em] [font-stretch:112%]";

function Item({ entry }: { entry: TimelineEntry }) {
  const [ref, inView] = useInView<HTMLLIElement>();
  return (
    <li
      ref={ref}
      className={cn(
        "grid gap-y-5 pb-12 transition-[opacity,transform] duration-700 last:pb-0 min-[861px]:grid-cols-[minmax(0,1fr)_76px_minmax(0,1.6fr)] min-[861px]:gap-x-6 min-[861px]:pb-14 min-[861px]:last:pb-0",
        inView ? "translate-y-0 opacity-100" : "translate-y-[26px] opacity-0"
      )}
    >
      <div className="order-2 self-start rounded-2xl border border-line bg-surface p-[26px] min-[861px]:order-none">
        <span
          className={cn(mono, "size-14 text-[17px] min-[861px]:hidden")}
          aria-hidden="true"
        >
          {entry.monogram}
        </span>
        <h3 className="mb-2 mt-3.5 font-ui text-[22px] font-bold leading-[1.2] [font-stretch:108%] min-[861px]:mt-0">
          {entry.org}
        </h3>
        <p className="text-[17px] text-soft">{entry.orgNote}</p>
      </div>

      <div
        className="hidden flex-col items-center gap-2.5 min-[861px]:flex"
        aria-hidden="true"
      >
        <span
          className={cn(mono, "size-[60px] border-2 border-accent text-[17px]")}
        >
          {entry.monogram}
        </span>
        <span className="min-h-10 w-0.5 flex-1 bg-gradient-to-b from-accent to-transparent" />
      </div>

      <div className="order-1 min-[861px]:order-none">
        <h3 className="mb-1.5 mt-1 font-ui text-[clamp(24px,2.6vw,32px)] font-extrabold leading-[1.15] tracking-[-0.015em] [font-stretch:108%]">
          {entry.title}
        </h3>
        <p className="mb-4 font-ui text-[15px] font-medium text-muted">
          {entry.date}
        </p>
        {entry.points && (
          <ul className="max-w-[40em] list-disc space-y-2.5 pl-[1.1em]">
            {entry.points.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        )}
        {entry.certs && (
          <ul className="max-w-[40em]">
            {entry.certs.map((c) => (
              <li
                key={c.name}
                className="flex justify-between gap-4 border-t border-line py-2.5"
              >
                <span>{c.name}</span>
                <span className="flex-none font-ui text-[14.5px] text-muted">
                  {c.issuer}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </li>
  );
}

interface TimelineProps {
  id: string;
  title: string;
  intro: string;
  entries: TimelineEntry[];
}

export default function Timeline({ id, title, intro, entries }: TimelineProps) {
  return (
    <Section id={id} title={title} intro={intro}>
      <ol>
        {entries.map((e) => (
          <Item key={e.org + e.title} entry={e} />
        ))}
      </ol>
    </Section>
  );
}
