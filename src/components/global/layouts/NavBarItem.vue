<script setup>
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
      <SvgIcon class="icon-wrapper" :path="icon" size="26" />
      <div class="link-name">{{ props.linkName }}</div>
    </div>
  </div>
</template>
<style scoped>
.revuekitz-nab-bar-item {
  display: flex;
  justify-content: center;
  margin-top: 5px;
  margin-bottom: 5px;
}

.revuekitz-nab-bar-item:active {
  background-color: lightgray;
}

.link-name {
  font-size: 8px;
  text-align: center;
}
</style>
