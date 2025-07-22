export const ICON_PACKS_STARTING_VERSION = '7.0.0'

const svgCorePackageJson = require('@fortawesome/fontawesome-svg-core/package.json')

export const SVG_CORE_VERSION = svgCorePackageJson.version

export function objectWithKey(key, value) {
  return (Array.isArray(value) && value.length > 0) || (!Array.isArray(value) && value) ? { [key]: value } : {}
}

export function classList(props) {
  let classes = {
    'fa-spin': props.spin,
    'fa-pulse': props.pulse,
    // the fixedWidth property has been deprecated as of version 7.0.0
    'fa-fw': props.fixedWidth,
    'fa-border': props.border,
    'fa-li': props.listItem,
    'fa-inverse': props.inverse,
    'fa-flip': props.flip === true,
    'fa-flip-horizontal': props.flip === 'horizontal' || props.flip === 'both',
    'fa-flip-vertical': props.flip === 'vertical' || props.flip === 'both',
    [`fa-${props.size}`]: props.size !== null,
    [`fa-rotate-${props.rotation}`]: props.rotation !== null,
    'fa-rotate-by': props.rotateBy,
    [`fa-pull-${props.pull}`]: props.pull !== null,
    'fa-swap-opacity': props.swapOpacity,
    'fa-bounce': props.bounce,
    'fa-shake': props.shake,
    'fa-beat': props.beat,
    'fa-fade': props.fade,
    'fa-beat-fade': props.beatFade,
    'fa-flash': props.flash,
    'fa-spin-pulse': props.spinPulse,
    'fa-spin-reverse': props.spinReverse,
    // the widthAuto property is only supported in version 7.0.0 and later
    'fa-width-auto': props.widthAuto
  }

  return Object.keys(classes)
    .map((key) => (classes[key] ? key : null))
    .filter((key) => key)
}

export function addStaticClass(to, what) {
  const val = (to || '').length === 0 ? [] : [to]

  return val.concat(what).join(' ')
}

// check if verion1 is less than version2
export function versionCheckLt(version1, version2) {
  const [v1Base, v1PreRelease] = version1.split('-')
  const [v2Base, v2PreRelease] = version2.split('-')

  const v1Parts = v1Base.split('.').map(Number)
  const v2Parts = v2Base.split('.').map(Number)

  // Compare version numbers first
  for (let i = 0; i < Math.max(v1Parts.length, v2Parts.length); i++) {
    const v1Part = v1Parts[i] || 0
    const v2Part = v2Parts[i] || 0

    if (v1Part < v2Part) return true
    if (v1Part > v2Part) return false
  }

  // If version numbers are equal, compare pre-release identifiers
  // A version with a pre-release identifier is less than one without
  if (v1PreRelease && !v2PreRelease) return true
  if (!v1PreRelease && v2PreRelease) return false

  return false
}

// check if verion1 is greater than or equal to version2
export function versionCheckGte(version1, version2) {
  const [v1Base, v1PreRelease] = version1.split('-')
  const [v2Base, v2PreRelease] = version2.split('-')

  const v1Parts = v1Base.split('.')
  const v2Parts = v2Base.split('.')

  // Compare version numbers first
  for (let i = 0; i < Math.max(v1Parts.length, v2Parts.length); i++) {
    const v1Part = v1Parts[i] || '0'
    const v2Part = v2Parts[i] || '0'

    // Compare numeric values
    const v1Num = parseInt(v1Part, 10)
    const v2Num = parseInt(v2Part, 10)

    if (v1Num !== v2Num) {
      return v1Num > v2Num
    }
  }

  // If numeric values are equal, look for any remaining parts
  // that would make one version greater than the other
  for (let i = 0; i < Math.max(v1Parts.length, v2Parts.length); i++) {
    const v1Part = v1Parts[i] || '0'
    const v2Part = v2Parts[i] || '0'

    if (v1Part !== v2Part) {
      // When numeric values are equal but strings differ,
      // the one without leading zeros is greater
      if (v1Part.length !== v2Part.length) {
        return v1Part.length < v2Part.length
      }
    }
  }

  // If version numbers are equal, compare pre-release identifiers
  // A version with a pre-release identifier is less than one without
  if (v1PreRelease && !v2PreRelease) return false
  if (!v1PreRelease && v2PreRelease) return true

  return true
}
