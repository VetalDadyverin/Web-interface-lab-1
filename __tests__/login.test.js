import { mount } from '@vue/test-utils'
import LoginView from '@/views/LoginView.vue';

describe('LoginView.vue testing', () => {
    
    const $store = {
        commit: jest.fn(),
        state: {
            userView: ''
        }
    }

    const wrapper = mount(LoginView, {
        global: {
            mocks: {
                $store 
            },
        }
    });
    

    it('check logging', async () => {
        await wrapper.find('input[name="userName"]').setValue("name");
        await wrapper.find('input[name="password"]').setValue("pass");
        await wrapper.find('input[type="button"]').trigger('click');
        expect($store.commit).toBeCalledWith("LOGIN", {_userName: "name", _password: "pass"});
    });

    it('even one input is empty', async () => {
        await wrapper.find('input[name="userName"]').setValue("name");
        await wrapper.find('input[name="password"]').setValue("");
        await wrapper.find('input[type="button"]').trigger('click');
        expect(wrapper.find('p[name="msg"]').text().trim()).toEqual("Please fill whole inputs");
    });

    it('no such user', async () => {
        await wrapper.find('input[name="userName"]').setValue("name");
        await wrapper.find('input[name="password"]').setValue("pass");
        await wrapper.find('input[type="button"]').trigger('click');
        expect($store.commit).toBeCalledWith("LOGIN", {_userName: "name", _password: "pass"});
        expect(wrapper.find('p[name="msg"]').text().trim()).toEqual("Uncorrect username or password");
    });
})