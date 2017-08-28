import fontawesome from '@fortawesome/fontawesome'
import convert from '../converter'

export default {
  name: 'FontAwesomeIcon',

  props: {
    name: {
      type: String,
      default: ''
    },
    pack: {
      type: String,
      default: 'fa'
    },
    iconDefinition: {
      type: Object,
      default: null
    },
    spin: {
      type: Boolean,
      default: false
    },
    fixedWidth: {
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
        'fa-fw': this.fixedWidth
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
