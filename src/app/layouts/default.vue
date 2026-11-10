<script setup lang="ts">
import { TheHeader } from "~/widgets/header";
import { TheFooter } from '~/widgets/footer'
import { ScrollToTop } from '~/features/scroll-to-top'
import { Preloader } from '~/shared/ui/preloader'

const appReady = ref(false)
const menuOpen = ref(false)
const minimumTimeElapsed = ref(false)
const { start } = useTimeoutFn(() => {
  minimumTimeElapsed.value = true
}, 500, { immediate: false })

const loading = computed(() => !appReady.value || !minimumTimeElapsed.value)

onMounted(() => {
  appReady.value = true
  start()
})

useHead({
  noscript: [{ innerHTML: '<style>.site-preloader{display:none!important}</style>' }],
})
</script>

<template>
  <div class="flex flex-col pt-5">
    <Preloader :visible="loading" />
    <div :inert="(appReady && loading) || menuOpen || undefined" :aria-busy="loading">
      <TheHeader v-model="menuOpen" />
      <main class="flex flex-col space-y-15 lg:space-y-35 mt-16">
        <slot />
      </main>
      <TheFooter />
      <ScrollToTop />
    </div>
  </div>
</template>
