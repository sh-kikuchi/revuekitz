<script setup lang="ts">
import { computed } from 'vue'

// props
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
  modelValue: {
    type: Number,
    default: 0
  },
  min: {
    type: [String, Number]
  },
  max: {
    type: [String, Number]
  },
  isDisabled: {
    type: Boolean,
    default: false
  },
  isReadonly: {
    type: Boolean,
    default: false
  }
})

//binding classes
const bindingClass = computed(() => {
  if (props.styleReset == true) {
    return props.class
  } else {
    return `revuekitz-number-field ${props.class} `
  }
})

//emit
const emit = defineEmits(['update:modelValue'])
const updateValue = (event: Event) => {
  const targetValue = (event.target as HTMLInputElement).value
  emit('update:modelValue', targetValue)
}
</script>
<template>
  <input
    type="number"
    :id="id"
    :class="bindingClass"
    :style="props.style"
    :name="props.name"
    :value="props.modelValue"
    :min="props.min"
    :max="props.max"
    :readonly="props.isReadonly"
    :disabled="props.isDisabled"
    @change="updateValue"
  />
</template>
<style scoped>
.revuekitz-number-field {
  border-top: 0;
  border-left: 0;
  border-right: 0;
  border-bottom: 1px solid grey;
  background-color: whitesmoke;
  padding: 5px;
}
input.revuekitz-number-field[readonly],
input.revuekitz-number-field[disabled] {
  color: #417bbc;
  background-color: #e2e8e7;
  cursor: not-allowed;
}
/* Chrome, Safari, Edge */
.revuekitz-number-field::-webkit-outer-spin-button,
.revuekitz-number-field::-webkit-inner-spin-button {
  margin: 0;
  -webkit-appearance: none;
}
/* Firefox
input[type='number'] {
  -moz-appearance: textfield;
} */
</style>
