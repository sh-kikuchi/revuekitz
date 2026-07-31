declare module '@jamescoyle/vue-icon' {
  import { DefineComponent } from 'vue'

  const SvgIcon: DefineComponent<{
    type: string
    path: string
    size?: string | number
    rotate?: number
    flip?: string
  }>

  export default SvgIcon
}
