import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isUserLogin: localStorage.getItem('token') ? true : false,
  },
  mutations: {
    userLogged (state, value) {
      state.isUserLogin = value;
    }
  },
  actions: {
  },
  modules: {
  }
})
