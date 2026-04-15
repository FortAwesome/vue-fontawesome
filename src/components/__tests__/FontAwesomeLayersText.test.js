/**
 * @jest-environment jsdom
 */

import { compileAndMount } from '../__fixtures__/helpers'
import FontAwesomeLayersText from '../FontAwesomeLayersText'
import { mount } from '@vue/test-utils'

function mountLayersText(template) {
  return compileAndMount({ template, components: { FontAwesomeLayersText } })
}

test('empty', () => {
  const wrapper = mountLayersText('<font-awesome-layers-text />')

  expect(wrapper.element.tagName).toBe('SPAN')
  expect(wrapper.element.getAttribute('class')).toBe('fa-layers-text')
  expect(wrapper.element.innerHTML).toBe('')
})

test('simple text', () => {
  const wrapper = mountLayersText('<font-awesome-layers-text value="Test" />')

  expect(wrapper.element.getAttribute('class')).toBe('fa-layers-text')
  expect(wrapper.element.innerHTML).toBe('Test')
})

test('accept number for value', () => {
  const wrapper = mountLayersText('<font-awesome-layers-text :value="42" />')

  expect(wrapper.element.getAttribute('class')).toBe('fa-layers-text')
  expect(wrapper.element.innerHTML).toBe('42')
})

describe('transform', () => {
  test('string', () => {
    const wrapper = mountLayersText('<font-awesome-layers-text value="1" transform="shrink-6" />')

    expect(wrapper.element.tagName).toBe('SPAN')
    expect(wrapper.element.getAttribute('class')).toBe('fa-layers-text')
    expect(wrapper.element.innerHTML).toBe('1')
  })
})

describe('counter', () => {
  test('simple', () => {
    const wrapper = mountLayersText('<font-awesome-layers-text :value="42" :counter="true" />')

    expect(wrapper.element.getAttribute('class')).toBe('fa-layers-counter')
    expect(wrapper.element.innerHTML).toBe('42')
  })

  test('position', () => {
    const wrapper = mountLayersText('<font-awesome-layers-text value="42" counter position="bottom-right" />')

    expect(wrapper.element.getAttribute('class')).toBe('fa-layers-counter fa-layers-bottom-right')
  })
})

describe('class attr', () => {
  test('user-provided class is applied alongside fa-layers-text', () => {
    const wrapper = mountLayersText('<font-awesome-layers-text value="New!" class="gray8" />')

    expect(wrapper.element.classList.contains('fa-layers-text')).toBeTruthy()
    expect(wrapper.element.classList.contains('gray8')).toBeTruthy()
  })

  test('fa-inverse is applied alongside fa-layers-text', () => {
    const wrapper = mountLayersText('<font-awesome-layers-text value="NEW" class="fa-inverse" />')

    expect(wrapper.element.classList.contains('fa-layers-text')).toBeTruthy()
    expect(wrapper.element.classList.contains('fa-inverse')).toBeTruthy()
  })

  test('user-provided class is applied alongside fa-layers-counter', () => {
    const wrapper = mountLayersText('<font-awesome-layers-text :value="42" :counter="true" class="fa-inverse" />')

    expect(wrapper.element.classList.contains('fa-layers-counter')).toBeTruthy()
    expect(wrapper.element.classList.contains('fa-inverse')).toBeTruthy()
  })
})

describe('reactivity', () => {
  test('changing props should update the element', async () => {
    const wrapper = mount(FontAwesomeLayersText, { props: { value: 42, counter: true } })

    expect(wrapper.element.innerHTML).toBe('42')

    await wrapper.setProps({ value: 43 })

    expect(wrapper.element.innerHTML).toBe('43')
  })
})
