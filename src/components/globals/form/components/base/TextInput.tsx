import React from 'react'
import { useController } from 'react-hook-form'

import { FormDescription, FormItem, FormLabel } from '@/components/ui/form'

import { InputChangeEvent } from '../../../../../types/forms'
import { Input } from '../../../../ui/input'
import { IData } from '../../types'
import Errormessage from './ErrorMessage'

interface TextInputProps {
  item: IData
}

const TextInput: React.FC<TextInputProps> = ({ item }) => {
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
    fieldState: { error, isTouched },
  } = useController({
    name,
    control,
    rules,
    defaultValue: defaultValue || '',
  })

  return (
    <FormItem>
      <FormLabel className="mb-0 pb-0 capitalize">{label} </FormLabel>
      <Input
        onChange={(e: InputChangeEvent) => onChange(e.target.value)}
        defaultValue={value}
        placeholder={placeholder}
        type={type}
        onBlur={onBlur}
      />
      <FormDescription className="mt-0 pt-0">{description}</FormDescription>
      {isTouched && error?.message && <Errormessage message={error.message} />}
    </FormItem>
  )
}

export default TextInput
