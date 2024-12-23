<script setup lang="ts">
import { ref, computed } from 'vue'

//reactive data
const preview = ref()

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
    return `revuekitz-file-field ${props.class} `
  }
})

//emit
const emit = defineEmits(['update:val'])
const getFileData = () => {
  if (preview.value && preview.value.files && preview.value.files.length > 0) {
    emit('update:val', preview.value.files[0])
  } else {
    // Handle the case where no file is selected or `preview` is not properly defined
    console.warn('No file selected or `preview` is not properly defined.')
  }
}
</script>
<template>
  <label :class="bindingClass" :style="props.style">
    <input
      type="file"
      :id="props.id"
      :name="props.name"
      :disabled="props.isDisabled"
      :readonly="props.isReadonly"
      ref="preview"
      @change="getFileData"
    />
    <slot></slot>
  </label>
</template>
<style scoped>
.revuekitz-file-field {
  padding: 10px 40px;
  color: #ffffff;
  background-color: #384878;
  cursor: pointer;
}

.revuekitz-file-field > input[type='file'] {
  display: none;
}
</style>
