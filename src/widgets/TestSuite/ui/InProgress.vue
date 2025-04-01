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
      @finish-test="handleFinishTest"
      ref="childRef"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Navigation from "./Navigation.vue";
import QuestionCard, { Question } from "src/entities/Question";
import { Result } from "./model";

const QUESTION_TRANSITION_DURATION = 500;

interface Props {
  questions: Question[];
}

const { questions } = defineProps<Props>();
const selectedQuestion = ref<Question>(questions[0]);
const results = ref<Result[]>([]);

const childRef = ref(null);

const emit = defineEmits(["answer", "finishTest"]);

const handleQuestionChange = (question: Question) => {
  selectedQuestion.value = question;
};

const updateResults = ({ questionId, isCorrect }: Result) => {
  const index = results.value.findIndex(
    (result) => questionId === result.questionId
  );
  if (index === -1) {
    results.value.push({ questionId, isCorrect });
  } else {
    results.value[index] = { questionId, isCorrect };
  }
};

const handleAnswer = (questionId: string, isCorrect: boolean) => {
  updateResults({ questionId, isCorrect });
  setTimeout(
    () => childRef.value.canGoNext && childRef.value.handleNavigation("next"),
    QUESTION_TRANSITION_DURATION
  );
};

const handleFinishTest = () => {
  emit("finishTest", results);
}
</script>

<style scoped></style>
