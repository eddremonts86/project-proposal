import React from 'react'
import {
  Control,
  FieldError,
  FieldValues,
  useController,
} from 'react-hook-form'
import { InputChangeEvent } from '../../../../../types'
import { Input } from '../../../../ui/input'
import { Label } from '../../../../ui/label'
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
}

const TextInput: React.FC<TextInputProps & IData> = ({
  name,
  control,
  rules,
  label,
  type,
  defaultValue,
}) => {
  const {
    field: { onChange, onBlur, value, ref },
    fieldState: { error },
  } = useController({
    name,
    control,
    rules,
    defaultValue,
  })

  const handleInputChange = (value: string) => {
    onChange(value)
  }

  return (
    <div className="p-4">
      <Label>{label}</Label>
      <Input
        onChange={(e: InputChangeEvent) => handleInputChange(e.target.value)}
        onBlur={onBlur}
        value={value}
        ref={ref}
        placeholder={label}
        type={type}
      />
      {error && <span>{error.message}</span>}
    </div>
  )
}

export default TextInput
