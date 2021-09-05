import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
const intialState = {
  error: {
    msg: "",
    lvl: ""
  }
};
const opts = {
  state: intialState,
  mutations: {
    showError(state, { msg, lvl }) {
      state.error.msg = msg;
      state.error.lvl = lvl;
    }
  },
  getters: {
    errlvl: (state) => state.error.lvl,
    errmsg: (state) => state.error.msg
  }
};

export const store = new Vuex.Store(opts);
