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
  href: {
    type: String,
    default: ''
  },
  isDisabled: {
    type: Boolean,
    default: false
  },
  fontColor: {
    type: String,
    default: 'black'
  }
})

//binding classes
const bindingClass = computed(() => {
  if (props.styleReset == true) {
    return props.class
  } else {
    return `revuekitz-button revuekitz revuekitz-a ${props.class} `
  }
})
</script>

<template>
  <button
    :id="props.id"
    :class="bindingClass"
    :style="props.style"
    :name="props.name"
    :disabled="props.isDisabled"
  >
    <a :href="props.href" :style="{ color: props.fontColor }" target="_blank">
      <slot></slot>
    </a>
  </button>
</template>

<style>
.revuekitz-a {
  color: inherit;
  text-decoration: none;
}
.revuekitz-button {
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

.revuekitz-button:hover {
  transform: translateY(2px);
  box-shadow: 0px 0px 0px var(--shadow-color, rgba(0, 0, 0));
}
</style>
