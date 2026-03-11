<script setup lang="ts">
import { ref, reactive, computed } from 'vue'
import PaginateList from '../lists/PaginateList.vue'
import TextField from '../fields/TextField.vue'
import CheckBoxField from '../fields/CheckBoxField.vue'

type State = {
  message: string
  search: string
  items: Array<object>
  selectedItems: Array<object>
  allSelected: boolean
}

const state = reactive<State>({
  message: 'Search/Filter In TabPanelle',
  search: '',
  items: [],
  selectedItems: [],
  allSelected: false
})

const props = defineProps({
  searchMode: {
    type: Boolean,
    default: true
  },
  paginationMode: {
    type: Boolean,
    default: true
  },
  headers: {
    type: Array,
    default: () => ['date', 'title', 'content']
  },
  items: {
    type: Array,
    default: () => [
      { date: '2024-07-01', title: 'Title 1', content: 'Content 1' },
      { date: '2024-07-02', title: 'Title 2', content: 'Content 2' },
      { date: '2024-07-03', title: 'Title 3', content: 'Content 3' },
      { date: '2024-07-04', title: 'Title 4', content: 'Content 4' },
      { date: '2024-07-05', title: 'Title 5', content: 'Content 5' }
    ]
  },
  steps: {
    type: [String, Number],
    default: 3
  },
  sortType: {
    type: String,
    default: 'desc'
  },
  striped: {
    type: Boolean,
    default: true
  },
  selectable: {
    type: Boolean,
    default: true
  }
})

const highlight = (text: string | number | boolean) => {
  if (typeof text === 'boolean') {
    return
  }

  const searchText = typeof text === 'number' ? String(text) : text
  const searchWord = state.search.trim()

  if (!searchWord || !searchText.includes(searchWord)) {
    return searchText
  }

  const escaped = searchWord.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')

  const re = new RegExp(escaped, 'ig')

  return searchText.replace(re, (match) => {
    return `<span style="background-color:yellow;font-weight:bold">${match}</span>`
  })
}

const sortTypes = ref<Record<string, 'asc' | 'desc'>>({})
props.headers.forEach((header: any) => {
  sortTypes.value[header] = props.sortType as 'asc' | 'desc'
})

const sortColumn = (columnName: string) => {
  const current = sortTypes.value[columnName] || props.sortType
  const next = current === 'asc' ? 'desc' : 'asc'

  sortTypes.value[columnName] = next

  state.items.sort((a: any, b: any) => {
    if (next === 'asc') {
      return a[columnName] > b[columnName] ? 1 : -1
    } else {
      return a[columnName] < b[columnName] ? 1 : -1
    }
  })
}

const searchItems = computed(() => {
  const searchWord = state.search.trim()
  if (searchWord === '') return state.items
  return state.items.filter((item) => {
    const itemValues = Object.values(item)
    return itemValues.some((value) => {
      const stringValue = value === true || value === false ? String(value) : value
      return (
        stringValue !== null &&
        stringValue !== undefined &&
        String(stringValue).includes(searchWord)
      )
    })
  })
})
const emit = defineEmits(['update:modelValue'])

const toggleItemSelection = (item: object, isSelected: boolean) => {
  if (isSelected) {
    state.selectedItems.push(item)
  } else {
    state.selectedItems = state.selectedItems.filter((i) => i !== item)
  }

  state.allSelected = state.selectedItems.length === state.items.length

  emit('update:modelValue', state.selectedItems)
}

const toggleSelectAll = (isChecked: boolean) => {
  state.allSelected = isChecked
  if (isChecked) {
    state.selectedItems = [...state.items]
  } else {
    state.selectedItems = []
  }
  emit('update:modelValue', state.selectedItems)
}

const getDispItems = (dispArray: []) => {
  state.items = dispArray
}
</script>

<template>
  <div class="revuekitz-data-table" :class="{ striped: props.striped }">
    <div v-if="searchMode" class="textfield-area">
      <label>Search</label>
      <TextField :text="state.search" v-model="state.search" />
    </div>
    <table :class="{ selectable: props.selectable }">
      <thead>
        <tr>
          <th v-if="props.selectable">
            <CheckBoxField
              @change="toggleSelectAll(($event.target as HTMLInputElement).checked)"
              :checked="state.allSelected"
            />
          </th>
          <th v-for="(header, headerIndex) in props.headers" :key="headerIndex">
            {{ header }}
            <span class="sort-btn" @click="sortColumn(header as string)">
              {{ sortTypes[header as string] === 'desc' ? '△' : '▼' }}
            </span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(obj, index) in searchItems" :key="index">
          <td v-if="props.selectable">
            <CheckBoxField
              v-if="props.selectable"
              :checked="state.allSelected || state.selectedItems.includes(obj)"
              @change="toggleItemSelection(obj, ($event.target as HTMLInputElement).checked)"
            />
          </td>
          <td
            v-for="(val, valIndex) in Object.values(obj)"
            :key="valIndex"
            v-html="highlight(val)"
            v-show="valIndex < props.headers.length"
          ></td>
        </tr>
      </tbody>
    </table>
    <div v-if="paginationMode" class="pagination-area">
      <PaginateList
        @handleAction="getDispItems"
        :items="props.items"
        :steps="props.steps"
      ></PaginateList>
    </div>
  </div>
</template>

<style scoped>
label {
  margin-right: 5px;
}
.revuekitz-data-table {
  position: relative;
  overflow: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.revuekitz-data-table > table {
  min-width: 420px;
  max-width: 860px;
  border-collapse: collapse;
}

.revuekitz-data-table > table td,
th {
  text-align: left;
  padding: 4px;
  min-width: 40px;
  max-width: 200px;
  text-wrap: wrap;
}
.revuekitz-data-table table.selectable th:first-child,
.revuekitz-data-table table.selectable td:first-child {
  width: 40px;
  max-width: 40px;
  margin: 0 auto;
}
.revuekitz-data-table > table td {
  border-bottom: 1px solid #dddddd;
  font-size: 12px;
  word-wrap: break-word;
}

.revuekitz-data-table.striped table tbody tr:nth-child(even),
.revuekitz-data-table.striped table thead tr {
  background-color: whitesmoke;
}

.revuekitz-data-table > .textfield-area {
  margin-bottom: 5px;
}
.revuekitz-data-table > .pagination-area {
  display: flex;
  justify-content: center;
}
.sort-btn {
  font-size: 10px;
}
</style>
