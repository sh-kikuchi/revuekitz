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
    return `revuekitz-chip ${props.class} `
  }
})
</script>
<template>
  <span :id="props.id" :class="bindingClass" :style="props.style">
    <div><slot></slot></div>
  </span>
</template>
<style scoped>
.revuekitz-chip {
  display: inline-flex;
  flex-direction: row;
  background-color: #e5e5e5;
  border: none;
  cursor: pointer;
  max-width: 100%;
  min-height: 36px;
  padding-right: 10px;
  padding-left: 10px;
  font-size: 14px;
  color: #333333;
  font-family: 'Open Sans', sans-serif;
  white-space: nowrap;
  align-items: center;
  border-radius: 15px;
  vertical-align: middle;
  text-decoration: none;
  justify-content: center;
}

.revuekitz-chip-content > div {
  cursor: inherit;
  display: flex;
  align-items: center;
  user-select: none;
  white-space: nowrap;
  padding-left: 12px;
  padding-right: 12px;
}

.revuekitz-chip :hover {
  color: #302f2f;
}
</style>
