export type TextVariant = 'lg' | 'default' | 'sm' | 'caption' | 'mono' | 'label' | 'custom'

export interface TextProps {
  as?: 'p' | 'span' | 'div'
  variant?: TextVariant
  html?: string
}
