import { defineConfig } from '@playwright/test'

export default defineConfig({
  testDir: 'tests',
  outputDir: 'tests/test-results',
  use: {
    browserName: 'chromium',
  },
})
