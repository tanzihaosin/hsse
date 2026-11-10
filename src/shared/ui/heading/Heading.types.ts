export type HeadingVariant = 'h1' | 'h2' | 'h3'

export interface HeadingProps {
  as?: 'h1' | 'h2' | 'h3'
  variant?: HeadingVariant
  uppercase?: boolean
  html?: string
}
