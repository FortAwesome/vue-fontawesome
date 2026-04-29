import { faClose, faUser } from '@fortawesome/free-solid-svg-icons'
import { faAlien, faBat, faCat, faCircle, faCoffee, faDog, faFish } from '../__fixtures__/icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  compileAndMount,
  compileWithTemplate,
  coreHasFeature,
  mountFromProps,
  ICON_ALIASES,
  ICON_TITLE_PROP,
  REFERENCE_ICON_BY_STYLE,
  REFERENCE_ICON_USING_7X_SMALL_BATCH_ICONS,
  REFERENCE_ICON_USING_FAMILY,
  REFERENCE_ICON_USING_STRING
} from '../__fixtures__/helpers'

import FontAwesomeIcon from '../FontAwesomeIcon'

beforeEach(() => {
  library.add(faAlien, faBat, faCat, faCircle, faCoffee, faDog, faFish)
})

afterEach(() => {
  library.reset()
})

describe('icon title prop', () => {
  test('checks title attribute is null when title property is NOT set', () => {
    const wrapper = mountFromProps({
      icon: faCoffee
    })

    expect(wrapper.element.getAttribute('aria-labelledby')).toBeFalsy()
    expect(wrapper.element.querySelector('title')).toBeFalsy()
  })

  if (coreHasFeature(ICON_TITLE_PROP)) {
    test('renders a title element and aria-labelledby when title is set', () => {
      const wrapper = mountFromProps({
        icon: faCoffee,
        title: 'Coffee Icon',
        titleId: 'coffee-title'
      })

      const titleEl = wrapper.element.querySelector('title')
      expect(titleEl).toBeTruthy()
      expect(titleEl.textContent).toBe('Coffee Icon')
      expect(wrapper.element.getAttribute('aria-labelledby')).toContain('coffee-title')
    })

    test('renders a title element without titleId', () => {
      const wrapper = mountFromProps({
        icon: faCoffee,
        title: 'Coffee Icon'
      })

      const titleEl = wrapper.element.querySelector('title')
      expect(titleEl).toBeTruthy()
      expect(titleEl.textContent).toBe('Coffee Icon')
    })
  } else {
    test('ICON_TITLE_PROP is not available in this core version', () => {
      expect(coreHasFeature(ICON_TITLE_PROP)).toBeFalsy()
    })
  }
})

describe('icons are showing', () => {
  test('using array format, short prefix and short icon name', () => {
    const wrapper = mountFromProps({ icon: ['fas', 'coffee'] })

    expect(wrapper.element.tagName).toBe('svg')
    expect(wrapper.element.classList.contains('fa-coffee')).toBeTruthy()
  })

  if (coreHasFeature(REFERENCE_ICON_BY_STYLE)) {
    test('using array format, short prefix and long icon name', () => {
      const wrapper = mountFromProps({ icon: ['fas', 'fa-coffee'] })

      expect(wrapper.element.tagName).toBe('svg')
      expect(wrapper.element.classList.contains('fa-coffee')).toBeTruthy()
    })

    test('using array format, long prefix and long icon name', () => {
      const wrapper = mountFromProps({ icon: ['fa-solid', 'fa-coffee'] })

      expect(wrapper.element.tagName).toBe('svg')
      expect(wrapper.element.classList.contains('fa-coffee')).toBeTruthy()
    })

    test('using array format, long prefix and short icon name', () => {
      const wrapper = mountFromProps({ icon: ['fa-duotone', 'alien'] })

      expect(wrapper.element.tagName).toBe('svg')
      expect(wrapper.element.classList.contains('fa-alien')).toBeTruthy()
    })
  } else {
    test('REFERENCE_ICON_BY_STYLE is not available in this core version', () => {
      expect(coreHasFeature(REFERENCE_ICON_BY_STYLE)).toBeFalsy()
    })
  }

  if (coreHasFeature(REFERENCE_ICON_USING_STRING)) {
    test('using string format, with long prefix and long icon name', () => {
      const wrapper = mountFromProps({ icon: 'fa-duotone fa-alien' })

      expect(wrapper.element.tagName).toBe('svg')
      expect(wrapper.element.classList.contains('fa-alien')).toBeTruthy()
    })

    test('using string format, with short prefix and long icon name', () => {
      const wrapper = mountFromProps({ icon: 'fad fa-alien' })

      expect(wrapper.element.tagName).toBe('svg')
      expect(wrapper.element.classList.contains('fa-alien')).toBeTruthy()
    })
  } else {
    test('REFERENCE_ICON_USING_STRING is not available in this core version', () => {
      expect(coreHasFeature(REFERENCE_ICON_USING_STRING)).toBeFalsy()
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
    const wrapper = compileWithTemplate('<font-awesome-icon class="extra" :icon="icon" />', faCoffee)

    expect(wrapper.element.classList.contains('extra')).toBeTruthy()
  })

  test('with extra bound class', () => {
    const wrapper = compileWithTemplate(`<font-awesome-icon :class="['extra1', {'extra2': true}]" :icon="icon" />`, faCoffee)

    expect(wrapper.element.classList.contains('extra1')).toBeTruthy()
    expect(wrapper.element.classList.contains('extra2')).toBeTruthy()
  })

  test('with extra style', () => {
    const wrapper = compileWithTemplate(`<font-awesome-icon :style="{'font-size': '42px'}" :icon="icon" />`, faCoffee)

    expect(wrapper.element.style.getPropertyValue('font-size')).toBe('42px')
  })

  test('with extra DOM property', () => {
    const wrapper = compileWithTemplate(`<font-awesome-icon rel="local" :icon="icon" />`, faCoffee)

    expect(wrapper.element.getAttribute('rel')).toBe('local')
  })

  test('with listener', async () => {
    let hasBeenClicked = false

    const wrapper = compileAndMount({
      template: '<font-awesome-icon @click="clicked" :icon="icon" />',
      data() {
        return { icon: faCoffee }
      },
      methods: {
        clicked() {
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

describe('display props', () => {
  test.each([
    ['border', 'fa-border'],
    ['listItem', 'fa-li'],
    ['fixedWidth', 'fa-fw'],
    ['widthAuto', 'fa-width-auto'],
    ['inverse', 'fa-inverse'],
    ['swapOpacity', 'fa-swap-opacity'],
  ])('using %s', (prop, cls) => {
    const wrapper = mountFromProps({ icon: faCoffee, [prop]: true })
    expect(wrapper.element.classList.contains(cls)).toBeTruthy()
  })
})

describe('animation props', () => {
  test.each([
    ['spin', 'fa-spin'],
    ['pulse', 'fa-pulse'],
    ['bounce', 'fa-bounce'],
    ['shake', 'fa-shake'],
    ['beat', 'fa-beat'],
    ['fade', 'fa-fade'],
    ['beatFade', 'fa-beat-fade'],
    ['flash', 'fa-flash'],
    ['spinPulse', 'fa-spin-pulse'],
    ['spinReverse', 'fa-spin-reverse'],
  ])('using %s', (prop, cls) => {
    const wrapper = mountFromProps({ icon: faCoffee, [prop]: true })
    expect(wrapper.element.classList.contains(cls)).toBeTruthy()
  })
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
    const wrapper = mountFromProps({ icon: faCoffee, flip: 'horizontal' })

    expect(wrapper.element.classList.contains('fa-flip-horizontal')).toBeTruthy()
    expect(wrapper.element.classList.contains('fa-flip-vertical')).toBeFalsy()
    expect(wrapper.element.classList.contains('fa-flip-both')).toBeFalsy()
    expect(wrapper.element.classList.contains('fa-flip')).toBeFalsy()
  })

  test('vertical', () => {
    const wrapper = mountFromProps({ icon: faCoffee, flip: 'vertical' })

    expect(wrapper.element.classList.contains('fa-flip-vertical')).toBeTruthy()
    expect(wrapper.element.classList.contains('fa-flip-horizontal')).toBeFalsy()
    expect(wrapper.element.classList.contains('fa-flip-both')).toBeFalsy()
    expect(wrapper.element.classList.contains('fa-flip')).toBeFalsy()
  })

  test('both', () => {
    const wrapper = mountFromProps({ icon: faCoffee, flip: 'both' })

    expect(wrapper.element.classList.contains('fa-flip-horizontal')).toBeTruthy()
    expect(wrapper.element.classList.contains('fa-flip-vertical')).toBeTruthy()
    expect(wrapper.element.classList.contains('fa-flip')).toBeFalsy()
  })
})

describe('using pull', () => {
  test('right', () => {
    const wrapper = mountFromProps({ icon: faCoffee, pull: 'right' })

    expect(wrapper.element.classList.contains('fa-pull-right')).toBeTruthy()
  })

  test('left', () => {
    const wrapper = mountFromProps({ icon: faCoffee, pull: 'left' })

    expect(wrapper.element.classList.contains('fa-pull-left')).toBeTruthy()
  })
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

  test('0 does not add a rotation class and does not warn', () => {
    const consoleSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})
    const wrapper = mountFromProps({ icon: faCoffee, rotation: 0 })

    expect(wrapper.element.classList.contains('fa-rotate-0')).toBeFalsy()
    expect(consoleSpy).not.toHaveBeenCalled()

    consoleSpy.mockRestore()
  })

  test('0 as a string does not add a rotation class and does not warn', () => {
    const consoleSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})
    const wrapper = mountFromProps({ icon: faCoffee, rotation: '0' })

    expect(wrapper.element.classList.contains('fa-rotate-0')).toBeFalsy()
    expect(consoleSpy).not.toHaveBeenCalled()

    consoleSpy.mockRestore()
  })
})

describe('using rotateBy', () => {
  test('will add fa-rotate-by class and apply custom angle via style', () => {
    const wrapper = mountFromProps({ icon: faDog, rotateBy: true, style: '--fa-rotate-angle: 329deg' })

    expect(wrapper.element.classList.contains('fa-rotate-by')).toBeTruthy()
    expect(wrapper.element.style.getPropertyValue('--fa-rotate-angle')).toBe('329deg')
  })

  test('will not add fa-rotate-by class', () => {
    const wrapper = mountFromProps({ icon: faDog })

    expect(wrapper.element.classList.contains('fa-rotate-by')).toBeFalsy()
  })
})

test('using size', () => {
  ;['2xs', 'xs', 'sm', 'lg', 'xl', '2xl', '1x', '2x', '3x', '4x', '5x', '6x', '7x', '8x', '9x', '10x'].forEach((size) => {
    const wrapper = mountFromProps({ icon: faCoffee, size: size })

    expect(wrapper.element.classList.contains(`fa-${size}`)).toBeTruthy()
  })
})

describe('using transform', () => {
  test('string', () => {
    const wrapper = mountFromProps({
      icon: faCoffee,
      transform: 'grow-40 left-4 rotate-15'
    })

    expect(wrapper.element.style.getPropertyValue('transform-origin')).toBeTruthy()
    expect(wrapper.element.querySelector('g[transform]')).toBeTruthy()
  })

  test('object', () => {
    const wrapper = mountFromProps({
      icon: faCoffee,
      transform: {
        flipX: false,
        flipY: false,
        rotate: 15,
        size: 56,
        x: -4,
        y: 0
      }
    })

    expect(wrapper.element.style.getPropertyValue('transform-origin')).toBeTruthy()
    expect(wrapper.element.querySelector('g[transform]')).toBeTruthy()
  })
})

describe('mask', () => {
  test('will add icon using iconDefinition', () => {
    const wrapper = mountFromProps({ icon: faCoffee, mask: faCircle })

    expect(wrapper.element.querySelector('clipPath')).toBeTruthy()
  })

  test('will add icon using array format', () => {
    const wrapper = mountFromProps({ icon: faCoffee, mask: ['fas', 'circle'] })

    expect(wrapper.element.querySelector('clipPath')).toBeTruthy()
  })

  test('will add icon using string format', () => {
    const wrapper = mountFromProps({ icon: faCoffee, mask: 'circle' })

    expect(wrapper.element.querySelector('clipPath')).toBeTruthy()
  })

  test('will use maskId for clipPath and mask ids', () => {
    const wrapper = mountFromProps({ icon: faCoffee, mask: faCircle, maskId: 'my-mask' })

    expect(wrapper.element.querySelector('clipPath').getAttribute('id')).toBe('clip-my-mask')
    expect(wrapper.element.querySelector('mask').getAttribute('id')).toBe('mask-my-mask')
  })
})

describe('symbol', () => {
  test('will not create a symbol', () => {
    const wrapper = mountFromProps({ icon: faCoffee })

    expect(wrapper.element.style.getPropertyValue('display')).toBe('')
  })

  test('will create a symbol with a string id', () => {
    const wrapper = mountFromProps({ icon: faCoffee, symbol: 'coffee-icon' })

    expect(wrapper.element.style.getPropertyValue('display')).toBe('none')
    expect(wrapper.element.children[0].tagName).toBe('symbol')
    expect(wrapper.element.children[0].getAttribute('id')).toBe('coffee-icon')
  })

  test('will create a symbol with an auto-generated id when symbol is true', () => {
    const wrapper = mountFromProps({ icon: faCoffee, symbol: true })

    expect(wrapper.element.style.getPropertyValue('display')).toBe('none')
    expect(wrapper.element.children[0].tagName).toBe('symbol')
    expect(wrapper.element.children[0].getAttribute('id')).toBe('fas-fa-coffee')
  })
})

describe('reactivity', () => {
  test('changing props should update the element', async () => {
    const wrapper = mountFromProps({ icon: faCoffee, title: 'Coffee' })

    expect(wrapper.element.classList.contains('fa-coffee')).toBeTruthy()

    await wrapper.setProps({ icon: faCircle, title: 'Circle' })

    expect(wrapper.element.classList.contains('fa-circle')).toBeTruthy()
  })

  test('adding gradientFill updates the element', async () => {
    const wrapper = mountFromProps({ icon: faCoffee })

    expect(wrapper.element.querySelector('linearGradient')).toBeNull()

    await wrapper.setProps({
      gradientFill: {
        id: 'reactiveGradient',
        type: 'linear',
        stops: [
          { offset: '0%', color: 'red' },
          { offset: '100%', color: 'blue' }
        ]
      }
    })

    expect(wrapper.element.querySelector('linearGradient')).toBeTruthy()
    expect(wrapper.element.getAttribute('fill')).toBe('url(#reactiveGradient)')
  })

  test('removing gradientFill updates the element', async () => {
    const wrapper = mountFromProps({
      icon: faCoffee,
      gradientFill: {
        id: 'reactiveGradient',
        type: 'linear',
        stops: [
          { offset: '0%', color: 'red' },
          { offset: '100%', color: 'blue' }
        ]
      }
    })

    expect(wrapper.element.querySelector('linearGradient')).toBeTruthy()

    await wrapper.setProps({ gradientFill: null })

    expect(wrapper.element.querySelector('linearGradient')).toBeNull()
    expect(wrapper.element.getAttribute('fill')).toBeNull()
  })
})

test('using imported object from svg icons package', () => {
  const wrapper = mountFromProps({ icon: faUser })

  expect(wrapper.element.tagName).toBe('svg')
  expect(wrapper.element.classList.contains('fa-user')).toBeTruthy()
})

if (coreHasFeature(ICON_ALIASES)) {
  describe('icon aliases', () => {
    beforeEach(() => {
      library.reset()
      library.add(faClose)
    })

    test('find a free-solid-svg-icon with array format', () => {
      const wrapper = mountFromProps({ icon: ['fas', 'xmark'] })

      expect(wrapper.element.tagName).toBe('svg')
      expect(wrapper.element.classList.contains('fa-xmark')).toBeTruthy()
    })

    test('find a free-solid-svg-icon that is an alias', () => {
      const wrapper = mountFromProps({ icon: ['fas', 'close'] })

      expect(wrapper.element.tagName).toBe('svg')
      expect(wrapper.element.classList.contains('fa-xmark')).toBeTruthy()
    })
  })
} else {
  test('ICON_ALIASES is not available in this core version', () => {
    expect(coreHasFeature(ICON_ALIASES)).toBeFalsy()
  })
}

describe('using a family', () => {
  if (coreHasFeature(REFERENCE_ICON_USING_FAMILY)) {
    test('will find a sharp solid icon using array format, short prefix, and short icon name', () => {
      const wrapper = mountFromProps({ icon: ['fass', 'dog'] })

      expect(wrapper.element.tagName).toBe('svg')
      expect(wrapper.element.classList.contains('fa-dog')).toBeTruthy()
    })

    test('will find a sharp solid icon using array format, short prefix, and long fa-icon name', () => {
      const wrapper = mountFromProps({ icon: ['fass', 'fa-dog'] })

      expect(wrapper.element.tagName).toBe('svg')
      expect(wrapper.element.classList.contains('fa-dog')).toBeTruthy()
    })

    test('will find a sharp solid icon using string format, short prefix, and long fa-icon name', () => {
      const wrapper = mountFromProps({ icon: 'fass fa-dog' })

      expect(wrapper.element.tagName).toBe('svg')
      expect(wrapper.element.classList.contains('fa-dog')).toBeTruthy()
    })

    test('will default to a sharp solid icon using string format, long prefix, and long fa-icon name', () => {
      const wrapper = mountFromProps({ icon: 'fa-sharp fa-dog' })

      expect(wrapper.element.tagName).toBe('svg')
      expect(wrapper.element.classList.contains('fa-dog')).toBeTruthy()
    })

    test('will find a sharp solid icon using string format, long prefix, long style, and long fa-icon name', () => {
      const wrapper = mountFromProps({ icon: 'fa-sharp fa-solid fa-dog' })

      expect(wrapper.element.tagName).toBe('svg')
      expect(wrapper.element.classList.contains('fa-dog')).toBeTruthy()
    })

    test('will default to a sharp-duotone solid icon using string format, long prefix, and long fa-icon name', () => {
      const wrapper = mountFromProps({ icon: 'fa-sharp-duotone fa-bat' })

      expect(wrapper.element.tagName).toBe('svg')
      expect(wrapper.element.classList.contains('fa-bat')).toBeTruthy()
    })

    test('will find a sharp-duotone solid icon using string format, long prefix, long style, and long fa-icon name', () => {
      const wrapper = mountFromProps({ icon: 'fa-sharp-duotone fa-solid fa-bat' })

      expect(wrapper.element.tagName).toBe('svg')
      expect(wrapper.element.classList.contains('fa-bat')).toBeTruthy()
    })

    if (coreHasFeature(REFERENCE_ICON_USING_7X_SMALL_BATCH_ICONS)) {
      test('will default to a jelly-duo regular icon using string format, long prefix, and long fa-icon name', () => {
        const wrapper = mountFromProps({ icon: 'fa-jelly-duo fa-cat' })

        expect(wrapper.element.tagName).toBe('svg')
        expect(wrapper.element.classList.contains('fa-cat')).toBeTruthy()
      })

      test('will find a jelly-duo regular icon using string format, long prefix, long style, and long fa-icon name', () => {
        const wrapper = mountFromProps({ icon: 'fa-jelly-duo fa-regular fa-cat' })

        expect(wrapper.element.tagName).toBe('svg')
        expect(wrapper.element.classList.contains('fa-cat')).toBeTruthy()
      })

      test('will default to a whiteboard semibold icon using string format, long prefix, and long fa-icon name', () => {
        const wrapper = mountFromProps({ icon: 'fa-whiteboard fa-fish' })

        expect(wrapper.element.tagName).toBe('svg')
        expect(wrapper.element.classList.contains('fa-fish')).toBeTruthy()
      })

      test('will find a whiteboard semibold icon using string format, long prefix, long style, and long fa-icon name', () => {
        const wrapper = mountFromProps({ icon: 'fa-whiteboard fa-semibold fa-fish' })

        expect(wrapper.element.tagName).toBe('svg')
        expect(wrapper.element.classList.contains('fa-fish')).toBeTruthy()
      })
    } else {
      test('REFERENCE_ICON_USING_7X_SMALL_BATCH_ICONS is not available in this core version', () => {
        expect(coreHasFeature(REFERENCE_ICON_USING_7X_SMALL_BATCH_ICONS)).toBeFalsy()
      })
    }
  } else {
    test('REFERENCE_ICON_USING_FAMILY is not available in this core version', () => {
      expect(coreHasFeature(REFERENCE_ICON_USING_FAMILY)).toBeFalsy()
    })
  }
})

describe('gradientFill prop', () => {
  const SAMPLE_LINEAR_STOPS = [
    { offset: '0%', color: '#FF5F6D' },
    { offset: '100%', color: '#FFC371' }
  ]

  test('applies a linearGradient element and fill reference to svg', () => {
    const wrapper = mountFromProps({
      icon: faCoffee,
      gradientFill: {
        id: 'myLinearGradient',
        type: 'linear',
        x1: '0%',
        y1: '0%',
        x2: '100%',
        y2: '0%',
        stops: SAMPLE_LINEAR_STOPS
      }
    })

    expect(wrapper.element.getAttribute('fill')).toBe('url(#myLinearGradient)')

    const gradient = wrapper.element.querySelector('linearGradient')

    expect(gradient).toBeTruthy()
    expect(gradient.getAttribute('id')).toBe('myLinearGradient')
    expect(gradient.getAttribute('x1')).toBe('0%')
    expect(gradient.getAttribute('y1')).toBe('0%')
    expect(gradient.getAttribute('x2')).toBe('100%')
    expect(gradient.getAttribute('y2')).toBe('0%')

    const stops = gradient.querySelectorAll('stop')

    expect(stops.length).toBe(2)
    expect(stops[0].getAttribute('offset')).toBe('0%')
    expect(stops[0].getAttribute('stop-color')).toBe('#FF5F6D')
    expect(stops[1].getAttribute('offset')).toBe('100%')
    expect(stops[1].getAttribute('stop-color')).toBe('#FFC371')
  })

  test('applies a radialGradient element and fill reference to svg', () => {
    const wrapper = mountFromProps({
      icon: faCoffee,
      gradientFill: {
        id: 'myRadialGradient',
        type: 'radial',
        r: '150%',
        cx: '30%',
        cy: '107%',
        stops: [
          { offset: '0', color: '#FDF497' },
          { offset: '0.45', color: '#FD5949', opacity: 0.8 },
          { offset: '0.9', color: '#285AEB' }
        ]
      }
    })

    expect(wrapper.element.getAttribute('fill')).toBe('url(#myRadialGradient)')

    const gradient = wrapper.element.querySelector('radialGradient')

    expect(gradient).toBeTruthy()
    expect(gradient.getAttribute('id')).toBe('myRadialGradient')
    expect(gradient.getAttribute('r')).toBe('150%')
    expect(gradient.getAttribute('cx')).toBe('30%')
    expect(gradient.getAttribute('cy')).toBe('107%')
    expect(gradient.getAttribute('fx')).toBeNull()
    expect(gradient.getAttribute('fy')).toBeNull()

    const stops = gradient.querySelectorAll('stop')

    expect(stops.length).toBe(3)
    expect(stops[1].getAttribute('stop-opacity')).toBe('0.8')
  })

  test('applies a radialGradient with optional fx and fy focal point attributes', () => {
    const wrapper = mountFromProps({
      icon: faCoffee,
      gradientFill: {
        id: 'myRadialGradientFocal',
        type: 'radial',
        r: '150%',
        cx: '30%',
        cy: '107%',
        fx: '50%',
        fy: '50%',
        stops: [
          { offset: '0', color: '#FDF497' },
          { offset: '1', color: '#285AEB' }
        ]
      }
    })

    const gradient = wrapper.element.querySelector('radialGradient')

    expect(gradient).toBeTruthy()
    expect(gradient.getAttribute('fx')).toBe('50%')
    expect(gradient.getAttribute('fy')).toBe('50%')
  })

  test('strips fill from child path elements when gradientFill is provided', () => {
    const wrapper = mountFromProps({
      icon: faCoffee,
      gradientFill: {
        id: 'testGradient',
        type: 'linear',
        stops: [{ offset: '0%', color: 'red' }]
      }
    })

    const paths = wrapper.element.querySelectorAll('path')
    paths.forEach((path) => {
      expect(path.getAttribute('fill')).toBeNull()
    })
  })

  test('does not render gradient elements when gradientFill is not provided', () => {
    const wrapper = mountFromProps({ icon: faCoffee })

    expect(wrapper.element.querySelector('linearGradient')).toBeNull()
    expect(wrapper.element.querySelector('radialGradient')).toBeNull()

    const fill = wrapper.element.getAttribute('fill')

    expect(fill).toBeNull()
  })

  test('works with array icon syntax', () => {
    const wrapper = mountFromProps({
      icon: ['fas', 'coffee'],
      gradientFill: {
        id: 'arrayGradient',
        type: 'linear',
        stops: SAMPLE_LINEAR_STOPS
      }
    })

    expect(wrapper.element.getAttribute('fill')).toBe('url(#arrayGradient)')
    expect(wrapper.element.querySelector('linearGradient')).toBeTruthy()
  })

  test('works with string icon syntax', () => {
    const wrapper = mountFromProps({
      icon: 'coffee',
      gradientFill: {
        id: 'stringGradient',
        type: 'linear',
        stops: SAMPLE_LINEAR_STOPS
      }
    })

    expect(wrapper.element.getAttribute('fill')).toBe('url(#stringGradient)')
    expect(wrapper.element.querySelector('linearGradient')).toBeTruthy()
  })

  test('ignores gradientFill and warns when symbol is true', () => {
    const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {})

    const wrapper = mountFromProps({
      icon: faCoffee,
      symbol: true,
      gradientFill: {
        id: 'symbolGradient',
        type: 'linear',
        stops: SAMPLE_LINEAR_STOPS
      }
    })

    expect(consoleSpy).toHaveBeenCalledWith('gradientFill is not supported when symbol is true and will be ignored')
    expect(wrapper.element.querySelector('linearGradient')).toBeNull()
    const fill = wrapper.element.getAttribute('fill')
    expect(fill).toBeNull()
    consoleSpy.mockRestore()
  })

  describe('validator warnings', () => {
    let consoleSpy

    beforeEach(() => {
      consoleSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})
    })

    afterEach(() => {
      consoleSpy.mockRestore()
    })

    test('warns when gradientFill.id is missing', () => {
      mountFromProps({
        icon: faCoffee,
        gradientFill: { type: 'linear', stops: SAMPLE_LINEAR_STOPS }
      })

      expect(consoleSpy).toHaveBeenCalledWith('FontAwesomeIcon: gradientFill.id must be a non-empty string')
    })

    test('warns when gradientFill.type is invalid', () => {
      mountFromProps({
        icon: faCoffee,
        gradientFill: { id: 'myGradient', type: 'diagonal', stops: SAMPLE_LINEAR_STOPS }
      })

      expect(consoleSpy).toHaveBeenCalledWith('FontAwesomeIcon: gradientFill.type must be "linear" or "radial"')
    })
  })
})
