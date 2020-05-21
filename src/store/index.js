import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  

  state: {
    URL: 'https://admin.xn--b1afkvegcgey.su/api/',
    menuOpen: false,
    services: null,
    gallery: null
  },

  getters:{
    menuOpen: (state) => {
      return state.menuOpen;
    },
    services: (state) => {
      return state.services
    },
    gallery: (state) => {
      return state.gallery;
    },
    URL: (state) => {
      return state.URL;
    }
  },

  mutations: {
    setGallery: (state, data) => {
      state.gallery = data;
    },
    setServices: (state, data) => {
      state.services = data;
    }
  },

  actions: {
    menuChange: (context) => {
      context.state.menuOpen = context.state.menuOpen?false:true;
    },
    getGallery: async (context) => {
      let response = await fetch(`${ context.state.URL }gallery-all`);
      let result = await response.json();
      context.commit('setGallery', result);
    }, 
    getServices: async (context) => {
      let response = await fetch(`${ context.state.URL }potolok-all`);
      let result = await response.json();
      context.commit('setServices', result);
    }
  }
});
