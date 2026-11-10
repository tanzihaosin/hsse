<script setup lang="ts">
import type { PartnersProps } from '../model/Partners.types'

withDefaults(defineProps<PartnersProps>(), {
  description: undefined,
})
</script>

<template>
  <section v-if="partners.length" class="container">
    <div class="grid gap-y-12 border-y border-stroke py-11 md:grid-cols-[minmax(0,375px)_minmax(0,1fr)] md:items-center md:gap-x-15">
      <div>
        <UiHeading>{{ title }}</UiHeading>
        <UiText v-if="description" class="mt-6">{{ description }}</UiText>
      </div>
      <ul class="grid min-w-0 items-center justify-items-start gap-x-[clamp(12px,9vw,40px)] gap-y-12 sm:gap-y-6" :class="partners.length === 2 ? 'grid-cols-1 sm:grid-cols-2' : partners.length === 4 && !partners.some(partner => partner.wide) ? 'grid-cols-2 lg:grid-cols-4' : 'grid-cols-2 lg:grid-cols-3'">
        <li
          v-for="partner in partners"
          :key="partner.name"
          class="flex min-w-0"
          :class="partner.wide && (partners.length === 2 ? 'sm:col-span-2' : 'col-span-2')"
        >
          <component :is="partner.href ? 'a' : 'span'" class="block w-full min-w-0" :href="partner.href" :target="partner.href ? '_blank' : undefined" :rel="partner.href ? 'noopener noreferrer' : undefined">
            <UiSvg v-if="partner.logo" :name="partner.logo" :decorative="false" :aria-label="partner.name" class="h-auto max-w-full text-white" :style="{ width: `${partner.width}px` }" />
            <NuxtPicture v-else-if="partner.image" :src="partner.image.src" :alt="partner.name" :width="partner.width" :height="partner.image.height" loading="lazy" class="block max-w-full" :style="{ width: `${partner.width}px` }" :img-attrs="{ class: 'h-auto max-w-full' }" />
          </component>
        </li>
      </ul>
    </div>
  </section>
</template>
