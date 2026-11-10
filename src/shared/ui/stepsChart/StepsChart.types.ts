export interface StepsChartStep {
  label: string
  labelClass?: string
  height: number
  bottomLabel?: string
  bottomLabelClass?: string
  content?: string
}

export interface StepsChartProps {
  steps: StepsChartStep[]
  maxHeight?: number
}
