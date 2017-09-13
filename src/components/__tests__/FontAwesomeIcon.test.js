import Vue from 'vue'
import FontAwesomeIcon from '../FontAwesomeIcon'
import fontawesome from '@fortawesome/fontawesome'

const faCoffee = {
  prefix: 'fas',
  iconName: 'coffee',
  icon: [
    640,
    512,
    [],
    "f0f4",
    "M192 384h192c53 0 96-43 96-96h32c70.6 0 128-57.4 128-128S582.6 32 512 32H120c-13.3 0-24 10.7-24 24v232c0 53 43 96 96 96zM512 96c35.3 0 64 28.7 64 64s-28.7 64-64 64h-32V96h32zm47.7 384H48.3c-47.6 0-61-64-36-64h583.3c25 0 11.8 64-35.9 64z"
  ]
}

fontawesome.library.add(faCoffee)

function mount (propsData = {}) {
  const opts = {
    render: (h) => h(
      FontAwesomeIcon,
      { props: propsData }
    )
  }

  const vm = new Vue(opts)
  vm.$mount()

  return vm
}

test('using pack and name', () => {
  const vm = mount({ pack: 'fas', name: 'coffee' })

  expect(vm.$el.tagName).toBe('svg')
  expect(vm.$el.classList.contains('fa-coffee')).toBeTruthy()
})

test('using pack common names', () => {
  const vm = mount({ pack: 'solid', name: 'coffee' })

  expect(vm.$el.tagName).toBe('svg')
  expect(vm.$el.classList.contains('fa-coffee')).toBeTruthy()
})

test('using iconDefinition', () => {
  const vm = mount({ iconDefinition: faCoffee })

  expect(vm.$el.tagName).toBe('svg')
  expect(vm.$el.classList.contains('fa-coffee')).toBeTruthy()
})

test('using border', () => {
  const vm = mount({ iconDefinition: faCoffee, border: true })

  expect(vm.$el.classList.contains('fa-border')).toBeTruthy()
})

test('using fixedWidth', () => {
  const vm = mount({ iconDefinition: faCoffee, fixedWidth: true })

  expect(vm.$el.classList.contains('fa-fw')).toBeTruthy()
})

describe('using flip', () => {
  test('horizontal', () => {
    const vm = mount({ iconDefinition: faCoffee, flip: "horizontal" })

    expect(vm.$el.classList.contains('fa-flip-horizontal')).toBeTruthy()
  })

  test('vertical', () => {
    const vm = mount({ iconDefinition: faCoffee, flip: "vertical" })

    expect(vm.$el.classList.contains('fa-flip-vertical')).toBeTruthy()
  })

  test('both', () => {
    const vm = mount({ iconDefinition: faCoffee, flip: "both" })

    expect(vm.$el.classList.contains('fa-flip-horizontal')).toBeTruthy()
    expect(vm.$el.classList.contains('fa-flip-vertical')).toBeTruthy()
  })
})

test('using listItem', () => {
  const vm = mount({ iconDefinition: faCoffee, listItem: true })

  expect(vm.$el.classList.contains('fa-li')).toBeTruthy()
})

describe('using pull', () => {
  test('right', () => {
    const vm = mount({ iconDefinition: faCoffee, pull: "right" })

    expect(vm.$el.classList.contains('fa-pull-right')).toBeTruthy()
  })

  test('left', () => {
    const vm = mount({ iconDefinition: faCoffee, pull: "left" })

    expect(vm.$el.classList.contains('fa-pull-left')).toBeTruthy()
  })
})

test('using pulse', () => {
  const vm = mount({ iconDefinition: faCoffee, pulse: true })

  expect(vm.$el.classList.contains('fa-pulse')).toBeTruthy()
})

describe('using rotation', () => {
  test('90', () => {
    const vm = mount({ iconDefinition: faCoffee, rotation: 90 })

    expect(vm.$el.classList.contains('fa-rotate-90')).toBeTruthy()
  })

  test('180', () => {
    const vm = mount({ iconDefinition: faCoffee, rotation: 180 })

    expect(vm.$el.classList.contains('fa-rotate-180')).toBeTruthy()
  })

  test('270', () => {
    const vm = mount({ iconDefinition: faCoffee, rotation: 270 })

    expect(vm.$el.classList.contains('fa-rotate-270')).toBeTruthy()
  })
})

test('using size', () => {
  ['lg', 'xs', 'sm', '1x', '2x', '3x', '4x', '5x', '6x', '7x', '8x', '9x', '10x'].forEach(size => {
    const vm = mount({ iconDefinition: faCoffee, size: size })

    expect(vm.$el.classList.contains(`fa-${size}`)).toBeTruthy()
  })
})

test('using spin', () => {
  const vm = mount({ iconDefinition: faCoffee, spin: true })

  expect(vm.$el.classList.contains('fa-spin')).toBeTruthy()
})

describe('using transform', () => {
  test('string', () => {
    const vm = mount({ iconDefinition: faCoffee, transform: 'grow-40 left-4 rotate-15' })

    expect(vm.$el.style.webkitTransform).toBe('translate(-0.25em, 0em) scale(3.5, 3.5) rotate(15deg)')
  })

  test('object', () => {
    const vm = mount({ iconDefinition: faCoffee, transform: { flipX: false, flipY: false, rotate: 15, size: 56, x: -4, y: 0 } })

    expect(vm.$el.style.webkitTransform).toBe('translate(-0.25em, 0em) scale(3.5, 3.5) rotate(15deg)')
  })
})
