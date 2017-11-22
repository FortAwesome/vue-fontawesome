import fontawesome from '@fortawesome/fontawesome'

function add(to, what) {
  const val = (to || '').length === 0 ? [] : [to]

  return val.concat(what).join(' ')
}

export default {
  name: 'FontAwesomeLayers',

  functional: true,

  props: {
    fixedWidth: {
      type: Boolean,
      default: false
    }
  },

  render (createElement, context) {
    const { familyPrefix } = fontawesome.config
    let { data: { staticClass } } = context

    const classes = [
      `${familyPrefix}-layers`,
      ...(context.props.fixedWidth ? [`${familyPrefix}-fw`] : [])
    ]

    return createElement(
      'div',
      {
        ...context.data,
        staticClass: add(staticClass, classes)
      },
      context.children
    )
  }
}
