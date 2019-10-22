import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sex:'',
    hobby:[],
    text:'',
  },
  mutations: {
    addSex(state,sex){
        state.sex = sex
    },
    addhobby(state,hobby){
        state.hobby = hobby
    },
    addtext(state,text){
        state.text = text
    }
  },
  actions: {
  },
  modules: {
  }
})
