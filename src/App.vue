<script setup lang="ts">
import { ref } from 'vue';
import Quiz from './components/Quiz.vue';
import Results from './components/Results.vue';

const score = ref(0);
const isQuizComplete = ref(false);

</script>

<template>
  <Quiz 
    v-if="!isQuizComplete" 
    :score="score"
    @updateScore="score += $event"
    @quizComplete="isQuizComplete=true"
  />
  <Results 
    v-else 
    :score="score"
  />
</template>

<style scoped>

</style>
