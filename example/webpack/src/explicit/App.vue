<template>
  <div id="app">
    <h1>
      <font-awesome-icon key="1" @click="log" rel="test" :style="{'color': 'red'}" :class="['test']" :icon="icon" />
    </h1>
  </div>
</template>

<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
import { faCoffee } from '@fortawesome/fontawesome-free-solid'

export default {
  name: 'FAExplicitExample',

  computed: {
    icon () {
      return faCoffee
    }
  },

  methods: {
    log () {
      console.log('icon clicked')
    }
  },

  components: {
    FontAwesomeIcon
  }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
