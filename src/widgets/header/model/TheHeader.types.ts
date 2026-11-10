export interface HeaderProgram {
  overTitle: string;
  link: string;
  text: string;
}

export interface TheHeaderProps {
  logos: {
    link: string;
    image: string;
    ariaLabel?: string;
  }[]
  nav: {
    link: string;
    text: string;
    isDropdown?: boolean;
    dropdownMenu?: HeaderProgram[]
  }[]
  cta: {
    link: string;
    text: string;
  }
}
