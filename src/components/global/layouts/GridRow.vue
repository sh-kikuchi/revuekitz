<script setup>
import { defineProps, computed } from 'vue'
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
  }
})

//binding classes
const bindingClass = computed(() => {
  return `revuekitz-grid ${props.class}`
})
</script>
<template>
  <div :id="props.id" :class="bindingClass" :style="props.style">
    <slot></slot>
  </div>
</template>
<style scoped>
.revuekitz-grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 10px;
}
</style>
