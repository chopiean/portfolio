import { profile, projects } from '../data/content'
import type { Project } from '../data/types'
import { useInView } from '../hooks/useInView'
import { cn } from '../lib/cn'
import Art from './Art'
import Section from './Section'

const card =
  'group flex flex-col overflow-hidden rounded-[18px] border border-line bg-surface transition duration-300 hover:-translate-y-[3px] hover:border-ink/55 hover:shadow-[0_0_44px_rgba(241,239,255,0.1)] focus-within:border-ink/55 motion-reduce:transition-none'

function useReveal<T extends HTMLElement>() {
  const [ref, inView] = useInView<T>()
  const cls = cn(
    'transition-[opacity,transform,border-color,box-shadow] duration-700',
    inView ? 'translate-y-0 opacity-100' : 'translate-y-[26px] opacity-0',
  )
  return [ref, cls] as const
}

function ProjectCard({ project }: { project: Project }) {
  const [ref, reveal] = useReveal<HTMLElement>()
  return (
    <article ref={ref} className={cn(card, reveal)}>
      <div className="art-tile flex aspect-[16/10] items-center justify-center overflow-hidden border-b border-line bg-[color-mix(in_srgb,var(--color-accent)_10%,var(--color-surface))]">
        <Art kind={project.art} />
      </div>
      <div className="flex flex-1 flex-col px-[26px] pb-7 pt-6">
        <div className="mb-2 flex items-center justify-between gap-3">
          <h3 className="font-ui text-[26px] font-bold leading-[1.2] tracking-[-0.01em] [font-stretch:108%]">
            {project.title}
          </h3>
          <span className="whitespace-nowrap rounded-full border border-[color-mix(in_srgb,var(--color-accent)_50%,var(--color-surface))] bg-[color-mix(in_srgb,var(--color-accent)_16%,var(--color-surface))] px-3 py-0.5 font-ui text-[13.5px] font-semibold leading-normal">
            {project.badge}
          </span>
        </div>
        <p className="text-soft">{project.description}</p>
        <ul className="mt-3.5 list-disc space-y-1.5 pl-[1.1em] text-soft">
          {project.points.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
        <p className="mt-auto pt-[18px] font-ui text-[14.5px] font-medium leading-normal text-muted">
          <b className="font-bold text-ink">Stack</b> {project.stack}
        </p>
        {project.repo && (
          <a
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3.5 inline-block font-ui text-[15px] font-semibold underline decoration-accent decoration-2 underline-offset-[5px]"
          >
            Code on GitHub
          </a>
        )}
      </div>
    </article>
  )
}

function MoreCard() {
  const [ref, reveal] = useReveal<HTMLElement>()
  return (
    <article
      ref={ref}
      className={cn(
        card,
        'items-start justify-center bg-[color-mix(in_srgb,var(--color-accent)_8%,var(--color-surface))] p-8',
        reveal,
      )}
    >
      <h3 className="mb-2 font-ui text-[clamp(26px,3vw,36px)] font-extrabold leading-[1.15] tracking-[-0.02em] [font-stretch:112%]">
        See the code
      </h3>
      <p className="mb-6 max-w-[24em] text-soft">
        My repositories are on GitHub, with READMEs that explain how each project works.
      </p>
      <a
        href={profile.github}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex min-h-12 items-center rounded-[10px] border-2 border-pale bg-pale px-[22px] font-ui text-base font-bold text-bg transition hover:border-accent hover:bg-accent"
      >
        {profile.githubLabel}
      </a>
    </article>
  )
}

export default function Projects() {
  return (
    <Section
      id="projects"
      title="Projects"
      intro="Three projects, from a solo full-stack app to a team frontend I'm building right now."
    >
      <div className="grid gap-[clamp(20px,3vw,36px)] min-[861px]:grid-cols-2">
        {projects.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
        <MoreCard />
      </div>
    </Section>
  )
}
