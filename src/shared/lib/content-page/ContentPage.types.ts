export interface ContentBlock<T = unknown> {
  id: string
  type: string
  order: number
  enabled: boolean
  data: T
  anchor?: string
  schemaVersion?: number
}

export interface ContentPageMeta {
  title?: string
  description?: string
  ogTitle?: string
  ogDescription?: string
  ogImage?: string
}

export interface ContentPage {
  slug: string
  version: number
  blocks: ContentBlock[]
  meta?: ContentPageMeta
}
