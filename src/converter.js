import camelCase from 'camelcase'

function styleToObject (style) {
  return style.split(';')
    .map(s => s.trim() )
    .filter(s => s)
    .reduce((acc, pair) => {
      const i = pair.indexOf(':')
      const prop = camelCase(pair.slice(0, i))
      const value = pair.slice(i + 1).trim()
      
      acc[prop] = value

      return acc
    }, {})
}

function classToObject (cls) {
  return cls.split(/\s+/)
    .reduce((acc, c) => {
      acc[c] = true
      
      return acc
    }, {})
}

function convert (h, element, props = {}) {
  const children = (element.children || []).map(convert.bind(null, h))

  const mixins = Object.keys(element.attributes).reduce((acc, key) => {
    const val = element.attributes[key]

    switch (key) {
      case 'class':
        acc['class'] = classToObject(val)
        break
      case 'style':
        acc['style'] = styleToObject(val)
        break
      default:
        acc.attrs[key] = val
    }

    return acc
  }, { 'class': {}, style: {}, attrs: {} })

  return h(
    element.tag,
    {
      class: mixins.class,
      style: mixins.style,
      attrs: mixins.attrs,
      props
    },
    children
  )
}

export default convert
