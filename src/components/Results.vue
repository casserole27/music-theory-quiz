<script setup lang="ts">
import quizData from '@/data';
import { computed } from 'vue';

const props = defineProps(['score', 'incorrect']);
const emit = defineEmits(['quizStartOver'])
const correctAnswers = computed(() => `${quizData.length - props.incorrect} / ${quizData.length}`);
const scorePercentage = Math.round(((quizData.length - props.incorrect) / quizData.length) * 100);
const finalScore = computed(() => `${scorePercentage}%`);

const startQuizOver = () => emit('quizStartOver');

</script>

<template>
  <div class="fade-in">
    <h1>Results</h1>
    <p>Correct Answers: {{ correctAnswers }}</p>
    <p>Final Score: {{ scorePercentage > 50 ? `${finalScore} 🎵🎉🎵🎉` : finalScore }}</p>
    <button @click="startQuizOver">Start over</button>
  </div>
</template>

<style scoped>
  h1 {
    display: block;
    width: 75%;
    color: #323232;
    font-size: 2rem;
    text-align: center;
    background-color: lightgoldenrodyellow;
    padding: 2rem;
    margin: 2rem auto;
    border-radius: 1rem;
  }

  p {
    color: #323232;
    font-size: 1.5rem;
    text-align: center;
    margin: 1rem auto;
  }

  button {
    cursor: pointer;
    display: block;
    width: 75%;
    height: 4rem;
    font-size: 1.5rem;
    margin: 2rem auto;
    border-radius: 1rem;
    background-color: #6494BE;
    border: none;
  }

  button:hover {
    background-color: #8eaec9;
  }

  .fade-in {
  animation: fadeIn 1s ease-in-out;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

</style>