import type { Component } from 'vue'
import type { ContentBlock } from './ContentPage.types'

export interface ResolvedContentBlock {
  id: string
  component: Component
  data: Record<string, unknown>
  anchor?: string
}

export function resolveContentBlocks(blocks: ContentBlock[], components: Record<string, Component>): ResolvedContentBlock[] {
  return blocks
    .filter(block => block.enabled)
    .toSorted((a, b) => a.order - b.order)
    .flatMap((block) => {
      const component = Object.hasOwn(components, block.type) ? components[block.type] : undefined
      if (!component) {
        if (import.meta.dev) console.warn(`Неизвестный тип блока: ${block.type}`)
        return []
      }
      const data = block.data && typeof block.data === 'object' && !Array.isArray(block.data)
        ? block.data as Record<string, unknown>
        : {}
      return [{ id: block.id, component, data, anchor: block.anchor }]
    })
}
