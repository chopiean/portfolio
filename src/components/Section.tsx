import type { ReactNode } from 'react'

interface SectionProps {
  id: string
  title: string
  intro?: string
  children: ReactNode
}

export default function Section({ id, title, intro, children }: SectionProps) {
  return (
    <section id={id} className="wrap pb-[clamp(16px,2.5vw,32px)] pt-[clamp(40px,5.5vw,72px)]">
      <h2 className="mb-3 font-ui text-[clamp(30px,3.6vw,48px)] font-extrabold leading-[1.1] tracking-[-0.02em] [font-stretch:112%]">
        {title}
      </h2>
      {intro && <p className="mb-[clamp(32px,5vw,56px)] max-w-[36em] text-muted">{intro}</p>}
      {children}
    </section>
  )
}
