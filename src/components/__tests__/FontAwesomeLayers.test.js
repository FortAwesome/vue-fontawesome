/**
 * @jest-environment jsdom
 */

import { compileAndMount } from '../__fixtures__/helpers'
import { faCircle, faCoffee } from '../__fixtures__/icons'
import { library } from '@fortawesome/fontawesome-svg-core'

import FontAwesomeLayers from '../FontAwesomeLayers'

beforeEach(() => {
  library.add(faCoffee, faCircle)
})

afterEach(() => {
  library.reset()
})

test('empty layers', () => {
  const wrapper = compileAndMount({
    template: '<font-awesome-layers />',
    components: {
      FontAwesomeLayers
    }
  })

  expect(wrapper.element.tagName).toBe('DIV')
  expect(wrapper.element.children.length).toBe(0)
})

test('layers with icon elements', () => {
  const wrapper = compileAndMount({
    template: '<font-awesome-layers><i /><i /></font-awesome-layers>',
    components: {
      FontAwesomeLayers
    }
  })

  expect(wrapper.element.children.length).toBe(2)
})

describe('class handling', () => {
  test('extra static', () => {
    const wrapper = compileAndMount({
      template: '<font-awesome-layers class="extra" />',
      components: {
        FontAwesomeLayers
      }
    })

    expect(wrapper.element.classList.contains('extra')).toBeTruthy()
    expect(wrapper.element.classList.contains('fa-layers')).toBeTruthy()
  })

  test('extra bound', () => {
    const wrapper = compileAndMount({
      template: `<font-awesome-layers :class="['extra']" />`,
      components: {
        FontAwesomeLayers
      }
    })

    expect(wrapper.element.classList.contains('fa-layers')).toBeTruthy()
    expect(wrapper.element.classList.contains('extra')).toBeTruthy()
  })
})

describe('class defaults', () => {
  test('should have fa-layers class and not fa-fw by default', () => {
    const wrapper = compileAndMount({
      template: '<font-awesome-layers />',
      components: { FontAwesomeLayers }
    })

    expect(wrapper.element.classList.contains('fa-layers')).toBeTruthy()
    expect(wrapper.element.classList.contains('fa-fw')).toBeFalsy()
  })

  test('should have fa-fw class when fixedWidth is true', () => {
    const wrapper = compileAndMount({
      template: '<font-awesome-layers :fixed-width="true" />',
      components: { FontAwesomeLayers }
    })

    expect(wrapper.element.classList.contains('fa-layers')).toBeTruthy()
    expect(wrapper.element.classList.contains('fa-fw')).toBeTruthy()
  })
})
