export interface IntroHeroProps {
  title: string
  image: { src: string, alt: string }
  badge?: string
  description?: string
  points?: string[]
  action?: { label: string, to: string }
}
