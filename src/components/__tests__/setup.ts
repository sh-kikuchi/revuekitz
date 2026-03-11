import { expect, vi } from 'vitest'
import { config } from '@vue/test-utils'

// Global Vue Test Utils Configuration
// Define global mocks here, for example i18n or router properties.
config.global.mocks = {
  $t: (msg: string) => msg,
  $router: { push: vi.fn() },
  $route: { path: '/' }
}

// Suppress console errors and warnings during tests
// This keeps the test output clean. Remove if you want to see all logs.
vi.spyOn(console, 'error').mockImplementation(() => {})
vi.spyOn(console, 'warn').mockImplementation(() => {})

// Ensure JSDOM environment is properly initialized
// Vitest with environment "jsdom" should provide a document object.
if (!globalThis.document) {
  throw new Error('JSDOM environment not initialized. Check your Vitest config.')
}

// Make expect globally available
// This ensures expect is recognized in all test files automatically.
globalThis.expect = expect
