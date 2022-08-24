/**
 * @jest-environment jsdom
 */

import Vue from 'vue/dist/vue'
import FontAwesomeIcon from '../FontAwesomeIcon'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faClose, faUser } from '@fortawesome/free-solid-svg-icons'
import { faCoffee, faCircle, faSpartan, faGlasses } from '../__fixtures__/icons'
import { coreHasFeature, REFERENCE_ICON_BY_STYLE, ICON_ALIASES, REFERENCE_ICON_USING_STRING, REFERENCE_ICON_USING_FAMILY, compileAndMount, mountFromProps } from '../__fixtures__/helpers'

beforeEach(() => {
  library.add(faCoffee, faCircle, faSpartan, faGlasses)
  Vue.component('font-awesome-icon', FontAwesomeIcon)
})

afterEach(() => {
  library.reset()
})

describe('using a family', () => {
  if(coreHasFeature(REFERENCE_ICON_USING_FAMILY)) {
    it('will find a sharp-solid-svg-icon with array format', () => {
      const vm = mountFromProps({ icon: ['fass', 'glasses'] })

      expect(vm.$el.tagName).toBe('svg')
      expect(vm.$el.classList.contains('fa-glasses')).toBeTruthy()
    })

    it('will find a sharp solid icon using short prefix with string format', () => {
      const vm = mountFromProps({ icon: 'fass fa-glasses' })

      expect(vm.$el.tagName).toBe('svg')
      expect(vm.$el.classList.contains('fa-glasses')).toBeTruthy()
    })

    it('will find a sharp solid icon using long prefix with string format', () => {
      const vm = mountFromProps({ icon: 'fa-sharp fa-glasses' })

      expect(vm.$el.tagName).toBe('svg')
      expect(vm.$el.classList.contains('fa-glasses')).toBeTruthy()
    })

    it('will find a sharp solid icon using long prefix and style with string format', () => {
      const vm = mountFromProps({ icon: 'fa-sharp fa-solid fa-glasses' })

        expect(vm.$el.tagName).toBe('svg')
        expect(vm.$el.classList.contains('fa-glasses')).toBeTruthy()
    })
  }
})

it('will find a FAT icon with array format', () => {
  const vm = mountFromProps({ icon: ['fat', 'spartan'] })

  expect(vm.$el.tagName).toBe('svg')
  expect(vm.$el.classList.contains('fa-spartan')).toBeTruthy()
})

if(coreHasFeature(ICON_ALIASES)) {
  it('will find a free-solid-svg-icon with array format', () => {
    library.reset()
    library.add(faClose)
    const vm = mountFromProps({ icon: ['fas', 'xmark'] })

    expect(vm.$el.tagName).toBe('svg')
    expect(vm.$el.classList.contains('fa-xmark')).toBeTruthy()
  })

  it('will find a free-solid-svg-icon that is an alias', () => {
    library.reset()
    library.add(faClose)
    const vm = mountFromProps({ icon: ['fas', 'close'] })

    expect(vm.$el.tagName).toBe('svg')
    expect(vm.$el.classList.contains('fa-xmark')).toBeTruthy()
  })
}

if(coreHasFeature(REFERENCE_ICON_USING_STRING)) {
  it('will find an icon using string format', () => {
    const vm = mountFromProps({ icon: 'fa-coffee' })

    expect(vm.$el.tagName).toBe('svg')
    expect(vm.$el.classList.contains('fa-coffee')).toBeTruthy()
  })

  it('will find an icon using string format with style', () => {
    const vm = mountFromProps({ icon: 'fa-solid fa-coffee' })

    expect(vm.$el.tagName).toBe('svg')
    expect(vm.$el.classList.contains('fa-coffee')).toBeTruthy()
  })
}

if (coreHasFeature(REFERENCE_ICON_BY_STYLE)) {
  it('will find a THIN icon with array format', () => {
    const vm = mountFromProps({ icon: ['thin', 'spartan'] })

    expect(vm.$el.tagName).toBe('svg')
    expect(vm.$el.classList.contains('fa-spartan')).toBeTruthy()
  })

  it('will find a FA-THIN icon with array format', () => {
    const vm = mountFromProps({ icon: ['fa-thin', 'spartan'] })

    expect(vm.$el.tagName).toBe('svg')
    expect(vm.$el.classList.contains('fa-spartan')).toBeTruthy()
  })
}

it('will find an icon using array format', () => {
  const vm = mountFromProps({ icon: ['fas', 'coffee'] })

  expect(vm.$el.tagName).toBe('svg')
  expect(vm.$el.classList.contains('fa-coffee')).toBeTruthy()
})

it('will find an icon using string format', () => {
  const vm = mountFromProps({ icon: 'coffee' })

  expect(vm.$el.tagName).toBe('svg')
  expect(vm.$el.classList.contains('fa-coffee')).toBeTruthy()
})

it('will find an icon with file type svg using an imported object from svg icons package', () => {
  const vm = mountFromProps({ icon: faUser })

  expect(vm.$el.tagName).toBe('svg')
})

it('will handle a missing icon', () => {
  const vm = mountFromProps({ icon: ['fas', 'noicon'] })

  expect(vm.$el.tagName).toBeFalsy()
})

it('will find an icon using iconDefinition', () => {
  const vm = mountFromProps({ icon: faCoffee })

  expect(vm.$el.tagName).toBe('svg')
  expect(vm.$el.classList.contains('fa-coffee')).toBeTruthy()
})

describe('unrelated Vue data options', () => {
  it('will find the class "extra" with extra as a static class', () => {
    const vm = compileAndMount(
      `<font-awesome-icon class="extra" :icon="icon" />`,
      { data: { icon: faCoffee } }
    )

    expect(vm.$el.classList.contains('extra')).toBeTruthy()
  })

  it('will find the class "extra" with extra as a bound class', () => {
    const vm = compileAndMount(
      `<font-awesome-icon :class="['extra1', {'extra2': true}]" :icon="icon" />`,
      { data: { icon: faCoffee } }
    )

    expect(vm.$el.classList.contains('extra1')).toBeTruthy()
    expect(vm.$el.classList.contains('extra2')).toBeTruthy()
  })

  it('will find additional styling', () => {
    const vm = compileAndMount(
      `<font-awesome-icon :style="{'font-size': '42px'}" :icon="icon" />`,
      { data: { icon: faCoffee } }
    )

    expect(vm.$el.style.getPropertyValue('font-size')).toBe('42px')
  })

  it('will find extra DOM property', () => {
    const vm = compileAndMount(
      `<font-awesome-icon rel="local" :icon="icon" />`,
      { data: { icon: faCoffee } }
    )

    expect(vm.$el.getAttribute('rel')).toBe('local')
  })

  it('tests using a listener', () => {
    let hasBeenClicked = false

    const vm = compileAndMount(
      `<font-awesome-icon @click="clicked" :icon="icon" />`,
      { data: { icon: faCoffee }, methods: { clicked () { hasBeenClicked = true } } }
    )

    expect(hasBeenClicked).toBeFalsy()
    vm.$el.dispatchEvent(new Event('click'))
    expect(hasBeenClicked).toBeTruthy()
  })
})

it('will have a class of fa-border using border', () => {
  const vm = mountFromProps({ icon: faCoffee, border: true })

  expect(vm.$el.classList.contains('fa-border')).toBeTruthy()
})

it('will have class fa-fw using fixedWidth', () => {
  const vm = mountFromProps({ icon: faCoffee, fixedWidth: true })

  expect(vm.$el.classList.contains('fa-fw')).toBeTruthy()
})

describe('using flip', () => {
  it('will have a class of flip', () => {
    const vm = mountFromProps({ icon: faCoffee, flip: true })

    expect(vm.$el.classList.contains('fa-flip')).toBeTruthy()
    expect(vm.$el.classList.contains('fa-flip-vertical')).toBeFalsy()
    expect(vm.$el.classList.contains('fa-flip-horizontal')).toBeFalsy()
    expect(vm.$el.classList.contains('fa-flip-both')).toBeFalsy()
  })

  it('will have a class of horizontal', () => {
    const vm = mountFromProps({ icon: faCoffee, flip: "horizontal" })

    expect(vm.$el.classList.contains('fa-flip-horizontal')).toBeTruthy()
    expect(vm.$el.classList.contains('fa-flip-vertical')).toBeFalsy()
    expect(vm.$el.classList.contains('fa-flip-both')).toBeFalsy()
    expect(vm.$el.classList.contains('fa-flip')).toBeFalsy()
  })

  it('will have a class of vertical', () => {
    const vm = mountFromProps({ icon: faCoffee, flip: "vertical" })

    expect(vm.$el.classList.contains('fa-flip-vertical')).toBeTruthy()
    expect(vm.$el.classList.contains('fa-flip-horizontal')).toBeFalsy()
    expect(vm.$el.classList.contains('fa-flip-both')).toBeFalsy()
    expect(vm.$el.classList.contains('fa-flip')).toBeFalsy()
  })

  it('will have the correct classes using both', () => {
    const vm = mountFromProps({ icon: faCoffee, flip: "both" })

    expect(vm.$el.classList.contains('fa-flip-horizontal')).toBeTruthy()
    expect(vm.$el.classList.contains('fa-flip-vertical')).toBeTruthy()
    expect(vm.$el.classList.contains('fa-flip')).toBeFalsy()
  })
})

it('will have a class of fa-li using listItem', () => {
  const vm = mountFromProps({ icon: faCoffee, listItem: true })

  expect(vm.$el.classList.contains('fa-li')).toBeTruthy()
})

describe('using pull', () => {
  it('will have a class of fa-pull-right', () => {
    const vm = mountFromProps({ icon: faCoffee, pull: "right" })

    expect(vm.$el.classList.contains('fa-pull-right')).toBeTruthy()
  })

  it('will have a class of fa-pull-left', () => {
    const vm = mountFromProps({ icon: faCoffee, pull: "left" })

    expect(vm.$el.classList.contains('fa-pull-left')).toBeTruthy()
  })
})

it('will have a class of fa-pulse', () => {
  const vm = mountFromProps({ icon: faCoffee, pulse: true })

  expect(vm.$el.classList.contains('fa-pulse')).toBeTruthy()
})

describe('using rotation', () => {
  it('will have a class of fa-rotate-90', () => {
    const vm = mountFromProps({ icon: faCoffee, rotation: 90 })

    expect(vm.$el.classList.contains('fa-rotate-90')).toBeTruthy()
  })

  it('will have a class of fa-rotate-180', () => {
    const vm = mountFromProps({ icon: faCoffee, rotation: 180 })

    expect(vm.$el.classList.contains('fa-rotate-180')).toBeTruthy()
  })

  it('will have a class of fa-rotate-270', () => {
    const vm = mountFromProps({ icon: faCoffee, rotation: 270 })

    expect(vm.$el.classList.contains('fa-rotate-270')).toBeTruthy()
  })

  it('will have a class of fa-rotate-90 using a string', () => {
    const vm = mountFromProps({ icon: faCoffee, rotation: '90' })

    expect(vm.$el.classList.contains('fa-rotate-90')).toBeTruthy()
  })
})

it('will have a class of swap opacity', () => {
  const vm = mountFromProps({ icon: faCoffee, swapOpacity: true })

  expect(vm.$el.classList.contains('fa-swap-opacity')).toBeTruthy()
})

it('using size', () => {
  ['2xs', 'xs', 'sm', 'lg', 'xl', '2xl', '1x', '2x', '3x', '4x', '5x', '6x', '7x', '8x', '9x', '10x'].forEach(size => {
    const vm = mountFromProps({ icon: faCoffee, size: size })

    expect(vm.$el.classList.contains(`fa-${size}`)).toBeTruthy()
  })
})

it('will have a class of spin', () => {
  const vm = mountFromProps({ icon: faCoffee, spin: true })

  expect(vm.$el.classList.contains('fa-spin')).toBeTruthy()
})

it('will have a class of spinPulse and spinReverse', () => {
  const vm = mountFromProps({ icon: faCoffee, spinPulse: true, spinReverse: true })

  expect(vm.$el.classList.contains('fa-spin-pulse')).toBeTruthy()
  expect(vm.$el.classList.contains('fa-spin-reverse')).toBeTruthy()
})

it('will have a class of inverse', () => {
  const vm = mountFromProps({ icon: faCoffee, inverse: true })

  expect(vm.$el.classList.contains('fa-inverse')).toBeTruthy()
})

describe('using transform', () => {
  it('will test tranform using a string', () => {
    const vm = mountFromProps({ icon: faCoffee, transform: 'grow-40 left-4 rotate-15' })

    expect(vm.$el).toBeTruthy()
  })

  it('will test tranform using an object', () => {
    const vm = mountFromProps({ icon: faCoffee, transform: { flipX: false, flipY: false, rotate: 15, size: 56, x: -4, y: 0 } })

    expect(vm.$el).toBeTruthy()
  })
})

describe('mask', () => {
  it('will add icon', () => {
    const vm = mountFromProps({ icon: faCoffee, mask: faCircle })

    expect(vm.$el.innerHTML).toMatch(/clipPath/)
  })

  it('will add icon referencing librbary', () => {
    const vm = mountFromProps({ icon: ['fas', 'coffee'], mask: ['fas', 'circle'] })
  })
})

describe('symbol', () => {
  it("will not create a symbol", () => {
    const vm = mountFromProps({ icon: faCoffee })

    expect(vm.$el.style.getPropertyValue('display'))
      .toBe('')
  })

  it("will create a symbol", () => {
    const vm = mountFromProps({ icon: faCoffee, symbol: 'coffee-icon' })

    expect(vm.$el.style.getPropertyValue('display'))
      .toBe('none')
    expect(vm.$el.children[0].tagName)
      .toBe('symbol')
  })
})

describe('title', () => {
  it('using title', () => {
    const vm = mountFromProps({ icon: faCoffee, title: 'Coffee' })

    expect(vm.$el.getElementsByTagName('title')[0].innerHTML)
      .toBe('Coffee')
  })

  it('not using title', () => {
    const vm = mountFromProps({ icon: faCoffee })

    expect(vm.$el.getElementsByTagName('title').length)
      .toBe(0)
  })
})

describe('using bounce', () => {
  it('will find a class of bounce', () => {
    const vm = mountFromProps({ icon: faCoffee, bounce: true })

    expect(vm.$el.classList.contains('fa-bounce')).toBeTruthy()
  })
})

describe('using shake', () => {
  it('will find a class of shake', () => {
    const vm = mountFromProps({ icon: faCoffee, shake: true })

    expect(vm.$el.classList.contains('fa-shake')).toBeTruthy()
  })
})

describe('using beat-fade', () => {
  it('will find a class of beat-fade', () => {
    const vm = mountFromProps({ icon: faCoffee, beatFade: true })

    expect(vm.$el.classList.contains('fa-beat-fade')).toBeTruthy()
  })
})
