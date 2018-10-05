import Vue from "vue"
import Vuex from 'vuex'
import Constant from './constant'

Vue.use(Vuex)
const store = new Vuex.Store({
  state: [
    {'member':"asdf"}
  ],
  mutations: {
    [Constant.LOGIN.LOGIN]: (state, payload) => {
      console.log(state, payload);
    }
  },
  actions: {
    [Constant.LOGIN.LOGIN]: (store, payload) => {
      console.log(store, payload);
      
    }

  }
});

export default store;