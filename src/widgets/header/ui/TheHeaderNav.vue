<script setup lang="ts">
import { onClickOutside, onKeyStroke } from '@vueuse/core'
import type { TheHeaderProps } from '../model/TheHeader.types'
import HeaderProgramLink from './HeaderProgramLink.vue'

defineProps<Pick<TheHeaderProps, 'nav'>>()

const navElement = ref<HTMLElement | null>(null)
const openMenu = ref<string | null>(null)
const menuId = useId()
let trigger: HTMLElement | null = null

function toggleMenu(name: string, event: MouseEvent) {
  trigger = event.currentTarget instanceof HTMLElement ? event.currentTarget : null
  openMenu.value = openMenu.value === name ? null : name
}

onClickOutside(navElement, () => { openMenu.value = null })

onKeyStroke('Escape', () => {
  if (!openMenu.value) return
  openMenu.value = null
  trigger?.focus()
})
</script>

<template>
  <nav ref="navElement">
    <ul class="flex items-center gap-6">
      <li v-for="(item, index) in nav" :key="item.text" class="relative leading-none">
        <template v-if="item.isDropdown && item.dropdownMenu?.length">
          <UiAction
            variant="link"
            size="custom"
            class="gap-1 text-xs"
            :aria-expanded="openMenu === item.text"
            :aria-controls="`${menuId}-${index}`"
            @click="toggleMenu(item.text, $event)"
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
            :id="`${menuId}-${index}`"
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

