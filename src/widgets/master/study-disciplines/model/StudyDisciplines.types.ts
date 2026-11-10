export interface StudyDisciplinesProps {
  title: string
  paragraphs: string[]
  groups: { title: string, items: string[] }[]
  action: { label: string, to: string }
  image: string
}
