import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isopen:true,
    isdocked:true
  },
  mutations: {
    setOpen(state,open){
      state.isopen = open;
    },
    setDocked(state,docked){
      state.isdocked = docked;
    }
  },
  actions: {}
});
