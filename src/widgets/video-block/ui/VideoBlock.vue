<script setup lang="ts">
import type { VideoBlockProps } from '../model/VideoBlock.types'

const props = defineProps<VideoBlockProps>()
const baseURL = useRuntimeConfig().app.baseURL
const publicUrl = (url: string) => url.startsWith('/') && !url.startsWith('//')
  ? `${baseURL}${url.slice(1)}`
  : url

const started = ref(false)
const video = ref<HTMLVideoElement | null>(null)

async function startVideo() {
  started.value = true
  await nextTick()
  await video.value?.play().catch(() => {})
}
</script>

<template>
  <section class="container" :aria-label="label">
    <UiHeading v-if="title" as="h2" class="mb-6">{{ title }}</UiHeading>
    <div class="relative flex">
      <UiAction
        :aria-label="label"
        variant="custom"
        size="custom"
        class="w-full overflow-hidden rounded-xl border border-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground"
        :class="{ invisible: started }"
        @click="startVideo"
      >
        <NuxtPicture v-if="mobilePoster" :src="mobilePoster" alt="" loading="lazy" class="block w-full sm:hidden" :img-attrs="{ class: 'w-full' }" />
        <NuxtPicture :src="poster" alt="" loading="lazy" class="w-full" :class="mobilePoster ? 'hidden sm:block' : 'block'" :img-attrs="{ class: 'w-full' }" />
      </UiAction>
      <video
        v-if="started"
        ref="video"
        :src="publicUrl(props.src)"
        :poster="publicUrl(props.poster)"
        :aria-label="label"
        class="absolute inset-0 size-full rounded-xl bg-black object-contain"
        controls
        playsinline
        preload="metadata"
      />
    </div>
  </section>
</template>
