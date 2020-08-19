import { config } from '@fortawesome/fontawesome-svg-core'
import { defineComponent, h } from 'vue'
import { addStaticClass } from '../utils'

export default defineComponent({
  name: 'FontAwesomeLayers',

  props: {
    fixedWidth: {
      type: Boolean,
      default: false
    }
  },

  setup (props, { attrs, slots }) {
    const { familyPrefix } = config

    const classes = [
      `${familyPrefix}-layers`,
      ...(props.fixedWidth ? [`${familyPrefix}-fw`] : [])
    ]

    return () =>
      h(
        'div',
        {
          ...attrs,
          staticClass: addStaticClass(attrs.staticClass, classes)
        },
        slots.default
      )
  }
})
