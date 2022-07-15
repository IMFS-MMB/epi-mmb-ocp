<script setup lang="ts">
import Ocp from "./components/Ocp.vue";
import { useState } from "./state/state";
import { onMounted } from "vue";
import Spinner from "./components/Spinner.vue";

const { load, loading } = useState();

onMounted(() => {
  load();
});

</script>

<template>
  <Transition>
    <div v-if="loading" class="absolute top-0 right-0 bottom-0 left-0 flex justify-center items-center" style="padding-bottom:30vh;">
      <Spinner class="w-1/2 h-1/2" color="#5b8c8c"/>
    </div>
    <Ocp v-else-if="!loading"></Ocp>
  </Transition>
</template>

<style scoped>
.v-enter-active, .v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,.v-leave-to {
  opacity: 0;
}
</style>
