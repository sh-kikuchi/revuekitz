<script setup>
import { computed } from 'vue'
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
  isVisible: {
    required: true,
    type: Boolean,
    default: false
  }
})

const emits = defineEmits(['close'])
const close = () => {
  emits('close')
}

//binding classes
const bindingClass = computed(() => {
  return `revuekitz-navigation-content ${props.class}`
})
</script>
<template>
  <div
    class="revuekitz-navigation"
    id="list-navigation"
    v-show="props.isVisible"
    @click="close"
  ></div>
  <div :id="props.id" :class="bindingClass" :style="props.style" v-show="props.isVisible">
    <slot></slot>
  </div>
</template>
<style scoped>
.revuekitz-navigation {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 999;
}

.revuekitz-navigation-content {
  width: 70px;
  height: 100vh;
  padding: 20px;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: top;
  background-color: white;
  justify-content: center;
  z-index: 999;
}
</style>
