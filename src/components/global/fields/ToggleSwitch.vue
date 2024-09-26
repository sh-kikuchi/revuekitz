<script setup lang="ts">
import { computed, ref, onMounted } from 'vue'

const props = defineProps({
  id: {
    type: String,
    default: ''
  },
  backgroundColor: {
    type: String,
    default: '#2196f3'
  },
  size: {
    type: String,
    default: 'M'
  },
  isChecked: {
    type: Boolean,
    default: false
  }
})

//emit
const targetValue = ref(props.isChecked)
const emit = defineEmits(['update:val'])
const updateValue = (event: Event) => {
  targetValue.value = (event.target as HTMLInputElement).checked
  emit('update:val', targetValue.value)
}

// サイズに応じたスタイルクラスを計算
const bindingClass = computed(() => {
  let targetSize: string = 'medium'
  switch (props.size) {
    case 'S':
      targetSize = 'small'
      break
    case 'M':
      targetSize = 'medium'
      break
    case 'L':
      targetSize = 'large'
      break
  }
  return `revuekitz-toggle-switch ${targetSize} `
})

// スタイルオブジェクトを計算
const bindingStyle = computed(() => {
  let width = '40px' // デフォルトの中間サイズ
  let height = '25px' // デフォルトの中間サイズの高さ

  switch (props.size) {
    case 'S':
      width = '30px'
      height = '20px'
      break
    case 'M':
      width = '40px'
      height = '25px'
      break
    case 'L':
      width = '60px'
      height = '35px'
      break
  }

  return {
    backgroundColor: props.backgroundColor,
    width: width,
    height: height
  }
})

onMounted(() => {
  emit('update:val', targetValue.value)
})
</script>

<template>
  <label id="props.id" :class="bindingClass" for="toggle-switch">
    <input id="toggle-switch" type="checkbox" :checked="props.isChecked" @change="updateValue" />
    <span class="slider round" :style="bindingStyle"></span>
  </label>
</template>

<style scoped>
/* トグルスイッチのスタイル */
.revuekitz-toggle-switch {
  position: relative;
  display: inline-block;
}

.revuekitz-toggle-switch input {
  display: none;
}

/* トグルスイッチの背景 */
.slider {
  border-radius: 35px;
  transition: 0.4s;
  display: inline-block;
}

/* トグルがONのときのスライダーの位置 */
.slider.round:before {
  position: absolute;
  content: '';
  background-color: white;
  border-radius: 50%;
  transition: 0.4s;
}

.revuekitz-toggle-switch.small .slider.round:before {
  height: 14px;
  width: 14px;
  left: 2px;
  bottom: 9px;
}

.revuekitz-toggle-switch.medium .slider.round:before {
  height: 18px;
  width: 18px;
  left: 4px;
  bottom: 10px; /* 中サイズ用の位置調整 */
}

.revuekitz-toggle-switch.large .slider.round:before {
  height: 26px;
  width: 26px;
  left: 5px;
  bottom: 10px; /* 大サイズ用の位置調整 */
}

.revuekitz-toggle-switch.small input:checked + .slider:before {
  transform: translateX(10px);
}

.revuekitz-toggle-switch.medium input:checked + .slider:before {
  transform: translateX(15px);
}

.revuekitz-toggle-switch.large input:checked + .slider:before {
  transform: translateX(26px);
}
</style>
