<script setup lang="ts">
import { ref, computed, defineExpose } from 'vue'

interface List {
  title: string
  items: string[]
}

interface Block {
  open: string
}

const block = ref<Block>({ open: '' })
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
  lists: {
    type: Array as () => List[],
    // eslint-disable-next-line vue/require-valid-default-prop
    default: [
      {
        title: 'リスト1',
        items: ['aaa', 'bbb', 'ccc']
      },
      {
        title: 'リスト2',
        items: ['aaa', 'bbb', 'ccc']
      }
    ]
  }
})

//binding classes
const bindingClass = computed(() => {
  if (props.styleReset == true) {
    return props.class
  } else {
    return `revuekitz-accordion-menu ${props.class} `
  }
})

// define transition function
const beforeEnter = (el: HTMLElement) => {
  el.style.opacity = '0'
}

const open = (value) => {
  block.value.open = block.value.open === value ? '' : value
}

const enter = (el: HTMLElement, done: () => void) => {
  el.offsetHeight // Trigger reflow
  el.style.transition = 'opacity 0.5s'
  el.style.opacity = '1'
  done()
}

const leave = (el: HTMLElement, done: () => void) => {
  el.style.transition = 'opacity 0.5s'
  el.style.opacity = '0'
  done()
}

//Accessing variables or functions exposed by the component from outside.
defineExpose({
  block
})
</script>
<template>
  <div
    :id="props.id"
    :class="bindingClass"
    :style="props.style"
    v-for="(list, index) in props.lists"
    :key="index"
  >
    <div @click="open(list.title)">
      {{ list.title }}
    </div>
    <transition name="fade" @before-enter="beforeEnter" @enter="enter" @leave="leave">
      <ul v-show="block.open === list.title">
        <li v-for="(item, index) in list.items" :key="index">
          {{ item }}
        </li>
      </ul>
    </transition>
  </div>
</template>
<style>
.revuekitz-accordion-menu {
  display: block;
  padding-left: 10px;
  background-color: #f9f9f9;
  border-top: 1px solid #ccc;
}

.revuekitz-accordion-menu:first-child {
  border-top: 1px solid #ccc;
}

.revuekitz-accordion-menu:last-child {
  border-bottom: 1px solid #ccc;
}

.revuekitz-accordion-menu:not(:first-child):not(:last-child) {
  border-top: 0.5px solid #ccc;
  border-bottom: 0.5px solid #ccc;
}

.revuekitz-accordion-menu > div {
  padding: 10px 15px;
  cursor: pointer;
  background-color: whitesmoke;
  transition: 0.3s;
}

.revuekitz-accordion-menu > div:hover {
  background-color: #dcdcdc;
}

.revuekitz-accordion-menu ul {
  padding: 2.5px 5px 2.5px 0;
  border-left: 2px solid #ccc;
}

.revuekitz-accordion-menu ul li {
  list-style: none;
  padding: 8px 10px;
  margin: 2.5px 0;
  background-color: #fff;
  transition: 0.3s;
}

.revuekitz-accordion-menu ul li:hover {
  background-color: #f0f0f0;
}
</style>
