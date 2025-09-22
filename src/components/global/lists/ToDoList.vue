<script setup lang="ts">
import { ref, computed } from 'vue'
import TextField from '../fields/TextField.vue'
import CheckBoxField from '../fields/CheckBoxField.vue'

interface Item {
  title: string
  checked: boolean // true for checked, false for unchecked
}

const props = defineProps({
  id: {
    type: String,
    default: ''
  },
  class: {
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
  modelValue: {
    type: Array,
    default: () => []
  }
})

const items = ref<Item[]>(props.modelValue as Item[])

// Binding classes
const bindingClass = computed(() => {
  return props.styleReset ? props.class : `revuekitz-basic-list ${props.class}`
})

const todo = ref<string>('')

//emit
const emit = defineEmits(['modelValue'])

// Add item to the list
const addItem = () => {
  if (todo.value.trim()) {
    items.value.push({
      title: todo.value.trim(),
      checked: false // New items are unchecked by default
    })
    todo.value = '' // Reset input field
    emit('modelValue', items.value)
  }
}

// Delete item from the list
const deleteItem = (index: number, event: Event) => {
  event.stopPropagation() // Stop click event propagation
  items.value.splice(index, 1)
  emit('modelValue', items.value)
}

// Toggle checkbox state
const toggleCheck = (index: number, isChecked: boolean) => {
  items.value[index].checked = isChecked
  emit('modelValue', items.value)
}
</script>

<template>
  <div class="revuekitz-basic-list-strikethrough">
    <TextField v-model="todo" @keyup.enter="addItem" />
  </div>
  <ul :id="props.id" :class="bindingClass" :style="props.style">
    <li v-for="(item, index) in items" :key="index" class="revuekitz-basic-list-item">
      <div class="revuekitz-basic-list-body">
        <div>
          <CheckBoxField
            :checked="item.checked"
            @change="toggleCheck(index, $event.target.checked)"
          />
        </div>
        <div :class="{ strikethrough: item.checked }">
          {{ item.title }}
        </div>
      </div>
      <div>
        <div class="revuekitz-basic-list-delete-action" @click="deleteItem(index, $event)">
          &times;
        </div>
      </div>
    </li>
  </ul>
</template>

<style scoped>
.revuekitz-basic-list {
  padding: 0;
}

.revuekitz-basic-list > li {
  padding: 5px;
  margin-top: 5px;
  margin-bottom: 5px;
  list-style-type: none;
  background: whitesmoke;
}

.revuekitz-basic-list > li:hover {
  background: lightgrey;
}

.revuekitz-basic-list > li:last-child {
  border-bottom: none;
}

.revuekitz-basic-list-item {
  display: flex;
  justify-content: space-between;
}

.revuekitz-basic-list-delete-action {
  cursor: pointer;
  font-size: 15px;
  padding-right: 5px;
}

.revuekitz-basic-list-delete-action:hover {
  color: darkred;
}

/* Add this class for strikethrough effect */
.strikethrough {
  text-decoration: line-through;
}

.revuekitz-basic-list-strikethrough {
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
}

.revuekitz-basic-list-body {
  display: flex;
  align-items: center;
  margin-top: 5px;
}
</style>
