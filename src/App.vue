<script setup lang="ts">
import Question from "./entities/Question/Question.vue";

const handleAnswer = (questionId: string, isCorrect: boolean) => {
}

</script>

<template>
  <Question
    :question="{
      content: `Q. When three apples are removed at random from a box that contains four green apples and eight red apples, what is the probability that the first two apples are green and the third (or last) apple is red? Here, once an apple is removed, it is not put back into the box. `,
      answers: [
        { id: '1', content: '1/18' },
        { id: '2', content: '4/55' },
        { id: '3', content: '8/121' },
        { id: '2', content: '2/27' },
      ],
      correctAnswer: '1',
      id: 'test-id'
    }"
    @answer='handleAnswer'
  />
</template>

<style scoped></style>
