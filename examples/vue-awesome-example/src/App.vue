<template>
  <div id="app">
    <main class="w-100 min-vh-100 bg-gray8 white sans-serif pa6 flex flex-column justify-center items-center">
      <div class="mw8 center overflow-hidden">
        <h2 class="tc ttu tracked3 b f2 mt0 mb2 teal0 o-30">vue-fontawesome</h2>

        <ul class="list ma0 pa0 flex flex-row flex-wrap teal4">
          <li class="pv3 ph2 ma0 link grow">
            <font-awesome-icon icon="coffee" size="4x" />
          </li>
          <li class="pv3 ph2 ma0 link grow">
            <font-awesome-icon :icon="['fas', 'coffee']" flip="horizontal" size="4x" />
          </li>
          <li class="pv3 ph2 ma0 link grow">
            <font-awesome-icon :icon="['far', 'comment']" size="4x" />
          </li>
          <li class="pv3 ph2 ma0 link grow">
            <font-awesome-icon icon="child" transform="shrink-4 down-2 right-2" :mask="['fas', 'circle']" size="4x" />
          </li>
          <li class="pv3 ph2 ma0 link grow">
            <font-awesome-icon :icon="['fab', 'twitter']" size="4x" />
          </li>
          <li class="pv3 ph2 ma0 link grow">
            <font-awesome-icon :icon="queen" size="4x" />
          </li>
          <li class="pv3 ph2 ma0 link grow">
            <font-awesome-icon :icon="queen" size="4x" inverse/>
          </li>
          <li class="pv3 ph2 ma0 link grow">
            <font-awesome-layers full-width class="fa-4x">
              <font-awesome-icon :icon="['fas', 'archive']"/>
              <font-awesome-layers-text class="red8" transform="down-3 shrink-14" value="SECRET" />
            </font-awesome-layers>
          </li>
          <li class="pv3 ph2 ma0 link grow">
            <font-awesome-layers full-width class="fa-4x">
              <font-awesome-icon :icon="['fas', 'envelope']"/>
              <font-awesome-layers-text class="red8" value="1" position="top-right" />
            </font-awesome-layers>
          </li>
        </ul>
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { faChessQueen } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText } from '@fortawesome/vue-fontawesome'

export default defineComponent({
  name: 'App',

  setup () {
    const queen = computed(() => faChessQueen)

    return { queen }
  },

  components: {
    FontAwesomeIcon,
    FontAwesomeLayers,
    FontAwesomeLayersText
  }
})
</script>

<style>
body {
  margin: 0;
  padding: 0;
}
</style>
