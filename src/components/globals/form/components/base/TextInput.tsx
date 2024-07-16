import React from 'react'
import {
  Control,
  useController,
  FieldValues,
  FieldError,
} from 'react-hook-form'
import { Input } from '../../../../ui/input'
import { Label } from '../../../../ui/label'
import { useDebounce } from '@uidotdev/usehooks'
import { InputChangeEvent } from '../../../../../types'


interface TextInputProps {
  name: string
  control: Control<FieldValues>
  rules?: Record<string, unknown>
  label: string
  type: string | undefined
  description: string
  placeholder: string,
  defValue?: string
}

const TextInput: React.FC<TextInputProps> = ({
  name,
  control,
  rules,
  label,
  type,
  defValue
}) => {
  const {
    field: { onChange, onBlur, value, ref },
    fieldState: { error },
  } = useController({
    name,
    control,
    rules,
    defaultValue: '',
  })

  const debouncedSearchTerm = useDebounce(value, 300)

  const handleInputChange = (value: string) => {
    onChange(value);
    debouncedSearchTerm(value);
  };



  return (
    <div className="p-4">
      <Label>{label}</Label>
      <Input
        defaultValue={defValue}
        onChange={(e: InputChangeEvent) =>
          handleInputChange(e.target.value)
        }
        onBlur={onBlur}
        value={value}
        ref={ref}
        placeholder={label}
        type={type}
      />
      {error && <span>{(error as FieldError).message}</span>}
    </div>
  )
}

export default TextInput
