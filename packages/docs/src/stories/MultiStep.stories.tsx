import type { StoryObj, Meta } from '@storybook/react'
import { Box, MultiStep, MultiStepProps } from '@ignite-ui/react'

export default {
  title: 'Form/MultiStep',
  component: MultiStep,
  args: {
    totalSteps: 4,
    currentStep: 1,
  },
  decorators: [
    (Story) => (
      <Box
        as="label"
        css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
      >
        {Story()}
      </Box>
    ),
  ],
} as Meta<MultiStepProps>

export const Default: StoryObj<MultiStepProps> = {}
