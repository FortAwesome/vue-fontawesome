import fontawesome from '@fortawesome/fontawesome'
import convert from '../converter'

const packNames = {
  brands: 'fab',
  light: 'fal',
  regular: 'far',
  solid: 'fas'
}

function objectWithKey (key, value) {
  return ((Array.isArray(value) && value.length > 0) || (!Array.isArray(value) && value)) ? {[key]: value} : {}
}

function classList (props) {
  let classes = {
    'fa-spin': props.spin,
    'fa-pulse': props.pulse,
    'fa-fw': props.fixedWidth,
    'fa-border': props.border,
    'fa-li': props.listItem,
    'fa-flip-horizontal': props.flip === 'horizontal' || props.flip === 'both',
    'fa-flip-vertical': props.flip === 'vertical' || props.flip === 'both',
    [`fa-${props.size}`]: props.size !== null,
    [`fa-rotate-${props.rotation}`]: props.rotation !== null,
    [`fa-pull-${props.pull}`]: props.pull !== null
  }

  return Object.keys(classes)
    .map(key => classes[key] ? key : null)
    .filter(key => key)
}

export default {
  name: 'FontAwesomeIcon',

  functional: true,

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
    iconDefinition: {
      type: Object,
      default: null
    },
    listItem: {
      type: Boolean,
      default: false
    },
    pack: {
      type: String,
      default: 'fa'
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
    name: {
      type: String,
      default: ''
    },
    rotation: {
      type: Number,
      default: null,
      validator: (value) => [90, 180, 270].indexOf(value) > -1
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
    }
  },

  render (createElement, context) {
    const { props } = context

    const iconConfig = { prefix: (packNames[props.pack] || props.pack), iconName: props.name }
    const classes = objectWithKey('classes', classList(context.props))
    const transform = objectWithKey('transform', (typeof props.transform === 'string') ? fontawesome.parse.transform(props.transform) : props.transform)

    const {abstract} = fontawesome.icon(props.iconDefinition || iconConfig, { ...classes, ...transform })
    const convertCurry = convert.bind(null, createElement)

    return convertCurry(abstract[0])
  }
}
