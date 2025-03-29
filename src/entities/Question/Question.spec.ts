import { mount } from '@vue/test-utils';
import Question from './Question.vue';


describe('entities/Question', () => {
    test('hello world', () => {
        const wrapper = mount(Question, {
            props: {
                question: {
                    answers: [{
                        content: 'Answer 1',
                        id: '1'
                    }],
                    content: 'Hello world',
                    correctAnswer: '1',
                    id: 'test-id'
                }
            }
        });

        expect(wrapper.text()).toMatch(/Hello world/);
        expect(wrapper.text()).toMatch(/Answer 1/);

    })
})