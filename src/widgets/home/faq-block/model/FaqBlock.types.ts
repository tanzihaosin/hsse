export interface FaqQuestion {
  question: string
  answers: string[]
}

export interface FaqGroup {
  title: string
  questions: FaqQuestion[]
}

export interface FaqBlockProps {
  title: string
  groups: FaqGroup[]
}
