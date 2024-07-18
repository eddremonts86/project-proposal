import React from 'react'
import { Control, FieldValues, useController } from 'react-hook-form'

import { FormDescription, FormItem, FormLabel } from '@/components/ui/form'

import { Textarea } from '../../../../ui/textarea'
import { IData } from '../../types'

interface TextInputProps {
  name: string
  control: Control<FieldValues>
  rules?: Record<string, unknown>
  label: string
  type: string | undefined
  description: string
  placeholder: string
  defaultValue?: string
  multiline?: boolean
}

const TextAreaInput: React.FC<TextInputProps & IData> = ({
  name,
  control,
  rules,
  label,
  defaultValue,
  placeholder,
  description,
}) => {
  const {
    field: { onChange, value, ref },
    fieldState: { error },
  } = useController({
    name,
    control,
    rules,
    defaultValue: defaultValue || '',
  })

  return (
    <FormItem>
      <FormLabel className="grid">
        <span className="capitalize">{label}</span>
      </FormLabel>
      <Textarea
        value={value}
        ref={ref}
        onChange={onChange}
        placeholder={placeholder}
        className="resize-none"
      />
      <FormDescription>{description}</FormDescription>
      {error && <span>{error.message}</span>}
    </FormItem>
  )
}

export default TextAreaInput
