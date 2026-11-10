export interface EducationCreditProps {
  title: string
  image: string
  explanationTitle: string
  terms: string[]
  introduction: string[]
  payments: { label?: string, value: string, description: string }[]
  note: string
}
