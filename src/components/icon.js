import fontawesome from '@fortawesome/fontawesome'
import convert from '../converter'

export default {
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
    }
  },

  data () {
    return {
      packNames: {
        brands: 'fab',
        light: 'fal',
        regular: 'far',
        solid: 'fas'
      }
    }
  },

  computed: {
    prefix () {
      return this.packNames[this.pack] || this.pack
    },

    iconConfig () {
      return { prefix: this.prefix, iconName: this.name }
    },

    classList () {
      let classes = {
        'fa-spin': this.spin,
        'fa-pulse': this.pulse,
        'fa-fw': this.fixedWidth,
        'fa-border': this.border,
        'fa-li': this.listItem,
        'fa-flip-horizontal': this.flip === 'horizontal' || this.flip === 'both',
        'fa-flip-vertical': this.flip === 'vertical' || this.flip === 'both',
        [`fa-${this.size}`]: this.size !== null,
        [`fa-rotate-${this.rotation}`]: this.rotation !== null,
        [`fa-pull-${this.pull}`]: this.pull !== null
      }

      return Object.keys(classes)
        .map(key => classes[key] ? key : null)
        .filter(key => key)
    },

    icon () {
      return fontawesome.icon(this.iconDefinition || this.iconConfig, {
        classes: this.classList
      })
    }
  },

  render (createElement) {
    const { abstract } = this.icon
    const convertCurry = convert.bind(null, createElement)

    return convertCurry(abstract[0])
  }
}
