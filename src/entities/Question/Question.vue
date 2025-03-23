<template>
    <div :class="className">
        <h1>{{ question.title }}</h1>
        <span v-html="question.content" />
        <div v-for="answer in question.answers">
            <Answer :answer="answer"></Answer>
        </div>
        
    </div>
</template>

<script setup lang="ts">
    import { ref, defineProps } from 'vue';
    import type { Question } from './Question.ts';
    import Answer from '../Answer/Answer.vue';
    interface Props {
        question: Question
    }
    const { question } = defineProps<Props>();

    const className = ref('wrapper shadow-lg w-5/6 rounded p-2');
</script>

<style scoped>
    .wrapper {
        display: block;
    }
</style>