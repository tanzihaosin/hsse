interface PartnerBase {
  name: string
  width: number
  wide?: boolean
  href?: string
}

export type Partner = PartnerBase & (
  | { logo: string, image?: never }
  | { logo?: never, image: { src: string, height: number } }
)

export interface PartnersProps {
  title: string
  description?: string
  partners: Partner[]
}
