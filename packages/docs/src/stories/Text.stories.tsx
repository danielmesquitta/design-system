import type { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@ignite-ui/react'
import { colors, fontSizes } from '@ignite-ui/tokens'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children: 'Lorem ipsum dolor sit amet',
    color: 'gray100',
    as: 'p',
    size: 'md',
  },

  argTypes: {
    color: {
      options: Object.keys(colors),
      control: { type: 'select' },
    },
    size: {
      options: Object.keys(fontSizes),
      control: { type: 'select' },
    },
  },
} as Meta<TextProps>

export const Default: StoryObj<TextProps> = {}
