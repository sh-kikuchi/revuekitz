<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'

//reactive data
const itemChecked = ref<boolean>(false)
const checkedItem = ref<string>('')

//props
const props = defineProps({
  item: String,
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
  label: {
    type: String,
    default: ''
  },
  type: {
    type: String,
    default: ''
  },
  checked: {
    type: Boolean,
    default: false
  },
  modelValue: {
    type: String,
    default: ''
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
    return `revuekitz-check-box ${props.class} `
  }
})

//emit
const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
  (e: 'update:checked', value: boolean): void
}>()
const updateValue = (event: Event) => {
  const target = event.target as HTMLInputElement
  emit('update:modelValue', target.checked ? props.item : '')
  emit('update:checked', target.checked)
}

// mouted
onMounted(() => {
  itemChecked.value = props.checked
  emit('update:modelValue', itemChecked.value ? props.item : '')
})
</script>
<template>
  <div class="revuekitz-check-box flex">
    <input
      type="checkbox"
      :id="props.id"
      :class="bindingClass"
      :style="props.style"
      :name="props.name"
      :value="props.item"
      :disabled="props.isDisabled"
      :readonly="props.isReadonly"
      v-model="itemChecked"
      @input="updateValue"
    /><label class="revuekitz-label">{{ label }}</label>
  </div>
</template>
<style scoped>
.revuekitz-check-box {
  display: flex;
}
.revuekitz-check-box > label {
  display: inline;
}
.revuekitz-check-box > input {
  border-bottom: 1px solid grey;
  background-color: whitesmoke;
  padding: 5px;
  transform: scale(1.2);
  margin: 0 10px 0 0;
}
.revuekitz-check-box > input[readonly],
.revuekitz-check-box > input[disabled] {
  color: #417bbc;
  background-color: #e2e8e7;
  cursor: not-allowed;
}
</style>
