import type { BadgeVariant } from './Badge.types'

export const BADGE_VARIANT_CLASSES: Record<BadgeVariant, string> = {
  category:
    'w-fit rounded-lg border border-dashed border-primary bg-foreground px-3 py-1 text-xs text-primary uppercase',
  detail:
    'rounded border-2 border-foreground-muted bg-primary-lighter px-3 py-4 text-[15px] text-foreground',
  date: 'rounded-md border border-foreground px-3 py-2 font-mono tracking-[0.15em]',
  outline: 'rounded-lg border-2 border-foreground bg-primary-lighter px-3 py-2 text-sm',
}
