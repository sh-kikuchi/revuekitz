<script setup lang="ts">
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
  }
})

//binding classes
const bindingClass = computed(() => {
  return `revuekitz-header ${props.class} `
})
</script>
<template>
  <header :id="props.id" :class="bindingClass" :style="props.style">
    <slot></slot>
  </header>
</template>
<style scoped>
.revuekitz-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 10px;
  background-color: rgb(225, 231, 238);
}
</style>
