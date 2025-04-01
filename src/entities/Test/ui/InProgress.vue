<template>
  <div>
    <QuestionCard
      @answer="handleAnswer"
      :question="selectedQuestion"
      :key="selectedQuestion.id"
    />
    <Navigation
      :questions="questions"
      @current-question-change="handleQuestionChange"
      ref="childRef"
    />
  </div>
</template>

<script setup lang="ts">
import { defineProps, ref } from "vue";
import { Question } from "../../Question/Question";
import QuestionCard from "../../Question/QuestionCard.vue";
import Navigation from "./Navigation.vue";

interface Props {
  questions: Question[];
}
const { questions } = defineProps<Props>();
const selectedQuestion = ref<Question>(questions[0]);
const childRef = ref(null);
const QUESTION_TRANSITION_DURATION = 500;

const emit = defineEmits(["answer"]);

const handleQuestionChange = (question: Question) => {
  selectedQuestion.value = question;
};

const handleAnswer = (questionId: string, isCorrect: boolean) => {
  emit("answer", { questionId, isCorrect });
  setTimeout(() => {
    childRef.value.canGoNext && childRef.value.handleNavigation("next");
  }, QUESTION_TRANSITION_DURATION);
};
</script>

<style scoped></style>
