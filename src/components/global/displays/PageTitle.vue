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
  },
  styleReset: {
    type: Boolean,
    default: false
  }
})
//binding classes
const bindingClass = computed(() => {
  if (props.styleReset == true) {
    return props.class
  } else {
    return `revuekitz-title ${props.class} `
  }
})
</script>
<template>
  <h1 :id="props.id" :class="bindingClass" :style="props.style"><slot></slot></h1>
</template>
<style scoped>
.revuekitz-title {
  margin: 5px;
  text-align: center;
  font-size: 35px;
}
</style>
