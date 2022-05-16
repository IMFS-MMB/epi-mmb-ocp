<template>
  <div class="overflow-auto h-full flex flex-col -m-2 p-2 space-y-2">
    <div class="pb-2 mb-2 border-b border-gray-300">Settings</div>

    <div>
      <div class="flex items-center justify-between">
        <h2 class="text-sm text-gray-900">Name models by</h2>
      </div>

      <RadioGroup v-model="heading" class="mt-2">
        <div class="grid grid-cols-3 gap-3 sm:grid-cols-2">
          <RadioGroupOption
            as="template"
            v-for="option in headingOptions"
            :key="option.name"
            :value="option.value"
            v-slot="{ active, checked }"
          >
            <div
              :class="[
                checked
                  ? 'bg-white-500 border-2 border-ocp-500  text-white bg-ocp-500'
                  : 'bg-white border-gray-200 text-gray-900 hover:bg-gray-50',
                'border !ring-0 outline-0 rounded-md py-3 px-3 flex items-center justify-center text-sm   sm:flex-1 cursor-pointer',
              ]"
            >
              <RadioGroupLabel as="p" class="select-none whitespace-nowrap">
                {{ option.name }}
              </RadioGroupLabel>
            </div>
          </RadioGroupOption>
        </div>
      </RadioGroup>
    </div>

    <div>
      <div class="flex items-center justify-between">
        <h2 class="text-sm text-gray-900">Group by</h2>
      </div>

      <RadioGroup v-model="grouping" class="mt-2">
        <div class="grid grid-cols-3 gap-3 sm:grid-cols-2">
          <RadioGroupOption
            as="template"
            v-for="option in groupingOptions"
            :key="option.name"
            :value="option.value"
            v-slot="{ active, checked }"
          >
            <div
              :class="[
                checked
                  ? 'bg-white-500 border-2 border-ocp-500  text-white bg-ocp-500'
                  : 'bg-white border-gray-200 text-gray-900 hover:bg-gray-50',
                'border !ring-0 outline-0 rounded-md py-3 px-3 flex items-center justify-center text-sm   sm:flex-1 cursor-pointer',
              ]"
            >
              <RadioGroupLabel as="p" class="select-none">
                {{ option.name }}
              </RadioGroupLabel>
            </div>
          </RadioGroupOption>
        </div>
      </RadioGroup>
    </div>

    <div>
      <div class="flex items-center justify-between">
        <h2 class="text-sm text-gray-900">Charts per row</h2>
      </div>

      <RadioGroup v-model="maxColumns" class="mt-2">
        <div class="grid gap-3 grid-cols-6">
          <RadioGroupOption
            as="template"
            v-for="option in colOptions"
            :key="option.name"
            :value="option.value"
            v-slot="{ active, checked }"
          >
            <div
              :class="[
                active ? '' : '',
                checked
                  ? 'bg-white-500 border-2 border-ocp-500  text-white bg-ocp-500'
                  : 'bg-white border-gray-200 text-gray-900 hover:bg-gray-50',
                'border !ring-0 outline-0 rounded-md py-3 px-3 flex items-center justify-center text-sm   sm:flex-1 cursor-pointer',
              ]"
            >
              <RadioGroupLabel as="p" class="select-none">
                {{ option.name }}
              </RadioGroupLabel>
            </div>
          </RadioGroupOption>
        </div>
      </RadioGroup>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RadioGroup, RadioGroupLabel, RadioGroupOption } from "@headlessui/vue";
import { Grouping, Heading, useState } from "../state/state";

const { grouping, heading,  maxColumns } = useState();

const headingOptions = [
  { name: "Short Name", value: Heading.Short },
  { name: "Reference", value: Heading.Reference },
];
const groupingOptions = [
  { name: "Variable", value: Grouping.Variable },
  { name: "Model", value: Grouping.Model },
];
const colOptions = [
  { name: 1, value: 1 },
  { name: 2, value: 2 },
  { name: 3, value: 3 },
  { name: 4, value: 4 },
  { name: 6, value: 6 },
  { name: 8, value: 8 },
];
</script>
