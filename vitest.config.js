import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    environment: 'jsdom',
    environmentOptions: {
      jsdom: {
        customExportConditions: ['node', 'node-addons']
      }
    },
    globals: true
  }
})
