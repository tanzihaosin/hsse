import { describe, expect, it } from 'vitest'
import { defineComponent } from 'vue'
import type { ContentBlock } from './ContentPage.types'
import { resolveContentBlocks } from './resolveContentBlocks'

describe('resolveContentBlocks', () => {
  it('selects enabled known blocks in order and preserves data and anchors', () => {
    const component = defineComponent({})
    const blocks: ContentBlock[] = [
      { id: 'second', type: 'known', order: 20, enabled: true, data: { title: 'Second' }, anchor: 'section' },
      { id: 'hidden', type: 'known', order: 5, enabled: false, data: {} },
      { id: 'unknown', type: 'missing', order: 15, enabled: true, data: {} },
      { id: 'first', type: 'known', order: 10, enabled: true, data: { title: 'First' } },
    ]

    expect(resolveContentBlocks(blocks, { known: component })).toEqual([
      { id: 'first', component, data: { title: 'First' }, anchor: undefined },
      { id: 'second', component, data: { title: 'Second' }, anchor: 'section' },
    ])
    expect(blocks.map(block => block.id)).toEqual(['second', 'hidden', 'unknown', 'first'])
  })
})
