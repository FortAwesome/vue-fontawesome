import Vue from 'vue'
import App from './library/App.vue'
import fontawesome from '@fortawesome/fontawesome'
import brands from '@fortawesome/fontawesome-brands'
import { faCoffee } from '@fortawesome/fontawesome-solid'
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'

fontawesome.library.add(brands, faCoffee)

Vue.component('font-awesome-icon', FontAwesomeIcon)

new Vue({
  el: '#app',
  render: h => h(App)
})
