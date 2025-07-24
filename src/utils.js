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
