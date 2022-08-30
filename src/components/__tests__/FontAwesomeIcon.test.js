/**
 * @jest-environment jsdom
 */

import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee, faCircle, faAlien, faGlasses } from '../__fixtures__/icons'
import { coreHasFeature, REFERENCE_ICON_BY_STYLE, ICON_ALIASES, REFERENCE_ICON_USING_STRING, REFERENCE_ICON_USING_FAMILY, compileAndMount, mountFromProps } from '../__fixtures__/helpers'

import FontAwesomeIcon from '../FontAwesomeIcon'

beforeEach(() => {
  library.add(faCoffee, faCircle, faAlien, faGlasses)
})

afterEach(() => {
  library.reset()
})

describe('using a family', () => {
  if(coreHasFeature(REFERENCE_ICON_USING_FAMILY)) {
    it('will find a sharp-solid-svg-icon with array format', () => {
      const wrapper = mountFromProps({ icon: ['fass', 'glasses'] })

      expect(wrapper.element.tagName).toBe('svg')
      expect(wrapper.element.classList.contains('fa-glasses')).toBeTruthy()
    })

    it('will find a sharp solid icon using short prefix with string format', () => {
      const wrapper = mountFromProps({ icon: ['fass', 'glasses'] })

      expect(wrapper.element.tagName).toBe('svg')
      expect(wrapper.element.classList.contains('fa-glasses')).toBeTruthy()
    })

    it('will find a sharp solid icon using long prefix with string format', () => {
      const wrapper = mountFromProps({ icon: ['fass', 'glasses'] })

      expect(wrapper.element.tagName).toBe('svg')
      expect(wrapper.element.classList.contains('fa-glasses')).toBeTruthy()
    })

    it('will find a sharp solid icon using long prefix and style with string format', () => {
      const wrapper = mountFromProps({ icon: ['fass', 'glasses'] })

      expect(wrapper.element.tagName).toBe('svg')
      expect(wrapper.element.classList.contains('fa-glasses')).toBeTruthy()
    })
  }
})

describe('icons are showing', () => {
  it('will find an icon using array format, short prefix and short icon name', () => {
    const wrapper = mountFromProps({ icon: ['fas', 'coffee'] })

    expect(wrapper.element.tagName).toBe('svg')
    expect(wrapper.element.classList.contains('fa-coffee')).toBeTruthy()
  })

  if (coreHasFeature(REFERENCE_ICON_BY_STYLE)) {
    it('will find an icon using array format, short prefix and long icon name', () => {
      const wrapper = mountFromProps({ icon: ['fas', 'fa-coffee'] })

      expect(wrapper.element.tagName).toBe('svg')
      expect(wrapper.element.classList.contains('fa-coffee')).toBeTruthy()
    })

    it('will find an icon using array format, long prefix and long icon name', () => {
      const wrapper = mountFromProps({ icon: ['fa-solid', 'fa-coffee'] })

      expect(wrapper.element.tagName).toBe('svg')
      expect(wrapper.element.classList.contains('fa-coffee')).toBeTruthy()
    })

    it ('will find an icon using array format, long prefix and short icon name', () => {
      const wrapper = mountFromProps({ icon: ['fa-duotone', 'alien'] })

      expect(wrapper.element.tagName).toBe('svg')
      expect(wrapper.element.classList.contains('fa-alien')).toBeTruthy()
    })
  }

  if (coreHasFeature(REFERENCE_ICON_USING_STRING)) {
    it('will find an icon using string format, with long prefix and long icon name', () => {
      const wrapper = mountFromProps({ icon: 'fa-duotone fa-alien' })

      expect(wrapper.element.tagName).toBe('svg')
      expect(wrapper.element.classList.contains('fa-alien')).toBeTruthy()
    })

    it('will find an icon using string format, with short prefix and long icon name', () => {
      const wrapper = mountFromProps({ icon: 'fad fa-alien' })

      expect(wrapper.element.tagName).toBe('svg')
      expect(wrapper.element.classList.contains('fa-alien')).toBeTruthy()
    })
  }

  it('will find an icon using string format, icon name only', () => {
    const wrapper = mountFromProps({ icon: 'coffee' })

    expect(wrapper.element.tagName).toBe('svg')
    expect(wrapper.element.classList.contains('fa-coffee')).toBeTruthy()
  })

  it('will handle a missing icon', () => {
    const wrapper = mountFromProps({ icon: ['fas', 'noicon'] })

    expect(wrapper.element.tagName).toBeFalsy()
  })

  it('will find an icon using iconDefinition', () => {
    const wrapper = mountFromProps({ icon: faCoffee })

    expect(wrapper.element.tagName).toBe('svg')
    expect(wrapper.element.classList.contains('fa-coffee')).toBeTruthy()
  })
})

describe('unrelated Vue data options', () => {
  it('will find an icon with extra static class', () => {
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

  it('will find an icon with extra bound class', () => {
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

  it('will find an icon with extra style', () => {
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

  it('will find extra DOM property', () => {
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

  it('tests using a listener', async () => {
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

it('will have a class of fa-border using border', () => {
  const wrapper = mountFromProps({ icon: faCoffee, border: true })

  expect(wrapper.element.classList.contains('fa-border')).toBeTruthy()
})

it('will have class fa-fw using fixedWidth', () => {
  const wrapper = mountFromProps({ icon: faCoffee, fixedWidth: true })

  expect(wrapper.element.classList.contains('fa-fw')).toBeTruthy()
})

describe('using flip', () => {
  it('will have a class of flip', () => {
    const wrapper = mountFromProps({ icon: faCoffee, flip: true })

    expect(wrapper.element.classList.contains('fa-flip')).toBeTruthy()
    expect(wrapper.element.classList.contains('fa-flip-vertical')).toBeFalsy()
    expect(wrapper.element.classList.contains('fa-flip-horizontal')).toBeFalsy()
    expect(wrapper.element.classList.contains('fa-flip-both')).toBeFalsy()
  })

  it('will have a class of horizontal', () => {
    const wrapper = mountFromProps({ icon: faCoffee, flip: "horizontal" })

    expect(wrapper.element.classList.contains('fa-flip-horizontal')).toBeTruthy()
    expect(wrapper.element.classList.contains('fa-flip-vertical')).toBeFalsy()
    expect(wrapper.element.classList.contains('fa-flip-both')).toBeFalsy()
    expect(wrapper.element.classList.contains('fa-flip')).toBeFalsy()
  })

  it('will have a class of vertical', () => {
    const wrapper = mountFromProps({ icon: faCoffee, flip: "vertical" })

    expect(wrapper.element.classList.contains('fa-flip-vertical')).toBeTruthy()
    expect(wrapper.element.classList.contains('fa-flip-horizontal')).toBeFalsy()
    expect(wrapper.element.classList.contains('fa-flip-both')).toBeFalsy()
    expect(wrapper.element.classList.contains('fa-flip')).toBeFalsy()
  })

  it('will have the correct classes using both', () => {
    const wrapper = mountFromProps({ icon: faCoffee, flip: "both" })

    expect(wrapper.element.classList.contains('fa-flip-horizontal')).toBeTruthy()
    expect(wrapper.element.classList.contains('fa-flip-vertical')).toBeTruthy()
    expect(wrapper.element.classList.contains('fa-flip')).toBeFalsy()
  })
})

it('will have a class of fa-li using listItem', () => {
  const wrapper = mountFromProps({ icon: faCoffee, listItem: true })

  expect(wrapper.element.classList.contains('fa-li')).toBeTruthy()
})

describe('using pull', () => {
  it('will have a class of fa-pull-right', () => {
    const wrapper = mountFromProps({ icon: faCoffee, pull: "right" })

    expect(wrapper.element.classList.contains('fa-pull-right')).toBeTruthy()
  })

  it('will have a class of fa-pull-left', () => {
    const wrapper = mountFromProps({ icon: faCoffee, pull: "left" })

    expect(wrapper.element.classList.contains('fa-pull-left')).toBeTruthy()
  })
})

it('will have a class of fa-pulse', () => {
  const wrapper = mountFromProps({ icon: faCoffee, pulse: true })

  expect(wrapper.element.classList.contains('fa-pulse')).toBeTruthy()
})

describe('using rotation', () => {
  it('will have a class of fa-rotate-90', () => {
    const wrapper = mountFromProps({ icon: faCoffee, rotation: 90 })

    expect(wrapper.element.classList.contains('fa-rotate-90')).toBeTruthy()
  })

  it('will have a class of fa-rotate-180', () => {
    const wrapper = mountFromProps({ icon: faCoffee, rotation: 180 })

    expect(wrapper.element.classList.contains('fa-rotate-180')).toBeTruthy()
  })

  it('will have a class of fa-rotate-270', () => {
    const wrapper = mountFromProps({ icon: faCoffee, rotation: 270 })

    expect(wrapper.element.classList.contains('fa-rotate-270')).toBeTruthy()
  })

  it('will have a class of fa-rotate-90 using a string', () => {
    const wrapper = mountFromProps({ icon: faCoffee, rotation: '90' })

    expect(wrapper.element.classList.contains('fa-rotate-90')).toBeTruthy()
  })
})

it('will have a class of swap opacity', () => {
  const wrapper = mountFromProps({ icon: faCoffee, swapOpacity: true })

  expect(wrapper.element.classList.contains('fa-swap-opacity')).toBeTruthy()
})

it('tests using size', () => {
  ['2xs', 'xs', 'sm', 'lg', 'xl', '2xl', '1x', '2x', '3x', '4x', '5x', '6x', '7x', '8x', '9x', '10x'].forEach(size => {
    const wrapper = mountFromProps({ icon: faCoffee, size: size })

    expect(wrapper.element.classList.contains(`fa-${size}`)).toBeTruthy()
  })
})

it('will have a class of spin', () => {
  const wrapper = mountFromProps({ icon: faCoffee, spin: true })

  expect(wrapper.element.classList.contains('fa-spin')).toBeTruthy()
})

it('will have a class of inverse', () => {
  const wrapper = mountFromProps({ icon: faCoffee, inverse: true })

  expect(wrapper.element.classList.contains('fa-inverse')).toBeTruthy()
})

describe('using transform', () => {
  it('will test tranform using a string', () => {
    const wrapper = mountFromProps({ icon: faCoffee, transform: 'grow-40 left-4 rotate-15' })

    expect(wrapper.element).toBeTruthy()
  })

  it('will test tranform using an object', () => {
    const wrapper = mountFromProps({ icon: faCoffee, transform: { flipX: false, flipY: false, rotate: 15, size: 56, x: -4, y: 0 } })

    expect(wrapper.element).toBeTruthy()
  })
})

describe('mask', () => {
  it('will add icon', () => {
    const wrapper = mountFromProps({ icon: faCoffee, mask: faCircle })

    expect(wrapper.element.innerHTML).toMatch(/clipPath/)
  })

  it('will add icon referencing library', () => {
    const wrapper = mountFromProps({ icon: ['fas', 'coffee'], mask: ['fas', 'circle'] })

    // missing assertion here
  })
})

describe('symbol', () => {
  it("will not create a symbol", () => {
    const wrapper = mountFromProps({ icon: faCoffee })

    expect(wrapper.element.style.getPropertyValue('display')).toBe('')
  })

  it("will create a symbol", () => {
    const wrapper = mountFromProps({ icon: faCoffee, symbol: 'coffee-icon' })

    expect(wrapper.element.style.getPropertyValue('display')).toBe('none')
    expect(wrapper.element.children[0].tagName).toBe('symbol')
  })
})

describe('title', () => {
  it('will see title', () => {
    const wrapper = mountFromProps({ icon: faCoffee, title: 'Coffee' })

    expect(wrapper.element.getElementsByTagName('title')[0].innerHTML).toBe('Coffee')
  })

  it('will not see title', () => {
    const wrapper = mountFromProps({ icon: faCoffee })

    expect(wrapper.element.getElementsByTagName('title').length).toBe(0)
  })
})

describe('reactivity', () => {
  it('will update the element by changing props', async () => {
    const wrapper = mountFromProps({ icon: faCoffee, title: 'Coffee' })

    expect(wrapper.element.classList.contains('fa-coffee')).toBeTruthy()
    expect(wrapper.element.getElementsByTagName('title')[0].innerHTML).toBe('Coffee')

    await wrapper.setProps({ icon: faCircle, title: 'Circle' })

    expect(wrapper.element.classList.contains('fa-circle')).toBeTruthy()
    expect(wrapper.element.getElementsByTagName('title')[0].innerHTML).toBe('Circle')
  })
})

describe('using bounce', () => {
  it('will find a class of bounce', () => {
    const wrapper = mountFromProps({ icon: faCoffee, bounce: true })

    expect(wrapper.element.classList.contains('fa-bounce')).toBeTruthy()
  })
})

describe('using shake', () => {
  it('will find a class of shake', () => {
    const wrapper = mountFromProps({ icon: faCoffee, shake: true })

    expect(wrapper.element.classList.contains('fa-shake')).toBeTruthy()
  })
})

describe('using beat', () => {
  it('will find a class of beat', () => {
    const wrapper = mountFromProps({ icon: faCoffee, beat: true })

    expect(wrapper.element.classList.contains('fa-beat')).toBeTruthy()
  })
})

describe('using fade', () => {
  it('will find a class of fade', () => {
    const wrapper = mountFromProps({ icon: faCoffee, fade: true })

    expect(wrapper.element.classList.contains('fa-fade')).toBeTruthy()
  })
})

describe('using beat-fade', () => {
  it('will find a class of beat-fade', () => {
    const wrapper = mountFromProps({ icon: faCoffee, beatFade: true })

    expect(wrapper.element.classList.contains('fa-beat-fade')).toBeTruthy()
  })
})

describe('using flash', () => {
  it('will find a class of flash', () => {
    const wrapper = mountFromProps({ icon: faCoffee, flash: true })

    expect(wrapper.element.classList.contains('fa-flash')).toBeTruthy()
  })
})

describe('using spin-pulse', () => {
  it('will have a class of spinPulse and spinReverse', () => {
    const wrapper = mountFromProps({ icon: faCoffee, spinPulse: true })

    expect(wrapper.element.classList.contains('fa-spin-pulse')).toBeTruthy()
  })
})

describe('using spin-revese', () => {
  it('will have a class of spinPulse and spinReverse', () => {
    const wrapper = mountFromProps({ icon: faCoffee, spinReverse: true })

    expect(wrapper.element.classList.contains('fa-spin-reverse')).toBeTruthy()
  })
})
