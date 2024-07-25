<script setup lang="ts">
import { ref, onMounted } from 'vue'

const loading = ref<Boolean>(true)

onMounted(() => {
  if (typeof window !== 'undefined') {
    if (document.readyState === 'complete' || document.readyState === 'interactive') {
      loading.value = false
    }
  }
})
</script>
<template>
  <div v-if="loading" class="loading">
    <div class="loading__loader">
      <slot></slot>
    </div>
  </div>
</template>
<style scoped>
.loading {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  z-index: 9999;
  transition: all 1.2s ease;
  background: rgba(255, 255, 255, 0.7);
}

.loading__loader {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 18px;
}
</style>
