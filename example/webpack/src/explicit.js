import Vue from 'vue'
import App from './explicit/App.vue'
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'

Vue.component('font-awesome-icon', FontAwesomeIcon)

new Vue({
  el: '#app',
  render: h => h(App)
})
