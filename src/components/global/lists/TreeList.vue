<script setup lang="ts">
import { ref, computed } from 'vue'

interface Item {
  id: string
  title: string
  href?: string
}

interface Child {
  id: string
  title: string
  href?: string
  items: Item[]
}

interface Parent {
  id: string
  title: string
  href?: string
  children: Child[]
}

interface Grandparent {
  id: string
  title: string
  href?: string
  parents: Parent[]
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
  grandparents: {
    type: Array<Grandparent>,
    default: () => [
      {
        id: '1',
        title: 'grandparents #1',
        href: 'https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/splice',
        parents: [
          {
            id: '1',
            title: 'parents #1',
            href: 'https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/splice',
            children: [
              {
                id: '1',
                title: 'children #1',
                href: 'https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/splice',
                items: [
                  {
                    id: '1',
                    title: 'Items #1',
                    href: 'https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/splice'
                  },
                  {
                    id: '2',
                    title: 'Items #2',
                    href: 'https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/splice'
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
})
const grandparants = ref(props.grandparents)

//binding classes
const bindingClass = computed(() => {
  if (props.styleReset == true) {
    return props.class
  } else {
    return `revuekitz-tree-list ${props.class} `
  }
})
</script>
<template>
  <div :id="props.id" :class="bindingClass" :style="props.style">
    <ul v-for="(grandparant, index) in grandparants" :key="index">
      <li>
        <a v-if="grandparant.hasOwnProperty('href')" :href="grandparant.href">{{
          grandparant.title
        }}</a>
        <ul v-for="(parent, index) in grandparant.parents" :key="index">
          <li>
            <a v-if="parent.hasOwnProperty('href')" :href="parent.href">{{ parent.title }}</a>
            <ul v-for="(child, index) in parent.children" :key="index">
              <li>
                <a v-if="child.hasOwnProperty('href')" :href="child.href">{{ child.title }}</a>
                <ul v-for="(item, index) in child.items" :key="index">
                  <li>
                    <a v-if="item.hasOwnProperty('href')" :href="item.href">{{ item.title }}</a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>
<style scoped>
* {
  margin: 0;
  padding: 0;
  list-style: none;
}

.revuekitz-tree-list ul li ul {
  margin-top: 0.5em;
  margin-bottom: 0.75em;
  margin-left: 30px;
}

.revuekitz-tree-list ul li ul li {
  margin-bottom: 0.25em;
  position: relative;
}

.revuekitz-tree-list ul li ul li::before {
  content: '';
  position: absolute;
  top: -0.5em;
  left: -20px;
  width: 10px;
  height: calc(100% + 0.75em);
  border-left: 1px solid #3972b2;
}

.revuekitz-tree-list ul li ul li:last-child::before {
  height: calc(1em + 0.25em);
}

.revuekitz-tree-list ul li ul li::after {
  content: '';
  position: absolute;
  top: 0.75em;
  left: -20px;
  width: 10px;
  border-bottom: 1px solid #3972b2;
}
</style>
