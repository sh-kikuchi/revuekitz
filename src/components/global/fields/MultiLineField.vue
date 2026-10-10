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
  isRequired: {
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
  },
  modelValue: {
    type: String,
    default: ''
  },
  resize: {
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

const emit = defineEmits(['update:modelValue'])

const updateValue = (event: Event) => {
  const targetValue = (event.target as HTMLInputElement).value
  emit('update:modelValue', targetValue)
}
</script>
<template>
  <div class="revuekitz-multi-line-field-wrapper">
    <textarea
      :id="props.id"
      :class="bindingClass"
      :name="props.name"
      :style="[props.style, props.resize ? { resize: props.resize } : {}]"
      :value="props.modelValue"
      :placeholder="props.placeholder"
      :disabled="props.isDisabled"
      :readonly="props.isReadonly"
      :required="props.isRequired"
      :maxlength="props.maxlength"
      :minlength="props.minlength"
      :rows="props.rows"
      :cols="props.cols"
      @input="updateValue"
    ></textarea>
    <div
      v-if="props.maxlength"
      class="revuekitz-multi-line-field-counter"
      :class="{
        'is-under-limit': props.minlength > 0 && props.modelValue.length < props.minlength,
        'is-over-limit': props.modelValue.length >= props.maxlength
      }"
    >
      {{ props.modelValue.length }} / {{ props.maxlength }}
    </div>
  </div>
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
.revuekitz-multi-line-field-wrapper {
  font-size: 10.5px;
  display: inline-block;
}
.revuekitz-multi-line-field-counter {
  text-align: right;
}
.revuekitz-multi-line-field-counter.is-under-limit {
  color: blue;
}
.revuekitz-multi-line-field-counter.is-over-limit {
  color: red;
}
</style>
