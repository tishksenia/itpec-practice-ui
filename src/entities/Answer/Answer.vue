<template>
    <button :class="wrapper" @click="handleQuestionChoice">
        <span>{{ answer.id }}</span>
        <span v-html="answer.content" />
    </button>
</template>

<script setup lang="ts">
    import { defineProps, defineEmits } from 'vue';
    import type { Answer } from './Answer.ts';

    interface Props {
        answer: Answer
    }
    
    const { answer } = defineProps<Props>();
    const emit = defineEmits(["questionChoice"])

    function handleQuestionChoice() {
        emit('questionChoice', answer.id);
    }

    const wrapper = `w-full p-2
        border border-sky-500 rounded 
        hover:bg-sky-500/2 focus:bg-sky-500/10
        text-left
        transition cursor-pointer`;
</script>

<style scoped>
</style>