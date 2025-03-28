import type { Answer } from "../Answer/Answer";

interface Question {
    id: string;
    content: string;
    answers: Answer[];
    correctAnswer: string;
};

export type { Question };