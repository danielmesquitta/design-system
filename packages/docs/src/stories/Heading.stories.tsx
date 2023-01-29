import type { StoryObj, Meta } from '@storybook/react'
import { Heading, HeadingProps } from '@ignite-ui/react'
import { colors } from '@ignite-ui/tokens'

export default {
  title: 'Typography/Heading',
  component: Heading,
  args: {
    children: 'Lorem ipsum dolor sit amet',
    color: 'gray100',
    as: 'h2',
    size: 'md',
  },

  argTypes: {
    as: {
      options: ['strong', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      control: { type: 'select' },
    },
    color: {
      options: Object.keys(colors),
      control: { type: 'select' },
    },
    size: {
      options: ['sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl'],
      control: { type: 'select' },
    },
  },
} as Meta<HeadingProps>

export const Default: StoryObj<HeadingProps> = {}
