<script setup lang="ts">
import { ref, computed } from 'vue'
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
  tabs: {
    type: Array,
    default: () => ['apple', 'banana']
  },
  color: {
    type: String,
    default: '#fff'
  },
  backgroundColor: {
    type: String,
    default: '#00a968'
  }
})
const show = ref<number>(0)
const select = (num: number) => {
  show.value = num
}

//Tab Color
const activeTabStyle = computed(() => {
  return {
    backgroundColor: props.backgroundColor,
    color: props.color
  }
})

//binding classes
const bindingClass = computed(() => {
  return `revuekitz-tab-panel ${props.class}`
})
</script>
<template>
  <div :id="props.id" :class="bindingClass" :style="props.style">
    <ul>
      <li
        @click="select(tabIndex)"
        :class="{ active: show == tabIndex }"
        :style="show == tabIndex ? activeTabStyle : {}"
        v-for="(tab, tabIndex) in props.tabs"
        :key="tabIndex"
      >
        {{ tab }}
      </li>
    </ul>
    <div>
      <div v-for="(tab, contentIndex) in props.tabs" :key="contentIndex">
        <div v-if="show == contentIndex">
          <slot :name="'content' + contentIndex"></slot>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.revuekitz-tab-panel > ul {
  padding: 0;

  display: flex;
  justify-content: space-between;
  list-style-type: none;
  overflow-x: auto;
}
.revuekitz-tab-panel > ul li {
  width: 100%;
  cursor: pointer;
  background: #ddd;
  color: #333;
  padding: 10px;
  text-decoration: none;
}

.revuekitz-tab-panel > div {
  padding: 20px;
  border: 1px dotted #ccc;
}

.revuekitz-tab-panel > ul,
.revuekitz-tab-panel > div {
  width: 100%;
}
</style>
