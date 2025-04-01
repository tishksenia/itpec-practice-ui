<template>
  <div :class="navigationWrapper">
    <div :class="counterWrapper">{{ position + 1 }} / {{ questions.length }}</div>
    <div :class="buttonsWrapper">
      <button
        @click="handleNavigation('previous')"
        :disabled="!canGoPrevious"
        :class="navigationButtonClass"
        id="previous-button"
      >
        <img :src="previousIconSrc" alt="Previous Question" />
      </button>
      <button
        @click="handleNavigation('next')"
        :disabled="!canGoNext"
        :class="navigationButtonClass"
        id="next-button"
      >
        <img :src="nextIconSrc" alt="Next Question" />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from "vue";
import { Question } from "src/entities/Question";
import nextIconSrc from "./icons/nextIcon.svg";
import previousIconSrc from "./icons/previousIcon.svg";

interface Props {
  questions: Question[];
}

const emit = defineEmits(["currentQuestionChange"]);

const { questions } = defineProps<Props>();

const position = ref<number>(0);

const canGoNext = computed(() => {
  return position.value < questions.length - 1;
});
const canGoPrevious = computed(() => {
  return position.value > 0;
});

const handleNavigation = (moveTo: "next" | "previous") => {
  const newPosition =
    moveTo === "next" ? position.value + 1 : position.value - 1;

  position.value = newPosition;
  emit("currentQuestionChange", questions[newPosition]);
};

const handleKeyDown = (event: KeyboardEvent) => {
  if (event.key === "ArrowLeft" && canGoPrevious.value) {
    handleNavigation("previous");
  }
  if (event.key === "ArrowRight" && canGoNext.value) {
    handleNavigation("next");
  }
};

onMounted(() => {
  window.addEventListener("keydown", handleKeyDown);
});

onUnmounted(() => {
  window.removeEventListener("keydown", handleKeyDown);
});

defineExpose({
  handleNavigation,
  canGoNext
});

const navigationButtonClass = `
  bg-sky-500 hover:bg-sky-200 hover:cursor-pointer
  disabled:bg-sky-200 disabled:cursor-not-allowed
  rounded
  p-1
  text-white
`;
const navigationWrapper = `
  shadow-lg max-w-90 md:max-w-3/6 rounded p-2 mt-2 border-1 border-slate-200 bg-white
`;

const buttonsWrapper = `flex justify-between`;

const counterWrapper = `mb-2 text-xs`;
</script>

<style scoped></style>
