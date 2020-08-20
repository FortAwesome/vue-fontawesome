import { mount } from '@vue/test-utils'
import FontAwesomeIcon from '../FontAwesomeIcon'

export function compileAndMount (definition, props = {}) {
  return mount(definition, { props })
}

export function mountFromProps (props = {}) {
  return mount(FontAwesomeIcon, { props })
}
