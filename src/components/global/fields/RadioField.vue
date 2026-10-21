<script setup lang="ts">
import { computed, useId, PropType } from 'vue'

interface RadioItem {
  text: string
  value: string
}

//props
const props = defineProps({
  items: {
    type: Array as PropType<(string | RadioItem)[]>,
    default: () => []
  },
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
  },
  isRequired: {
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

//normalize items: string is used as both text and value
const normalizedItems = computed<RadioItem[]>(() =>
  props.items.map((item) => (typeof item === 'string' ? { text: item, value: item } : item))
)

//unique id per radio input
const uid = useId()
const itemId = (index: number) => `${props.id || uid}-${index}`

//emit
const emit = defineEmits(['update:modelValue'])
const updateValue = (event: Event) => {
  emit('update:modelValue', (event.target as HTMLInputElement).value)
}
</script>
<template>
  <div v-bind="$attrs" :class="bindingClass" :style="props.style">
    <div v-for="(item, index) in normalizedItems" :key="item.value">
      <input
        type="radio"
        :id="itemId(index)"
        :name="props.name || undefined"
        :value="item.value"
        :style="{ accentColor: props.accentColor }"
        :disabled="props.isDisabled"
        :readonly="props.isReadonly"
        :required="props.isRequired"
        :checked="props.modelValue === item.value"
        @change="updateValue"
        @click="props.isReadonly && $event.preventDefault()"
      />
      <label :for="itemId(index)">{{ item.text }}</label>
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
