import type { StoryObj, Meta } from '@storybook/react'
import { Box, BoxProps, Text } from '@ignite-ui/react'

export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: (
      <Text>
        Lorem ispansum dolor sit amet consectetur adipisicing elit. Veritatis in
        voluptates assumenda ducimus reprehenderit, tempora sit quas sequi
        aspernatur atque nemo odio velit ut blanditiis! Labore voluptas tenetur
        voluptate fugiat.
      </Text>
    ),

    as: 'div',
  },

  argTypes: {
    children: {
      control: { type: null },
    },
  },
} as Meta<BoxProps>

export const Default: StoryObj<BoxProps> = {}
