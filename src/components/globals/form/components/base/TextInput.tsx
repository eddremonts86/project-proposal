import React from 'react'
import { useController } from 'react-hook-form'

import { Input } from '@/components/ui/input'

import { InputChangeEvent } from '../../../../../types/forms'
import { IData } from '../../types'
import FormItemContainer from '../FormItemContainer'

interface TextInputProps {
  item: IData
  className?: string
}

const TextInput: React.FC<TextInputProps> = ({ item, className }) => {
  const {
    name,
    control,
    rules,
    label,
    type,
    defaultValue,
    placeholder,
    description,
  } = item
  const {
    field: { onChange, value, onBlur },
    fieldState: { error },
  } = useController({
    name,
    control,
    rules,
    defaultValue: defaultValue || '',
  })

  return (
    <FormItemContainer
      error={error || null}
      label={label}
      description={description || ''}
      className={className}
    >
      <Input
        onChange={(e: InputChangeEvent) => onChange(e.target.value)}
        defaultValue={value}
        placeholder={placeholder}
        type={type}
        onBlur={onBlur}
        id={name}
      />
    </FormItemContainer>
  )
}

export default TextInput
