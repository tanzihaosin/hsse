<script setup lang="ts">
import { useMediaQuery, useScrollLock, onKeyStroke } from '@vueuse/core'
import type { TheHeaderProps } from '../model/TheHeader.types'
import HeaderProgramLink from './HeaderProgramLink.vue'

const props = defineProps<{ config: TheHeaderProps, modelValue: boolean, top: number, closePosition?: { top: number, left: number, width: number, height: number } }>()
const emit = defineEmits<{ 'update:modelValue': [value: boolean] }>()
const panel = ref<HTMLElement | null>(null)
const isLocked = useScrollLock(import.meta.client ? document.documentElement : null)
const isDesktop = useMediaQuery('(min-width: 80rem)')
const route = useRoute()
let previousFocus: HTMLElement | null = null

const dropdowns = computed(() => props.config.nav.filter(item => item.isDropdown))
const links = computed(() => props.config.nav.filter(item => !item.isDropdown))
const close = () => emit('update:modelValue', false)

watch(() => props.modelValue, open => { isLocked.value = open })
watch(() => props.modelValue, async (open) => {
  if (open) {
    previousFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null
    await nextTick()
    if (props.modelValue) panel.value?.focus()
  } else {
    await nextTick()
    previousFocus?.focus()
    previousFocus = null
  }
})

function trapFocus(event: KeyboardEvent) {
  if (event.key !== 'Tab' || !panel.value) return
  const focusable = Array.from(panel.value.querySelectorAll<HTMLElement>(
    'a[href], button:not(:disabled), input:not(:disabled), select:not(:disabled), textarea:not(:disabled), [tabindex]:not([tabindex="-1"])',
  )).filter(element => element.getClientRects().length > 0 && !element.closest('[inert]'))
  const first = focusable[0]
  const last = focusable[focusable.length - 1]
  if (!first || !last) {
    event.preventDefault()
    panel.value.focus()
  } else if (event.shiftKey && (document.activeElement === first || document.activeElement === panel.value)) {
    event.preventDefault()
    last.focus()
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault()
    first.focus()
  }
}

watch(isDesktop, desktop => { if (desktop && props.modelValue) close() })
watch(() => route.fullPath, () => { if (props.modelValue) close() })
onUnmounted(() => { isLocked.value = false })
onKeyStroke('Escape', () => { if (props.modelValue) close() })

</script>

<template>
  <Teleport to="body">
    <Transition name="mobile-menu">
    <div v-if="modelValue" class="fixed inset-0 z-60 xl:hidden">
      <div class="absolute inset-x-0 bottom-0 bg-black/50" :style="{ top: `${Math.max(0, top)}px` }" aria-hidden="true" @click="close" />
      <div
        id="mobile-menu"
        ref="panel"
        class="absolute inset-0 z-50 outline-none"
        tabindex="-1"
        role="dialog"
        aria-modal="true"
        aria-label="Меню навигации"
        @keydown="trapFocus"
        @click.self="close"
      >
        <UiAction variant="custom" size="custom" icon="close" aria-label="Закрыть меню" class="absolute z-10" :style="closePosition ? { top: `${closePosition.top}px`, left: `${closePosition.left}px`, width: `${closePosition.width}px`, height: `${closePosition.height}px` } : { top: '1rem', right: '1rem', width: '2rem', height: '2rem' }" @click="close" />
        <div class="mobile-menu-panel bg-primary absolute right-0 bottom-0 flex w-full flex-col overflow-y-auto px-5 pb-8 sm:max-w-sm sm:border-l sm:border-stroke" :style="{ top: `${Math.max(0, top)}px` }">
        <nav aria-label="Основная навигация">
          <template v-for="dropdown in dropdowns" :key="dropdown.text">
            <p class="mt-8 text-[10px] tracking-wider text-foreground-muted uppercase">{{ dropdown.text }}</p>
            <ul class="mt-3 flex flex-col gap-3">
              <li v-for="entry in dropdown.dropdownMenu" :key="entry.link">
                <HeaderProgramLink :entry="entry" mobile @click="close" />
              </li>
            </ul>
          </template>
          <ul class="mt-8 flex flex-col gap-5 text-base text-white">
            <li v-for="link in links" :key="link.text">
              <UiAction :to="link.link" variant="link" size="custom" class="text-base" @click="close">{{ link.text }}</UiAction>
            </li>
          </ul>
        </nav>
        <UiAction :to="config.cta.link" variant="custom" size="custom" post-icon="arrow-up" icon-class="size-5 shrink-0" class="mt-10 inline-flex w-fit items-center gap-2 rounded-[40px] border border-foreground px-5 py-4 text-base leading-tight font-light text-foreground transition-colors hover:bg-foreground hover:text-primary max-md:w-full max-md:justify-center" @click="close">
          {{ config.cta.text }}
        </UiAction>
        </div>
      </div>
    </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: opacity 250ms ease;
}

.mobile-menu-enter-active .mobile-menu-panel,
.mobile-menu-leave-active .mobile-menu-panel {
  transition: transform 250ms ease;
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
}

.mobile-menu-enter-from .mobile-menu-panel,
.mobile-menu-leave-to .mobile-menu-panel {
  transform: translateX(100%);
}

@media (prefers-reduced-motion: reduce) {
  .mobile-menu-enter-active,
  .mobile-menu-leave-active,
  .mobile-menu-enter-active .mobile-menu-panel,
  .mobile-menu-leave-active .mobile-menu-panel {
    transition-duration: 0ms;
  }
}
</style>
