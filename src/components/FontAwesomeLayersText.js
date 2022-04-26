import { config, parse, text } from '@fortawesome/fontawesome-svg-core'
import convert from '../converter'
import { objectWithKey } from '../utils'

export default {
  name: 'FontAwesomeLayersText',

  functional: true,

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

  render (createElement, context) {
    const { familyPrefix } = config
    const { props } = context

    const classes = objectWithKey('classes', [
      ...(props.counter ? [`${familyPrefix}-layers-counter`] : []),
      ...(props.position ? [`${familyPrefix}-layers-${props.position}`] : [])
    ]);

    const transform = objectWithKey('transform', (typeof props.transform === 'string') ? parse.transform(props.transform) : props.transform)

    const renderedText = text(props.value.toString(), { ...transform, ...classes })

    const { abstract } = renderedText

    if (props.counter) {
      abstract[0].attributes.class = abstract[0].attributes.class.replace('fa-layers-text', '')
    }

    const convertCurry = convert.bind(null, createElement)

    return convertCurry(abstract[0], {}, context.data)
  }
}
