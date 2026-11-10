export interface HeroBlockProps {
  title: string;
  description?: string;
  image?: string;
  imageDecor?: string
  programs: HeroBlockProgram[]
}

export interface HeroBlockProgram {
  badge: string;
  title: string;
  link: {
    to: string;
    text?: string;
  }
}
