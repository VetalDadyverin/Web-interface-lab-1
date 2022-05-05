import { createStore } from "vuex";
import Grid from "@/cls/model/Grid";
import Users from "@/cls/model/Users";

export default createStore({
  state: {
    grid: new Grid(),
    users: new Users(),
    currentUser: null,
    hasSwaped: false,
    choose: true,
    logging: false,
    signUpping: false,
    userView: false,
  },
  getters: {
    CHECK_SOLVED: (state) => {
      return state.grid.check_solved();
    },
    CHECK_SWAP: (state) => {
      var checkSwap = state.hasSwaped;
      state.hasSwaped = false;
      return checkSwap;
    },
    GET_GRID: (state) => {
      console.log(state.grid);
      return state.grid.components;
    },
  },
  mutations: {
    TRY_TO_SWAP: (state, index) => {
      state.hasSwaped = state.grid.try_to_swap(index);
    },

    RESTART: (state) => {
      state.grid.shuffle();
    },

    ADD_USER: (state, { _userName, _password }) => {
      state.users.add_user(_userName, _password);
      state.choose = false;
      state.logging = false;
      state.signUpping = false;
      state.userView = true;
      state.currentUser = state.users.find_by_user_name(_userName);
    },

    LOGIN: (state, { _userName, _password }) => {
      state.currentUser = state.users.check_for_user(_userName, _password);
      if (state.currentUser) {
        state.choose = false;
        state.logging = false;
        state.signUpping = false;
        state.userView = true;
      }
    },

    UPDATE: (state, { _userName, _password }) => {
      state.currentUser = state.users.change_user_by_user_name(
        state.currentUser.user_name,
        _userName,
        _password
      );
    },

    SET_CURRENT_USER: (state, userName) => {
      state.currentUser = state.users.find_by_user_name(userName);
    },

    DELETE_USER: (state, userName) => {
      state.users.delete_by_user_name(userName);
    },

    CHANGE_USER_CREDENTIALS: (state, userName, password) => {
      state.users.change_user_by_user_name(
        state.currentUser.user_name,
        userName,
        password
      );
      state.currentUser = state.users.find_by_user_name(userName);
    },
  },
  actions: {},
});
