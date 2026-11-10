export type TextVariant = 'lg' | 'default' | 'sm' | 'caption' | 'mono' | 'label' | 'custom'
export type TextFont = 'sans' | 'dewi' | 'dewi-extended' | 'mono'

export interface TextProps {
  as?: 'p' | 'span' | 'div' | 'blockquote'
  variant?: TextVariant
  font?: TextFont
  html?: string
}
