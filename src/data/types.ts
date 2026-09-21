export type ArtKind = 'receipt' | 'rings' | 'chart'
export type HabitIconKind = 'check' | 'team' | 'layers' | 'chat'

export interface Project {
  title: string
  badge: string
  description: string
  points: string[]
  stack: string
  art: ArtKind
  /** Optional link to the repository. Leave out if it is private. */
  repo?: string
}

export interface Cert {
  name: string
  issuer: string
}

export interface TimelineEntry {
  /** Short letters shown in the round marker. */
  monogram: string
  org: string
  orgNote: string
  title: string
  date: string
  points?: string[]
  certs?: Cert[]
}

export interface FeaturedSkill {
  mono: string
  name: string
  kind: string
}

export interface Habit {
  icon: HabitIconKind
  title: string
  text: string
}
