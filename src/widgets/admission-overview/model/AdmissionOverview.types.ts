export interface AdmissionOverviewItem {
  label: string
  wide?: boolean
}

export interface AdmissionOverviewProps {
  title: string
  items: AdmissionOverviewItem[]
}
