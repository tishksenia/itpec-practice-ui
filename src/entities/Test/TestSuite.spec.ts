import { mount } from "@vue/test-utils";
import TestSuite from "./TestSuite.vue";
import { Question } from "../Question/Question";

const mockQuestions: Question[] = [
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
    content: "Question 1",
    correctAnswer: "1",
    id: "test-1",
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
    content: "Question 2",
    correctAnswer: "1",
    id: "test-2",
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
    content: "Last Question",
    correctAnswer: "1",
    id: "test-3",
  },
];

const QUESTION_TRANSITION_DURATION = 500;

describe("entities/TestSuite", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  test("should move to the next question after receiving an answer", async () => {
    const wrapper = mount(TestSuite, {
      props: {
        questions: mockQuestions,
      },
    });

    await wrapper.find("#answer_2").trigger("click");
    vi.advanceTimersByTime(QUESTION_TRANSITION_DURATION);
    await wrapper.vm.$forceUpdate();
    expect(wrapper.html()).toMatch(/Question 2/);
    expect(wrapper.html()).toMatch(/2 \/ 3/);
  });
  test("should not move to the next question after receiving an answer on the last question", async () => {
    const wrapper = mount(TestSuite, {
      props: {
        questions: mockQuestions,
      },
    });

    await wrapper.find("#answer_2").trigger("click");
    vi.advanceTimersByTime(QUESTION_TRANSITION_DURATION);

    await wrapper.find("#answer_2").trigger("click");
    vi.advanceTimersByTime(QUESTION_TRANSITION_DURATION);
    
    await wrapper.find("#answer_2").trigger("click");
    vi.advanceTimersByTime(QUESTION_TRANSITION_DURATION);

    expect(wrapper.html()).toMatch(/Last Question/);
    expect(wrapper.html()).toMatch(/3 \/ 3/);
  });
});
