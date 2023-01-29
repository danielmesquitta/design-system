import type { StoryObj, Meta } from '@storybook/react'
import { Box, Text, TextArea, TextAreaProps } from '@ignite-ui/react'

export default {
  title: 'Form/TextArea',
  component: TextArea,
  args: {
    placeholder: 'Digite sua mensagem',
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
        <Text>Mensagem</Text>
        {Story()}
      </Box>
    ),
  ],
} as Meta<TextAreaProps>

export const Default: StoryObj<TextAreaProps> = {}
