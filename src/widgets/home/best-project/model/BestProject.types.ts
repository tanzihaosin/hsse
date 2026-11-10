export interface BestProjectItem {
  title: string
  description: string
  descriptionLink?: { label: string, to: string }
  note: string
  image: string
  video: string
}

export interface BestProjectProps {
  title: string
  projects: BestProjectItem[]
}
