import { mount } from "@vue/test-utils";
import Navigation from "./Navigation.vue";
import { Question } from "../../Question/Question";

const mockQuestions: Question[] = [
  {
    answers: [],
    content: "Question 1",
    correctAnswer: "1",
    id: "test-1",
  },
  {
    answers: [],
    content: "Question 2",
    correctAnswer: "1",
    id: "test-2",
  },
  {
    answers: [],
    content: "Last Question",
    correctAnswer: "1",
    id: "test-3",
  },
];

describe("features/Test/ui/Navigation", () => {
  test("should fire handler with next question when user presses next", () => {
    const wrapper = mount(Navigation, {
      props: {
        questions: mockQuestions,
      },
    });

    const nextButton = wrapper.find("#next-button");
    nextButton.trigger("click");

    const nextQuestion = wrapper.emitted(
      "currentQuestionChange"
    )[0][0] as Question;
    expect(nextQuestion.id).toBe("test-2");
  });

  test("after navigating to the last one, should fire handler with the last question", async () => {
    const wrapper = mount(Navigation, {
      props: {
        questions: mockQuestions,
      },
    });

    const nextButton = wrapper.find("#next-button");
    await nextButton.trigger("click");
    await nextButton.trigger("click");

    const nextQuestion = wrapper.emitted(
      "currentQuestionChange"
    )[1][0] as Question;
    expect(nextQuestion.id).toBe("test-3");
    expect(nextQuestion.content).toBe("Last Question");
  });

  test("previous button should be disabled when current entry is the first", () => {
    const wrapper = mount(Navigation, {
      props: {
        questions: mockQuestions,
      },
    });

    const previousButton = wrapper.find("#previous-button");
    const nextButton = wrapper.find("#next-button");

    nextButton.trigger("click");
    previousButton.trigger("click");

    expect(previousButton.attributes()).toHaveProperty("disabled");
  });

  test("next button should be disabled after reaching the last element", async () => {
    const wrapper = mount(Navigation, {
      props: {
        questions: mockQuestions,
      },
    });

    const nextButton = wrapper.find("#next-button");

    nextButton.trigger("click");
    nextButton.trigger("click");

    // update DOM
    await wrapper.vm.$forceUpdate();

    expect(nextButton.attributes()).toHaveProperty("disabled");
  });

  describe("Arrow navigation", () => {
    test("user should be able to navigate with arrows", async () => {
      const wrapper = mount(Navigation, {
        props: {
          questions: mockQuestions,
        },
      });

      window.dispatchEvent(new KeyboardEvent("keydown", { key: "ArrowRight" }));
      window.dispatchEvent(new KeyboardEvent("keydown", { key: "ArrowRight" }));
      window.dispatchEvent(new KeyboardEvent("keydown", { key: "ArrowLeft" }));

      const nextQuestion = wrapper.emitted(
        "currentQuestionChange"
      )[0][0] as Question;
      expect(nextQuestion.id).toBe("test-2");
    });

    test("user should not be able to navigate to previous card when on first card", () => {
      const wrapper = mount(Navigation, {
        props: {
          questions: mockQuestions,
        },
      });

      window.dispatchEvent(new KeyboardEvent("keydown", { key: "ArrowLeft" }));
      const nextQuestion = wrapper.emitted("currentQuestionChange");

      expect(nextQuestion).toBeUndefined();
    });
    test("user should not be able to navigate to next card when on last card", () => {
      const wrapper = mount(Navigation, {
        props: {
          questions: mockQuestions,
        },
      });

      window.dispatchEvent(new KeyboardEvent("keydown", { key: "ArrowRight" }));
      window.dispatchEvent(new KeyboardEvent("keydown", { key: "ArrowRight" }));
      window.dispatchEvent(new KeyboardEvent("keydown", { key: "ArrowRight" }));
      window.dispatchEvent(new KeyboardEvent("keydown", { key: "ArrowRight" }));
      const nextQuestion = wrapper.emitted("currentQuestionChange");

      expect(nextQuestion.length).toBe(2);
    });
  });
  describe("Position display", () => {
    test("should display 1/3 initially for set of 3 questions", () => {
      const wrapper = mount(Navigation, {
        props: {
          questions: mockQuestions,
        },
      });

      expect(wrapper.html()).toMatch(/1 \/ 3/);
    });
    test("should display 3/3 after navigating to the end", async () => {
      const wrapper = mount(Navigation, {
        props: {
          questions: mockQuestions,
        },
      });

      const nextButton = wrapper.find("#next-button");

      await nextButton.trigger("click");
      await nextButton.trigger("click");

      expect(wrapper.html()).toMatch(/3 \/ 3/);
    });
  });
});
