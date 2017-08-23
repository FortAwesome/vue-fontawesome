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

    icon () {
      return fontawesome.icon(this.iconDefinition || this.iconConfig)
    }
  },

  render (createElement) {
    const { abstract } = this.icon
    const convertCurry = convert.bind(null, createElement)

    return convertCurry(abstract[0])
  }
}
