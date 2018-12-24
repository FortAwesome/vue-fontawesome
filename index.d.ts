declare module '@fortawesome/vue-fontawesome' {
  import { FunctionalComponentOptions } from 'vue'
  import { PropsDefinition } from 'vue/types/options'
  interface FontAwesomeIconProps { }
  interface FontAwesomeLayersProps { }
  interface FontAwesomeLayersTextProps { }
  export const FontAwesomeIcon: FunctionalComponentOptions<FontAwesomeIconProps, PropsDefinition<FontAwesomeIconProps>>
  export const FontAwesomeLayers: FunctionalComponentOptions<FontAwesomeLayersProps, PropsDefinition<FontAwesomeLayersProps>>
  export const FontAwesomeLayersText: FunctionalComponentOptions<FontAwesomeLayersTextProps, PropsDefinition<FontAwesomeLayersTextProps>>
}
