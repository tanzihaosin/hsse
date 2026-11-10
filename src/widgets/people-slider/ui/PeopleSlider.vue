<script setup lang="ts">
import type { PeopleSliderProps } from '../model/PeopleSlider.types'
import { peopleGroups } from '../model/PeopleSlider.data'
import PersonCard from './PersonCard.vue'

const props = withDefaults(defineProps<PeopleSliderProps>(), {
  groups: () => peopleGroups,
})
const selectedGroup = ref(props.groups[0]?.id ?? '')
watch(() => props.groups.map(group => group.id), ids => {
  if (!ids.includes(selectedGroup.value)) selectedGroup.value = ids[0] ?? ''
})
const tabs = computed(() => props.groups.map(group => ({ value: group.id, label: group.label })))
const currentGroup = computed(() => props.groups.find(group => group.id === selectedGroup.value))
const swiperOptions = { spaceBetween: 20, slidesPerView: 1, roundLengths: true, breakpoints: { 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } } }

</script>

<template>
  <section v-if="groups.length" class="container">
    <UiHeading class="mb-10">{{ title }}</UiHeading>
    <ClientOnly>
      <UiTabs v-if="groups.length > 1" v-model="selectedGroup" :items="tabs" class="mb-4" />
    </ClientOnly>
    <UiSwiper v-if="currentGroup?.people.length" :key="currentGroup.id" :options="swiperOptions" :slide-labels="currentGroup.people.map(person => person.name)">
      <swiper-slide v-for="person in currentGroup.people" :key="person.name" class="h-auto">
        <PersonCard :person="person" />
      </swiper-slide>
      <template #fallback>
        <div class="space-y-8">
          <section v-for="group in groups" :key="group.id">
            <UiHeading as="h3" variant="h3" class="mb-4">{{ group.label }}</UiHeading>
            <ul class="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              <li v-for="person in group.people" :key="person.name"><PersonCard :person="person" /></li>
            </ul>
          </section>
        </div>
      </template>
    </UiSwiper>
  </section>
</template>
