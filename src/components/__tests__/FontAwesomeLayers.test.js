import { compileAndMount } from '../__fixtures__/helpers'
import { faCircle, faCoffee } from '../__fixtures__/icons'
import { library } from '@fortawesome/fontawesome-svg-core'

import FontAwesomeLayers from '../FontAwesomeLayers'

function mountLayers(template) {
  return compileAndMount({ template, components: { FontAwesomeLayers } })
}

beforeEach(() => {
  library.add(faCoffee, faCircle)
})

afterEach(() => {
  library.reset()
})

test('empty layers', () => {
  const wrapper = mountLayers('<font-awesome-layers />')

  expect(wrapper.element.tagName).toBe('DIV')
  expect(wrapper.element.children.length).toBe(0)
})

test('layers with icon elements', () => {
  const wrapper = mountLayers('<font-awesome-layers><i /><i /></font-awesome-layers>')

  expect(wrapper.element.children.length).toBe(2)
})

describe('class handling', () => {
  test('extra static', () => {
    const wrapper = mountLayers('<font-awesome-layers class="extra" />')

    expect(wrapper.element.classList.contains('extra')).toBeTruthy()
    expect(wrapper.element.classList.contains('fa-layers')).toBeTruthy()
  })

  test('extra bound', () => {
    const wrapper = mountLayers(`<font-awesome-layers :class="['extra']" />`)

    expect(wrapper.element.classList.contains('fa-layers')).toBeTruthy()
    expect(wrapper.element.classList.contains('extra')).toBeTruthy()
  })
})

describe('class defaults', () => {
  test('should have fa-layers class and not fa-fw by default', () => {
    const wrapper = mountLayers('<font-awesome-layers />')

    expect(wrapper.element.classList.contains('fa-layers')).toBeTruthy()
    expect(wrapper.element.classList.contains('fa-fw')).toBeFalsy()
  })

  test('should have fa-fw class when fixedWidth is true', () => {
    const wrapper = mountLayers('<font-awesome-layers :fixed-width="true" />')

    expect(wrapper.element.classList.contains('fa-layers')).toBeTruthy()
    expect(wrapper.element.classList.contains('fa-fw')).toBeTruthy()
  })
})
