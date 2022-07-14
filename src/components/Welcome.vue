<script setup lang="ts">
import { useState } from "../state/state";

const { content } = useState();
</script>

<template>
  <div class="welcome flex flex-grow self-stretch relative box-border overflow-auto">
    <div
      class="absolute right-0 top-0 bottom-0 left-0 flex justify-center items-center box-border select-none"
    >
      <img src="/logo.svg" class="w-1/2 opacity-50" />
    </div>

    <div class="bg-transparent flex-grow relative z-1 prose !max-w-full overflow-auto" v-html="content"></div>
  </div>
</template>
