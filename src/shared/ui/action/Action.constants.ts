import type { ActionVariant, ActionSize } from './Action.types'

export const ACTION_BASE_CLASSES =
  'cursor-pointer inline-flex items-center justify-center gap-2 transition-colors duration-200 leading-tight'

const OUTLINED_ACTION_CLASSES = 'w-full rounded-full border font-light md:w-fit'

export const ACTION_VARIANT_CLASSES: Record<ActionVariant, string> = {
  primary: `${OUTLINED_ACTION_CLASSES} border-foreground text-foreground hover:bg-foreground hover:text-primary`,
  invert: `${OUTLINED_ACTION_CLASSES} border-primary text-primary hover:bg-primary hover:text-foreground`,
  link: 'hover:underline',
  disabled: 'bg-white/4 border border-white/6 text-foreground/18 cursor-not-allowed',
  custom: '',
}

export const ACTION_SIZE_CLASSES: Record<ActionSize, string> = {
  lg: 'px-5 py-4 text-base',
  custom: '',
}
