<script setup lang="ts">
import { defineProps, defineEmits, computed } from 'vue'

//props
const props = defineProps({
  isVisible: {
    required: true,
    type: Boolean,
    default: false
  },
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
  }
})

//binding classes
const bindingClass = computed(() => {
  return `revuekitz-modal-dialog ${props.class} `
})

// emit
const emit = defineEmits(['close'])
const close = () => {
  emit('close')
}
</script>

<style scoped>
.revuekitz-modal-dialog-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* オーバーレイの背景色と透明度 */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999; /* 他の要素よりも前面に表示 */
}

.revuekitz-modal-dialog {
  background-color: white;
  max-width: 100%; /* モーダルの幅 */
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3); /* モーダルの影 */
}

.revuekitz-modal-dialog-content {
  text-align: center;
}

.revuekitz-modal-dialog-title {
  margin-bottom: 10px;
}

.revuekitz-modal-dialog-close-btn {
  cursor: pointer;
  color: #333;
  text-decoration: underline;
}

.revuekitz-modal-dialog-close-btn:hover {
  color: #555;
}
</style>

<template>
  <div class="revuekitz-modal-dialog-overlay" v-show="props.isVisible" @click="close">
    <div :id="props.id" :class="bindingClass" :style="props.style" @click.stop>
      <div class="revuekitz-modal-dialog-content">
        <div class="revuekitz-create-form">
          <slot></slot>
          <p class="revuekitz-modal-dialog-close-btn" @click="close">Close</p>
        </div>
      </div>
    </div>
  </div>
</template>
