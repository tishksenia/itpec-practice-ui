<template>
  <div v-if="state === 'in_progress'">
    <InProgress :questions="questions" />
  </div>
  <div v-else>
    <!-- Results -->
  </div>
</template>

<script setup lang="ts">
import { defineProps, ref } from "vue";
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

const wrapper = ``;
</script>

<style scoped></style>
