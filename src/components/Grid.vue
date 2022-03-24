<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
  cols: { type: Number, required: true },
  maxCols: { type: Number, required: true },
});

const shownCols = computed(() => {
  return Math.min(props.cols, props.maxCols);
});
</script>
<template>
  <div
    :class="[
      'grid',
      {
        'grid-cols-1': shownCols === 1,
        'grid-cols-2': shownCols === 2,
        'grid-cols-3': shownCols === 3,
        'grid-cols-4': shownCols === 4,
        'grid-cols-5': shownCols === 5,
        'grid-cols-6': shownCols === 6,
        'grid-cols-7': shownCols === 7,
        'grid-cols-8': shownCols === 8,
      },
    ]"
  >
    <slot></slot>
  </div>
</template>
