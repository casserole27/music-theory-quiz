<script setup lang="ts">
import quizData from '@/data';
import { ref, computed } from 'vue';

//props
const props = defineProps<{
  score: number
}>();

//data emitted to parent
const emit = defineEmits<{
  updateScore: [score: number]
  updateIncorrect: [ wrongAnswers: number ]
  quizComplete: []
}>()

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

const selectAnswer = (answer: string) => {
  //set the selected answer as the option passed from looping over the currentQuestion in the template
  selectedAnswer.value = answer;
  //show explanation when answer is selected
  showExplanation.value = true;
  if (answer === currentQuestion.value.correct) {
    showCorrectAnswer.value = true;
    emit('updateScore', 10)
  } else {
    wrongAnswers.value += 1;
    emit('updateIncorrect', 1)
  }
};

const nextQuestion = () => {
  if (currentQuestionIndex.value < quizData.length - 1) {
    showCorrectAnswer.value = false;
    currentQuestionIndex.value += 1;
    selectedAnswer.value = '';
    showExplanation.value = false;
  } else {
    currentQuestionIndex.value = 0;
    emit('quizComplete')
  }
};

</script>

<template>
    <p>{{ currentQuestion.question }}</p>
    <div v-for="option in currentQuestion.options" :key="option">
      <button 
        @click="selectAnswer(option)"
        :disabled="showExplanation"
        :class="{
          'selected': selectedAnswer === option,
          'correct': showExplanation && option === currentQuestion.correct,
          'incorrect': showExplanation && selectedAnswer === option && option !== currentQuestion.correct
        }"
      >
        {{ option }}
      </button>
    </div>

    <p>Score: {{ props.score }}</p>
    <p v-if="showCorrectAnswer"> {{ 'Correct! 🎉 🎶' }}</p>
    <p v-if="showExplanation" class="explanation">{{ currentQuestion.explanation }}</p>   
    
    <button 
      v-if="showExplanation" 
      @click="nextQuestion" 
      class="next-button"
    >
      {{ currentQuestionIndex < quizData.length - 1 ? 'Next Question' : 'Show Results' }}
    </button>
</template>

<style scoped>
.container {
  /*TODO responsive*/
  width: 800px;
  height: 800px;
  background-color: white;
  margin-top: 2rem;
  padding: 2rem;
  border: 10px solid #F38C68;
  border-radius: 1rem;
}

p {
  width: 75%;
  color: #323232;
  font-size: 1.5rem;
  text-align: center;
  margin: 1rem auto;
}

.explanation {
  background-color: lightgoldenrodyellow;
  border-radius: 1rem;
  padding: 1rem;
}

button {
  cursor: pointer;
  display: block;
  width: 75%;
  height: 4rem;
  font-size: 1.5rem;
  margin: .5rem auto;
  border-radius: 1rem;
  background-color: #6494BE;
  border: none;
}

button:not(:disabled):hover {
  background-color: #8eaec9;
}

button:focus {
  outline: 3px solid #2c7dc4;
}

.next-button {
  background-color: #F38C68;
}

.next-button:not(:disabled):hover {
  background-color: #fcb094;
}

.selected { border: 5px solid #6494BE; }
.correct { background: lightgreen; }
.incorrect { background: lightcoral; }
</style>