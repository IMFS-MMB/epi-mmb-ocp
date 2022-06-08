<script setup lang="ts">
import Models from "./Models.vue";
import Variables from "./Variables.vue";
import Shocks from "./Shocks.vue";
import Panel from "./Panel.vue";
import Results from "./Results.vue";
import { useState } from "../state/state";
import Welcome from "./Welcome.vue";
import Settings from "./Settings.vue";

const { hasSelection } = useState();
</script>

<template>
  <div class="h-screen overflow-hidden p-8 grid grid-cols-12 grid-rows-1 gap-8">
    <Panel class="col-span-3 min-h-0">
      <Models></Models>
    </Panel>

    <div class="col-span-2 grid grid-cols-1 gap-8">
      <Panel class="min-h-0"><Shocks /></Panel>
      <Panel class="min-h-0"><Variables /></Panel>
      <Panel class="min-h-0"><Settings /></Panel>
    </div>

    <Panel class="col-span-7 min-h-0 col-span-2 p-0">
      <Transition>
        <Results v-if="hasSelection" />
      </Transition>

      <Transition>
        <Welcome class="self-center" v-if="!hasSelection" />
      </Transition>
    </Panel>
  </div>
</template>
<style scoped>
.v-leave-active {
  display: none;
}

.v-enter-active {
  transition: opacity 0.5s ease;
}

.v-enter-from {
  opacity: 0;
}
</style>
