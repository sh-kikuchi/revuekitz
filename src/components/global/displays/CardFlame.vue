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
  name: {
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
  },
  title: {
    type: String,
    default: ''
  },
  subtitle: {
    type: String,
    default: ''
  }
})

//binding classes
const bindingClass = computed(() => {
  if (props.styleReset == true) {
    return props.class
  } else {
    return `revuekitz-card ${props.class} `
  }
})
</script>
<template>
  <div :id="props.id" :class="bindingClass" :style="props.style">
    <div class="revuekitz-card-title">{{ props.title }}</div>
    <div class="revuekitz-card-subtitle">{{ props.subtitle }}</div>
    <div class="revuekitz-card-content">
      <slot></slot>
    </div>
  </div>
</template>
<style scoped>
.revuekitz-card-title {
  font-size: 22.5px;
}

.revuekitz-card-subtitle {
  font-size: 15px;
}

.revuekitz-card {
  max-width: 100%;
  max-height: 100%;
  padding: 10px;
  background-color: transparent;
  border-color: transparent;
  border-radius: 10px;
}
</style>
