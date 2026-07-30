<script setup lang="ts">
import SvgIcon from '../icons/SvgIcon.vue'
const props = defineProps({
  to: {
    type: [String, Object],
    required: false,
    default: '/'
  },
  icon: {
    type: String,
    required: true,
    default: 'mdi-home'
  },
  linkName: {
    type: String,
    required: true,
    default: 'home'
  }
})
</script>
<template>
  <div class="revuekitz-nab-bar-item">
    <div>
      <SvgIcon class="icon-wrapper" :path="icon" size="30" />
      <div class="link-name">{{ props.linkName }}</div>
    </div>
  </div>
</template>
<style scoped>
.revuekitz-nab-bar-item {
  display: flex;
  justify-content: center;
  width: 53px;
  height: 53px;
  padding-top: 3%;
  padding-bottom: 3px;
  cursor: pointer;
}

.revuekitz-nab-bar-item:hover {
  background-color: lightgray;
}

.revuekitz-nab-bar-item:active {
  background-color: lightgray;
}

.link-name {
  margin-top: -6px;
  width: 30px;
  font-size: 8px;
  text-align: center;
  overflow-wrap: break-word;
  hyphens: auto;
}
</style>
