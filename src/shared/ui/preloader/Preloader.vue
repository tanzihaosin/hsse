<script setup lang="ts">
defineProps<{ visible: boolean }>()
</script>

<template>
  <div
    v-if="visible"
    class="site-preloader fixed inset-0 z-100 flex items-center justify-center bg-primary"
    role="status"
    aria-label="Загрузка"
  >
    <span class="size-12 animate-spin rounded-full border-2 border-foreground/20 border-t-foreground motion-reduce:animate-none" />
  </div>
</template>
