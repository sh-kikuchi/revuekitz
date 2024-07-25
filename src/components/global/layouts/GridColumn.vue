<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  id: {
    type: String,
    default: ''
  },
  cols: {
    type: Number
  },
  sm_cols: {
    type: Number
  },
  lg_cols: {
    type: Number
  },
  style: {
    type: [String, Object],
    default: ''
  }
})

const getColClass = computed(() => {
  return `col-${props.cols} col-sm-${props.sm_cols} col-lg-${props.lg_cols}`
})
</script>

<template>
  <div :id="props.id" :class="getColClass" :style="props.style">
    <slot></slot>
  </div>
</template>

<style scoped>
/* sm */
@media screen and (max-width: 767px) {
  /* 480~767pxが適用範囲 */
  .col-sm-2 {
    grid-column: span 2;
  }
  .col-sm-3 {
    grid-column: span 3;
  }
  .col-sm-4 {
    grid-column: span 4;
  }
  .col-sm-5 {
    grid-column: span 5;
  }
  .col-sm-6 {
    grid-column: span 6;
  }
  .col-sm-7 {
    grid-column: span 7;
  }
  .col-sm-8 {
    grid-column: span 8;
  }
  .col-sm-9 {
    grid-column: span 9;
  }
  .col-sm-10 {
    grid-column: span 10;
  }
  .col-sm-11 {
    grid-column: span 11;
  }
  .col-sm-12 {
    grid-column: span 12;
  }
}

/* md */
@media screen and (min-width: 768px) and (max-width: 1199px) {
  /* 768~1199pxが適用範囲 */
  .col-2 {
    grid-column: span 2;
  }
  .col-3 {
    grid-column: span 3;
  }
  .col-4 {
    grid-column: span 4;
  }
  .col-5 {
    grid-column: span 5;
  }
  .col-6 {
    grid-column: span 6;
  }
  .col-7 {
    grid-column: span 7;
  }
  .col-8 {
    grid-column: span 8;
  }
  .col-9 {
    grid-column: span 9;
  }
  .col-10 {
    grid-column: span 10;
  }
  .col-11 {
    grid-column: span 11;
  }
  .col-12 {
    grid-column: span 12;
  }
}

/* lg */
@media screen and (min-width: 1200px) {
  /* 1200px以上が適用範囲 */
  .col-lg-2 {
    grid-column: span 2;
  }
  .col-lg-3 {
    grid-column: span 3;
  }
  .col-lg-4 {
    grid-column: span 4;
  }
  .col-lg-5 {
    grid-column: span 5;
  }
  .col-lg-6 {
    grid-column: span 6;
  }
  .col-lg-7 {
    grid-column: span 7;
  }
  .col-lg-8 {
    grid-column: span 8;
  }
  .col-lg-9 {
    grid-column: span 9;
  }
  .col-lg-10 {
    grid-column: span 10;
  }
  .col-lg-11 {
    grid-column: span 11;
  }
  .col-lg-12 {
    grid-column: span 12;
  }
}
</style>
