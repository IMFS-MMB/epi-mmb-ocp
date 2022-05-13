<template>
  <Menu as="div" class="relative inline-block text-left">
    <div>
      <MenuButton>
        <IconButton>
          <DownloadIcon class="w-6 h-6" />
          <ChevronDownIcon class="h-5 w-5" aria-hidden="true" />
        </IconButton>
      </MenuButton>
    </div>

    <transition
      enter-active-class="transition ease-out duration-100"
      enter-from-class="transform opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75"
      leave-from-class="transform opacity-100 scale-100"
      leave-to-class="transform opacity-0 scale-95"
    >
      <MenuItems
        class="origin-top-right absolute right-0 mt-2 w-32 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
      >
        <div class="py-1">
          <MenuItem v-slot="{ active }" @click="downloadSheet('csv')">
            <span class="menu-item" :class="{ active }">CSV</span>
          </MenuItem>

          <MenuItem v-slot="{ active }" @click="downloadSheet('xlsx')">
            <span class="menu-item" :class="{ active }">XLSX</span>
          </MenuItem>

          <MenuItem v-slot="{ active }" @click="downloadJson()">
            <span class="menu-item" :class="{ active }">JSON</span>
          </MenuItem>
        </div>
      </MenuItems>
    </transition>
  </Menu>
</template>

<script setup lang="ts">
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue";
import { ChevronDownIcon, DownloadIcon } from "@heroicons/vue/solid";
import IconButton from "./IconButton.vue";
import { useState } from "../state/state";

const { selectedModels, selectedShocks, selectedVariables, getData } =
  useState();

const makeArray = (length: number, fill: any = null) => new Array(length).fill(fill);

const getRows = () => {
  const head = [
    "model",
    "shock",
    "variable",
    ...makeArray(101).map((_, i) => i),
  ];

  const rows: (string | number)[][] = [head];

  for (const { name: model } of selectedModels.value) {
    for (const { name: shock } of selectedShocks.value) {
      for (const { name: variable } of selectedVariables.value) {
        rows.push([
          model,
          shock,
          variable,
          ...(getData(model, shock, variable) ?? makeArray(101)),
        ]);
      }
    }
  }

  return rows;
};

const downloadSheet = async (format: "csv" | "xlsx") => {
  const XLSX = await import("xlsx");

  const wb = XLSX.utils.book_new();
  const sheet = XLSX.utils.aoa_to_sheet(getRows());

  XLSX.utils.book_append_sheet(wb, sheet, "Epi-MMB");
  XLSX.writeFile(wb, `epi-mmb-results-${new Date().toISOString()}.${format}`);
};

const downloadJson = async () => {
  const { saveAs } = await import("file-saver");
  const json = JSON.stringify(getRows());
  var blob = new Blob([json], { type: "application/json;charset=utf-8" });

  saveAs(blob, `epi-mmb-results-${new Date().toISOString()}.json`);
};
</script>

<style scoped>
.menu-item {
  @apply block px-4 py-2 text-sm cursor-pointer text-gray-700;
}

.menu-item.active {
  @apply bg-gray-100 text-gray-900;
}
</style>
