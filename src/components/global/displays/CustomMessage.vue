<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
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
  message: {
    type: String,
    default: ''
  },
  mode: {
    type: String,
    default: ''
  },
  duration: {
    type: Number,
    default: 0
  }
})

// ref
const visible = ref(true)

//binding classes
const bindingClass = computed(() => {
  return `revuekitz-custom-message ${props.class} `
})

//mounted
onMounted(() => {
  visible.value = true
  if (props.duration === 0) return
  startFadeOutTimer()
})

// Auto-hide after duration, with cleanup
const startFadeOutTimer = () => {
  const timer = setTimeout(() => {
    visible.value = false
  }, props.duration)
  return () => clearTimeout(timer)
}
</script>
<template>
  <div :class="[bindingClass, props.mode, visible ? '' : 'fade-out']">
    {{ message }}
  </div>
</template>
<style scoped>
.revuekitz-custom-message {
  margin: 10px;
  padding: 10px;
  border-radius: 5px;
}

.revuekitz-custom-message.fade-out {
  opacity: 0;
  visibility: hidden;
  transition: 1s;
}

.revuekitz-custom-message.warning {
  color: #8a6d00;
  border: 1px solid #8a6d00;
  background-color: #fff9e5;
}

.revuekitz-custom-message.info {
  color: #2e7d32;
  border: 1px solid #2e7d32;
  background-color: #e6f4ea;
}

.revuekitz-custom-message.error {
  color: #b71c1c;
  border: 1px solid #b71c1c;
  background-color: #ffebee;
}
</style>
