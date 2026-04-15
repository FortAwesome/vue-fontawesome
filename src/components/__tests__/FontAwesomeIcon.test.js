import { faClose, faUser } from '@fortawesome/free-solid-svg-icons'
import { faAlien, faBat, faCat, faCircle, faCoffee, faDog, faDogGraphite, faFish } from '../__fixtures__/icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  compileAndMount,
  mountFromProps,
  coreHasFeature,
  REFERENCE_ICON_USING_STRING,
  REFERENCE_ICON_BY_STYLE,
  REFERENCE_ICON_USING_FAMILY,
  REFERENCE_ICON_USING_7X_SMALL_BATCH_ICONS,
  REFERENCE_ICON_USING_7X_GRAPHITE_ICONS,
  ICON_ALIASES,
  ICON_TITLE_PROP
} from '../__fixtures__/helpers'

import FontAwesomeIcon from '../FontAwesomeIcon'

beforeEach(() => {
  library.add(faAlien, faBat, faCat, faCircle, faCoffee, faDog, faDogGraphite, faFish)
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
    const wrapper = compileAndMount({
      template: '<font-awesome-icon class="extra" :icon="icon" />',
      data() {
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
      data() {
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
      data() {
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

test('using border', () => {
  const wrapper = mountFromProps({ icon: faCoffee, border: true })

  expect(wrapper.element.classList.contains('fa-border')).toBeTruthy()
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

test('using listItem', () => {
  const wrapper = mountFromProps({ icon: faCoffee, listItem: true })

  expect(wrapper.element.classList.contains('fa-li')).toBeTruthy()
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

describe('using rotateBy', () => {
  test('with a style attribute of 1000 will show the fa-rotate-by class', () => {
    const wrapper = mountFromProps({ icon: faDog, rotateBy: true, style: '--fa-rotate-angle: 1000deg' })

    expect(wrapper.element.classList.contains('fa-rotate-by')).toBeTruthy()
  })

  test('with a style attribute of `something-` will still show the fa-rotate-by class', () => {
    const wrapper = mountFromProps({ icon: faDog, rotateBy: true, style: '--fa-rotate-angle: something-deg' })

    expect(wrapper.element.classList.contains('fa-rotate-by')).toBeTruthy()
  })

  test('without a style attribute will still show the fa-rotate-by class', () => {
    const wrapper = mountFromProps({ icon: faDog, rotateBy: true })

    expect(wrapper.element.classList.contains('fa-rotate-by')).toBeTruthy()
  })

  test('not using rotateBy shows will not show the fa-rotate-by class', () => {
    const wrapper = mountFromProps({ icon: faDog })

    expect(wrapper.element.classList.contains('fa-rotate-by')).toBeFalsy()
  })
})

test('using swap opacity', () => {
  const wrapper = mountFromProps({ icon: faCoffee, swapOpacity: true })

  expect(wrapper.element.classList.contains('fa-swap-opacity')).toBeTruthy()
})

test('using size', () => {
  ;['2xs', 'xs', 'sm', 'lg', 'xl', '2xl', '1x', '2x', '3x', '4x', '5x', '6x', '7x', '8x', '9x', '10x'].forEach((size) => {
    const wrapper = mountFromProps({ icon: faCoffee, size: size })

    expect(wrapper.element.classList.contains(`fa-${size}`)).toBeTruthy()
  })
})

test('using fixedWidth', () => {
  const wrapper = mountFromProps({ icon: faCoffee, fixedWidth: true })

  expect(wrapper.element.classList.contains('fa-fw')).toBeTruthy()
})

test('using widthAuto', () => {
  const wrapper = mountFromProps({ icon: faCoffee, widthAuto: true })

  expect(wrapper.element.classList.contains('fa-width-auto')).toBeTruthy()
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
  test('will add icon', () => {
    const wrapper = mountFromProps({ icon: faCoffee, mask: faCircle })

    expect(wrapper.element.innerHTML).toMatch(/clipPath/)
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

describe('using spin-pulse', () => {
  test('spin-pulse', () => {
    const wrapper = mountFromProps({ icon: faCoffee, spinPulse: true })

    expect(wrapper.element.classList.contains('fa-spin-pulse')).toBeTruthy()
  })
})

describe('using spin-reverse', () => {
  test('spin-reverse', () => {
    const wrapper = mountFromProps({ icon: faCoffee, spinReverse: true })

    expect(wrapper.element.classList.contains('fa-spin-reverse')).toBeTruthy()
  })
})

test('using imported object from svg icons package', () => {
  const wrapper = mountFromProps({ icon: faUser })

  expect(wrapper.element.tagName).toBe('svg')
})

if (coreHasFeature(ICON_ALIASES)) {
  test('find a free-solid-svg-icon with array format', () => {
    library.reset()
    library.add(faClose)
    const wrapper = mountFromProps({ icon: ['fas', 'xmark'] })

    expect(wrapper.element.tagName).toBe('svg')
    expect(wrapper.element.classList.contains('fa-xmark')).toBeTruthy()
  })

  test('find a free-solid-svg-icon that is an alias', () => {
    library.reset()
    library.add(faClose)
    const wrapper = mountFromProps({ icon: ['fas', 'close'] })

    expect(wrapper.element.tagName).toBe('svg')
    expect(wrapper.element.classList.contains('fa-xmark')).toBeTruthy()
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

      if (coreHasFeature(REFERENCE_ICON_USING_7X_GRAPHITE_ICONS)) {
        test('will default to a graphite thin icon using string format, long prefix, and long fa-icon name', () => {
          const wrapper = mountFromProps({ icon: 'fa-graphite fa-dog' })

          expect(wrapper.element.tagName).toBe('svg')
          expect(wrapper.element.classList.contains('fa-dog')).toBeTruthy()
        })

        test('will find a graphite thin icon using string format, long prefix, long style, and long fa-icon name', () => {
          const wrapper = mountFromProps({ icon: 'fa-graphite fa-thin fa-dog' })

          expect(wrapper.element.tagName).toBe('svg')
          expect(wrapper.element.classList.contains('fa-dog')).toBeTruthy()
        })
      } else {
        test('REFERENCE_ICON_USING_7X_GRAPHITE_ICONS is not available in this core version', () => {
          expect(coreHasFeature(REFERENCE_ICON_USING_7X_GRAPHITE_ICONS)).toBeFalsy()
        })
      }
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
        stops: [
          { offset: '0%', color: '#FF5F6D' },
          { offset: '100%', color: '#FFC371' }
        ]
      }
    })

    expect(wrapper.element.getAttribute('fill')).toBe('url(#myLinearGradient)')

    const gradient = wrapper.element.querySelector('linearGradient')

    expect(gradient).toBeTruthy()
    expect(gradient.getAttribute('id')).toBe('myLinearGradient')
    expect(gradient.getAttribute('x1')).toBe('0%')
    expect(gradient.getAttribute('x2')).toBe('100%')

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

    const stops = gradient.querySelectorAll('stop')

    expect(stops.length).toBe(3)
    expect(stops[1].getAttribute('stop-opacity')).toBe('0.8')
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

    expect(fill === null || !fill.includes('url(')).toBe(true)
  })

  test('works with array icon syntax', () => {
    const wrapper = mountFromProps({
      icon: ['fas', 'coffee'],
      gradientFill: {
        id: 'arrayGradient',
        type: 'linear',
        stops: [
          { offset: '0%', color: '#FF5F6D' },
          { offset: '100%', color: '#FFC371' }
        ]
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
        stops: [
          { offset: '0%', color: '#FF5F6D' },
          { offset: '100%', color: '#FFC371' }
        ]
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
        stops: [
          { offset: '0%', color: '#FF5F6D' },
          { offset: '100%', color: '#FFC371' }
        ]
      }
    })

    expect(wrapper.element.querySelector('linearGradient')).toBeNull()
    const fill = wrapper.element.getAttribute('fill')
    expect(fill === null || !fill.includes('url(')).toBe(true)
    consoleSpy.mockRestore()
  })
})
