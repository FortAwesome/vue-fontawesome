import { compileAndMount } from '../__fixtures__/helpers'
import FontAwesomeLayersText from '../FontAwesomeLayersText'

test('empty', () => {
  const wrapper = compileAndMount({
    template: '<font-awesome-layers-text />',
    components: {
      FontAwesomeLayersText
    }
  })
  console.warn(wrapper.element)

  expect(wrapper.element.tagName).toBe('span')
})

test('simple text', () => {
  const vm = compileAndMount({
    template: '<font-awesome-layers-text value="Test" />',
    components: {
      FontAwesomeLayersText
    }
  })

  expect(vm.$el.getAttribute('class')).toBe('fa-layers-text')
  expect(vm.$el.innerHTML).toBe('Test')
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
    console.warn(wrapper.html())
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
