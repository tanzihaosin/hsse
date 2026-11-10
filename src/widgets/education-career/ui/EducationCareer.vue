<script setup lang="ts">
import type { EducationCareerProps } from '../model/EducationCareer.types'
import EducationCareerCard from './EducationCareerCard.vue'

defineProps<EducationCareerProps>()

const activeIndex = ref(0)
const swiperOptions = { spaceBetween: 20, slidesPerView: 1.05, breakpoints: { 768: { slidesPerView: 1.15 } } }
</script>

<template>
  <section v-if="stages.length" class="overflow-hidden">
    <div class="container">
      <div class="mb-10 flex flex-wrap items-center gap-10">
        <UiHeading>{{ title }}</UiHeading>
        <NuxtPicture v-if="logo" :src="logo" :alt="logoAlt || ''" :img-attrs="{ class: 'h-11 max-w-36 object-contain' }" />
      </div>
      <div class="education-career-swiper">
        <UiSwiper
          :options="swiperOptions" :slide-labels="stages.map(stage => stage.title)"
          @change="activeIndex = $event"
        >
          <swiper-slide v-for="(stage, index) in stages" :key="stage.title" class="h-auto">
            <EducationCareerCard :stage="stage" :active="index === activeIndex"/>
          </swiper-slide>
        </UiSwiper>
      </div>
      <UiAction v-if="action" :to="action.to" post-icon="arrow-up" class="mt-12">{{ action.label }}</UiAction>
    </div>
  </section>
</template>

<style>
.education-career-swiper swiper-container::part(container) {
  overflow: visible;
}
</style>
