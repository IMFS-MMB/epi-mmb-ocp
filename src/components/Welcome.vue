<script setup lang="ts">
import { useState } from "../state/state";

const { content } = useState();
</script>

<template>
  <div class="welcome flex-grow self-stretch relative box-border">
    <div
      class="absolute w-full h-full flex justify-center items-center box-border select-none"
    >
      <img src="/logo.svg" class="w-1/2 opacity-50" />
    </div>

    <div class="bg-transparent relative z-1 prose !max-w-full" v-html="content"></div>
  </div>
</template>
