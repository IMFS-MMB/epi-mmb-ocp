<script setup lang="ts"></script>
<template>
  <div class="overflow-auto h-full flex flex-col">
    <div class="mb-2"><slot name="title" /></div>
    <div
      class="border-y border-gray-300 overflow-auto overflow-x-hidden flex-grow flex flex-col scrolling-shadows"
    >
      <slot />
    </div>
  </div>
</template>
