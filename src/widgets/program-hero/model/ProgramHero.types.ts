export interface ProgramHeroProps {
  badge: string
  title: string
  description?: string
  directions?: ProgramHeroDirection[]
  partner?: { label: string, logo: string, name: string }
  action?: { label: string, to?: string }
}

export interface ProgramHeroDirection {
  title: string
  description?: string
}
