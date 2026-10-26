import { defineConfig, lazyPlugins } from 'vite-plus'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import dts from 'vite-plugin-dts'

export default defineConfig({
  lint: {
    plugins: ['eslint', 'typescript', 'unicorn', 'oxc', 'vue'],
    jsPlugins: [{ name: 'vite-plus', specifier: 'vite-plus/oxlint-plugin' }],
    rules: { 'vite-plus/prefer-vite-plus-imports': 'error' },
    // typeCheck is off: it cannot resolve .vue imports. Use vue-tsc for type checking.
    options: { typeAware: true, typeCheck: false }
  },
  test: {
    // Vitest v4 compatibility: preserve mock call history.
    // Remove after tests no longer rely on calls from setup or earlier tests.
    // https://viteplus.dev/guide/vitest-v5#remove-unneeded-compatibility-settings
    // https://vitest.dev/guide/migration/#clearmocks-is-enabled-by-default
    clearMocks: false,
    environment: 'jsdom',
    globals: true,
    include: ['src/**/*.spec.ts', 'src/**/*.test.ts'],
    setupFiles: ['./src/components/__tests__/setup.ts'],
    alias: {
      '@': '/src'
    }
  },
  fmt: {
    semi: false,
    tabWidth: 2,
    singleQuote: true,
    printWidth: 100,
    trailingComma: 'none',
    sortPackageJson: false,
    ignorePatterns: []
  },
  plugins: lazyPlugins(() => [
    vue(),
    dts({
      outDirs: 'dist',
      insertTypesEntry: true
    })
  ]),
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'revuekitz',
      fileName: (format) => `revuekitz.${format}.js`
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
})
