<script setup>
import { defineProps, computed } from 'vue'

//props
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
    validator: (value) => {
      return value.every(
        (item) =>
          typeof item.name === 'string' &&
          (typeof item.href === 'undefined' || typeof item.href === 'string')
      )
    },
    default: () => [
      { href: '/', name: 'home' },
      { href: '/about', name: 'about' },
      { name: 'current page' }
    ]
  }
})

//binding classes
const bindingClass = computed(() => {
  return `revuekitz-breadcrumb ${props.class}`
})
</script>
<template>
  <ol :id="id" :class="bindingClass" :style="props.style">
    <li v-for="(item, index) in props.items" :key="index">
      <span v-if="item.href === undefined" :href="item.href">{{ item.name }}</span>
      <a v-else :href="item.href">{{ item.name }}</a>
      <span v-if="index !== items.length - 1">/</span>
    </li>
  </ol>
</template>

<style scoped>
.revuekitz-breadcrumb {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
}

.revuekitz-breadcrumb li {
  margin-right: 5px;
}

.revuekitz-breadcrumb li a {
  color: #007bff;
  text-decoration: none;
}

.revuekitz-breadcrumb li a:hover {
  text-decoration: underline;
}
</style>
