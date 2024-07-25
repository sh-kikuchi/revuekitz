<script setup lang="ts">
import { ref, reactive, computed } from 'vue'
import PaginateList from '../lists/PaginateList.vue'
import TextField from '../fields/TextField.vue'

const th = ref(null)
const td = ref(null)

type State = {
  message: string
  search: string
  items: []
}

const state = reactive<State>({
  message: 'Search/Filter In TabPanelle',
  search: '',
  items: []
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

const highLight = (text: string | number) => {
  // If the text is a number, convert it to a string
  const searchText = typeof text === 'number' ? String(text) : text

  // If the search word is empty or the text does not include the search word, return the text as is
  const searchWord = state.search.trim()
  if (!searchWord || !searchText.includes(searchWord)) {
    return searchText
  }

  // Highlight the search word
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
  let searchWord = state.search.trim()
  if (searchWord === '') return state.items
  return state.items.filter((item) => {
    const itemValues = Object.values(item)
    return itemValues.some((value) => typeof value === 'string' && value.includes(searchWord))
  })
})

const getDispItems = (dispArray: []) => {
  state.items = dispArray
}
</script>
<template>
  <div class="revuekitz-data-table">
    <div v-if="seach_mode" class="textfield-area">
      <label>Search</label>
      <TextField v-model:binding-value="state.search" />
    </div>
    <table>
      <thead>
        <tr>
          <th ref="th" v-for="(header, headerIndex) in props.headers" :key="headerIndex">
            {{ header }}
            <span @click="sortDateDesc(header as string)">▼</span>
            <span @click="sortDateAsc(header as string)">△</span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="obj in search_items" :key="obj">
          <td ref="td" v-for="(val, valIndex) in obj" v-html="highLight(val)" :key="valIndex"></td>
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
}
.revuekitz-data-table > table {
  width: max-content;
  border-collapse: collapse;
}

.revuekitz-data-table > table thead th {
  min-width: 300px;
}

.revuekitz-data-table > table td,
th {
  text-align: left;
  padding: 8px;
}

.revuekitz-data-table > table td {
  border-bottom: 1px solid #dddddd;
  background-color: whitesmoke;
  font-size: 12px;
}
.revuekitz-data-table > table th {
  color: black;
  background-color: #dddddd;
}

.revuekitz-data-table > .textfield-area {
  display: absolute;
  margin-bottom: 5px;
}
.revuekitz-data-table > .pagination-area {
  display: flex;
  justify-content: center;
}
</style>
