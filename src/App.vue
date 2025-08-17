<script setup lang="ts">
import { ref } from 'vue';
import Quiz from './components/Quiz.vue';
import Results from './components/Results.vue';

const score = ref(0);
const isQuizComplete = ref(false);
const wrongAnswers = ref(0);

</script>

<template>
  <div class="container">
    <Quiz 
      v-if="!isQuizComplete" 
      :score="score"
      @updateScore="score += $event"
      @updateIncorrect="wrongAnswers += $event"
      @quizComplete="isQuizComplete=true"
    />
    <Results 
      v-else 
      :score="score"
      :incorrect="wrongAnswers"
      @quizStartOver="isQuizComplete=false; score=0; wrongAnswers=0"
    />
  </div>
</template>

<style scoped>
  .container {
    /*TODO responsive*/
    width: 800px;
    height: 800px;
    background-color: white;
    margin-top: 2rem;
    padding: 2rem;
    border: 1rem solid #F38C68;
    border-radius: 1rem;
  }
</style>
