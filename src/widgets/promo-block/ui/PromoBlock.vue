<script setup lang="ts">
import type { PromoBlockProps } from '../model/PromoBlock.types'

const props = withDefaults(defineProps<PromoBlockProps>(), {
  headingAs: 'h2',
  headingVariant: 'h3',
  uppercase: false,
  imageAlt: '',
})

const baseURL = useRuntimeConfig().app.baseURL
const imageSrc = computed(() => {
  if (props.image?.startsWith('/') && !props.image.startsWith('//') && /\.svg(?:[?#]|$)/i.test(props.image)) {
    return `${baseURL.replace(/\/$/, '')}${props.image}`
  }
  return props.image
})
</script>

<template>
  <section class="container">
    <div class="flex flex-col gap-6 rounded-lg border-2 border-dashed border-foreground-muted px-5 py-8 md:flex-row md:items-center md:gap-10 md:px-16 md:py-12">
      <slot name="image">
        <NuxtPicture v-if="imageSrc" :src="imageSrc" :alt="imageAlt" :width="167" :height="170" loading="lazy" class="w-32 shrink-0 self-center md:w-42 md:self-auto" :img-attrs="{ class: 'h-auto w-full object-contain' }" />
      </slot>
      <div class="min-w-0 flex-1">
        <UiHeading :as="headingAs" :variant="headingVariant" :uppercase="uppercase" :class="[headingVariant === 'h3' ? 'font-semibold leading-7 tracking-[2px]' : '', headingClass]">{{ title }}</UiHeading>
        <UiText v-if="text" class="mt-6">{{ text }}</UiText>
        <ul v-if="description?.length" class="mt-6 list-disc space-y-1 pl-6">
          <li v-for="item in description" :key="item"><UiText as="span">{{ item }}</UiText></li>
        </ul>
        <div v-if="actions.length" class="mt-10 flex flex-col gap-5 md:flex-row md:flex-wrap md:gap-x-10">
          <UiAction v-for="action in actions" :key="`${action.to}-${action.label}`" :to="action.to" post-icon="arrow-up">{{ action.label }}</UiAction>
        </div>
      </div>
    </div>
  </section>
</template>
