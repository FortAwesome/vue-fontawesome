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
 * Combines collections of style classes into one collection
 * @param  {Array<String | String[]>} collections The collections to combine.
 * @returns {Array<String>}
 */
function combineClassObjects (...collections) {
  const finalSet = new Set([])

  collections.forEach(set => {
    if (Array.isArray(set)) {
      finalSet.forEach(className => finalSet.add(className))
    } else {
      finalSet.add(set)
    }
  })

  return Array.from(finalSet)
}

/**
 * Converts a FontAwesome abstract element of an icon into a Vue VNode.
 * @param {AbstractElement | String} abstractElement The element to convert.
 * @param {Object} props The user-defined props.
 * @param {Object} attrs The user-defined native HTML attributes.
 * @returns {VNode}
 */
export default function convert (abstractElement, props = {}, attrs = {}) {
  // If the abstract element is a string, we'll just return a string render function
  if (typeof abstractElement === 'string') {
    return abstractElement
  }

  // Converting abstract element children into Vue VNodes
  const children = (abstractElement.children || [])
    .map(child => convert(child))

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
