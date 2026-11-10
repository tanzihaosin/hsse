export interface Person {
  name: string
  description: string
  photo?: string
}

export interface PeopleGroup {
  id: string
  label: string
  people: Person[]
}

export interface PeopleSliderProps {
  title: string
  groups?: PeopleGroup[]
}
