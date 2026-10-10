<script setup lang="ts">
import { ref, watch } from 'vue'
import FileField from './FileField.vue'

const dropAreaRef = ref<HTMLDivElement | null>(null)
const fileInputRef = ref<HTMLInputElement | null>(null)
const fileList = ref<File[]>([])

// v-model props
const props = defineProps<{
  modelValue: File[]
  style?: string | Record<string, any>
  accept?: string
  isDisabled?: boolean
  isReadonly?: boolean
}>()

// emit
const emit = defineEmits<{ (e: 'update:modelValue', files: File[]): void }>()

// watch
watch(
  () => props.modelValue,
  (val) => {
    fileList.value = val
  },
  { immediate: true }
)

watch(
  fileList,
  (val) => {
    emit('update:modelValue', val)
  },
  { immediate: true }
)

// drop
const handleDrop = (e: DragEvent) => {
  e.preventDefault()
  e.stopPropagation()
  dropAreaRef.value?.classList.remove('dragover')

  if (props.isDisabled || props.isReadonly) return

  let files = e.dataTransfer?.files ? Array.from(e.dataTransfer.files) : []

  // Apply accept check
  files = files.filter((file) => checkAccept(file, props.accept))

  fileList.value = files
  if (fileInputRef.value) fileInputRef.value.value = ''
}

// --- accept check helper ---
const checkAccept = (file: File, accept?: string) => {
  if (!accept) return true
  const acceptList = accept.split(',').map((a) => a.trim().toLowerCase())
  const fileExt = '.' + file.name.split('.').pop()?.toLowerCase()
  const fileType = file.type.toLowerCase()

  return acceptList.some((a) => {
    if (a.endsWith('/*')) {
      // MIME wildcard, e.g., image/*
      const prefix = a.split('/')[0]
      return fileType.startsWith(prefix + '/')
    } else if (a.startsWith('.')) {
      // extension check, e.g., .pdf
      return fileExt === a
    } else {
      // exact MIME type
      return fileType === a
    }
  })
}

const handleDragOver = (e: DragEvent) => {
  e.preventDefault()
  e.stopPropagation()
  if (props.isDisabled || props.isReadonly) return
  dropAreaRef.value?.classList.add('dragover')
}

const handleDragLeave = (e: DragEvent) => {
  e.preventDefault()
  e.stopPropagation()
  dropAreaRef.value?.classList.remove('dragover')
}
</script>

<template>
  <div class="revuekitz-file-drop" :style="props.style">
    <div
      class="revuekitz-file-drop-area"
      :class="{ 'is-disabled': props.isDisabled }"
      ref="dropAreaRef"
      @drop="handleDrop"
      @dragover="handleDragOver"
      @dragleave="handleDragLeave"
    >
      <p>Drag & drop your files here <br />or</p>
      <div class="revuekitz-file-field-wrap">
        <FileField
          class="revuekitz-file-field"
          v-model="fileList"
          :accept="props.accept"
          :isDisabled="props.isDisabled"
          :isReadonly="props.isReadonly"
          multiple
        >
          Files
        </FileField>
      </div>
    </div>
  </div>
</template>

<style scoped>
.revuekitz-file-drop {
  position: relative;
  padding: 70px 0 100px;
  text-align: center;
}

.revuekitz-file-drop-area {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 80%;
  border: 2px dashed #494949;
  background: rgba(22, 165, 191, 0);
  transition: all 0.25s cubic-bezier(0.21, 0.51, 0.51, 1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.revuekitz-file-drop-area.dragover {
  border: 2px solid lightgrey;
  background: lightgrey;
}

.revuekitz-file-drop-area.is-disabled {
  background-color: #e2e8e7;
  cursor: not-allowed;
}

.revuekitz-file-field-wrap {
  margin-top: 15px;
  position: relative;
  display: inline-block;
}

ul {
  margin-top: 20px;
  text-align: left;
  display: inline-block;
}
</style>
