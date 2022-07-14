<script setup lang="ts">
import Models from "./Models.vue";
import Variables from "./Variables.vue";
import Shocks from "./Shocks.vue";
import Panel from "./Panel.vue";
import Results from "./Results.vue";
import { useState } from "../state/state";
import Welcome from "./Welcome.vue";
import Settings from "./Settings.vue";
import SlideOver from "./SlideOver.vue";
import { MenuIcon } from "@heroicons/vue/outline";
const { hasSelection, slideOverVisible } = useState();
</script>

<template>
  <SlideOver>
    <div class="h-full py-4 2xl:py-8">
      <div class="h-full py-4 pr-3 bg-white rounded-r-lg shadow-lg">
        <div class="h-full overflow-y-auto pl-6 pr-4 space-y-4">
          <div><Models /></div>
          <div><Shocks /></div>
          <div><Variables /></div>
          <div><Settings /></div>
        </div>
      </div>
    </div>
  </SlideOver>

  <div class="h-screen overflow-hidden p-4 2xl:p-8 flex gap-4 2xl:gap-8">
    <div
      class="flex landscape:xl:hidden justify-center items-center rounded-r-lg shadow-lg bg-white hover:bg-gray-100 select-none cursor-pointer -ml-4 2xl:-ml-8"
      @click="slideOverVisible = true"
    >
      <MenuIcon class="h-4 w-4 m-2" />
    </div>

    <Panel class="hidden landscape:xl:flex flex-none" style="min-width: 250px">
      <Models class="min-h-0"></Models>
    </Panel>

    <div
      class="hidden landscape:xl:grid grid-cols-1 gap-4 2xl:gap-8 min-w-min flex-none"
      style="min-width: 250px"
    >
      <Panel class="min-h-0"><Shocks /></Panel>
      <Panel class="min-h-0"><Variables /></Panel>
      <Panel class="min-h-0"><Settings /></Panel>
    </div>

    <Panel class="flex-grow min-h-0 col-span-2 !p-0 overflow-hidden">
      <Transition>
        <Results v-if="hasSelection" />
      </Transition>

      <Transition>
        <Welcome class="self-center p-4 2xl:p-8" v-if="!hasSelection" />
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
