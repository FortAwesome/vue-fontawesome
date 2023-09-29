import { config, parse, text } from '@fortawesome/fontawesome-svg-core'
import { defineComponent, computed } from 'vue'
import convert from '../converter'
import { objectWithKey } from '../utils'

export default defineComponent({
  name: 'FontAwesomeLayersText',

  props: {
    value: {
      type: [String, Number],
      default: ''
    },
    transform: {
      type: [String, Object],
      default: null
    },
    counter: {
      type: Boolean,
      default: false
    },
    position: {
      type: String,
      default: null,
      validator: (value) => ['bottom-left', 'bottom-right', 'top-left', 'top-right'].indexOf(value) > -1
    },
  },

  setup (props, { attrs }) {
    const { familyPrefix } = config

    const classes = computed(() => objectWithKey('classes', [
      ...(props.counter ? [`${familyPrefix}-layers-counter`] : []),
      ...(props.position ? [`${familyPrefix}-layers-${props.position}`] : [])
    ]))
    const transform = computed(() => objectWithKey('transform', 
      typeof props.transform === 'string' ? parse.transform(props.transform) : props.transform))
    const abstractElement = computed(() => {
      const { abstract } = text(props.value.toString(), { ...transform.value, ...classes.value })
      if (props.counter) {
        abstract[0].attributes.class = abstract[0].attributes.class.replace('fa-layers-text', '')
      }
      return abstract[0]
    })

    const vnode = computed(() => convert(abstractElement.value, {}, attrs))
    return () => vnode.value
  }
})
