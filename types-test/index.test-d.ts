import { h } from 'vue'
import type { Component } from 'vue'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import type { IconName, IconPrefix, IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '../index'

describe('FontAwesomeIcon icon/mask prop types', () => {
  test('accepts every supported icon input via h() without overflowing (regression: TS2590)', () => {
    assertType(h(FontAwesomeIcon, { icon: faUser }))
    assertType(h(FontAwesomeIcon, { icon: 'user' }))
    assertType(h(FontAwesomeIcon, { icon: ['fas', 'user'] }))
    assertType(h(FontAwesomeIcon, { icon: { prefix: 'fas', iconName: 'user' } }))
    assertType(h(FontAwesomeIcon, { icon: faUser, mask: faUser }))

    const name: IconName = 'user'
    const tuple: [IconPrefix, IconName] = ['fas', 'user']
    const def: IconDefinition = faUser
    assertType(h(FontAwesomeIcon, { icon: name }))
    assertType(h(FontAwesomeIcon, { icon: tuple }))
    assertType(h(FontAwesomeIcon, { icon: def }))
  })

  test('rejects an invalid icon value (the prop type is not widened to any)', () => {
    // @ts-expect-error a number is not a valid icon
    assertType(h(FontAwesomeIcon, { icon: 123 }))
  })

  test('remains assignable to Component despite the FunctionalComponent declaration', () => {
    assertType<Component>(FontAwesomeIcon)
  })
})

describe('FontAwesomeIcon global attributes (regression: #582)', () => {
  // Since 3.3.1, FontAwesomeIcon is declared as a FunctionalComponent. In JSX/TSX a
  // functional component's accepted attributes resolve from the first parameter of
  // its call signature — so that surface must carry Vue's global component props
  // (class, style via AllowedComponentProps; key, ref via VNodeProps), or
  // `<FontAwesomeIcon class="..."/>` fails to type-check (issue #582). The existing
  // h()-based tests above could not catch this: h()'s RawProps includes a
  // `Record<string, any>` index signature that accepts any attribute, masking the gap.
  // These assertions target the call-signature parameter directly — the exact type
  // TSX consults — without needing a JSX parser.
  type IconAttrs = Parameters<typeof FontAwesomeIcon>[0]

  test('accepts class and style', () => {
    assertType<IconAttrs>({ icon: faUser, class: 'my-class' })
    assertType<IconAttrs>({ icon: faUser, style: { color: 'red' } })
    assertType<IconAttrs>({ icon: faUser, class: 'my-class', style: { color: 'red' } })
  })

  test('accepts the reserved key attribute', () => {
    assertType<IconAttrs>({ icon: faUser, key: 'k' })
  })

  test('accepts component props alongside global attributes', () => {
    assertType<IconAttrs>({ icon: 'user', size: '2x', spin: true, class: 'fa-fw' })
  })

  test('does not widen the attribute surface to any (unknown attributes rejected)', () => {
    // @ts-expect-error `bogus` is not a valid attribute
    assertType<IconAttrs>({ icon: faUser, bogus: true })
  })
})
