<script setup lang="ts">
import { ref, type Ref, computed, onMounted, defineEmits } from 'vue'

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
  items: {
    type: Array,
    default: () => []
  },
  steps: {
    type: [String, Number],
    default: 3
  }
})

const page: Ref<number> = ref(1)
const totalPages: Ref<number> = ref(0)
const first: Ref<number> = ref(0)
const last: Ref<number> = ref(0)

const pagination = () => {
  const steps = Number(props.steps)
  totalPages.value =
    props.items.length % steps === 0
      ? props.items.length / steps
      : Math.floor(props.items.length / steps) + 1
  first.value = (page.value - 1) * steps
  last.value = page.value * steps

  return getArrayRange(first.value, last.value, page.value)
}

const next = () => {
  if (page.value >= totalPages.value) return
  page.value = page.value + 1
  pagination()
}

const prev = () => {
  if (page.value <= 1) return
  page.value = page.value - 1
  pagination()
}

const pushNumper = (num: number) => {
  page.value = num
  pagination()
}

const emits = defineEmits(['handleAction'])
const getPageClass = (pageNumber: number) => {
  return pageNumber === page.value ? 'revuekitz-paginate-list-current-position' : ''
}

// function to extract elements from start index to end index
const getArrayRange = (startIndex: number, endIndex: number, currentPosition: number) => {
  const array = props.items
  page.value = currentPosition

  // return an empty array if the range is invalid
  if (startIndex < 0 || startIndex > endIndex) {
    return []
  }

  // extract a portion of the array and return it as a new array
  const resultArray = array.slice(startIndex, endIndex)

  if (resultArray.length > 0) {
    return emits('handleAction', resultArray)
  }
}

//binding classes
const bindingClass = computed(() => {
  return `revuekitz-paginate-list ${props.class}`
})

onMounted(() => {
  pagination()
})
</script>
<template>
  <ul :id="props.id" :class="bindingClass" :style="props.style">
    <li id="prev" class="prev" @click="prev()">&lt;</li>
    <li
      v-for="(stepNumber, index) in totalPages"
      :key="index"
      @click="pushNumper(index + 1)"
      :class="getPageClass(stepNumber)"
    >
      {{ stepNumber }}
    </li>
    <li id="next" class="next" @click="next()">&gt;</li>
  </ul>
</template>
<style scoped>
.revuekitz-paginate-list {
  list-style: none;
}

.revuekitz-paginate-list > li {
  display: inline-block;
  margin: 0 0.5em;
  cursor: pointer;
}

.revuekitz-paginate-list-current-position {
  font-weight: 600;
}
</style>
