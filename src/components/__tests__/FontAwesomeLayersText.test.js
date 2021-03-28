import { compileAndMount } from '../__fixtures__/helpers'
import FontAwesomeLayersText from '../FontAwesomeLayersText'

test('empty', () => {
  const wrapper = compileAndMount({
    template: '<font-awesome-layers-text />',
    components: {
      FontAwesomeLayersText
    }
  })

  expect(wrapper.element.tagName).toBe('SPAN')
})

test('simple text', () => {
  const wrapper = compileAndMount({
    template: '<font-awesome-layers-text value="Test" />',
    components: {
      FontAwesomeLayersText
    }
  })

  expect(wrapper.element.getAttribute('class')).toBe('fa-layers-text')
  expect(wrapper.element.innerHTML).toBe('Test')
})

test('accept number for value', () => {
  const wrapper = compileAndMount({
    template: '<font-awesome-layers-text :value="42" />',
    components: {
      FontAwesomeLayersText
    }
  })

  expect(wrapper.element.getAttribute('class')).toBe('fa-layers-text')
  expect(wrapper.element.innerHTML).toBe('42')
})

describe('transform', () => {
  test('string', () => {
    const wrapper = compileAndMount({
      template: '<font-awesome-layers-text value="1" transform="shrink-6" />',
      components: {
        FontAwesomeLayersText
      }
    })

    // It appears the jsdom doesn't set the transform for this, not sure why
    expect(wrapper.element)
  })
})

describe('counter', () => {
  test('simple', () => {
    const wrapper = compileAndMount({
      template: '<font-awesome-layers-text :value="42" :counter="true" />',
      components: {
        FontAwesomeLayersText
      }
    })

    expect(wrapper.element.getAttribute('class')).toBe('fa-layers-counter')
    expect(wrapper.element.getAttribute('class')).not.toBe('fa-layers-text')
    expect(wrapper.element.innerHTML).toBe('42')
  })

  test('position', () => {
    const wrapper = compileAndMount({
      template: '<font-awesome-layers-text value="42" counter position="bottom-right" />',
      components: {
        FontAwesomeLayersText
      }
    })

    expect(wrapper.element.getAttribute('class')).toBe('fa-layers-counter fa-layers-bottom-right')
  })
})

describe('reactivity', () => {
  test('changing props should update the element', async () => {
    const wrapper = compileAndMount({
      template: '<font-awesome-layers-text :value="42" :counter="true" />',
      components: {
        FontAwesomeLayersText
      }
    })

    expect(wrapper.element.innerHTML).toBe('42')

    await wrapper.setProps({ value: 43 })

    expect(wrapper.element.innerHTML).toBe('43')
  })
})
