import { ComponentProps } from 'react'
import { styled } from '~/styles'
import { colors } from '@ignite-ui/tokens'

type Color = keyof typeof colors

const color = {} as Record<Color, any>

Object.keys(colors).forEach((key) => {
  color[key as Color] = {
    color: `$${key}`,
  }
})

export const Heading = styled('h2', {
  fontFamily: '$default',
  lineHeight: '$shorter',
  margin: 0,

  variants: {
    color,
    size: {
      sm: { fontSize: '$xl' },
      md: { fontSize: '$2xl' },
      lg: { fontSize: '$3xl' },
      xl: { fontSize: '$4xl' },
      '2xl': { fontSize: '$5xl' },
      '3xl': { fontSize: '$6xl' },
      '4xl': { fontSize: '$7xl' },
      '5xl': { fontSize: '$8xl' },
      '6xl': { fontSize: '$9xl' },
    },
  },

  defaultVariants: {
    color: 'gray100',
    size: 'md',
  },
})

export type HeadingProps = ComponentProps<typeof Heading> & {
  as?: 'strong' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

Heading.displayName = 'Heading'
