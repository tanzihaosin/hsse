export type InputType = 'text' | 'email' | 'password' | 'tel' | 'number' | 'search' | 'date'

export interface InputProps {
  type?: InputType
  label?: string
  hint?: string
  error?: string
  placeholder?: string
  disabled?: boolean
}
