import { config } from '@fortawesome/fontawesome-svg-core'
import { defineComponent, h } from 'vue'

export default defineComponent({
  name: 'FontAwesomeLayers',

  props: {
    fixedWidth: {
      type: Boolean,
      default: false
    }
  },

  setup (props, { slots }) {
    const { familyPrefix } = config

    const className = [
      `${familyPrefix}-layers`,
      ...(props.fixedWidth ? [`${familyPrefix}-fw`] : [])
    ]

    return () => h('div', { class: className }, slots.default ? slots.default() : [])
  }
})
