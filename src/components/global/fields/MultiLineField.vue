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
  isDisabled: {
    type: Boolean,
    default: false
  },
  isReadonly: {
    type: Boolean,
    default: false
  },
  placeholder: {
    type: String,
    default: ''
  },
  maxlength: {
    type: Number,
    default: null
  },
  minlength: {
    type: Number,
    default: 0
  },
  rows: {
    type: Number,
    default: 5
  },
  cols: {
    type: Number,
    default: 30
  },
  text: {
    type: String,
    default: ''
  }
})

//binding classes
const bindingClass = computed(() => {
  if (props.styleReset == true) {
    return props.class
  } else {
    return `revuekitz-multi-line-field ${props.class} `
  }
})

const emit = defineEmits(['update:val'])

const updateValue = (event: Event) => {
  const targetValue = (event.target as HTMLInputElement).value
  emit('update:val', targetValue)
}
</script>
<template>
  <!-- eslint-disable-next-line vue/no-parsing-error -->
  <textarea
    :id="props.id"
    :class="bindingClass"
    :name="props.name"
    :style="props.style"
    :value="props.text"
    :disabled="props.isDisabled"
    :readonly="props.isReadonly"
    :maxlength="props.maxlength"
    :minlength="props.minlength"
    :rows="props.rows"
    :cols="props.cols"
    @input="updateValue"
  ></textarea>
</template>
<style scoped>
.revuekitz-multi-line-field {
  padding: 2px;
  background-color: whitesmoke;
}
textarea.revuekitz-multi-line-field[readonly],
textarea.revuekitz-multi-line-field[disabled] {
  color: #417bbc;
  background-color: #e2e8e7;
  cursor: not-allowed;
}
</style>
