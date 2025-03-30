<template>
    <div :class="wrapper">
        <QuestionCard :question="selectedQuestion" :key="selectedQuestion.id"/>
        <Navigation :questions="questions" @current-question-change="handleQuestionChange"></Navigation>
    </div>
</template>

<script setup lang="ts">
    import { defineProps, ref } from 'vue';
import { Question } from '../../Question/Question';
import QuestionCard from '../../Question/QuestionCard.vue';
import Navigation from './Navigation.vue';

    interface Result {
        questionId: string;
        isCorrect: boolean;
    }

    interface Props {
        questions: Question[];
    }
    const { questions } = defineProps<Props>();
    const selectedQuestion = ref<Question>(questions[0]);
    
    const emit = defineEmits(["answer"])

    const handleQuestionChange = (question: Question) => {
        selectedQuestion.value = question;
    }

    const wrapper = ``;
</script>

<style scoped>
</style>