import type { Component } from 'vue'

const modules = import.meta.glob<{ default: Component }>('~/shared/svg/*.svg', { eager: true })

export const svgIcons: Record<string, Component> = Object.fromEntries(
  Object.entries(modules).map(([path, mod]) => [path.replace(/^.*\/|\.svg$/g, ''), mod.default]),
)
