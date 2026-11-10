import type { StepsChartStep } from '~/shared/ui/stepsChart'

export interface ProjectPracticeProps {
  title: string
  descriptions: string[]
  steps: StepsChartStep[]
  action: { label: string, to: string }
}
