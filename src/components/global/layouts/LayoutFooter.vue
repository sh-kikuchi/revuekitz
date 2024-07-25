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
  return `revuekitz-footer ${props.class} `
})
</script>
<template>
  <footer :id="props.id" :class="bindingClass" :style="props.style">
    <slot></slot>
  </footer>
</template>
<style>
.revuekitz-footer {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 40px;
  color: white;
  background-color: rgb(131, 130, 133);
  bottom: 0;
}
</style>
