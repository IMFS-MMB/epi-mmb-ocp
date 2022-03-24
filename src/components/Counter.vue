<script setup lang="ts">
defineProps<{ all: any[]; selected: any[] }>();
</script>

<template>
  <span>({{ selected.length }}/{{ all.length }})</span>
</template>
