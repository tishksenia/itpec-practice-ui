import type { Answer } from "../Answer/Answer";

interface Question {
    title: string;
    content: string;
    answers: Answer[];
    correctAnswer: string;
}

export type { Question };