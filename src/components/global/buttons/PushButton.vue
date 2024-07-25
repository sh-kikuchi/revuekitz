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
  type: {
    type: String as () => 'button' | 'reset' | 'submit',
    default: 'button'
  },
  style: {
    type: [String, Object],
    default: ''
  },
  styleReset: {
    type: Boolean,
    default: false
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
    return `revuekitz-push-button ${props.class}`
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
.revuekitz-push-button {
  display: inline-block;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0px 3px 0px var(--shadow-color, rgba(0, 0, 0, 0.3));
}

.revuekitz-push-button:hover {
  transform: translateY(2px);
  box-shadow: 0px 0px 0px var(--shadow-color, rgba(0, 0, 0));
}
</style>
