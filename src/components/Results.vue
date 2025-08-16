<script setup lang="ts">

const props = defineProps(['score'])

</script>

<template>
  <h1>Results</h1>
  <p>Score: {{ props.score }}</p>
</template>