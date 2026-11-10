import { beforeEach, describe, expect, it, vi } from 'vitest'
import { mockNuxtImport, mountSuspended } from '@nuxt/test-utils/runtime'
import { nextTick, ref } from 'vue'
import Swiper from './Swiper.vue'

const navigation = vi.hoisted(() => ({ previous: vi.fn(), next: vi.fn(), to: vi.fn(), slideToLoop: vi.fn() }))

mockNuxtImport('useSwiper', () => () => ({
  instance: ref({ params: { loop: false }, slideToLoop: navigation.slideToLoop }),
  prev: navigation.previous,
  next: navigation.next,
  to: navigation.to,
}))

beforeEach(() => vi.clearAllMocks())

describe('Swiper', () => {
  it('обновляет навигацию по событиям слайдера и переключает группы', async () => {
    const wrapper = await mountSuspended(Swiper, {
      props: { slideLabels: ['Первый', 'Второй', 'Третий', 'Четвёртый', 'Пятый'] },
    })
    await nextTick()
    const container = wrapper.get('swiper-container').element
    const instance = {
      realIndex: 0,
      isBeginning: true,
      isEnd: false,
      params: { loop: false, slidesPerGroup: 2, slidesPerGroupSkip: 1 },
      snapGrid: [0, 1, 2],
      snapIndex: 0,
    }
    container.dispatchEvent(new CustomEvent('swiperinit', { detail: [instance] }))
    await nextTick()
    expect(wrapper.get('button[aria-label="Предыдущий слайд"]').attributes('disabled')).toBeDefined()
    expect(wrapper.get('button[aria-label="Первый"]').attributes('aria-current')).toBe('true')
    await wrapper.get('button[aria-label="Четвёртый"]').trigger('click')
    expect(navigation.to).toHaveBeenCalledWith(3)
    await wrapper.get('button[aria-label="Следующий слайд"]').trigger('click')
    expect(navigation.next).toHaveBeenCalledOnce()

    instance.realIndex = 3
    instance.snapIndex = 2
    instance.isBeginning = false
    instance.isEnd = true
    container.dispatchEvent(new CustomEvent('swiperslidechange', { detail: [instance] }))
    await nextTick()
    expect(wrapper.emitted('change')).toEqual([[3]])
    expect(wrapper.get('button[aria-label="Четвёртый"]').attributes('aria-current')).toBe('true')
    expect(wrapper.get('button[aria-label="Следующий слайд"]').attributes('disabled')).toBeDefined()
    wrapper.unmount()
  })
})
