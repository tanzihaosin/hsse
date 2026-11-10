<script setup lang="ts">
import type { AdvantagesBlockProps } from '../model/AdvantagesBlock.types'

defineProps<AdvantagesBlockProps>()
</script>

<template>
  <section v-if="items.length" class="container" aria-label="Преимущества обучения">
    <UiHeading v-if="title" class="mb-10">{{ title }}</UiHeading>
    <div class="hidden grid-cols-3 gap-6 lg:grid">
      <UiInfoCard v-for="item in items" :key="item.title" :title="item.title">
        <UiText>{{ item.description }}</UiText>
      </UiInfoCard>
    </div>

    <div class="lg:hidden">
      <UiSwiper :slide-labels="items.map((item, index) => `Преимущество ${index + 1}: ${item.title}`)">
        <swiper-slide v-for="item in items" :key="item.title" class="h-auto">
          <UiInfoCard :title="item.title">
            <UiText>{{ item.description }}</UiText>
          </UiInfoCard>
        </swiper-slide>
      </UiSwiper>
    </div>
  </section>
</template>
