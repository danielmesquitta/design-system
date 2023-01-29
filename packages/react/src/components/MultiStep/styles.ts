import { styled } from '~/styles'
import { Text } from '../Text'

export const MultiStepContainer = styled('div', {})

export const Label = styled(Text, {
  defaultVariants: {
    size: 'xs',
    color: 'gray200',
  },
})

export const Steps = styled('div', {
  display: 'grid',
  gap: '$2',
  marginTop: '$1',
  gridTemplateColumns: 'repeat(var(--total-steps), 1fr)',
})

export const Step = styled('div', {
  height: '$1',
  borderRadius: '$px',
  background: '$gray600',

  variants: {
    active: {
      true: {
        background: '$gray100',
      },
    },
  },
})
