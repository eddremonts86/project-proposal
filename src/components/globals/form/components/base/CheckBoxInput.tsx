import React from 'react'
import { Control, FieldValues, useController } from 'react-hook-form'

import { Checkbox } from '@/components/ui/checkbox'
import { FormItem, FormLabel } from '@/components/ui/form'

interface CheckboxProps {
  control: Control<FieldValues>
  name: string
  label: string
  defaultValue?: boolean
}

const CheckBoxInput: React.FC<CheckboxProps> = ({
  control,
  name,
  label,
  defaultValue,
}) => {
  const {
    field: { onChange, value, ref },
  } = useController({
    name,
    control,
    defaultValue,
  })

  return (
    <FormItem className="flex items-center space-x-2">
      <Checkbox
        id={name}
        checked={value}
        onCheckedChange={onChange}
        ref={ref}
        className="mt-2"
      />
      <FormLabel
        htmlFor={name}
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {label}
      </FormLabel>
    </FormItem>
  )
}

export default CheckBoxInput
