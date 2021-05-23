import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee, faCircle } from '../__fixtures__/icons'
import { compileAndMount, mountFromProps } from '../__fixtures__/helpers'
import FontAwesomeLayers from '../FontAwesomeLayers'

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

  test('fixed width', () => {
    const wrapper = compileAndMount({
      template: '<font-awesome-layers fixed-width />',
      components: {
        FontAwesomeLayers
      }
    })

    expect(wrapper.element.getAttribute('class')).toBe('fa-layers fa-fw')
  })
})

describe('reactivity', () => {
  test('changing props should update the element', async () => {
    const wrapper = compileAndMount({
      template: '<font-awesome-layers fixed-width />',
      components: {
        FontAwesomeLayers
      }
    })

    expect(wrapper.element.getAttribute('class')).toBe('fa-layers fa-fw')

    await wrapper.setProps({ fixedWidth: false })

    expect(wrapper.element.getAttribute('class')).toBe('fa-layers')
  })
})
