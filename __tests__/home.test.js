import { mount } from '@vue/test-utils'
import HomeView from '@/views/HomeView.vue';

describe('HomeView.vue testing', () => {

    const $store = {
        commit: jest.fn(),
        state: {
            grid: ''
        }
    }

    const wrapper = mount(HomeView, {
        global: {
            mocks: {
                $store
            }
        }
    });

    test('does a wrapper exist', () => {
        expect(wrapper.exists()).toBe(true)
    })
   
})