import FontAwesomeIcon from '../FontAwesomeIcon'
import pkg from '@fortawesome/fontawesome-svg-core/package.json'
import { mount } from '@vue/test-utils'
import { parse } from '@fortawesome/fontawesome-svg-core'

const coreMajorVersion = Number.parseInt(pkg.version?.split('.')[0], 10) || 0
const coreMinorVersion = Number.parseInt(pkg.version?.split('.')[1], 10) || 0

export function compileAndMount(definition, props = {}) {
  return mount(definition, { props })
}

export function mountFromProps(props = {}) {
  return mount(FontAwesomeIcon, { props })
}

// Available in v6+
export const SUPPORTS_ICON_BY_STYLE = !!parse.icon
export const SUPPORTS_ICON_ALIASES = !!parse.icon
export const SUPPORTS_ICON_USING_STRING = !!parse.icon
export const SUPPORTS_ICON_USING_FAMILY = !!parse.icon

// Available in v7+ only
export const SUPPORTS_7X_SMALL_BATCH_ICONS = coreMajorVersion === 7

// Available in v7.2+ only
export const SUPPORTS_7X_GRAPHITE_ICONS = coreMajorVersion === 7 && coreMinorVersion >= 2

// Available in pre-v7 only
export const SUPPORTS_TITLE_PROP = coreMajorVersion < 7
