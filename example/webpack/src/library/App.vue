<template>
  <div id="app">
    <h1>
      <font-awesome-icon pack="fab" name="font-awesome" />
      <font-awesome-icon pack="fas" name="coffee" />
      <font-awesome-icon pack="fas" name="cog" :spin="true" :fixed-width="false" />
    </h1>
  </div>
</template>

<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'

export default {
  name: 'FALibraryExample',
  
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
