export type BadgeVariant = 'category' | 'detail' | 'date' | 'outline'

export interface BadgeProps {
  variant?: BadgeVariant
  as?: 'span' | 'li'
}
