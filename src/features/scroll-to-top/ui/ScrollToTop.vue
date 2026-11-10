<script setup lang="ts">
const visible = ref(false)
let observer: IntersectionObserver | null = null

const scrollToTop = () => {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  window.scrollTo({ top: 0, behavior: reducedMotion ? 'instant' : 'smooth' })
}

onMounted(() => {
  const footer = document.getElementById('footer')
  if (!footer) return

  if (!('IntersectionObserver' in window)) {
    visible.value = true
    return
  }

  observer = new IntersectionObserver(([entry]) => {
    visible.value = !!entry?.isIntersecting
  })
  observer.observe(footer)
})

onBeforeUnmount(() => {
  observer?.disconnect()
})
</script>

<template>
  <Transition
    enter-active-class="transition duration-200 motion-reduce:transition-none"
    leave-active-class="transition duration-200 motion-reduce:transition-none"
    enter-from-class="translate-y-2 opacity-0"
    leave-to-class="translate-y-2 opacity-0"
  >
    <UiAction
      v-if="visible"
      type="button"
      aria-label="Наверх"
      icon="arrow-up"
      icon-class="size-6 -rotate-45"
      variant="custom"
      size="custom"
      class="fixed right-8 bottom-8 z-40 size-10 rounded-full border border-foreground bg-primary text-foreground hover:bg-foreground hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground max-md:hidden!"
      @click="scrollToTop"
    />
  </Transition>
</template>
