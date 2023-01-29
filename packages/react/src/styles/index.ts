import { createStitches, defaultThemeMap } from '@stitches/react'
import {
  colors,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  radii,
  space,
} from '@ignite-ui/tokens'

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  themeMap: {
    ...defaultThemeMap,
    minWidth: 'space',
    maxWidth: 'space',
    width: 'space',
    minHeight: 'space',
    maxHeight: 'space',
    height: 'space',
  },

  theme: {
    colors,
    fonts,
    fontSizes,
    fontWeights,
    radii,
    lineHeights,
    space,
  },
})
