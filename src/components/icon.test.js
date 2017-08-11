import Vue from 'vue'
import Icon from './icon'
import fontawesome from '@fortawesome/fontawesome'

const icon = {
  iconName: 'mock',
  prefix: 'fa',
  icon: [
    512, 512,
    [],
    "f001",
    "M"
  ]
}

function mount (propsData = {}) {
  const Ctor = Vue.extend(Icon)
  return new Ctor({ propsData }).$mount()
}

test('something', () => {
  expect(mount({ icon })).toBeTruthy()
})
