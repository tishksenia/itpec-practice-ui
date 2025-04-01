<template>
  <div v-if="state === 'in_progress'">
    <InProgress :questions="questions" @answer="handleAnswer" />
  </div>
  <div v-else>
    <!-- Results -->
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Question } from "../Question/Question";
import InProgress from "./ui/InProgress.vue";

interface Result {
  questionId: string;
  isCorrect: boolean;
}

interface Props {
  questions: Question[];
}

const { questions } = defineProps<Props>();
const state = ref<"in_progress" | "complete">('in_progress');

const results = ref<Result[]>([]);

const handleAnswer = (result: Result) => {
  const index = results.value.findIndex(r => result.questionId === r.questionId);
  if(index === -1) {
    results.value.push(result);
  }
  else {
    results.value[index] = result;
  }
}
</script>

<style scoped></style>
