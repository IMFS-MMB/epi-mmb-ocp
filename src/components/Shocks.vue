<script setup lang="ts">
import { useState } from "../state/state";
import Counter from "./Counter.vue";
import ClearButton from "./ClearButton.vue";
import List from "./List.vue";
import SelectAllButton from "./SelectAllButton.vue";

const { shocks, selectedShocks, visibleShocks } = useState();
</script>
<template>
  <List class="shock-list">
    <template #title>
      <div class="flex flex-wrap items-baseline gap-2">
        <span>Shocks</span>
        <Counter :all="shocks" :selected="selectedShocks" />
        <div class="flex flex-wrap items-baseline gap-2">
          <SelectAllButton @click="selectedShocks = shocks" />
          <ClearButton @click="selectedShocks = []" />
        </div>
      </div>
    </template>

    <label
      class="shock list-item"
      v-for="shock of visibleShocks"
      :key="shock.name"
    >
      <input
        class="text-ocp-500 focus:ring-ocp-500"
        :id="`shock-` + shock.id"
        type="checkbox"
        :value="shock"
        v-model="selectedShocks"
      />
      <span>{{ shock.name }}</span>
    </label>
  </List>
</template>
