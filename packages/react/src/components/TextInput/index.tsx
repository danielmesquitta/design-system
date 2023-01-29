import { ComponentProps } from 'react'
import { Prefix, TextInputContainer, Input } from './styles'

export type TextInputProps = ComponentProps<typeof Input> & {
  prefix?: string
}

export const TextInput = ({ prefix, ...props }: TextInputProps) => {
  return (
    <TextInputContainer>
      {!!prefix && <Prefix>{prefix}</Prefix>}

      <Input {...props} />
    </TextInputContainer>
  )
}

TextInput.displayName = 'TextInput'
