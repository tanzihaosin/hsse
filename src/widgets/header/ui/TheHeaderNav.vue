<script setup lang="ts">
import { onClickOutside, onKeyStroke } from '@vueuse/core'
import type { TheHeaderProps } from '../model/TheHeader.types'
import HeaderProgramLink from './HeaderProgramLink.vue'

defineProps<Pick<TheHeaderProps, 'nav'>>()

const navElement = ref<HTMLElement | null>(null)
const openMenu = ref<string | null>(null)

onClickOutside(navElement, () => { openMenu.value = null })

onKeyStroke('Escape', () => {
  if (!openMenu.value) return
  if (document.activeElement instanceof HTMLElement && navElement.value?.contains(document.activeElement)) {
    document.activeElement.blur()
  }
  openMenu.value = null
})
</script>

<template>
  <nav ref="navElement">
    <ul class="flex items-center gap-6">
      <li v-for="item in nav" :key="item.text" class="relative leading-none">
        <template v-if="item.isDropdown && item.dropdownMenu?.length">
          <UiAction
            variant="link"
            size="custom"
            class="gap-1 text-xs"
            @click="openMenu = openMenu === item.text ? null : item.text"
          >
            {{ item.text }}
            <UiSvg
              name="arrow-down"
              class="size-4 transition-transform"
              :class="{ 'rotate-180': openMenu === item.text }"
            />
          </UiAction>
          <div
            v-if="openMenu === item.text"
            class="absolute top-full left-0 z-40 mt-3 w-85 rounded-lg border border-stroke bg-primary p-2 shadow-[0_25px_50px_-12px_rgb(0_0_0/25%)]"
          >
            <HeaderProgramLink
              v-for="entry in item.dropdownMenu"
              :key="entry.link"
              :entry="entry"
              @click="openMenu = null"
            />
          </div>
        </template>
        <UiAction v-else :to="item.link" variant="link" size="custom" class="text-xs" @click="openMenu = null">
          {{ item.text }}
        </UiAction>
      </li>
    </ul>
  </nav>
</template>

