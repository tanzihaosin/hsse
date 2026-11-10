import type { ModalSize } from './Modal.types'

export const MODAL_OVERLAY_CLASSES =
  'fixed inset-0 z-50 flex items-center justify-center bg-primary/70'

export const MODAL_BASE_CLASSES =
  'relative flex flex-col overflow-hidden bg-foreground text-primary shadow-2xl outline-none'

export const MODAL_SIZE_CLASSES: Record<ModalSize, string> = {
  sm: 'max-h-[90dvh] w-full max-w-[24rem] rounded-2xl',
  md: 'max-h-[90dvh] w-full max-w-[32rem] rounded-2xl',
  lg: 'max-h-[90dvh] w-full max-w-[56rem] rounded-2xl',
  xl: 'max-h-[90dvh] w-full max-w-[72rem] rounded-2xl',
  full: 'h-full w-full rounded-none',
}
