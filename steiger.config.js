import { defineConfig } from 'steiger'
import fsd from '@feature-sliced/steiger-plugin'

export default defineConfig([
  ...fsd.configs.recommended,
  {
    // Project-specific widgets may be used by a single page.
    files: ['./src/widgets/**'],
    rules: { 'fsd/insignificant-slice': 'off' },
  },
  {
    // SVG files are static resources, imported individually by the icon registry.
    files: ['./src/shared/svg/**'],
    rules: { 'fsd/public-api': 'off' },
  },
])
