<template>
  <div id="app">
    <h1>
      <font-awesome-icon pack="fab" name="font-awesome" />
      <font-awesome-icon pack="fas" name="coffee" />
      <font-awesome-icon pack="fas" name="cog" :spin="true" :fixed-width="false" />
      <font-awesome-icon pack="fab" name="fort-awesome" size="4x" />
      <font-awesome-icon pack="fas" name="spinner" :pulse="true" :fixed-width="true" />
      <font-awesome-icon pack="fab" name="fort-awesome" :rotation="90" />
      <font-awesome-icon pack="fab" name="internet-explorer" flip="both" />
    </h1>
    <div>
      <p>
        <font-awesome-icon pack="fas" name="quote-left" size="2x" :border="true" pull="left" />...tomorrow we 
        will run faster, stretch out our arms farther...And then one fine morning&mdash; So we beat on, boats 
        against the current, borne back ceaselessly into the past.
      </p>
    </div>
    <div>
      <p>
        <ul class="fa-ul">
          <li><font-awesome-icon pack="fas" name="check-square" :list-item="true" />List icons</li>
          <li><font-awesome-icon pack="fas" name="check-square" :list-item="true" />can be used</li>
          <li><font-awesome-icon pack="fas" name="square" :list-item="true" />as bullets</li>
          <li><font-awesome-icon pack="fas" name="square" :list-item="true" />in lists</li>
        </ul>
      </p>
    </div>
    <div>
      <span>
        <font-awesome-icon pack="fab" name="font-awesome" transform="grow-40 left-4 rotate-15" />
      </span>
      <span style="padding-left: 50px">
        <font-awesome-icon pack="fab" name="font-awesome" :transform="{ flipX: false, flipY: false, rotate: 15, size: 56, x: -4, y: 0 }" />
      </span>
    </div>
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
  color: #2c3e50;
  margin-top: 60px;
  text-align: center;
}

p {
  display: inline-block;
  width: 250px;
  text-align: left;
}
</style>
