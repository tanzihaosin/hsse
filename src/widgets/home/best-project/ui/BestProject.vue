<script setup lang="ts">
import type { BestProjectItem, BestProjectProps } from '../model/BestProject.types'
import BestProjectCard from './BestProjectCard.vue'

defineProps<BestProjectProps>()
const selectedProject = ref<BestProjectItem | null>(null)
const modalOpen = ref(false)
const swiperOptions = { spaceBetween: 20, slidesPerView: 1, breakpoints: { 768: { slidesPerView: 1.8 } } }

function openVideo(project: BestProjectItem) {
  selectedProject.value = project
  modalOpen.value = true
}
</script>

<template>
  <section v-if="projects.length" class="overflow-hidden">
    <div class="container">
      <UiHeading class="mb-10">{{ title }}</UiHeading>
      <div class="best-project-swiper relative md:pb-56">
        <UiSwiper :options="swiperOptions" :slide-labels="projects.map(project => project.title)">
          <swiper-slide v-for="(project, index) in projects" :key="project.title" class="h-auto">
            <BestProjectCard :project="project" :number="String(index + 1).padStart(2, '0')" @play="openVideo(project)" />
          </swiper-slide>
        </UiSwiper>
        <NuxtPicture src="/images/orbit-dots.webp" alt="" class="pointer-events-none absolute right-0 bottom-24 hidden w-full max-w-82 md:block" :img-attrs="{ class: 'h-auto w-full' }" />
      </div>
    </div>
    <UiModal v-model="modalOpen" :title="selectedProject?.title" size="lg">
      <iframe v-if="modalOpen && selectedProject" :src="selectedProject.video" :title="selectedProject.title" class="aspect-video w-full" allow="autoplay; fullscreen; picture-in-picture; encrypted-media" allowfullscreen />
    </UiModal>
  </section>
</template>

<style>
.best-project-swiper swiper-container::part(container) {
  overflow: visible;
}
</style>
