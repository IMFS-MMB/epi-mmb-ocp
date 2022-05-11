<script setup lang="ts">
import { FilterIcon } from "@heroicons/vue/outline";
import { useState } from "../state/state";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";
import ClearButton from "./ClearButton.vue";

const { textFilter, featureFilter, clearFilters, modelFeatures } = useState();

const scheduleFocus = () => {
  setTimeout(() => {
    try {
      document.getElementById('filter-text')?.focus();
    } catch (e) {
      // noop
    }
  })
}
</script>

<template>
  <Popover class="relative">
    <PopoverButton>
      <button
        type="button"
        class="inline-flex gap-1 items-center p-2 border border-transparent rounded text-gray-700 bg-white hover:bg-ocp-500 hover:text-white focus:ring-transparent"
        @click="scheduleFocus"
      >
        <span class="text-xs">Filter</span>
        <FilterIcon class="h-5 w-5" aria-hidden="true" />
      </button>
    </PopoverButton>

    <PopoverPanel
      v-slot="{ close }"
      class="absolute z-10 w-64 -top-4 -right-4 p-4 bg-white shadow space-y-4"
    >
      <div class="flex flex-row gap-4 items-center">
        <input
          id="filter-text"
          type="text"
          class="flex-grow shadow-sm block w-full sm:text-sm border-gray-300 rounded focus:ring-ocp-500 focus:ring-offset-0 focus:border-ocp-500"
          placeholder="Filter models..."
          v-model="textFilter"
        />

        <ClearButton @click="clearFilters">Clear</ClearButton>
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
