import { h } from 'vue'
import humps from 'humps'

/**
 * Converts a CSS style into a plain Javascript object.
 * @param {String} style The style to converts into a plain Javascript object.
 * @returns {Object}
 */
function styleToObject (style) {
  return style.split(';')
    .map(s => s.trim())
    .filter(s => s)
    .reduce(
      (output, pair) => {
        const idx = pair.indexOf(':')
        const prop = humps.camelize(pair.slice(0, idx))
        const value = pair.slice(idx + 1).trim()

        output[prop] = value
        return output
      },
      {}
    )
}

/**
 * Converts a CSS class list into a plain Javascript object.
 * @param {Array<String>} classes The class list to convert.
 * @returns {Object}
 */
function classToObject (classes) {
  return classes.split(/\s+/)
    .reduce(
      (output, className) => {
        output[className] = true
        return output
      },
      {}
    )
}

/**
 * Creates a Vue VNode for an SVG gradient stop element.
 * @param {Object} stop The gradient stop definition.
 * @param {string|number} stop.offset The offset of the stop.
 * @param {string} stop.color The color of the stop.
 * @param {number} [stop.opacity] The opacity of the stop.
 * @param {number} index The index of the stop.
 * @returns {VNode}
 */
function createGradientStop (stop, index) {
  return h('stop', {
    key: `${index}-${stop.offset}`,
    offset: stop.offset,
    'stop-color': stop.color,
    ...(stop.opacity !== undefined && { 'stop-opacity': stop.opacity })
  })
}

/**
 * Converts a FontAwesome abstract element of an icon into a Vue VNode.
 * @param {AbstractElement | String} abstractElement The element to convert.
 * @param {Object} props The user-defined props.
 * @param {Object} attrs The user-defined native HTML attributes.
 * @param {Object} [gradientFill] Optional gradient fill config.
 * @returns {VNode}
 */
export default function convert (abstractElement, props = {}, attrs = {}, gradientFill = null) {
  // If the abstract element is a string, we'll just return a string render function
  if (typeof abstractElement === 'string') {
    return abstractElement
  }

  // Converting abstract element children into Vue VNodes
  // If a gradientFill (or fill attr) is provided, strip fill from child path elements
  // so the gradient/fill takes precedence over the icon's built-in fill
  const hasFillOverride = gradientFill || ('fill' in attrs)
  const children = (abstractElement.children || [])
    .map(child => {
      if (hasFillOverride && child.tag === 'path' && child.attributes && 'fill' in child.attributes) {
        return convert({ ...child, attributes: { ...child.attributes, fill: undefined } })
      }
      return convert(child)
    })

  // Converting abstract element attributes into valid Vue format
  const mixins = Object.keys(abstractElement.attributes || {})
    .reduce(
      (mixins, key) => {
        const value = abstractElement.attributes[key]

        switch (key) {
          case 'class':
            mixins.class = classToObject(value)
            break
          case 'style':
            mixins.style = styleToObject(value)
            break
          default:
            mixins.attrs[key] = value
        }

        return mixins
      },
      {
        attrs: {},
        class: {},
        style: {}
      }
    )

  // Now, we'll return the VNode
  const { class: _aClass = {}, style: aStyle = {}, ...otherAttrs } = attrs

  // If a gradientFill is provided, inject the gradient element and set fill to reference it
  if (gradientFill) {
    const { type: gradientType, stops = [], id, ...gradientProps } = gradientFill
    const gradientTag = gradientType === 'linear' ? 'linearGradient' : 'radialGradient'
    const gradientVNode = h(gradientTag, { ...gradientProps, id }, stops.map(createGradientStop))

    return h(
      abstractElement.tag,
      {
        ...props,
        class: mixins.class,
        style: { ...mixins.style, ...aStyle },
        ...mixins.attrs,
        ...otherAttrs,
        fill: `url(#${id})`
      },
      [gradientVNode, ...children]
    )
  }

  return h(
    abstractElement.tag,
    {
      ...props,
      class: mixins.class,
      style: { ...mixins.style, ...aStyle },
      ...mixins.attrs,
      ...otherAttrs
    },
    children
  )
}
