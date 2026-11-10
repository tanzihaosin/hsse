<script setup lang="ts">
import { homePageData } from '../model/HomePage.data'
import { homeBlockComponents } from '../model/HomePage.blocks'
import { resolveContentBlocks } from '~/shared/lib/content-page'

const blocks = resolveContentBlocks(homePageData.blocks, homeBlockComponents)

useSeoMeta({ description: homePageData.meta?.description })
</script>

<template>
  <component
    :is="block.component"
    v-for="block in blocks"
    :key="block.id"
    v-bind="{ ...block.data, ...(block.anchor ? { id: block.anchor } : {}) }"
  />
</template>
