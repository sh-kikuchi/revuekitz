<script setup lang="ts">
import { ref } from 'vue'
const visible = ref<boolean>(false)
const toggleToolTip = () => {
  visible.value = !visible.value
}
const props = defineProps({
  style: {
    type: [String, Object],
    default: ''
  }
})
</script>
<template>
  <div class="revuekitz-tool-tip-container">
    <div @click="toggleToolTip" class="revuekitz-tool-tip-parent">
      <slot name="toolTipBtn"></slot>
    </div>
    <div
      v-if="visible"
      class="revuekitz-tool-tip-child"
      :style="props.style"
      @click="toggleToolTip"
    >
      <slot name="toolTipContent"></slot>
    </div>
  </div>
</template>
<style scoped>
.revuekitz-tool-tip-container {
  position: relative;
  width: fit-content;
}
.revuekitz-tool-tip-parent {
  cursor: pointer;
}
.revuekitz-tool-tip-child {
  padding: 5px;
  position: absolute;
  left: var(--parent-width, 60px);
  top: 0%;
}
</style>
