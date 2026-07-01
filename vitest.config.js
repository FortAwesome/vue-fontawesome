import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    environment: 'jsdom',
    environmentOptions: {
      jsdom: {
        customExportConditions: ['node', 'node-addons']
      }
    },
    globals: true,
    typecheck: {
      tsconfig: './types-test/tsconfig.json',
      include: ['types-test/**/*.test-d.ts']
    }
  }
})
