import Vue from 'vue'
import Vuex from 'vuex'
import VuexI18n from 'vuex-i18n' // load vuex i18n module

import app from './modules/app'
import coocies from './modules/coocies'
import auth from './modules/auth'
import profile from './modules/profile'
import search from './modules/search'
import menu from './modules/menu'

import * as getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  strict: true, // process.env.NODE_ENV !== 'production',
  getters,
  modules: {
    app,
    coocies,
    auth,
    profile,
    search,
    menu
  },
  state: {},
  mutations: {}
})

Vue.use(VuexI18n.plugin, store)

export default store
