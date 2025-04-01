import type { Answer } from "./Answer";

interface Question {
    id: string;
    content: string;
    answers: Answer[];
    correctAnswer: string;
};

export type { Question };