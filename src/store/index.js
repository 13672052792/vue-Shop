import Vue from 'vue'
import Vuex from 'vuex'

import matutions from 'store/matutions'
import getters from 'store/getters'
import actions from 'store/actions'
import moduleA from './modules/moduleA'

Vue.use(Vuex)

const state = {
  
}

const store = new Vuex.Store({
  state,
  matutions,
  getters,
  actions,
  modules:{
    a:moduleA
  }
})