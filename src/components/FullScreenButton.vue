<script setup lang="ts">
import { ArrowsExpandIcon, XIcon } from "@heroicons/vue/outline";
import IconButton from "./IconButton.vue";
import { onMounted, onUnmounted, ref, watch } from "vue";

const props = defineProps({
  element: {
    type: HTMLElement,
    required: true,
  },
});

onMounted(() => {
  document.addEventListener("fullscreenchange", checkFullscreen);
});
onUnmounted(() =>
  document.removeEventListener("fullscreenchange", checkFullscreen)
);

const isFullscreen = ref(false);
const checkFullscreen = () => {
  isFullscreen.value = document.fullscreenElement === props.element;
};

const enterFullscreen = () => {
  try {
    props.element.requestFullscreen();
  } catch (e) {
    console.warn(e);
  }
};

const exitFullscreen = () => {
  try {
    document.exitFullscreen();
  } catch (e) {
    console.warn(e);
  }
};
</script>

<template>
  <IconButton v-if="!isFullscreen" @click="enterFullscreen">
    <ArrowsExpandIcon class="w-6 h-6"></ArrowsExpandIcon>
  </IconButton>

  <IconButton v-if="isFullscreen" @click="exitFullscreen">
    <XIcon class="w-6 h-6"></XIcon>
  </IconButton>
</template>
