<script setup lang="ts">
import { computed } from 'vue'
//props
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
    type: String,
    default: ''
  },
  size: {
    type: String,
    default: '64' //128 64 32 18
  },
  alt: {
    type: String,
    default: ''
  }
})

// Siziing
const bindingSize = computed(() => {
  return `width: ${props.size}px; height: ${props.size}px;  border-radius: 50%; ${props.style}`
})
</script>

<template>
  <a href="#" class="revuekitz-img-icon" data-testid="revuekitz-img-icon">
    <div :style="bindingSize">
      <img :alt="props.alt" :src="props.path" :style="bindingSize" />
    </div>
  </a>
</template>
<style scoped></style>
