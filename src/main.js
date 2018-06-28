// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import Vuex from 'vuex'
import vuexI18n from 'vuex-i18n'

import translationsEs from '@/translations/es.json'
import translationsEn from '@/translations/en.json'

Vue.use(Vuex)

const store = new Vuex.Store()
Vue.use(vuexI18n.plugin, store)

Vue.use(Vuetify, {
  theme: {
    primary: '#133d66',
    secondary: '#b0bec5',
    accent: '#8c9eff',
    error: '#b71c1c'
  }
})

Vue.config.productionTip = false

Vue.i18n.add('en', translationsEn)
Vue.i18n.add('es', translationsEs)

// set the start locale to use
Vue.i18n.set('es')

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
