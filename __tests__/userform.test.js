import { mount } from '@vue/test-utils'
import UserForm from '@/views/UserForm.vue';

describe('UserForm.vue testing', () => {

    const $store = {
        commit: jest.fn(),
        state: {
            userView: '',
            currentUser: {
                user_name: 'name',
                password: 'pass',
                games: '0'
            }
        }
    }

    const wrapper = mount(UserForm, {
        global: {
            mocks: {
                $store 
            },
        }
    });

    it('check update', async () => {
        await wrapper.find('input[name="username"]').setValue("name");
        await wrapper.find('input[name="password"]').setValue("pass");
        await wrapper.find('button[class="btn Update"]').trigger('click');
        expect($store.commit).toBeCalledWith("UPDATE", {_userName: "name", _password: "pass"})
    });

    it('check delete', async () => {
        await wrapper.find('button[class="btn Delete"]').trigger('click');
        expect($store.commit).toBeCalledWith("DELETE_USER", $store.state.currentUser.user_name)
    });

})