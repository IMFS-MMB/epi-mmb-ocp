<script setup lang="ts">
import { useState } from "../state/state";
import Counter from "./Counter.vue";
import ClearButton from "./ClearButton.vue";
import ModelFilters from "./ModelFilters.vue";
import List from "./List.vue";
import Popper from "vue3-popper";

const {
  selectedModels,
  models: allModels,
  visibleModelsByType,
  getModelTitle,
} = useState();
</script>

<template>
  <div class="flex justify-between items-baseline">
    <div class="space-x-2">
      <span>Models</span>
      <Counter :all="allModels" :selected="selectedModels" />
      <ClearButton @click="selectedModels = []" />
    </div>
    <ModelFilters />
  </div>

  <div class="grid gap-8 overflow-auto">
    <List
      class="model-list flex flex-col"
      v-for="(models, type) of visibleModelsByType"
    >
      <template #title>{{ type }}</template>

      <div v-if="!models.length" class="text-gray-400 text-sm text-center p-1">
        None of the models in this group match your filters
      </div>

      <template v-for="model of models" :key="model.name">
        <Popper
          placement="bottom"
          :hover="true"
          :openDelay="1000"
          offsetDistance="0"
        >
          <label class="model list-item">
            <input
              class="text-ocp-500 focus:ring-ocp-500"
              :id="`model-` + model.id"
              type="checkbox"
              :value="model"
              v-model="selectedModels"
            />
            <span>{{ getModelTitle(model) }}</span>
          </label>
          <template #content>
            <div
              class="space-y-2 bg-white shadow-lg rounded-lg m-4 p-4 border border-1 border-gray-50 max-w-xs sm:max-w-md lg:max-w-lg xl:max-w-xl"
            >
              <div class="mb-4">
                {{ model.authors || "unknown author" }}
                ({{ model.year || "unknown year" }}), {{ model.title }},
                <span class="italic">{{
                  model.journal || "unknown journal"
                }}</span>
              </div>

              <div v-html="model.teaser" />
            </div>
          </template>
        </Popper>
      </template>
    </List>
  </div>
</template>
