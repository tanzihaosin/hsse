import type { TextFont, TextVariant } from './Text.types'

export const TEXT_SIZE_CLASSES: Record<TextVariant, string> = {
  lg: 'text-[18px] leading-6',
  default: 'text-[16px] leading-6',
  sm: 'text-[14px]',
  caption: 'text-[12px]',
  mono: '',
  label: 'text-[11px]',
  custom: '',
}

export const TEXT_FONT_CLASSES: Record<TextFont, string> = {
  sans: 'font-sans',
  dewi: 'font-dewi',
  'dewi-extended': 'font-dewi-extended',
  mono: 'font-mono',
}
