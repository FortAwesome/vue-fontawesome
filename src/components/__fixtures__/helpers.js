import FontAwesomeIcon from '../FontAwesomeIcon'
import pkg from '@fortawesome/fontawesome-svg-core/package.json'
import { mount } from '@vue/test-utils'

const coreMajorVersion = Number.parseInt(pkg.version?.split('.')[0], 10) || 0
const coreMinorVersion = Number.parseInt(pkg.version?.split('.')[1], 10) || 0

export function compileAndMount(definition, props = {}) {
  return mount(definition, { props })
}

export function mountFromProps(props = {}) {
  return mount(FontAwesomeIcon, { props })
}

// Available in v6+
export const SUPPORTS_ICON_BY_STYLE = coreMajorVersion >= 6
export const SUPPORTS_ICON_ALIASES = coreMajorVersion >= 6
export const SUPPORTS_ICON_USING_STRING = coreMajorVersion >= 6
export const SUPPORTS_ICON_USING_FAMILY = coreMajorVersion >= 6

// Available in v7+ only
export const SUPPORTS_7X_SMALL_BATCH_ICONS = coreMajorVersion === 7

// Available in v7.1+ only
export const SUPPORTS_7X_UTILITY_ICONS = coreMajorVersion === 7 && coreMinorVersion >= 1

// Available in v7.2+ only
export const SUPPORTS_7X_GRAPHITE_ICONS = coreMajorVersion === 7 && coreMinorVersion >= 2

// Available in pre-v7 only
export const SUPPORTS_TITLE_PROP = coreMajorVersion < 7
