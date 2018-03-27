import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    selectedWebsiteId: 0
  },
  getters: {
    getId: state => {
      return state.selectedWebsiteId;
    }
  },
  mutations: {
    setId: (state, payload) => {
      state.selectedWebsiteId = payload;
    }
  },
  actions: {
    setId: ({commit}, payload) => {
      commit('setId', payload)
    }
  }
})
