export interface TheFooterProps {
  logos: { to: string, icon: string, label: string }[]
  navigation: { to: string, label: string }[]
  phone: { label: string, to: string, hours: string }
  email: string
  address: string
  socialLinks: { to: string, icon: string, label: string }[]
  legalLinks: { to: string, label: string, localFile?: boolean }[]
}
