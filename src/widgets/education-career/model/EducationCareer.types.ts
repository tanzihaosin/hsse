export interface EducationCareerLink {
  label: string
  to: string
}

export interface EducationCareerTrack {
  title?: string
  items: string[]
}

export interface EducationCareerStage {
  title: string
  image: string
  introduction: string
  introductionLink?: EducationCareerLink
  links?: EducationCareerLink[]
  description?: string
  tracks?: EducationCareerTrack[]
  imagePosition?: 'left' | 'right'
}

export interface EducationCareerProps {
  title: string
  logo?: string
  logoAlt?: string
  stages: EducationCareerStage[]
  action?: EducationCareerLink
}
