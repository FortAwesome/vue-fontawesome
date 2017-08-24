import Vue from 'vue'
import App from './library/App.vue'
import fontawesome from '@fortawesome/fontawesome'
import brands from '@fortawesome/fontawesome-brands'
import { faCoffee, faCog } from '@fortawesome/fontawesome-solid'

fontawesome.library.add(brands, faCoffee, faCog)

new Vue({
  el: '#app',
  render: h => h(App)
})
