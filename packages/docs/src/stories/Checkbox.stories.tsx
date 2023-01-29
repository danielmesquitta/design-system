import type { StoryObj, Meta } from '@storybook/react'
import { Box, Text, Checkbox, CheckboxProps } from '@ignite-ui/react'

export default {
  title: 'Form/Checkbox',
  component: Checkbox,
  args: {},
  decorators: [
    (Story) => (
      <Box as="label" css={{ display: 'flex', gap: '$2' }}>
        {Story()}
        <Text>Aceitar termos de uso</Text>
      </Box>
    ),
  ],
} as Meta<CheckboxProps>

export const Default: StoryObj<CheckboxProps> = {}
