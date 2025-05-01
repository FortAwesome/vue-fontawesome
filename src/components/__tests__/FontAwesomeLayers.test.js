/**
 * @jest-environment jsdom
 */

import { compileAndMount } from '../__fixtures__/helpers'
import { faCoffee, faCircle } from '../__fixtures__/icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { ICON_PACKS_STARTING_VERSION, SVG_CORE_VERSION, versionCheckLt } from '../../utils'

import FontAwesomeLayers from '../FontAwesomeLayers'
import semver from 'semver'

beforeEach(() => {
  library.add(faCoffee, faCircle)
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

test('empty layers', () => {
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

    expect(wrapper.element.getAttribute('class')).toBe('fa-layers extra')
  })

  if (versionCheckLt(SVG_CORE_VERSION, ICON_PACKS_STARTING_VERSION)) {
    // the fixedWidth property has been deprecated as of version 7.0.0
    test('fixed width', () => {
      const wrapper = compileAndMount({
        template: '<font-awesome-layers fixed-width />',
        components: {
          FontAwesomeLayers
        }
      })

      expect(wrapper.element.getAttribute('class')).toBe('fa-layers fa-fw')
    })
  }
})

describe('reactivity', () => {
  let wrapper

  beforeEach(() => {
    wrapper = compileAndMount({
      template: '<font-awesome-layers fixed-width />',
      components: { FontAwesomeLayers }
    })
  })

  if (versionCheckLt(SVG_CORE_VERSION, ICON_PACKS_STARTING_VERSION)) {
    // the fixedWidth property has been deprecated as of version 7.0.0
    test('changing props should update the element prior to version 7', async () => {
      expect(wrapper.element.getAttribute('class')).toBe('fa-layers fa-fw')

      await wrapper.setProps({ fixedWidth: false })

      expect(wrapper.element.getAttribute('class')).toBe('fa-layers')
    })
  } else {
    test('should not have fa-fw class in version 7 or later', () => {
      expect(wrapper.element.classList.contains('fa-fw')).toBeFalsy()
      expect(wrapper.element.getAttribute('class')).toBe('fa-layers')
    })
  }
})
