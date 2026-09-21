import { featuredSkills, habits, otherSkills } from '../data/content'
import type { ReactNode } from 'react'
import type { Habit, HabitIconKind } from '../data/types'
import { useInView } from '../hooks/useInView'
import { cn } from '../lib/cn'
import Section from './Section'

const reveal = (inView: boolean) =>
  cn(
    'transition-[opacity,transform,border-color,box-shadow] duration-700',
    inView ? 'translate-y-0 opacity-100' : 'translate-y-[26px] opacity-0',
  )

const icons: Record<HabitIconKind, ReactNode> = {
  check: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M8 12.5l3 3 5-6" />
    </>
  ),
  team: (
    <>
      <circle cx="9" cy="8" r="3" />
      <circle cx="17" cy="9" r="2.5" />
      <path d="M3 19c0-3 3-5 6-5s6 2 6 5" />
      <path d="M15 14.5c3 0 6 1.5 6 4.5" />
    </>
  ),
  layers: (
    <>
      <path d="M12 3l9 5-9 5-9-5 9-5z" />
      <path d="M3 13l9 5 9-5" />
    </>
  ),
  chat: <path d="M4 5h16v11H9l-5 4V5z" />,
}

function Capsule({ mono, name, kind }: { mono: string; name: string; kind: string }) {
  const [ref, inView] = useInView<HTMLLIElement>()
  return (
    <li
      ref={ref}
      className={cn(
        'flex flex-col items-center justify-center gap-3.5 rounded-[48px] border border-line bg-surface px-3 py-7 text-center hover:-translate-y-1 hover:border-ink/70 hover:shadow-[0_0_46px_rgba(241,239,255,0.14)] min-[560px]:aspect-[1/1.5] min-[560px]:rounded-full min-[560px]:py-5',
        reveal(inView),
      )}
    >
      <span
        aria-hidden="true"
        className="inline-flex size-[76px] items-center justify-center rounded-full border-2 border-accent bg-[color-mix(in_srgb,var(--color-accent)_14%,var(--color-surface))] font-ui text-2xl font-extrabold tracking-[0.02em] [font-stretch:112%]"
      >
        {mono}
      </span>
      <b className="font-ui text-[19px] font-bold leading-[1.2]">{name}</b>
      <small className="font-ui text-sm text-muted">{kind}</small>
    </li>
  )
}

function HabitCard({ habit }: { habit: Habit }) {
  const [ref, inView] = useInView<HTMLDivElement>()
  return (
    <div ref={ref} className={cn('rounded-2xl border border-line bg-surface p-[26px]', reveal(inView))}>
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="size-[30px] fill-none stroke-accent"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {icons[habit.icon]}
      </svg>
      <h3 className="mb-2 mt-4 font-ui text-[19px] font-bold leading-[1.25]">{habit.title}</h3>
      <p className="text-[16.5px] leading-[1.55] text-soft">{habit.text}</p>
    </div>
  )
}

export default function Skills() {
  return (
    <Section id="skills" title="Skills" intro="The tools I use most, and how I work with them.">
      <ul className="grid grid-cols-2 gap-[clamp(12px,2vw,24px)] min-[560px]:grid-cols-3 min-[960px]:grid-cols-5">
        {featuredSkills.map((s) => (
          <Capsule key={s.name} {...s} />
        ))}
      </ul>
      <p className="mt-8 max-w-[60em] text-muted">
        <b className="font-ui text-ink">Also:</b> {otherSkills}
      </p>
      <div className="mt-[clamp(40px,6vw,72px)] grid gap-5 min-[560px]:grid-cols-2 min-[960px]:grid-cols-4">
        {habits.map((h) => (
          <HabitCard key={h.title} habit={h} />
        ))}
      </div>
    </Section>
  )
}
