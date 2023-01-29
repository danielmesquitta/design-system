import { ComponentProps, ElementType } from 'react'
import { styled } from '~/styles'
import { colors, fontSizes } from '@ignite-ui/tokens'

type FontSize = keyof typeof fontSizes

type Color = keyof typeof colors

const color = {} as Record<Color, any>

Object.keys(colors).forEach((key) => {
  color[key as Color] = {
    color: `$${key}`,
  }
})

const size = {} as Record<FontSize, any>

Object.keys(fontSizes).forEach((key) => {
  size[key as FontSize] = {
    fontSize: `$${key}`,
  }
})

export const Text = styled('p', {
  fontFamily: '$default',
  lineHeight: '$base',
  margin: 0,

  variants: {
    color,
    size,
  },

  defaultVariants: {
    color: 'gray100',
    size: 'md',
  },
})

export type TextProps = ComponentProps<typeof Text> & {
  as?: ElementType
}

Text.displayName = 'Text'
