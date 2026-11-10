export interface FactCardProps {
  value: string
  description: string
  unit?: string
  note?: string
  compact?: boolean
  variant?: 'number' | 'text'
}
