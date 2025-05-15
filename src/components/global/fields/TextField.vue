<script setup lang="ts">
import { computed } from 'vue'

// props
const props = defineProps({
  modelValue: {
    type: String,
    default: ''
  },
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
    default: 'text',
    validator: (value: string) => {
      return ['text', 'password'].includes(value)
    }
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

// computed class binding
const bindingClass = computed(() => {
  return props.styleReset ? props.class : `revuekitz-text-field ${props.class}`
})

// emit
const emit = defineEmits(['update:modelValue'])
const updateValue = (event: Event) => {
  emit('update:modelValue', (event.target as HTMLInputElement).value)
}
</script>

<template>
  <input
    :type="props.type"
    :id="props.id"
    :class="bindingClass"
    :style="props.style"
    :name="props.name"
    :value="props.modelValue"
    :minlength="props.minlength"
    :maxlength="props.maxlength"
    :readonly="props.isReadonly"
    :disabled="props.isDisabled"
    @input="updateValue"
  />
</template>

<style scoped>
.revuekitz-text-field {
  border-top: 0;
  border-left: 0;
  border-right: 0;
  border-bottom: 1px solid grey;
  background-color: whitesmoke;
  padding: 5px;
}
input.revuekitz-text-field[readonly],
input.revuekitz-text-field[disabled] {
  color: #417bbc;
  background-color: #e2e8e7;
  cursor: not-allowed;
}
</style>
