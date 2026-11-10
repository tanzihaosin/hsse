import { afterEach, describe, expect, it, vi } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import ScrollToTop from './ScrollToTop.vue'

describe('ScrollToTop', () => {
  afterEach(() => {
    vi.unstubAllGlobals()
    vi.restoreAllMocks()
    document.getElementById('footer')?.remove()
  })

  it('показывает кнопку при видимом футере и учитывает уменьшение движения', async () => {
    let onIntersection: IntersectionObserverCallback | undefined
    const disconnect = vi.fn()
    const observe = vi.fn()
    vi.stubGlobal('IntersectionObserver', class {
      constructor(callback: IntersectionObserverCallback) { onIntersection = callback }
      observe = observe
      disconnect = disconnect
    })
    vi.stubGlobal('matchMedia', vi.fn(() => ({ matches: true })))
    const scrollTo = vi.spyOn(window, 'scrollTo').mockImplementation(() => {})
    const footer = document.createElement('footer')
    footer.id = 'footer'
    document.body.append(footer)

    const wrapper = await mountSuspended(ScrollToTop)
    expect(wrapper.find('button').exists()).toBe(false)
    expect(observe).toHaveBeenCalledWith(footer)
    onIntersection?.([{ isIntersecting: true } as IntersectionObserverEntry], {} as IntersectionObserver)
    await nextTick()
    await wrapper.get('button').trigger('click')
    expect(scrollTo).toHaveBeenCalledWith({ top: 0, behavior: 'instant' })
    wrapper.unmount()
    expect(disconnect).toHaveBeenCalledOnce()
  })
})
