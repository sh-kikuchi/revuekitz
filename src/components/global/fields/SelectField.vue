<script setup lang="ts">
import { ref, computed, PropType } from 'vue'
// eslint-disable-next-line vue/no-dupe-keys

interface Option {
  text: string
  value: string
}

const props = defineProps({
  items: Array,
  id: {
    type: String,
    default: 'radio'
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
  initText: {
    type: String,
    default: '選択してください'
  },
  modelValue: {
    type: String,
    default: ''
  },
  options: {
    type: Array as PropType<Option[]>,
    default: () => [
      { text: 'One', value: 'A' },
      { text: 'Two', value: 'B' },
      { text: 'Three', value: 'C' }
    ]
  }
})

//binding classes
const bindingClass = computed(() => {
  if (props.styleReset == true) {
    return props.class
  } else {
    return `revuekitz-select-field dropdown-wrapper ${props.class} `
  }
})

//emit
const emit = defineEmits(['update:modelValue'])
const updateValue = (event: Event) => {
  const targetValue = (event.target as HTMLInputElement).value
  emit('update:modelValue', (selectedItem.value = targetValue))
}

//selected item
const selectedItem = ref(props.modelValue)
</script>
<template>
  <select
    :id="props.id"
    :class="bindingClass"
    :name="props.name"
    :style="props.style"
    v-model="selectedItem"
    @change="updateValue"
  >
    <option v-if="selectedItem === ''" disabled value="">{{ initText }}</option>
    <option v-for="option in props.options" :key="option.value" :value="option.value">
      {{ option.text }}
    </option>
  </select>
</template>
<style scoped>
.revuekitz-select-field {
  display: inline;
  margin: 10px 0;
  text-align: left;
}
.revuekitz-select-field select {
  cursor: pointer;
  border: none;
  outline: none;
  background: transparent;
}
.revuekitz-select-field select::-ms-expand {
  display: none;
}
.revuekitz-select-field.dropdown-wrapper {
  position: relative;
  border-radius: 2px;
  border: 2px solid whitesmoke;
  border-radius: 5px;
  background: whitesmoke;
}
</style>
