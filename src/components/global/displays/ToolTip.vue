<script setup lang="ts">
import { computed, ref } from 'vue'
const visible = ref<boolean>(false)
const props = defineProps({
  style: {
    type: [String, Object],
    default: ''
  },
  position: {
    type: String,
    default: 'right', // top, bottom, left, right
    validator: (val: string) => ['top', 'bottom', 'left', 'right'].includes(val)
  }
})

const tooltipPositionClass = computed(() => {
  return `tooltip-${props.position}`
})
</script>
<template>
  <div
    class="revuekitz-tool-tip-container"
    @mouseenter="visible = true"
    @mouseleave="visible = false"
  >
    <div class="revuekitz-tool-tip-parent">
      <slot name="toolTipBtn"></slot>
    </div>
    <div
      v-if="visible"
      class="revuekitz-tool-tip-child"
      :class="tooltipPositionClass"
      :style="props.style"
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

/* 共通 */
.revuekitz-tool-tip-child {
  position: absolute;
  padding: 5px;
  background: rgba(0, 0, 0, 0.75);
  color: white;
  border-radius: 4px;
  z-index: 100;
  white-space: nowrap;
}

/* 位置別クラス */
.tooltip-top {
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  margin-bottom: 5px;
}

.tooltip-bottom {
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 5px;
}

.tooltip-left {
  right: 100%;
  top: 50%;
  transform: translateY(-50%);
  margin-right: 5px;
}

.tooltip-right {
  left: 100%;
  top: 50%;
  transform: translateY(-50%);
  margin-left: 5px;
}
</style>
