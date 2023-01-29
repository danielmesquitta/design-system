import type { StoryObj, Meta } from '@storybook/react'
import { Button, ButtonProps } from '@ignite-ui/react'
import { ArrowRight } from 'phosphor-react'

export default {
  title: 'Form/Button',
  component: Button,
  args: {
    children: 'Enviar',
    size: 'md',
  },
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {
  args: {
    variant: 'primary',
    size: 'md',
    disabled: false,
  },

  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'tertiary'],
      control: { type: 'inline-radio' },
    },
    size: {
      options: ['sm', 'md'],
      control: { type: 'inline-radio' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
}

export const Secondary: StoryObj<ButtonProps> = {
  args: {
    variant: 'secondary',
  },
}

export const Tertiary: StoryObj<ButtonProps> = {
  args: {
    variant: 'tertiary',
  },
}
