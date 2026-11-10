import type { TabsStyleKey, TabsClasses } from './Tabs.types'

export const TABS_ITEM_BASE_CLASSES =
  'inline-flex cursor-pointer items-center justify-center px-3 py-1 text-base transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground disabled:cursor-not-allowed disabled:opacity-40'

const FILLED_LIST = 'flex flex-wrap gap-4'

const FILLED_ITEM = {
  item: 'rounded-lg border',
  inactive: 'border-foreground text-foreground hover:bg-foreground/10',
}

export const TABS_CLASSES: Record<TabsStyleKey, TabsClasses> = {
  primary: {
    ...FILLED_ITEM,
    list: FILLED_LIST,
    active: 'border-foreground-muted bg-foreground-muted text-primary',
  },
  dark: {
    ...FILLED_ITEM,
    list: FILLED_LIST,
    active: 'border-foreground bg-foreground text-primary',
  },
  underline: {
    list: 'flex border-b-2 border-stroke',
    item: '-mb-0.5 border-b-2',
    active: 'border-foreground text-foreground',
    inactive: 'border-transparent text-foreground-muted hover:text-foreground',
  },
}
