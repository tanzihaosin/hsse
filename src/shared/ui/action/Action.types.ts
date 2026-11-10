export type ActionVariant =
  'primary' | 'invert' | 'disabled' | 'link' | 'custom'
export type ActionSize = 'lg' | 'custom'

export interface ActionProps {
  to?: string
  variant?: ActionVariant
  size?: ActionSize
  type?: 'button' | 'submit'
  target?: '_self' | '_blank'
  external?: boolean | null
  rel?: string
  activeClass?: string
  exactActiveClass?: string
  ariaLabel?: string
  icon?: string
  preIcon?: string
  postIcon?: string
  iconClass?: string
  disabled?: boolean
}
