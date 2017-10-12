<template>
  <div id="app">
    <h1>
      <font-awesome-icon :icon="['fas', 'coffee']" />
    </h1>
  </div>
</template>

<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'

export default {
  name: 'FAExternalExample',

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
