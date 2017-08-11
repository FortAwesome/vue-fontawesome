import fontawesome from '@fortawesome/fontawesome'
import convert from '../converter'

export default {
  name: 'FontAwesomeIcon',

  props: {
    icon: {
      type: Object,
      required: true
    }
  },

  render (h) {
    const { abstract } = fontawesome.icon(this.icon)
    const convertCurry = convert.bind(null, h)

    if (abstract.length === 1) {
      return convertCurry(abstract[0])
    } else {
      return h('span', abstract.map(convertCurry))
    }
  }
}
