<script setup lang="ts">
import { TheHeaderData } from '../model/TheHeader.data'
import TheHeaderNav from "./TheHeaderNav.vue"
import MobileMenu from './MobileMenu.vue'
import { useElementBounding, useWindowSize } from '@vueuse/core'

const menuOpen = defineModel<boolean>({ default: false })
const header = ref<HTMLElement | null>(null)
const menuButton = ref<HTMLElement | null>(null)
const { bottom: headerBottom } = useElementBounding(header)
const { top: buttonTop, left: buttonLeft, width: buttonWidth, height: buttonHeight, update: updateButtonPosition } = useElementBounding(menuButton)
const { width: windowWidth, height: windowHeight } = useWindowSize()

watch([windowWidth, windowHeight, menuOpen], async () => {
  await nextTick()
  updateButtonPosition()
})
</script>

<template>
  <header ref="header" class="container flex items-center justify-between gap-8 border-b pb-5 lg:border-y border-stroke lg:py-3" :class="{ 'sticky top-0 z-50 bg-primary': menuOpen }">
    <div class="flex items-center gap-6 sm:gap-10">
      <UiAction v-for="logo in TheHeaderData.logos" :key="logo.link" :to="logo.link" :aria-label="logo.ariaLabel" class="w-23 sm:w-27" variant="custom" size="custom">
        <UiSvg :name="logo.image" :aria-label="logo.ariaLabel" />
      </UiAction>
    </div>
    <div class="hidden items-center gap-6 xl:flex">
      <TheHeaderNav :nav="TheHeaderData.nav"/>
      <UiAction :to="TheHeaderData.cta.link" class="h-7 px-2 text-xs rounded-sm border border-foreground hover:text-primary hover:bg-foreground" variant="custom" size="custom">{{ TheHeaderData.cta.text }}</UiAction>
    </div>
    <button ref="menuButton" type="button" class="-m-2 p-2 xl:hidden" :class="{ invisible: menuOpen }" :aria-label="menuOpen ? 'Закрыть меню' : 'Открыть меню'" aria-controls="mobile-menu" :aria-expanded="menuOpen" @click="menuOpen = !menuOpen">
      <UiSvg :name="menuOpen ? 'close' : 'burger'" class="size-7" />
    </button>
  </header>
  <MobileMenu v-model="menuOpen" :config="TheHeaderData" :top="headerBottom" :close-position="{ top: buttonTop, left: buttonLeft, width: buttonWidth, height: buttonHeight }" />
</template>

