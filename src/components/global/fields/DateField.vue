<script setup lang="ts">
import { computed } from 'vue'

//props
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
  type: {
    type: String,
    default: 'date'
  },
  minlength: {
    type: [String, Number]
  },
  maxlength: {
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
    return `revuekitz-date-field ${props.class} `
  }
})

//emit
const emit = defineEmits(['update:dateValue'])
const updateValue = (event: Event) => {
  const targetValue = (event.target as HTMLInputElement).value
  emit('update:dateValue', targetValue)
}
</script>

<template>
  <input
    :type="props.type"
    :id="props.id"
    :class="bindingClass"
    :style="props.style"
    :name="props.name"
    :min="props.minlength"
    :max="props.maxlength"
    :readonly="props.isReadonly"
    :disabled="props.isDisabled"
    @change="updateValue"
  />
</template>

<style scoped>
.revuekitz-date-field {
  border-top: 0;
  border-left: 0;
  border-right: 0;
  border-bottom: 1px solid grey;
  background-color: whitesmoke;
  padding: 5px;
}

input.revuekitz-date-field[readonly],
input.revuekitz-date-field[disabled] {
  color: #417bbc;
  background-color: #e2e8e7;
  cursor: not-allowed;
}
</style>
