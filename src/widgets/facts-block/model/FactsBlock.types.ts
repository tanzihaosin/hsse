import type { FactCardProps } from '~/shared/ui/fact-card'

export interface FactsBlockProps {
  title?: string
  items: FactCardProps[]
  note?: string
}
