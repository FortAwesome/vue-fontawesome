import { parse as faParse, icon as faIcon } from '@fortawesome/fontawesome-svg-core'
import { defineComponent, computed, watch } from 'vue'
import convert from '../converter'
import log from '../logger'
import { objectWithKey, classList } from '../utils'

function normalizeIconArgs (icon) {
  if (icon === null) {
    return null
  }

  if (typeof icon === 'object' && icon.prefix && icon.iconName) {
    return icon
  }

  if (Array.isArray(icon) && icon.length === 2) {
    return { prefix: icon[0], iconName: icon[1] }
  }

  if (typeof icon === 'string') {
    return { prefix: 'fas', iconName: icon }
  }
}

export default defineComponent({
  name: 'FontAwesomeIcon',

  props: {
    border: {
      type: Boolean,
      default: false
    },
    fixedWidth: {
      type: Boolean,
      default: false
    },
    flip: {
      type: String,
      default: null,
      validator: (value) => ['horizontal', 'vertical', 'both'].indexOf(value) > -1
    },
    icon: {
      type: [Object, Array, String],
      required: true
    },
    mask: {
      type: [Object, Array, String],
      default: null
    },
    listItem: {
      type: Boolean,
      default: false
    },
    pull: {
      type: String,
      default: null,
      validator: (value) => ['right', 'left'].indexOf(value) > -1
    },
    pulse: {
      type: Boolean,
      default: false
    },
    rotation: {
      type: [String, Number],
      default: null,
      validator: (value) => [90, 180, 270].indexOf(Number.parseInt(value, 10)) > -1
    },
    swapOpacity: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: null,
      validator: (value) => ['lg', 'xs', 'sm', '1x', '2x', '3x', '4x', '5x', '6x', '7x', '8x', '9x', '10x'].indexOf(value) > -1
    },
    spin: {
      type: Boolean,
      default: false
    },
    transform: {
      type: [String, Object],
      default: null
    },
    symbol: {
      type: [Boolean, String],
      default: false
    },
    title: {
      type: String,
      default: null
    },
    inverse: {
      type: Boolean,
      default: false
    }
  },

  setup (props, { attrs }) {
    const icon = computed(() => normalizeIconArgs(props.icon))
    const classes = computed(() => objectWithKey('classes', classList(props)))
    const transform = computed(() => objectWithKey(
      'transform',
      (typeof props.transform === 'string')
        ? faParse.transform(props.transform)
        : props.transform
    ))
    const mask = computed(() => objectWithKey('mask', normalizeIconArgs(props.mask)))

    const renderedIcon = computed(() => faIcon(icon.value, {
      ...classes.value,
      ...transform.value,
      ...mask.value,
      symbol: props.symbol,
      title: props.title
    }))

    watch(renderedIcon, (value) => {
      if (!value) {
        return log('Could not find one or more icon(s)', icon.value, mask.value)
      }
    }, { immediate: true })

    const vnode = computed(() => renderedIcon.value ? convert(renderedIcon.value.abstract[0], {}, attrs) : null)
    return () => vnode.value
  }
})
