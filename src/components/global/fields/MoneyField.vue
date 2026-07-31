<script setup lang="ts">
import { computed, ref } from 'vue'

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
  name: {
    type: String,
    default: ''
  },
  modelValue: {
    type: [String, Number],
    default: ''
  },
  min: {
    type: [String, Number],
    default: ''
  },
  max: {
    type: [String, Number],
    default: ''
  },
  isDisabled: {
    type: Boolean,
    default: false
  },
  isReadonly: {
    type: Boolean,
    default: false
  },
  styleReset: {
    type: Boolean,
    default: false
  }
})

// binding classes
const bindingClass = computed(() => {
  if (props.styleReset) {
    return props.class
  } else {
    return `revuekitz-money-field ${props.class} `
  }
})

// emit
const emit = defineEmits(['update:modelValue'])
const errorMessage = ref('')

const updateValue = (event: Event) => {
  const target = event.target as HTMLInputElement
  let value = target.value

  value = formatNumberToMoney(value)

  const numValue = Number(value.replace(/,/g, ''))

  const min = props.min !== '' ? Number(props.min) : NaN
  const max = props.max !== '' ? Number(props.max) : NaN

  if (!isNaN(min) && numValue < min) {
    errorMessage.value = `Value should be greater than or equal to ${min}`
    value = ''
  } else if (!isNaN(max) && numValue > max) {
    errorMessage.value = `Value should be less than or equal to ${max}`
    value = ''
  } else {
    errorMessage.value = ''
  }

  emit('update:modelValue', value)
}

// methods
const formatNumberToMoney = (targetValue: string | number) => {
  const value = String(targetValue).replace(/,/g, '')

  if (value === '') {
    return ''
  }

  const numberValue = Number(value)

  if (Number.isNaN(numberValue)) {
    return ''
  }

  return numberValue.toLocaleString()
}
</script>

<template>
  <div>
    <input
      type="text"
      :id="props.id"
      :class="bindingClass"
      :style="props.style"
      :name="props.name"
      :value="formatNumberToMoney(props.modelValue)"
      :readonly="props.isReadonly"
      :disabled="props.isDisabled"
      @change="updateValue"
      required="true"
    />
    <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
  </div>
</template>

<style scoped>
.revuekitz-money-field {
  border-top: 0;
  border-left: 0;
  border-right: 0;
  border-bottom: 1px solid grey;
  background-color: whitesmoke;
  padding: 5px;
}
input.revuekitz-money-field[readonly],
input.revuekitz-money-field[disabled] {
  color: #417bbc;
  background-color: #e2e8e7;
  cursor: not-allowed;
}
/* Chrome, Safari, Edge */
.revuekitz-money-field::-webkit-outer-spin-button,
.revuekitz-money-field::-webkit-inner-spin-button {
  margin: 0;
  -webkit-appearance: none;
}
/* Firefox */
/* input.revuekitz-money-field[type='number'] {
  -moz-appearance: none;
} */
.error-message {
  color: red;
  font-size: 0.875rem;
  margin-top: 0.5rem;
}
</style>
