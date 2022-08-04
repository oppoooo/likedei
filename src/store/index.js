import Vue from "vue";
import Vuex from "vuex";
import getters from "./getters";
import app from "./modules/app";
import settings from "./modules/settings";
import user from "./modules/user";
import userServe from "./modules/userServe";
import createVuexPersisted from "vuex-persistedstate";
Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    app,
    settings,
    user,
    userServe,
  },
  getters,
  plugins: [
    // token持久化
    createVuexPersisted({
      reducer(state) {
        return {
          user: {
            token: state.user.token,
            MyuserInfo: state.user.MyuserInfo,
          },
        };
      },
    }),
  ],
});

export default store;
