export type TabsVariant = 'filled' | 'underline'
export type TabsTone = 'primary' | 'dark'
export type TabsStyleKey = TabsTone | 'underline'

export interface TabsClasses {
  list: string
  item: string
  active: string
  inactive: string
}

export interface TabItem {
  value: string
  label: string
  disabled?: boolean
}

export interface TabsProps {
  items: TabItem[]
  variant?: TabsVariant
  tone?: TabsTone
}
