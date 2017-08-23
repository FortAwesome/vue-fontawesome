import Vue from 'vue'
import App from './App.vue'
import fontawesome from '@fortawesome/fontawesome'
import { faCoffee } from '@fortawesome/fontawesome-solid'
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'

fontawesome.library.add(faCoffee)

Vue.component('font-awesome-icon', FontAwesomeIcon)

new Vue({
  el: '#app',
  render: h => h(App)
})
