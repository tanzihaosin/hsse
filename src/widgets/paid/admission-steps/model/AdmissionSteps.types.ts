export interface AdmissionStepsProps {
  title: string
  items: {
    title: string
    text: string
    emphasis?: string
    textAfterEmphasis?: string
    details?: string[]
  }[]
  action: { label: string, to: string }
}
