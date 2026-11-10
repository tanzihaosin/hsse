<script setup lang="ts">
import type { Swiper as SwiperInstance } from 'swiper/types'
import type { SwiperProps } from './Swiper.types'

const props = withDefaults(defineProps<SwiperProps>(), {
  options: () => ({}),
  navigation: true,
})

const emit = defineEmits<{
  change: [index: number]
}>()

const containerRef = ref(null)
const swiper = useSwiper(containerRef, props.options)
const activeIndex = ref(0)
const isBeginning = ref(true)
const isEnd = ref(false)
const activePage = ref(0)
const pageCount = ref(0)
const slidesPerGroup = ref(1)
const slidesPerGroupSkip = ref(0)
const visiblePages = computed(() => {
  const count = Math.min(pageCount.value, 5)
  const start = Math.max(0, Math.min(activePage.value - Math.floor(count / 2), pageCount.value - count))
  return Array.from({ length: count }, (_, index) => start + index)
})

function goTo(index: number) {
  if (swiper.instance.value?.params.loop) swiper.instance.value.slideToLoop(index)
  else swiper.to(index)
}

function pageSlideIndex(page: number) {
  const skipped = Math.min(page, slidesPerGroupSkip.value)
  return skipped + (page - skipped) * slidesPerGroup.value
}

function goToPage(page: number) {
  goTo(pageSlideIndex(page))
}

function updateState(event: Event) {
  const [instance] = (event as CustomEvent<[SwiperInstance]>).detail
  const indexChanged = activeIndex.value !== instance.realIndex
  activeIndex.value = instance.realIndex
  isBeginning.value = !instance.params.loop && instance.isBeginning
  isEnd.value = !instance.params.loop && instance.isEnd
  slidesPerGroup.value = instance.params.slidesPerGroup ?? 1
  slidesPerGroupSkip.value = instance.params.loop ? 0 : (instance.params.slidesPerGroupSkip ?? 0)
  pageCount.value = instance.params.loop
    ? Math.ceil(props.slideLabels.length / slidesPerGroup.value)
    : instance.snapGrid.length
  activePage.value = instance.params.loop
    ? Math.floor(instance.realIndex / slidesPerGroup.value)
    : instance.snapIndex
  if (indexChanged) emit('change', instance.realIndex)
}
</script>

<template>
  <ClientOnly>
    <slot name="before" :active-index="activeIndex" :go-to="goTo" />
    <swiper-container ref="containerRef" :init="false" @swiperinit="updateState" @swiperslidechange="updateState" @swipersnapindexchange="updateState" @swiperslidesupdated="updateState">
      <slot />
    </swiper-container>
    <slot
      name="controls"
      :active-index="activeIndex"
      :is-beginning="isBeginning"
      :is-end="isEnd"
      :previous="swiper.prev"
      :next="swiper.next"
      :go-to="goTo"
    >
      <div v-if="navigation && pageCount > 1" class="mt-9 flex items-center justify-center gap-7">
        <UiAction variant="custom" size="custom" aria-label="Предыдущий слайд" :disabled="isBeginning" class="disabled:border-0 disabled:bg-transparent disabled:text-foreground disabled:opacity-25" @click="swiper.prev()">
          <UiSvg name="arrow-prev" class="size-9" />
        </UiAction>
        <div class="flex items-center gap-4" aria-label="Выбор слайда">
          <UiAction
            v-for="page in pageCount"
            :key="page"
            variant="custom"
            size="custom"
            :aria-label="slideLabels[pageSlideIndex(page - 1)] || `Слайд ${pageSlideIndex(page - 1) + 1}`"
            :aria-current="activePage === page - 1 ? 'true' : undefined"
            :class="[activePage === page - 1 ? 'scale-125 bg-foreground' : 'bg-foreground/50', { 'hidden! md:inline-flex!': !visiblePages.includes(page - 1) }]"
            class="size-3 rounded-full"
            @click="goToPage(page - 1)"
          />
        </div>
        <UiAction variant="custom" size="custom" aria-label="Следующий слайд" :disabled="isEnd" class="disabled:border-0 disabled:bg-transparent disabled:text-foreground disabled:opacity-25" @click="swiper.next()">
          <UiSvg name="arrow-next" class="size-9" />
        </UiAction>
      </div>
    </slot>
  </ClientOnly>
</template>
