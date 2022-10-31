/**
 * @jest-environment jsdom
 */

import { library } from '@fortawesome/fontawesome-svg-core'
import { faClose } from '@fortawesome/free-solid-svg-icons'
import { faCoffee, faCircle, faAlien, faGlasses, faJedi } from '../__fixtures__/icons'
import { coreHasFeature, compileAndMount, mountFromProps, REFERENCE_ICON_BY_STYLE, ICON_ALIASES, REFERENCE_ICON_USING_STRING, REFERENCE_ICON_USING_FAMILY } from '../__fixtures__/helpers'
import FontAwesomeIcon from '../FontAwesomeIcon'

beforeEach(() => {
  library.add(faCoffee, faCircle, faAlien, faGlasses, faJedi)
})

afterEach(() => {
  library.reset()
})

describe('using a family', () => {
  if (coreHasFeature(REFERENCE_ICON_USING_FAMILY)) {
    test('will find a sharp solid icon using array format, short prefix, and short icon name', () => {
      const wrapper = mountFromProps({ icon: ['fass', 'glasses'] })

      expect(wrapper.element.tagName).toBe('svg')
      expect(wrapper.element.classList.contains('fa-glasses')).toBeTruthy()
    })

    test('undefined sharp solid icon using string format, short prefix, and short icon name', () => {
      const wrapper = mountFromProps({ icon: 'fass glasses' })

      expect(wrapper.element.tagName).toBe(undefined)
    })

    test('will find a sharp solid icon using array format, short prefix, and long fa-icon name', () => {
      const wrapper = mountFromProps({ icon: ['fass', 'fa-glasses'] })

      expect(wrapper.element.tagName).toBe('svg')
      expect(wrapper.element.classList.contains('fa-glasses')).toBeTruthy()
    })

    test('will find a sharp solid icon using string format, short prefix, and long fa-icon name', () => {
      const wrapper = mountFromProps({ icon: 'fass fa-glasses' })

      expect(wrapper.element.tagName).toBe('svg')
      expect(wrapper.element.classList.contains('fa-glasses')).toBeTruthy()
    })

    test('undefined sharp solid icon using array format, long prefix, and long fa-icon name', () => {
      const wrapper = mountFromProps({ icon: ['fa-sharp', 'fa-glasses'] })

      expect(wrapper.element.tagName).toBe(undefined)
    })

    test('will default to a sharp solid icon using string format, long prefix, and long fa-icon name', () => {
      const wrapper = mountFromProps({ icon: 'fa-sharp fa-glasses' })

      expect(wrapper.element.tagName).toBe('svg')
      expect(wrapper.element.classList.contains('fa-glasses')).toBeTruthy()
    })

    test('undefined sharp solid icon using array format, long prefix, long style, and long fa-icon name', () => {
      const wrapper = mountFromProps({ icon: ['fa-sharp fa-solid', 'fa-glasses'] })

      expect(wrapper.element.tagName).toBe(undefined)
    })

    test('undefined sharp solid icon using 3 element array format, long prefix, long style, and long fa-icon name', () => {
      const wrapper = mountFromProps({ icon: ['fa-sharp', 'fa-solid', 'fa-glasses'] })

      expect(wrapper.element.tagName).toBe(undefined)
    })

    test('will find a sharp solid icon using string format, long prefix, long style, and long fa-icon name', () => {
      const wrapper = mountFromProps({ icon: 'fa-sharp fa-solid fa-glasses' })

        expect(wrapper.element.tagName).toBe('svg')
        expect(wrapper.element.classList.contains('fa-glasses')).toBeTruthy()
    })
  }
})

describe('icon showing', () => {
  if (coreHasFeature(REFERENCE_ICON_BY_STYLE)) {
    test('a FAT icon, using array format, short prefix, and short name', () => {
      const wrapper = mountFromProps({ icon: ['fat', 'jedi'] })

      expect(wrapper.element.tagName).toBe('svg')
      expect(wrapper.element.classList.contains('fa-jedi')).toBeTruthy()
    })

    test('undefined FAT icon, using string format, short prefix, and short name', () => {
      const wrapper = mountFromProps({ icon: 'fat jedi' })

      expect(wrapper.element.tagName).toBe(undefined)
    })

    test('a THIN icon, using array format, long prefix, and short name', () => {
      const wrapper = mountFromProps({ icon: ['thin', 'jedi'] })

      expect(wrapper.element.tagName).toBe('svg')
      expect(wrapper.element.classList.contains('fa-jedi')).toBeTruthy()
    })

    test('undefined THIN icon, using string format, long prefix, and short name', () => {
      const wrapper = mountFromProps({ icon: 'thin jedi' })

      expect(wrapper.element.tagName).toBe(undefined)
    })

    test('a FA-THIN icon, using array format, long fa-prefix, and short name', () => {
      const wrapper = mountFromProps({ icon: ['fa-thin', 'jedi'] })

      expect(wrapper.element.tagName).toBe('svg')
      expect(wrapper.element.classList.contains('fa-jedi')).toBeTruthy()
    })

    test('undefined FA-THIN icon, using string format, long fa-prefix, and short name', () => {
      const wrapper = mountFromProps({ icon: 'fa-thin jedi' })

      expect(wrapper.element.tagName).toBe(undefined)
    })

    test('a FA-THIN icon, using array format, long fa-prefix, and long fa-icon name', () => {
      const wrapper = mountFromProps({ icon: ['fa-thin', 'fa-jedi'] })

      expect(wrapper.element.tagName).toBe('svg')
      expect(wrapper.element.classList.contains('fa-jedi')).toBeTruthy()
    })

    test('a FA-THIN icon, using string format, long fa-prefix, and long fa-icon name', () => {
      const wrapper = mountFromProps({ icon: 'fa-thin fa-jedi' })

      expect(wrapper.element.tagName).toBe('svg')
      expect(wrapper.element.classList.contains('fa-jedi')).toBeTruthy()
    })

    test('using array format, short prefix and long fa-icon name', () => {
      const wrapper = mountFromProps({ icon: ['fas', 'fa-coffee'] })

      expect(wrapper.element.tagName).toBe('svg')
      expect(wrapper.element.classList.contains('fa-coffee')).toBeTruthy()
    })

    test('using string format, short prefix and long fa-icon name', () => {
      const wrapper = mountFromProps({ icon: 'fas fa-coffee' })

      expect(wrapper.element.tagName).toBe('svg')
      expect(wrapper.element.classList.contains('fa-coffee')).toBeTruthy()
    })

    test('using array format, long prefix and long fa-icon name', () => {
      const wrapper = mountFromProps({ icon: ['fa-solid', 'fa-coffee'] })

      expect(wrapper.element.tagName).toBe('svg')
      expect(wrapper.element.classList.contains('fa-coffee')).toBeTruthy()
    })

    test('using string format, long prefix and long fa-icon name', () => {
      const wrapper = mountFromProps({ icon: 'fa-solid fa-coffee' })

      expect(wrapper.element.tagName).toBe('svg')
      expect(wrapper.element.classList.contains('fa-coffee')).toBeTruthy()
    })

    test('using array format, long prefix and short icon name', () => {
      const wrapper = mountFromProps({ icon: ['fa-duotone', 'alien'] })

      expect(wrapper.element.tagName).toBe('svg')
      expect(wrapper.element.classList.contains('fa-alien')).toBeTruthy()
    })

    test('undefined icon using string format, long prefix and short icon name', () => {
      const wrapper = mountFromProps({ icon: 'fa-duotone alien' })

      expect(wrapper.element.tagName).toBe(undefined)
    })
  }

  if(coreHasFeature(ICON_ALIASES)) {
    test('find a free-solid-svg-icon using array format', () => {
      library.reset()
      library.add(faClose)
      const wrapper = mountFromProps({ icon: ['fas', 'xmark'] })

      expect(wrapper.element.tagName).toBe('svg')
      expect(wrapper.element.classList.contains('fa-xmark')).toBeTruthy()
    })

    test('find a free-solid-svg-icon that is an alias using array format', () => {
      library.reset()
      library.add(faClose)
      const wrapper = mountFromProps({ icon: ['fas', 'close'] })

      expect(wrapper.element.tagName).toBe('svg')
      expect(wrapper.element.classList.contains('fa-xmark')).toBeTruthy()
    })

    test('find a free-solid-svg-icon using string format', () => {
      library.reset()
      library.add(faClose)
      const wrapper = mountFromProps({ icon: 'fas fa-xmark' })

      expect(wrapper.element.tagName).toBe('svg')
      expect(wrapper.element.classList.contains('fa-xmark')).toBeTruthy()
    })

    test('find a free-solid-svg-icon that is an alias using string format', () => {
      library.reset()
      library.add(faClose)
      const wrapper = mountFromProps({ icon: 'fas fa-close' })

      expect(wrapper.element.tagName).toBe('svg')
      expect(wrapper.element.classList.contains('fa-xmark')).toBeTruthy()
    })
  }

  if (coreHasFeature(REFERENCE_ICON_USING_STRING)) {
    test('using string format, using long prefix and long fa-icon name', () => {
      const wrapper = mountFromProps({ icon: 'fa-duotone fa-alien' })

      expect(wrapper.element.tagName).toBe('svg')
      expect(wrapper.element.classList.contains('fa-alien')).toBeTruthy()
    })

    test('using string format, using short prefix and long fa-icon name', () => {
      const wrapper = mountFromProps({ icon: 'fad fa-alien' })

      expect(wrapper.element.tagName).toBe('svg')
      expect(wrapper.element.classList.contains('fa-alien')).toBeTruthy()
    })
  }

  test('using string format, icon name only', () => {
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
  test('flip', () => {
    const wrapper = mountFromProps({ icon: faCoffee, flip: true })

    expect(wrapper.element.classList.contains('fa-flip')).toBeTruthy()
    expect(wrapper.element.classList.contains('fa-flip-vertical')).toBeFalsy()
    expect(wrapper.element.classList.contains('fa-flip-horizontal')).toBeFalsy()
    expect(wrapper.element.classList.contains('fa-flip-both')).toBeFalsy()
  })

  test('horizontal', () => {
    const wrapper = mountFromProps({ icon: faCoffee, flip: "horizontal" })

    expect(wrapper.element.classList.contains('fa-flip-horizontal')).toBeTruthy()
    expect(wrapper.element.classList.contains('fa-flip-vertical')).toBeFalsy()
    expect(wrapper.element.classList.contains('fa-flip-both')).toBeFalsy()
    expect(wrapper.element.classList.contains('fa-flip')).toBeFalsy()
  })

  test('vertical', () => {
    const wrapper = mountFromProps({ icon: faCoffee, flip: "vertical" })

    expect(wrapper.element.classList.contains('fa-flip-vertical')).toBeTruthy()
    expect(wrapper.element.classList.contains('fa-flip-horizontal')).toBeFalsy()
    expect(wrapper.element.classList.contains('fa-flip-both')).toBeFalsy()
    expect(wrapper.element.classList.contains('fa-flip')).toBeFalsy()
  })

  test('both', () => {
    const wrapper = mountFromProps({ icon: faCoffee, flip: "both" })

    expect(wrapper.element.classList.contains('fa-flip-horizontal')).toBeTruthy()
    expect(wrapper.element.classList.contains('fa-flip-vertical')).toBeTruthy()
    expect(wrapper.element.classList.contains('fa-flip')).toBeFalsy()
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
  ['2xs', 'xs', 'sm', 'lg', 'xl', '2xl', '1x', '2x', '3x', '4x', '5x', '6x', '7x', '8x', '9x', '10x'].forEach(size => {
    const wrapper = mountFromProps({ icon: faCoffee, size: size })

    expect(wrapper.element.classList.contains(`fa-${size}`)).toBeTruthy()
  })
})

test('using spin', () => {
  const wrapper = mountFromProps({ icon: faCoffee, spin: true })

  expect(wrapper.element.classList.contains('fa-spin')).toBeTruthy()
})

test('spin-pulse', () => {
  const wrapper = mountFromProps({ icon: faCoffee, spinPulse: true })

  expect(wrapper.element.classList.contains('fa-spin-pulse')).toBeTruthy()
})

test('spin-reverse', () => {
  const wrapper = mountFromProps({ icon: faCoffee, spinReverse: true })

  expect(wrapper.element.classList.contains('fa-spin-reverse')).toBeTruthy()
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

describe('using bounce', () => {
  test('bounce', () => {
    const wrapper = mountFromProps({ icon: faCoffee, bounce: true })

    expect(wrapper.element.classList.contains('fa-bounce')).toBeTruthy()
  })
})

describe('using shake', () => {
  test('shake', () => {
    const wrapper = mountFromProps({ icon: faCoffee, shake: true })

    expect(wrapper.element.classList.contains('fa-shake')).toBeTruthy()
  })
})

describe('using beat', () => {
  test('beat', () => {
    const wrapper = mountFromProps({ icon: faCoffee, beat: true })

    expect(wrapper.element.classList.contains('fa-beat')).toBeTruthy()
  })
})

describe('using fade', () => {
  test('fade', () => {
    const wrapper = mountFromProps({ icon: faCoffee, fade: true })

    expect(wrapper.element.classList.contains('fa-fade')).toBeTruthy()
  })
})

describe('using beat-fade', () => {
  test('beat-fade', () => {
    const wrapper = mountFromProps({ icon: faCoffee, beatFade: true })

    expect(wrapper.element.classList.contains('fa-beat-fade')).toBeTruthy()
  })
})

describe('using flash', () => {
  test('flash', () => {
    const wrapper = mountFromProps({ icon: faCoffee, flash: true })

    expect(wrapper.element.classList.contains('fa-flash')).toBeTruthy()
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
