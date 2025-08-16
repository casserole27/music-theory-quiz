<script setup lang="ts">
import quizData from '@/data';
import { ref, computed } from 'vue';

interface QuestionData {
  id: number;
  category: string;
  question: string;
  options: string[];
  correct: string;
  explanation: string;
}

const props = defineProps(['score'])
const emit = defineEmits(['updateScore', 'quizComplete'])

//Reactive currentQuestion properties for quiz questions
const selectedAnswer = ref('');
const showExplanation = ref(false);
const showCorrectAnswer = ref(false);
const currentQuestionIndex = ref(0);
const wrongAnswers = ref(0);

//This gives easy access to all the properties of the current question.
//Automatically recalculates when currentQuestionIndex changes
//Can use currentQuestion.question instead of indexing all the time
const currentQuestion = computed(() => quizData[currentQuestionIndex.value]);

</script>

<template>
<h1>Current question: {{ currentQuestion.question }}</h1>
</template>

<style scoped>
</style>