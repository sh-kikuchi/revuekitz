<script setup>
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiAccount } from '@mdi/js'
import { computed } from 'vue'
const props = defineProps({
  id: {
    type: String,
    default: ''
  },
  class: {
    type: String,
    default: ''
  },
  style: {
    type: [String, Object],
    default: ''
  },
  path: {
    required: true,
    type: String,
    default: mdiAccount
  },
  size: {
    type: String,
    default: '64' //128 64 32 18
  }
})

// Siziing
const bindingSize = computed(() => {
  return `width: ${props.size}px; height: ${props.size}px; ${props.style}`
})
</script>

<template>
  <svg-icon
    type="mdi"
    :id="props.id"
    :class="props.class"
    :style="bindingSize"
    :path="props.path"
  ></svg-icon>
</template>

<style></style>
