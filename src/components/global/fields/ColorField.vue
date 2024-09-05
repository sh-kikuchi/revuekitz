<script setup lang="ts">
import { ref, computed } from 'vue'

//reactive data
// eslint-disable-next-line vue/no-dupe-keys
const selectedColor = ref<string>('#ffffff')

//props
const props = defineProps({
  id: {
    type: String,
    default: 'radio'
  },
  class: {
    type: String,
    default: 'red'
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
  }
})

//binding classes
const bindingClass = computed(() => {
  if (props.styleReset == true) {
    return props.class
  } else {
    return `revuekitz-color-field ${props.class}`
  }
})

//emit
const emit = defineEmits(['update:val'])
const setSelectedColor = (event: Event) => {
  const targetValue = (event.target as HTMLInputElement).value
  emit('update:val', targetValue)
}
</script>
<template>
  <input
    type="color"
    :id="props.id"
    :class="bindingClass"
    :style="props.style"
    :name="props.name"
    v-model="selectedColor"
    @change="setSelectedColor"
  />
</template>
<style scoped>
.revuekitz-color-field {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: 50px;
  height: 50px;
  border: none;
  background-color: transparent;
  cursor: pointer;
}
.revuekitz-color-field::-webkit-color-swatch {
  border-radius: 50%;
}
</style>
