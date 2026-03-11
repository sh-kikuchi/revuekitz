import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  test: {
    environment: 'jsdom',
    globals: true,
    include: ['src/**/*.spec.ts', 'src/**/*.test.ts'],
    setupFiles: ['./src/components/__tests__/setup.ts'], // Correct path
    alias: {
      '@': '/src'
    }
  }
})
