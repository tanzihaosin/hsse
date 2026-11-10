import { defineConfig, devices } from '@playwright/test'

export default defineConfig({
  testDir: './tests/e2e',
  fullyParallel: true,
  workers: 2,
  timeout: 60_000,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  use: {
    baseURL: process.env.E2E_BASE_URL || 'http://127.0.0.1:4173/hsse/',
    trace: 'retain-on-failure',
    ...devices['Desktop Chrome'],
    launchOptions: process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH
      ? { executablePath: process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH }
      : undefined,
  },
  webServer: process.env.E2E_BASE_URL ? undefined : {
    command: 'npx nuxt dev --host 127.0.0.1 --port 4173',
    url: 'http://127.0.0.1:4173/hsse/',
    reuseExistingServer: !process.env.CI,
    timeout: 120_000,
    env: { NUXT_APP_BASE_URL: '/hsse/', NUXT_IMAGE_PROVIDER: 'none' },
  },
})
