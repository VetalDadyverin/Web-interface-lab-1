import { mount } from '@vue/test-utils'
import AboutView from '@/views/AboutView.vue';

describe('AboutView.vue testing', () => {
    const wrapper = mount(AboutView)

    test('does a wrapper exist', () => {
        expect(wrapper.exists()).toBe(true)
    })

    it('checks image', () => {
        const images_count = wrapper.findAll('img');
        expect(images_count.length).toBe(1);
    });
})