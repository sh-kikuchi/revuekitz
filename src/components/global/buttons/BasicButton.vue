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
  },
  name: {
    type: String,
    default: ''
  },
  type: {
    type: String as () => 'button' | 'reset' | 'submit',
    default: 'button'
  },
  isDisabled: {
    type: Boolean,
    default: false
  }
})

//binding classes
const bindingClass = computed(() => {
  if (props.styleReset == true) {
    return props.class
  } else {
    return `revuekitz-basic-button ${props.class} `
  }
})
</script>
<template>
  <button
    :id="props.id"
    :class="bindingClass"
    :style="props.style"
    :name="props.name"
    :type="props.type"
    :disabled="props.isDisabled"
  >
    <slot></slot>
  </button>
</template>
<style>
.revuekitz-basic-button {
  display: inline-block;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
}
</style>
