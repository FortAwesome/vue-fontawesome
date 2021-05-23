import { config } from '@fortawesome/fontawesome-svg-core'
import { defineComponent, h, computed } from 'vue'

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

    const className = computed(() => [
      `${familyPrefix}-layers`,
      ...(props.fixedWidth ? [`${familyPrefix}-fw`] : [])
    ])

    return () => h('div', { class: className.value }, slots.default ? slots.default() : [])
  }
})
