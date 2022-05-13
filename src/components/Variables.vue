<script setup lang="ts">
import { useState } from "../state/state";
import Counter from "./Counter.vue";
import ClearButton from "./ClearButton.vue";
import List from "./List.vue";
import SelectAllButton from "./SelectAllButton.vue";

const { variables, selectedVariables, visibleVariables } = useState();
</script>
<template>
  <List class="variable-list">
    <template #title>
      <div class="flex flex-wrap items-baseline gap-2">
        <span>Variables</span>
        <Counter :all="variables" :selected="selectedVariables" />
        <div class="flex flex-wrap items-baseline gap-2">
          <SelectAllButton @click="selectedVariables = variables" />
          <ClearButton @click="selectedVariables = []" />
        </div>
      </div>
    </template>
    <label
      class="variable list-item"
      v-for="variable of visibleVariables"
      :key="variable.name"
    >
      <input
        class="text-ocp-500 focus:ring-ocp-500"
        type="checkbox"
        :value="variable"
        v-model="selectedVariables"
      />
      <span>{{ variable.name }}</span>
    </label>
  </List>
</template>
