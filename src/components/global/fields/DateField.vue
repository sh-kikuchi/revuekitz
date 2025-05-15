<script setup lang="ts">
import { computed, ref, watch } from 'vue'

// Props
const props = defineProps({
  id: String,
  class: String,
  name: String,
  style: [String, Object],
  styleReset: Boolean,
  modelValue: {
    type: String,
    default: ''
  },
  type: {
    type: String,
    default: 'date'
  },
  minlength: [String, Number],
  maxlength: [String, Number],
  isDisabled: Boolean,
  isReadonly: Boolean
})

// Binding class
const bindingClass = computed(() => {
  return props.styleReset ? props.class : `revuekitz-date-field ${props.class}`
})

// Emit event
const emit = defineEmits(['update:modelValue'])
const internalValue = ref(props.modelValue)

const updateValue = (event: Event) => {
  internalValue.value = (event.target as HTMLInputElement).value
  emit('update:modelValue', internalValue.value)
}

// Watch for prop changes
watch(
  () => props.modelValue,
  (newValue) => {
    internalValue.value = newValue
  }
)
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
    :value="internalValue"
    @input="updateValue"
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
