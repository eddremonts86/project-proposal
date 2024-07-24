import React from 'react'
import { useController } from 'react-hook-form'

import { Checkbox } from '@/components/ui/checkbox'
import { FormItem, FormLabel } from '@/components/ui/form'

import { IData } from '../../types'
import Errormessage from './ErrorMessage'

interface CheckboxProps {
  item: IData
}

const CheckBoxInput: React.FC<CheckboxProps> = ({
  item,
}: Readonly<CheckboxProps>) => {
  const { name, control, defaultValue, label } = item
  const {
    field: { onChange, value, ref },
    fieldState: { error },
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
        className="cursor-pointer text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        <span>{label}</span>
      </FormLabel>
      {error && <Errormessage message={error.message} />}
    </FormItem>
  )
}

export default CheckBoxInput
