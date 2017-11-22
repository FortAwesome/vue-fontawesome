import fontawesome from '@fortawesome/fontawesome'
import convert from '../converter'
import { objectWithKey } from '../utils'

export default {
  name: 'FontAwesomeLayersText',

  functional: true,

  props: {
    value: {
      type: String,
      default: ''
    },
    transform: {
      type: [String, Object],
      default: null
    }
  },

  render (createElement, context) {
    const { props } = context
    const transform = objectWithKey('transform', (typeof props.transform === 'string') ? fontawesome.parse.transform(props.transform) : props.transform)

    const renderedText = fontawesome.text(props.value, { ...transform })

    const { abstract } = renderedText

    const convertCurry = convert.bind(null, createElement)

    return convertCurry(abstract[0], {}, context.data)
  }
}
