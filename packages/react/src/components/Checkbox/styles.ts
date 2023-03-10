import * as Checkbox from '@radix-ui/react-checkbox'
import { styled } from '~/styles'

export const CheckboxContainer = styled(Checkbox.Root, {
  all: 'unset',
  width: '$6',
  height: '$6',
  background: '$gray900',
  borderRadius: '$xs',
  lineHeight: 0,
  cursor: 'pointer',
  overflow: 'hidden',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: '2px solid $gray900',
  boxSizing: 'border-box',

  '&[data-state="checked"]': {
    background: '$ignite300',
    borderColor: '$ignite300',
  },

  '&:focus': {
    borderColor: '$ignite300',
  },
})

export const CheckboxIndicator = styled(Checkbox.Indicator, {
  color: '$white',
  width: '$4',
  height: '$4',
})
