import { classList, objectWithKey } from '../utils'
import { computed, defineComponent, watch } from 'vue'
import { icon as faIcon, parse as faParse } from '@fortawesome/fontawesome-svg-core'

import convert from '../converter'
import log from '../logger'

function normalizeIconArgs(icon) {
  if (icon && typeof icon === 'object' && icon.prefix && icon.iconName && icon.icon) {
    return icon
  }

  if (faParse.icon) {
    return faParse.icon(icon)
  }

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
    // the fixedWidth property has been deprecated as of version 7
    fixedWidth: {
      type: Boolean,
      default: false
    },
    flip: {
      type: [Boolean, String],
      default: false,
      validator: (value) => [true, false, 'horizontal', 'vertical', 'both'].indexOf(value) > -1
    },
    icon: {
      type: [Object, Array, String],
      required: true
    },
    mask: {
      type: [Object, Array, String],
      default: null
    },
    maskId: {
      type: String,
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
    // the rotateBy property is only supported in version 7.0.0 and later
    rotateBy: {
      type: Boolean,
      default: false
    },
    swapOpacity: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: null,
      validator: (value) => ['2xs', 'xs', 'sm', 'lg', 'xl', '2xl', '1x', '2x', '3x', '4x', '5x', '6x', '7x', '8x', '9x', '10x'].indexOf(value) > -1
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
    titleId: {
      type: String,
      default: null
    },
    inverse: {
      type: Boolean,
      default: false
    },
    bounce: {
      type: Boolean,
      default: false
    },
    shake: {
      type: Boolean,
      default: false
    },
    beat: {
      type: Boolean,
      default: false
    },
    fade: {
      type: Boolean,
      default: false
    },
    beatFade: {
      type: Boolean,
      default: false
    },
    flash: {
      type: Boolean,
      default: false
    },
    spinPulse: {
      type: Boolean,
      default: false
    },
    spinReverse: {
      type: Boolean,
      default: false
    },
    // the widthAuto property is only supported in version 7.0.0 and later
    widthAuto: {
      type: Boolean,
      default: false
    }
  },

  setup(props, { attrs }) {
    const icon = computed(() => normalizeIconArgs(props.icon))
    const classes = computed(() => objectWithKey('classes', classList(props)))
    const transform = computed(() => objectWithKey('transform', typeof props.transform === 'string' ? faParse.transform(props.transform) : props.transform))
    const mask = computed(() => objectWithKey('mask', normalizeIconArgs(props.mask)))

    const renderedIcon = computed(() => {
      const iconProps = {
        ...classes.value,
        ...transform.value,
        ...mask.value,
        symbol: props.symbol,
        maskId: props.maskId
      }

      // the title attribute will only apply to versions prior to version 7.0.0
      iconProps.title = props.title
      iconProps.titleId = props.titleId

      return faIcon(icon.value, iconProps)
    })

    watch(
      renderedIcon,
      (value) => {
        if (!value) {
          return log('Could not find one or more icon(s)', icon.value, mask.value)
        }
      },
      { immediate: true }
    )

    const vnode = computed(() => (renderedIcon.value ? convert(renderedIcon.value.abstract[0], {}, attrs) : null))
    return () => vnode.value
  }
})
