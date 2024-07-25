<script setup lang="ts">
import { ref, computed } from 'vue'

interface Item {
  id: string
  title: string
  value: number
  href?: string
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
  items: {
    type: Array,
    // eslint-disable-next-line vue/require-valid-default-prop
    default: () => [
      {
        id: '1',
        title: 'Item #1',
        value: 1,
        href: 'https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/splice'
      },
      {
        id: '2',
        title: 'Item #2',
        value: 2
      },
      {
        id: '3',
        title: 'Item #3',
        value: 3
      }
    ]
  }
})

const items = ref<Item[]>(props.items as Item[])

//binding classes
const bindingClass = computed(() => {
  if (props.styleReset == true) {
    return props.class
  } else {
    return `revuekitz-basic-list ${props.class} `
  }
})

const deleteItem = (index: number) => {
  items.value.splice(index, 1)
}
</script>
<template>
  <ul
    :id="props.id"
    :class="bindingClass"
    :style="props.style"
    v-for="(item, index) in items"
    :key="item.id"
  >
    <li class="revuekitz-basic-list-item" @click="$emit('update:value', item.value)">
      <div>
        <a v-if="item.hasOwnProperty('href')" :href="item.href">{{ item.title }}</a>
        <span v-else>{{ item.title }}</span>
      </div>
      <div>
        <div class="delete-action" @click="deleteItem(index)">&times;</div>
      </div>
    </li>
  </ul>
</template>
<style scoped>
.revuekitz-basic-list {
  padding: 0;
  border: 3px solid #ffffff;
  background: whitesmoke;
}

.revuekitz-basic-list > li {
  padding: 10px;
  list-style-type: none;
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
</style>
