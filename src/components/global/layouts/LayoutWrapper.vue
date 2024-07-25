<script setup lang="ts">
const props = defineProps({
  id: {
    type: String,
    default: ''
  },
  class: {
    type: String,
    default: ''
  },
  maxWidth: {
    type: String,
    default: '1024px'
  }
})
</script>

<template>
  <div class="wrapper" :style="{ maxWidth: props.maxWidth }">
    <slot></slot>
  </div>
</template>

<style scoped>
.wrapper {
  padding: 5px;
  margin: 0 auto;
  background-color: transparent;
}
</style>
