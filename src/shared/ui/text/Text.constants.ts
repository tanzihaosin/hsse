// TODO Добавить пропс для управления font-family. Добавить blockquote как вариант отображения

import type { TextVariant } from './Text.types'

export const TEXT_SIZE_CLASSES: Record<TextVariant, string> = {
  lg: 'text-[18px] leading-6',
  default: 'text-[16px] leading-6',
  sm: 'text-[14px]',
  caption: 'text-[12px]',
  mono: 'font-mono',
  label: 'text-[11px] font-mono',
  custom: '',
}
