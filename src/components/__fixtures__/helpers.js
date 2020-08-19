import { mount } from '@vue/test-utils'
import FontAwesomeIcon from '../FontAwesomeIcon'

export function compileAndMount (definition, params = {}) {
  return mount(definition)
}

export function mountFromProps (props = {}) {
  return mount(FontAwesomeIcon, { props })
}
