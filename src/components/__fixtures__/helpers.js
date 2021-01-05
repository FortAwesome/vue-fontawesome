import Vue from 'vue/dist/vue'
import FontAwesomeIcon from '../FontAwesomeIcon'
import { parse } from '@fortawesome/fontawesome-svg-core'

export function compileAndMount (str, params = {}) {
  const res = Vue.compile(str)
  const vm = new Vue({
    ...params,
    render: res.render,
    staticRenderFn: res.staticRenderFn
  })

  vm.$mount()

  return vm
}

export function mountFromProps (propsData = {}) {
  const opts = {
    render: (h) => h(
      FontAwesomeIcon,
      { props: propsData }
    )
  }

  const vm = new Vue(opts)
  vm.$mount()

  return vm
}

export function coreHasFeature (feature) {
  if (feature === REFERENCE_ICON_BY_STYLE || feature === ICON_ALIASES || feature === REFERENCE_ICON_USING_STRING) {
    return parse.icon
  }
}

export const REFERENCE_ICON_BY_STYLE = 0x00
export const ICON_ALIASES = 0x01
export const REFERENCE_ICON_USING_STRING = 0x02