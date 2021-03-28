import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee, faCircle } from '../__fixtures__/icons'
import { compileAndMount, mountFromProps } from '../__fixtures__/helpers'
import FontAwesomeIcon from '../FontAwesomeIcon'

beforeEach(() => {
  library.add(faCoffee, faCircle)
})

test('using array format', () => {
  const wrapper = mountFromProps({ icon: ['fas', 'coffee'] })

  expect(wrapper.element.tagName).toBe('svg')
  expect(wrapper.element.classList.contains('fa-coffee')).toBeTruthy()
})

test('using string format', () => {
  const wrapper = mountFromProps({ icon: 'coffee' })

  expect(wrapper.element.tagName).toBe('svg')
  expect(wrapper.element.classList.contains('fa-coffee')).toBeTruthy()
})

test('missing icon', () => {
  const wrapper = mountFromProps({ icon: ['fas', 'noicon'] })

  expect(wrapper.element.tagName).toBeFalsy()
})

test('using iconDefinition', () => {
  const wrapper = mountFromProps({ icon: faCoffee })

  expect(wrapper.element.tagName).toBe('svg')
  expect(wrapper.element.classList.contains('fa-coffee')).toBeTruthy()
})

describe('unrelated Vue data options', () => {
  test('with extra static class', () => {
    const wrapper = compileAndMount({
      template: '<font-awesome-icon class="extra" :icon="icon" />',
      data () {
        return { icon: faCoffee }
      },
      components: {
        FontAwesomeIcon
      }
    })

    expect(wrapper.element.classList.contains('extra')).toBeTruthy()
  })

  test('with extra bound class', () => {
    const wrapper = compileAndMount({
      template: `<font-awesome-icon :class="['extra1', {'extra2': true}]" :icon="icon" />`,
      data() {
        return { icon: faCoffee }
      },
      components: {
        FontAwesomeIcon
      }
    })

    expect(wrapper.element.classList.contains('extra1')).toBeTruthy()
    expect(wrapper.element.classList.contains('extra2')).toBeTruthy()
  })

  test('with extra style', () => {
    const wrapper = compileAndMount({
      template: `<font-awesome-icon :style="{'font-size': '42px'}" :icon="icon" />`,
      data () {
        return { icon: faCoffee }
      },
      components: {
        FontAwesomeIcon
      }
    })

    expect(wrapper.element.style.getPropertyValue('font-size')).toBe('42px')
  })

  test('with extra DOM property', () => {
    const wrapper = compileAndMount({
      template: `<font-awesome-icon rel="local" :icon="icon" />`,
      data () {
        return { icon: faCoffee }
      },
      components: {
        FontAwesomeIcon
      }
    })

    expect(wrapper.element.getAttribute('rel')).toBe('local')
  })

  test('with listener', async () => {
    let hasBeenClicked = false

    const wrapper = compileAndMount({
      template: '<font-awesome-icon @click="clicked" :icon="icon" />',
      data () {
        return { icon: faCoffee }
      },
      methods: {
        clicked () {
          hasBeenClicked = true
        }
      },
      components: {
        FontAwesomeIcon
      }
    })

    expect(hasBeenClicked).toBeFalsy()
    await wrapper.trigger('click')
    expect(hasBeenClicked).toBeTruthy()
  })
})

test('using border', () => {
  const wrapper = mountFromProps({ icon: faCoffee, border: true })

  expect(wrapper.element.classList.contains('fa-border')).toBeTruthy()
})

test('using fixedWidth', () => {
  const wrapper = mountFromProps({ icon: faCoffee, fixedWidth: true })

  expect(wrapper.element.classList.contains('fa-fw')).toBeTruthy()
})

describe('using flip', () => {
  test('horizontal', () => {
    const wrapper = mountFromProps({ icon: faCoffee, flip: "horizontal" })

    expect(wrapper.element.classList.contains('fa-flip-horizontal')).toBeTruthy()
  })

  test('vertical', () => {
    const wrapper = mountFromProps({ icon: faCoffee, flip: "vertical" })

    expect(wrapper.element.classList.contains('fa-flip-vertical')).toBeTruthy()
  })

  test('both', () => {
    const wrapper = mountFromProps({ icon: faCoffee, flip: "both" })

    expect(wrapper.element.classList.contains('fa-flip-horizontal')).toBeTruthy()
    expect(wrapper.element.classList.contains('fa-flip-vertical')).toBeTruthy()
  })
})

test('using listItem', () => {
  const wrapper = mountFromProps({ icon: faCoffee, listItem: true })

  expect(wrapper.element.classList.contains('fa-li')).toBeTruthy()
})

describe('using pull', () => {
  test('right', () => {
    const wrapper = mountFromProps({ icon: faCoffee, pull: "right" })

    expect(wrapper.element.classList.contains('fa-pull-right')).toBeTruthy()
  })

  test('left', () => {
    const wrapper = mountFromProps({ icon: faCoffee, pull: "left" })

    expect(wrapper.element.classList.contains('fa-pull-left')).toBeTruthy()
  })
})

test('using pulse', () => {
  const wrapper = mountFromProps({ icon: faCoffee, pulse: true })

  expect(wrapper.element.classList.contains('fa-pulse')).toBeTruthy()
})

describe('using rotation', () => {
  test('90', () => {
    const wrapper = mountFromProps({ icon: faCoffee, rotation: 90 })

    expect(wrapper.element.classList.contains('fa-rotate-90')).toBeTruthy()
  })

  test('180', () => {
    const wrapper = mountFromProps({ icon: faCoffee, rotation: 180 })

    expect(wrapper.element.classList.contains('fa-rotate-180')).toBeTruthy()
  })

  test('270', () => {
    const wrapper = mountFromProps({ icon: faCoffee, rotation: 270 })

    expect(wrapper.element.classList.contains('fa-rotate-270')).toBeTruthy()
  })

  test('as a string', () => {
    const wrapper = mountFromProps({ icon: faCoffee, rotation: '90' })

    expect(wrapper.element.classList.contains('fa-rotate-90')).toBeTruthy()
  })
})

test('swap opacity', () => {
  const wrapper = mountFromProps({ icon: faCoffee, swapOpacity: true })

  expect(wrapper.element.classList.contains('fa-swap-opacity')).toBeTruthy()
})

test('using size', () => {
  ['lg', 'xs', 'sm', '1x', '2x', '3x', '4x', '5x', '6x', '7x', '8x', '9x', '10x'].forEach(size => {
    const wrapper = mountFromProps({ icon: faCoffee, size: size })

    expect(wrapper.element.classList.contains(`fa-${size}`)).toBeTruthy()
  })
})

test('using spin', () => {
  const wrapper = mountFromProps({ icon: faCoffee, spin: true })

  expect(wrapper.element.classList.contains('fa-spin')).toBeTruthy()
})

test('using inverse', () => {
  const wrapper = mountFromProps({ icon: faCoffee, inverse: true })

  expect(wrapper.element.classList.contains('fa-inverse')).toBeTruthy()
})

describe('using transform', () => {
  test('string', () => {
    const wrapper = mountFromProps({ icon: faCoffee, transform: 'grow-40 left-4 rotate-15' })

    expect(wrapper.element).toBeTruthy()
  })

  test('object', () => {
    const wrapper = mountFromProps({ icon: faCoffee, transform: { flipX: false, flipY: false, rotate: 15, size: 56, x: -4, y: 0 } })

    expect(wrapper.element).toBeTruthy()
  })
})

describe('mask', () => {
  test('will add icon', () => {
    const wrapper = mountFromProps({ icon: faCoffee, mask: faCircle })

    expect(wrapper.element.innerHTML).toMatch(/clipPath/)
  })

  test('will add icon referencing library', () => {
    const wrapper = mountFromProps({ icon: ['fas', 'coffee'], mask: ['fas', 'circle'] })

    // missing assertion here
  })
})

describe('symbol', () => {
  test("will not create a symbol", () => {
    const wrapper = mountFromProps({ icon: faCoffee })

    expect(wrapper.element.style.getPropertyValue('display')).toBe('')
  })

  test("will create a symbol", () => {
    const wrapper = mountFromProps({ icon: faCoffee, symbol: 'coffee-icon' })

    expect(wrapper.element.style.getPropertyValue('display')).toBe('none')
    expect(wrapper.element.children[0].tagName).toBe('symbol')
  })
})

describe('title', () => {
  test('using title', () => {
    const wrapper = mountFromProps({ icon: faCoffee, title: 'Coffee' })

    expect(wrapper.element.getElementsByTagName('title')[0].innerHTML).toBe('Coffee')
  })

  test('not using title', () => {
    const wrapper = mountFromProps({ icon: faCoffee })

    expect(wrapper.element.getElementsByTagName('title').length).toBe(0)
  })
})

describe('reactivity', () => {
  test('changing props should update the element', async () => {
    const wrapper = mountFromProps({ icon: faCoffee, title: 'Coffee' })

    expect(wrapper.element.classList.contains('fa-coffee')).toBeTruthy()
    expect(wrapper.element.getElementsByTagName('title')[0].innerHTML).toBe('Coffee')

    await wrapper.setProps({ icon: faCircle, title: 'Circle' })

    expect(wrapper.element.classList.contains('fa-circle')).toBeTruthy()
    expect(wrapper.element.getElementsByTagName('title')[0].innerHTML).toBe('Circle')
  })
})
