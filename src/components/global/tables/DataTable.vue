<script setup lang="ts">
import { ref, reactive, computed } from 'vue'
import PaginateList from '../lists/PaginateList.vue'
import TextField from '../fields/TextField.vue'
import CheckBoxField from '../fields/CheckBoxField.vue'

const td = ref(null)

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
  seach_mode: {
    type: Boolean,
    default: true
  },
  pagination_mode: {
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
  }
})

const highLight = (text: string | number | boolean) => {
  if (typeof text === 'boolean') {
    return
  }
  const searchText = typeof text === 'number' ? String(text) : text
  const searchWord = state.search.trim()
  if (!searchWord || !searchText.includes(searchWord)) {
    return searchText
  }

  const re = new RegExp(searchWord, 'ig')
  return searchText.replace(re, function (search) {
    return '<span style="background-color:yellow;font-weight:bold">' + search + '</span>'
  })
}

const sortDateAsc = (columnName: string) => {
  state.items.sort((a, b) => {
    return a[columnName] > b[columnName] ? 1 : -1
  })
}
const sortDateDesc = (columnName: string) => {
  state.items.sort((a, b) => {
    return a[columnName] < b[columnName] ? 1 : -1
  })
}

const search_items = computed(() => {
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
const emit = defineEmits(['update:val'])

const toggleItemSelection = (item: object, isSelected: boolean) => {
  if (isSelected) {
    state.selectedItems.push(item)
  } else {
    state.selectedItems = state.selectedItems.filter((i) => i !== item)
  }
  emit('update:val', state.selectedItems)
}

// 全選択と全解除の切り替え
const toggleSelectAll = (isChecked: boolean) => {
  state.allSelected = isChecked
  if (isChecked) {
    state.selectedItems = [...state.items]
  } else {
    state.selectedItems = []
  }
  emit('update:val', state.selectedItems)
}

const getDispItems = (dispArray: []) => {
  state.items = dispArray
}
</script>

<template>
  <div class="revuekitz-data-table">
    <div v-if="seach_mode" class="textfield-area">
      <label>Search</label>
      <TextField :text="state.search" v-model:val="state.search" />
    </div>
    <table>
      <thead>
        <tr>
          <th>
            <CheckBoxField
              @change="toggleSelectAll(($event.target as HTMLInputElement).checked)"
              :isChecked="state.allSelected"
            />
          </th>
          <th v-for="(header, headerIndex) in props.headers" :key="headerIndex">
            {{ header }}
            <span class="sort-btn" @click="sortDateDesc(header as string)">▼</span>
            <span class="sort-btn" @click="sortDateAsc(header as string)">△</span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(obj, index) in search_items" :key="index">
          <td ref="td">
            <input
              type="checkbox"
              :checked="state.selectedItems.includes(obj)"
              @change="toggleItemSelection(obj, ($event.target as HTMLInputElement).checked)"
            />
          </td>
          <td
            v-for="(val, valIndex) in Object.values(obj)"
            :key="valIndex"
            v-html="highLight(val)"
            v-show="valIndex < props.headers.length"
          ></td>
        </tr>
      </tbody>
    </table>
    <div v-if="pagination_mode" class="pagination-area">
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
.revuekitz-data-table > table th:first-child {
  width: 40px;
  max-width: 40px;
  margin: 0 auto;
}
.revuekitz-data-table > table td {
  border-bottom: 1px solid #dddddd;
  font-size: 12px;
  word-wrap: break-word;
}

.revuekitz-data-table > table tbody tr:nth-child(even),
.revuekitz-data-table > table thead tr {
  background-color: whitesmoke;
}

.revuekitz-data-table > .textfield-area {
  display: absolute;
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
