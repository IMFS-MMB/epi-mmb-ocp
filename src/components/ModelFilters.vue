<script setup lang="ts">
import { FilterIcon, XIcon } from "@heroicons/vue/outline";
import { useState } from "../state/state";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";
import IconButton from "./IconButton.vue";

const { textFilter, featureFilter, modelFeatures } = useState();
</script>

<template>
  <Popover class="relative">
    <PopoverButton>
      <IconButton><FilterIcon class="h-5 w-5" aria-hidden="true" /></IconButton>
    </PopoverButton>

    <PopoverPanel
      v-slot="{ close }"
      class="absolute z-10 w-64 -top-4 -right-4 p-4 bg-white shadow space-y-4"
    >
      <div class="flex flex-row gap-4">
        <input
          type="text"
          class="flex-grow shadow-sm block w-full sm:text-sm border-gray-300 rounded focus:ring-ocp-500 focus:ring-offset-0 focus:border-ocp-500"
          placeholder="Filter models..."
          v-model="textFilter"
        />
      </div>

      <div class="flex flex-col overflow-hidden">
        <label class="feature list-item" v-for="feature of modelFeatures">
          <input
            class="text-ocp-500 focus:ring-ocp-500"
            type="checkbox"
            v-model="featureFilter"
            :id="`feature-` + feature"
            :value="feature"
          />
          <span>{{ feature }}</span>
        </label>
      </div>
    </PopoverPanel>
  </Popover>
</template>
