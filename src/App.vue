<script setup lang="ts">
import { ref } from 'vue';
import Quiz from './components/Quiz.vue';
import Results from './components/Results.vue';

const score = ref(0);
const isQuizComplete = ref(false);

//add to quiz component for emits: 
// @updateScore="score += $event"
// @quizComplete="isQuizComplete = true"

</script>

<template>
  <Quiz 
    v-if="!isQuizComplete" 
    :score="score"
  />
  <Results 
    v-else 
    :score="score"
  />
</template>

<style scoped>

</style>
