/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'

  const component: DefineComponent<{}, {}, any>

  export default component
}

// @jamescoyle/vue-icon ships its types as svg-icon.d.vue.ts, which TypeScript can't resolve
declare module '@jamescoyle/vue-icon' {
  import type { DefineComponent } from 'vue'

  const component: DefineComponent<{}, {}, any>

  export default component
}
