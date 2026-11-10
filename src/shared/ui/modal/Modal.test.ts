import { afterEach, describe, expect, it, vi } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import { nextTick } from 'vue'
import Modal from './Modal.vue'

afterEach(() => {
  document.body.innerHTML = ''
  vi.restoreAllMocks()
})

describe('Modal', () => {
  it('задаёт название диалогу, закрывает его по Escape и возвращает фокус', async () => {
    const opener = document.createElement('button')
    document.body.append(opener)
    opener.focus()
    const wrapper = await mountSuspended(Modal, {
      attachTo: document.body,
      props: { modelValue: false, title: 'Заявка', 'onUpdate:modelValue': (value: boolean) => wrapper.setProps({ modelValue: value }) },
    })

    await wrapper.setProps({ modelValue: true })
    await nextTick()
    const dialog = document.querySelector<HTMLElement>('[role="dialog"]')!
    expect(dialog.getAttribute('aria-modal')).toBe('true')
    expect(document.getElementById(dialog.getAttribute('aria-labelledby')!)?.textContent).toBe('Заявка')
    expect(document.activeElement).toBe(dialog)
    window.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }))
    await nextTick()
    expect(wrapper.emitted('update:modelValue')?.at(-1)).toEqual([false])
    expect(document.activeElement).toBe(opener)
    wrapper.unmount()
  })

  it('переводит фокус между крайними элементами при нажатии Tab', async () => {
    vi.spyOn(HTMLElement.prototype, 'getClientRects').mockImplementation(() => [new DOMRect()] as unknown as DOMRectList)
    const wrapper = await mountSuspended(Modal, {
      attachTo: document.body,
      props: { modelValue: true, title: 'Заявка', closable: false },
      slots: { default: '<button>Первый</button><button>Последний</button>' },
    })
    await nextTick()
    const dialog = document.querySelector<HTMLElement>('[role="dialog"]')!
    const buttons = dialog.querySelectorAll('button')
    buttons[1]!.focus()
    buttons[1]!.dispatchEvent(new KeyboardEvent('keydown', { key: 'Tab', bubbles: true, cancelable: true }))
    expect(document.activeElement).toBe(buttons[0])
    buttons[0]!.dispatchEvent(new KeyboardEvent('keydown', { key: 'Tab', shiftKey: true, bubbles: true, cancelable: true }))
    expect(document.activeElement).toBe(buttons[1])
    wrapper.unmount()
  })

  it('не закрывается по Escape и нажатию на подложку, если закрытие запрещено', async () => {
    const wrapper = await mountSuspended(Modal, { attachTo: document.body, props: { modelValue: true, title: 'Заявка', closable: false } })
    await nextTick()
    window.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }))
    document.querySelector<HTMLElement>('[data-testid="modal-overlay"]')!.click()
    await nextTick()
    expect(wrapper.emitted('update:modelValue')).toBeUndefined()
    expect(document.querySelector('[role="dialog"]')).not.toBeNull()
    wrapper.unmount()
  })
})
