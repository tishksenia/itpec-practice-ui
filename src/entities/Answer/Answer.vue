<template>
    <div :class="wrapper">
        <span>{{ answer.id }}</span>
        <span>{{ answer.content }}</span>
    </div>
</template>

<script setup lang="ts">
    import { ref, defineProps } from 'vue';
    import type { Answer } from './Answer.ts';

    interface Props {
        answer: Answer
    }

    const { answer } = defineProps<Props>();

    const wrapper = ref('border border-sky-500 ');
</script>

<style scoped>
</style>