<script setup lang="ts">
import { ref, computed } from 'vue'

//reactive data
const selectedItem = ref<String>('')

//props
const props = defineProps({
  items: Array<string>,
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
  accentColor: {
    type: String,
    default: ''
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
    return `revuekitz-radio-field ${props.class} `
  }
})

//emit
const emit = defineEmits(['update:modelValue'])
const updateValue = (event: Event) => {
  const targetValue = (event.target as HTMLInputElement).value
  emit('update:modelValue', (selectedItem.value = targetValue))
}
</script>
<template>
  <div v-bind="$attrs" :class="bindingClass" :style="props.style">
    <div v-for="(item, index) in props.items" :key="index">
      <input
        type="radio"
        :id="item"
        :name="props.name[index]"
        :value="item"
        :style="{ accentColor: props.accentColor }"
        :disabled="props.isDisabled"
        :readonly="props.isReadonly"
        v-model="selectedItem"
        @change="updateValue"
      />
      <label :for="item">{{ item }}</label>
    </div>
  </div>
</template>
<style scoped>
.revuekitz-radio-field > div {
  display: flex;
  align-items: center;
}

.revuekitz-radio-field > label {
  margin: 0;
  line-height: 1;
}
input.revuekitz-radio-field [type='radio'] {
  margin-right: 60px;
}
input.revuekitz-radio-field [readonly],
input.revuekitz-radio-field [disabled] {
  color: #417bbc;
  background-color: #e2e8e7;
  cursor: not-allowed;
}
</style>
