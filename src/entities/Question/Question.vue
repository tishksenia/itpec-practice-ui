<template>
    <div :class="wrapper">
        <span v-html="question.content" />
        <div :class="answersWrapper">
            <div v-for="answer in question.answers" :key="answer.id">
                <Answer :answer="answer" @question-choice="handleQuestionChoice" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { defineProps } from 'vue';
    import type { Question } from './Question.ts';
    import Answer from '../Answer/Answer.vue';
    interface Props {
        question: Question
    }
    const { question } = defineProps<Props>();
    const emit = defineEmits(["answer"])

    function handleQuestionChoice(id: string) {
        emit('answer', question.id, question.correctAnswer === id);
    }

    const wrapper = 'shadow-lg max-w-90 md:max-w-3/6 rounded p-4';
    const answersWrapper = "grid grid-cols-2 gap-4 pt-4";
</script>

<style scoped>
</style>