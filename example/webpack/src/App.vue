<template>
  <div id="app">
    <font-awesome-icon class="test" :icon-definition="icon" />
    <font-awesome-icon class="test" pack="fas" name="coffee" />
  </div>
</template>

<script>
import solid from '@fortawesome/fontawesome-solid'

export default {
  name: 'app',

  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },

  computed: {
    icon () {
      return solid.faUser
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
