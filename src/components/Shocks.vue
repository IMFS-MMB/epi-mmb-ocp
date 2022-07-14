<script setup lang="ts">
import { useState } from "../state/state";
import Counter from "./Counter.vue";
import ClearButton from "./ClearButton.vue";
import List from "./List.vue";
import Popper from "vue3-popper";

const { shocks, selectedShocks, visibleShocks } = useState();

const initialInfections: Record<string, string> = {
  "Low Initial Infections": ".05%",
  "Medium Initial Infections": ".1%",
  "High Initial Infections": ".25%",
};
</script>
<template>
  <List class="shock-list">
    <template #title>
      <div class="flex flex-wrap items-baseline gap-2">
        <span>Shocks</span>
        <Counter :all="shocks" :selected="selectedShocks" />
        <div class="flex flex-wrap items-baseline gap-2">
          <ClearButton @click="selectedShocks = []" />
        </div>
      </div>
    </template>

    <template v-for="shock of visibleShocks" :key="shock.name">
      <Popper
        placement="bottom"
        :hover="true"
        :openDelay="1000"
        offsetDistance="0"
        :disabled="!initialInfections[shock.name]"
      >
        <label class="shock list-item">
          <input
            class="text-ocp-500 focus:ring-ocp-500"
            type="checkbox"
            :checked="selectedShocks[0] === shock"
            @change="selectedShocks = $event.target.checked ? [shock] : []"
          />
          <span>{{ shock.name }}</span>
        </label>
        <template #content>
          <div
            class="space-y-2 bg-white shadow-lg rounded-lg m-4 p-4 border border-1 border-gray-50 max-w-xs sm:max-w-md lg:max-w-lg xl:max-w-xl"
          >
            {{ initialInfections[shock.name] }} of the population are infected
            initially.
          </div>
        </template>
      </Popper>
    </template>
  </List>
</template>
