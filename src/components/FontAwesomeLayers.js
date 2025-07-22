import { computed, defineComponent, h } from 'vue'
import { config } from '@fortawesome/fontawesome-svg-core'
import { ICON_PACKS_STARTING_VERSION, SVG_CORE_VERSION, versionCheckLt } from '../utils'

export default defineComponent({
  name: 'FontAwesomeLayers',

  props: {
    fixedWidth: {
      type: Boolean,
      default: false
    }
  },

  setup(props, { slots }) {
    const { familyPrefix } = config

    const className = computed(() => [
      `${familyPrefix}-layers`,
      ...(versionCheckLt(SVG_CORE_VERSION, ICON_PACKS_STARTING_VERSION) && props.fixedWidth ? [`${familyPrefix}-fw`] : [])
    ])

    return () => h('div', { class: className.value }, slots.default ? slots.default() : [])
  }
})
