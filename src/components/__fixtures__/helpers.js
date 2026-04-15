import FontAwesomeIcon from '../FontAwesomeIcon'
import pkg from '@fortawesome/fontawesome-svg-core/package.json'
import { mount } from '@vue/test-utils'
import { parse } from '@fortawesome/fontawesome-svg-core'

const coreMajorVersion = Number.parseInt(pkg.version?.split('.')[0], 10) || 0

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

  if (feature === REFERENCE_ICON_USING_7X_SMALL_BATCH_ICONS) {
    return coreMajorVersion === 7
  }

  if (feature === ICON_TITLE_PROP) {
    return coreMajorVersion < 7
  }
}

export const REFERENCE_ICON_BY_STYLE = 0x00
export const ICON_ALIASES = 0x01
export const REFERENCE_ICON_USING_STRING = 0x02
export const REFERENCE_ICON_USING_FAMILY = 0x03
export const REFERENCE_ICON_USING_7X_SMALL_BATCH_ICONS = 0x04
export const ICON_TITLE_PROP = 0x06
