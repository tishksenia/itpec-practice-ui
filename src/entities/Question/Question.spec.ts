import { mount } from "@vue/test-utils";
import Question from "./Question.vue";

const mockQuestion = {
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
  content: "Hello world",
  correctAnswer: "1",
  id: "test-id",
};

describe("entities/Question", () => {
  test("Should render the question content and its answers", () => {
    const wrapper = mount(Question, {
      props: {
        question: mockQuestion,
      },
    });

    expect(wrapper.text()).toMatch(/Hello world/);
    expect(wrapper.text()).toMatch(/Answer 1/);
  });

  test("When selecting correct answer, should call the callback with correct question id and isCorrect = true", () => {
    const wrapper = mount(Question, {
      props: {
        question: mockQuestion,
      },
    });

    const button = wrapper.find(`#answer_1`);
    button.trigger("click");

    const answerEventArguments = wrapper.emitted("answer")[0];
    expect(answerEventArguments[0]).toEqual(mockQuestion.id);
    expect(answerEventArguments[1]).toEqual(true);
  });

  test("When selecting a wrong answer, should call the callback with correct question id and isCorrect = false", () => {
    const wrapper = mount(Question, {
      props: {
        question: mockQuestion,
      },
    });

    const button = wrapper.find("#answer_2");
    button.trigger("click");

    const answerEventArguments = wrapper.emitted("answer")[0];
    expect(answerEventArguments[0]).toEqual(mockQuestion.id);
    expect(answerEventArguments[1]).toEqual(false);
  });
});
