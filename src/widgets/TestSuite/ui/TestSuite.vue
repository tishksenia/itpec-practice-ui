<template>
  <div v-if="state === 'in_progress'">
    <InProgress :questions="questions" @finish-test="handleFinishTest" />
  </div>
  <div v-else>
    {{ JSON.stringify(results) }}
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Question } from "src/entities/Question";
import InProgress from "./InProgress.vue";
import { Result } from "./model";

interface Props {
  questions: Question[];
}

const { questions } = defineProps<Props>();
const state = ref<"in_progress" | "complete">("in_progress");

const results = ref<Result[]>([]);

const handleFinishTest = (finalResults: Result[]) => {
  results.value = finalResults;
  state.value = "complete";
};
</script>

<style scoped></style>
