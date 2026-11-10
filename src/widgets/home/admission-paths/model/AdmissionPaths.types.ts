export interface AdmissionPath {
  title: string
  preview: string
  details: string
  additional?: string[]
  conclusion?: string
  link?: { label: string, to: string }
}

export interface AdmissionPathsProps {
  title: string
  items: AdmissionPath[]
  action?: { label: string, to: string }
}
