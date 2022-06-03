import { mount } from '@vue/test-utils'
import SignUp from '@/views/SignUp.vue';

describe('SignUp.vue testing', () => {
    
    const $store = {
        commit: jest.fn()
    }

    const wrapper = mount(SignUp, {
        global: {
            mocks: {
                $store 
            },
        }
    });
    

    it('check signup', async () => {
        await wrapper.find('input[name="userName"]').setValue("name");
        await wrapper.find('input[name="password"]').setValue("pass");
        await wrapper.find('input[name="repeat"]').setValue("pass");
        await wrapper.find('input[type="button"]').trigger('click');
        expect($store.commit).toBeCalledWith("ADD_USER", {_userName: "name", _password: "pass"})
    });

    it('password and repeat are different', async () => {
        await wrapper.find('input[name="userName"]').setValue("name");
        await wrapper.find('input[name="password"]').setValue("pass");
        await wrapper.find('input[name="repeat"]').setValue("pas");
        await wrapper.find('input[type="button"]').trigger('click');
        expect(wrapper.find('p[name="msg"]').text().trim()).toEqual("Repeat password is not the same as password")
    });

    it('even one input is empty', async () => {
        await wrapper.find('input[name="userName"]').setValue("name");
        await wrapper.find('input[name="password"]').setValue("pass");
        await wrapper.find('input[name="repeat"]').setValue("");
        await wrapper.find('input[type="button"]').trigger('click');
        expect(wrapper.find('p[name="msg"]').text().trim()).toEqual("Please fill whole inputs")
    });
})