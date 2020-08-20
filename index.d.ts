import { ComponentPublicInstance } from 'vue'

interface FontAwesomeIconProps {
  border: boolean
  fixedWidth: boolean
  flip: 'horizontal' | 'vertical' | 'both' | null
  icon: object | Array<string> | string
  mask: object | Array<string> | string | null
  listItem: boolean
  pull: 'right' | 'left' | null
  pulse: boolean
  rotation: 90 | 180 | 270 | '90' | '180' | '270' | null
  swapOpacity: boolean
  size: 'lg' | 'xs' | 'sm' | '1x' | '2x' | '3x' | '4x' | '5x' | '6x' | '7x' | '8x' | '9x' | '10x' | null
  spin: boolean
  transform: object | string | null
  symbol: boolean | string
  title: string | null
  inverse: boolean
}

interface FontAwesomeLayersProps {
  fixedWidth: boolean
}

interface FontAwesomeLayersTextProps {
  value: string | number
  transform: object | string | null
  counter: boolean
  position: 'bottom-left' | 'bottom-right' | 'top-left' | 'top-right' | null
}

declare const FontAwesomeIcon: ComponentPublicInstance<FontAwesomeIconProps>
declare const FontAwesomeLayers: ComponentPublicInstance<FontAwesomeLayersProps>
declare const FontAwesomeLayersText: ComponentPublicInstance<FontAwesomeLayersTextProps>
