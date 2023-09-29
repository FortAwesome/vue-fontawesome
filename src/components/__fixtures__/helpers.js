import { mount } from '@vue/test-utils'
import FontAwesomeIcon from '../FontAwesomeIcon'
import { parse } from '@fortawesome/fontawesome-svg-core'

export function compileAndMount(definition, props = {}) {
  return mount(definition, { props })
}

export function mountFromProps(props = {}) {
  return mount(FontAwesomeIcon, { props })
}

export function coreHasFeature(feature) {
  if (feature === REFERENCE_ICON_BY_STYLE || feature === ICON_ALIASES || feature === REFERENCE_ICON_USING_STRING || feature === REFERENCE_ICON_USING_FAMILY) {
    return parse.icon
  }
}

export const REFERENCE_ICON_BY_STYLE = 0x00
export const ICON_ALIASES = 0x01
export const REFERENCE_ICON_USING_STRING = 0x02
export const REFERENCE_ICON_USING_FAMILY = 0x03
