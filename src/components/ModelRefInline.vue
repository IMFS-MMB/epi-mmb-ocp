<script>
export default {
  props: { model: {} },
};
</script>
<template>
  <span v-if="model">
    {{ model.authors || 'unknown author' }} ({{ model.year || 'unknown year' }}), <span class="italic">{{ model.journal || 'unknown journal' }}</span>
  </span>
</template>
