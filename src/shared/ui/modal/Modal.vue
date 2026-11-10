<script setup lang="ts">
import { onKeyStroke, useScrollLock } from '@vueuse/core'
import type { ModalProps } from './Modal.types'
import { MODAL_BASE_CLASSES, MODAL_OVERLAY_CLASSES, MODAL_SIZE_CLASSES } from './Modal.constants'

defineOptions({ inheritAttrs: false })

const props = withDefaults(defineProps<ModalProps>(), {
  size: 'md',
  closable: true,
})

const open = defineModel<boolean>({ default: false })

const titleId = useId()
const dialogRef = ref<HTMLElement | null>(null)
let previousFocus: HTMLElement | null = null

const close = () => {
  if (props.closable) open.value = false
}

onKeyStroke('Escape', () => {
  if (open.value) close()
})

const isLocked = useScrollLock(import.meta.client ? document.documentElement : null)
watch(open, (value) => (isLocked.value = value), { immediate: true })
onBeforeUnmount(() => {
  isLocked.value = false
  previousFocus?.focus()
})

watch(open, async (value) => {
  if (!import.meta.client) return
  if (value) {
    previousFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null
    await nextTick()
    if (open.value) dialogRef.value?.focus()
  } else {
    previousFocus?.focus()
    previousFocus = null
  }
}, { immediate: true })

function trapFocus(event: KeyboardEvent) {
  if (event.key !== 'Tab' || !dialogRef.value) return
  const focusable = Array.from(dialogRef.value.querySelectorAll<HTMLElement>(
    'a[href], button:not(:disabled), input:not(:disabled), select:not(:disabled), textarea:not(:disabled), [tabindex]:not([tabindex="-1"])',
  )).filter(element => element.getClientRects().length > 0 && !element.closest('[inert]'))
  const first = focusable[0]
  const last = focusable[focusable.length - 1]
  if (!first || !last) {
    event.preventDefault()
    dialogRef.value.focus()
  } else if (event.shiftKey && (document.activeElement === first || document.activeElement === dialogRef.value)) {
    event.preventDefault()
    last.focus()
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault()
    first.focus()
  }
}
</script>

<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0"
      leave-active-class="transition duration-150 ease-in"
      leave-to-class="opacity-0"
    >
      <div
        v-if="open"
        :class="[MODAL_OVERLAY_CLASSES, size === 'full' ? 'p-0' : 'p-4']"
        data-testid="modal-overlay"
        @click.self="close"
      >
        <div
          ref="dialogRef"
          role="dialog"
          aria-modal="true"
          :aria-labelledby="title ? titleId : undefined"
          tabindex="-1"
          v-bind="$attrs"
          :class="[MODAL_BASE_CLASSES, MODAL_SIZE_CLASSES[size]]"
          @keydown="trapFocus"
        >
          <header
            v-if="title || closable"
            class="flex shrink-0 items-center justify-between gap-4 px-6 pt-6 pb-4"
          >
            <UiHeading v-if="title" :id="titleId" as="h2" variant="h3" uppercase>{{ title }}</UiHeading>
            <UiAction
              v-if="closable"
              variant="custom"
              size="custom"
              icon="close"
              icon-class="size-5"
              aria-label="Закрыть"
              class="-m-1 ml-auto size-8 shrink-0 rounded-md text-primary hover:text-primary/60"
              @click="close"
            />
          </header>

          <div class="min-h-0 flex-1 overflow-y-auto px-6 pb-6" :class="{ 'pt-6': !title && !closable }">
            <slot />
          </div>

          <footer v-if="$slots.footer" class="shrink-0 border-t border-primary/10 px-6 py-4">
            <slot name="footer" />
          </footer>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>
