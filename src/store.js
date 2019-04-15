import Vue from "vue";
import Vuex from "vuex";
import {getters} from './store/getters'
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isopen:false,
    isdocked:true
  },
  mutations: {
  },
  actions: {},
  getters
});
