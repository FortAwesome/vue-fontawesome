import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { DefineComponent } from 'vue'

interface FontAwesomeIconProps {
  border?: boolean
  fixedWidth?: boolean
  flip?: 'horizontal' | 'vertical' | 'both'
  icon: object | Array<string> | string | IconDefinition
  mask?: object | Array<string> | string
  listItem?: boolean
  pull?: 'right' | 'left'
  pulse?: boolean
  rotation?: 90 | 180 | 270 | '90' | '180' | '270'
  swapOpacity?: boolean
  size?: 'lg' | 'xs' | 'sm' | '1x' | '2x' | '3x' | '4x' | '5x' | '6x' | '7x' | '8x' | '9x' | '10x'
  spin?: boolean
  transform?: object | string
  symbol?: boolean | string
  title?: string
  inverse?: boolean
}

interface FontAwesomeLayersProps {
  fixedWidth?: boolean
}

interface FontAwesomeLayersTextProps {
  value: string | number
  transform?: object | string
  counter?: boolean
  position?: 'bottom-left' | 'bottom-right' | 'top-left' | 'top-right'
}

declare const FontAwesomeIcon: DefineComponent<FontAwesomeIconProps>
declare const FontAwesomeLayers: DefineComponent<FontAwesomeLayersProps>
declare const FontAwesomeLayersText: DefineComponent<FontAwesomeLayersTextProps>
