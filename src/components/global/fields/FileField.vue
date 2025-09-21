<script setup lang="ts">
import { ref, computed } from 'vue'

// reactive
const preview = ref<HTMLInputElement | null>(null)

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
  multiple: {
    type: Boolean,
    default: false
  },
  accept: {
    type: String,
    default: '' // ex: "image/*,.pdf,.docx"
  }
})

// binding classes
const bindingClass = computed(() => {
  return props.styleReset ? props.class : `revuekitz-file-field ${props.class}`
})

// emit
const emit = defineEmits<{ (e: 'update:modelValue', files: File[]): void }>()

// ファイル選択時
const getFileData = () => {
  if (preview.value && preview.value.files && preview.value.files.length > 0) {
    const files = Array.from(preview.value.files)
    emit('update:modelValue', files)
    preview.value = null
  } else {
    console.warn('No file selected.')
  }
}
</script>

<template>
  <label :class="bindingClass" :style="props.style">
    <input
      type="file"
      :id="props.id"
      :name="props.name"
      :style="props.style"
      :disabled="props.isDisabled"
      :readonly="props.isReadonly"
      :accept="props.accept"
      ref="preview"
      @change="getFileData"
      multiple
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
