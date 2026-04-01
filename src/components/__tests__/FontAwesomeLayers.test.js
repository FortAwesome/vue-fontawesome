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
  let wrapper

  beforeEach(() => {
    wrapper = compileAndMount({
      template: '<font-awesome-layers />',
      components: { FontAwesomeLayers }
    })
  })

  test('should not have fa-fw class', () => {
    expect(wrapper.element.classList.contains('fa-fw')).toBeFalsy()
    expect(wrapper.element.classList.contains('fa-layers')).toBeTruthy()
  })
})
