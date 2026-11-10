export type ModalSize = 'sm' | 'md' | 'lg' | 'xl' | 'full'

export interface ModalProps {
  size?: ModalSize
  title?: string
  /** Разрешает закрытие кнопкой, по Escape и нажатию на подложку. */
  closable?: boolean
}
