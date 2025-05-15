<script setup lang="ts">
import { ref, computed, useAttrs } from 'vue'
const attrs = useAttrs()
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
  min: {
    type: [String, Number],
    default: '0'
  },
  max: {
    type: [String, Number],
    default: '100'
  },
  step: {
    type: [String, Number],
    default: '10'
  },
  isDisabled: {
    type: Boolean,
    default: false
  },
  isReadonly: {
    type: Boolean,
    default: false
  },
  modelValue: {
    type: Number,
    default: 0
  }
})

const rangeValue = ref<number>(props.modelValue)

//binding classes
const bindingClass = computed(() => {
  if (props.styleReset == true) {
    return props.class
  } else {
    return `revuekitz-range-field ${props.class} `
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
    type="range"
    :id="props.id"
    :class="bindingClass"
    :name="props.name"
    :style="props.style"
    :min="props.min"
    :max="props.max"
    :step="props.step"
    :readonly="props.isReadonly"
    :disabled="props.isDisabled"
    v-model="rangeValue"
    @change="updateValue"
  />
</template>

<style scoped>
.revuekitz-range-field {
  -webkit-appearance: none;
  background: lightgrey;
  height: 24px;
  width: 240px;
  border-radius: 8px;
}
.revuekitz-range-field::-webkit-slider-thumb {
  -webkit-appearance: none;
  background: black;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.15);
}
.revuekitz-range-field::-moz-range-thumb {
  background: black;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.15);
  border: none;
}
</style>
