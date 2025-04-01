<script setup lang="ts">
import Test from "./entities/Test/TestSuite.vue";

const mockQuestions = [
    {
        answers: [
          {
            content: "Answer 1",
            id: "1",
          },
          {
            content: "Answer 2",
            id: "2",
          },
          {
            content: "Answer 3",
            id: "3",
          },
          {
            content: "Answer 4",
            id: "4",
          },
        ],
        content: "First Question",
        correctAnswer: "1",
        id: "test-id-1",
      },
      {
        answers: [
          {
            content: "Answer 1",
            id: "1",
          },
          {
            content: "Answer 2",
            id: "2",
          },
          {
            content: "Answer 3",
            id: "3",
          },
          {
            content: "Answer 4",
            id: "4",
          },
        ],
        content: "2nd",
        correctAnswer: "1",
        id: "test-id-2",
      },
      {
        answers: [
          {
            content: "Answer 1",
            id: "1",
          },
          {
            content: "Answer 2",
            id: "2",
          },
          {
            content: "Answer 3",
            id: "3",
          },
          {
            content: "Answer 4",
            id: "4",
          },
        ],
        content: "3rd",
        correctAnswer: "1",
        id: "test-id-3",
      },
      {
        answers: [
          {
            content: "Answer 1",
            id: "1",
          },
          {
            content: "Answer 2",
            id: "2",
          },
          {
            content: "Answer 3",
            id: "3",
          },
          {
            content: "Answer 4",
            id: "4",
          },
        ],
        content: "Last",
        correctAnswer: "1",
        id: "test-id-4",
      },
];
</script>

<template>
  <Test :questions="mockQuestions" />
</template>

<style scoped></style>
