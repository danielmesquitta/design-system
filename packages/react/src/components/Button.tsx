import { styled } from '../styles'
import { ComponentProps } from 'react'

export const Button = styled('button', {
  fontFamily: '$default',
  background: '$ignite300',
  borderRadius: '$sm',
  border: 0,
  fontWeight: '$bold',
  color: '$white',

  variants: {
    size: {
      sm: {
        fontSize: '$sm',
        padding: '$2 $4',
      },

      md: {
        fontSize: '$md',
        padding: '$2 $4',
      },

      lg: {
        fontSize: '$lg',
        padding: '$3 $6',
      },
    },
  },

  defaultVariants: {
    size: 'md',
  },
})

export type ButtonProps = ComponentProps<typeof Button>
