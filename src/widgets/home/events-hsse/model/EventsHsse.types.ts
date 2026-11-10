export interface HsseEvent {
  date: string
  datetime: string
  title: string
  paragraphs: string[]
  image: string
  link: string
  buttonLabel?: string
}

export interface EventsHsseProps {
  title: string
  events: HsseEvent[]
}
