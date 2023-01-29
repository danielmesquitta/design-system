import type { StoryObj, Meta } from '@storybook/react'
import { Box, Text, TextInput, TextInputProps } from '@ignite-ui/react'

export default {
  title: 'Form/TextInput',
  component: TextInput,
  args: {
    placeholder: 'Digite seu e-mail',
    disabled: false,
  },

  argTypes: {
    disabled: {
      control: { type: 'boolean' },
    },
  },

  decorators: [
    (Story) => (
      <Box
        as="label"
        css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
      >
        <Text>E-mail</Text>
        {Story()}
      </Box>
    ),
  ],
} as Meta<TextInputProps>

export const Default: StoryObj<TextInputProps> = {}

export const WithPrefix: StoryObj<TextInputProps> = {
  args: {
    prefix: 'schedule.com/',
  },
}
