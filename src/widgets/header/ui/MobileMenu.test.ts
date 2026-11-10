import { describe, expect, it, vi } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import { nextTick } from 'vue'
import MobileMenu from './MobileMenu.vue'
import { TheHeaderData } from '../model/TheHeader.data'

describe('MobileMenu: управление с клавиатуры', () => {
  it('удерживает фокус внутри меню и возвращает его после закрытия', async () => {
    const trigger = document.createElement('button')
    document.body.append(trigger)
    trigger.focus()
    const rects = vi.spyOn(HTMLElement.prototype, 'getClientRects').mockReturnValue([{}] as unknown as DOMRectList)
    const wrapper = await mountSuspended(MobileMenu, {
      props: { config: TheHeaderData, modelValue: false, top: 0 },
      attachTo: document.body,
    })

    try {
      await wrapper.setProps({ modelValue: true })
      await nextTick()
      const panel = document.querySelector<HTMLElement>('[role="dialog"][aria-label="Меню навигации"]')!
      const controls = panel.querySelectorAll<HTMLElement>('button, a[href]')
      const first = controls[0]!
      const last = controls[controls.length - 1]!
      expect(document.activeElement).toBe(panel)

      panel.dispatchEvent(new KeyboardEvent('keydown', { key: 'Tab', shiftKey: true, bubbles: true, cancelable: true }))
      expect(document.activeElement).toBe(last)
      last.dispatchEvent(new KeyboardEvent('keydown', { key: 'Tab', bubbles: true, cancelable: true }))
      expect(document.activeElement).toBe(first)

      await wrapper.setProps({ modelValue: false })
      await nextTick()
      expect(document.activeElement).toBe(trigger)
    } finally {
      wrapper.unmount()
      rects.mockRestore()
      trigger.remove()
    }
  })
})
