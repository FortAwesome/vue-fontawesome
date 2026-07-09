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
