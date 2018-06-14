import Vue from 'vue'
import store from 'vuex-store'

// add translations directly to the application
Vue.i18n.add('en', require('./en.json'))
Vue.i18n.add('ru', require('./ru.json'))

// set the start locale to use
Vue.i18n.set('ru')

store.dispatch('GET_COOKIE', { name: 'lang' })
.then(resp => {
  resp === undefined ? store.dispatch('SET_COOKIE', { name: 'lang', value: 'ru' }) : Vue.i18n.set(resp)
})

// set fallback for non-translated strings
Vue.i18n.fallback('en')
