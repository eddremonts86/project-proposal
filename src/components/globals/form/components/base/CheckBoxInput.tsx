import React from 'react'
import { useController } from 'react-hook-form'

import { Checkbox } from '@/components/ui/checkbox'
import { FormLabel } from '@/components/ui/form'

import { IData } from '../../types'
import FormItemContainer from './FormItemContainer'

interface CheckboxProps {
  item: IData
  onUpdate?: (value: string) => void
  className?: string
}

const CheckBoxInput: React.FC<CheckboxProps> = ({
  item,
  onUpdate,
  className,
}: Readonly<CheckboxProps>) => {
  const { name, control, defaultValue, label, description } = item
  const {
    field: { onChange, value, ref },
    fieldState: { error },
  } = useController({
    name,
    control,
    defaultValue,
  })

  return (
    <FormItemContainer
      error={error || null}
      label={label}
      description={description || ''}
      className={className}
    >
      <div className="flex items-center">
        <Checkbox
          id={name}
          checked={value}
          onCheckedChange={(value: string) => {
            onChange(value)
            onUpdate && onUpdate(value)
          }}
          ref={ref}
          className="mr-2"
        />
        <FormLabel
          htmlFor={name}
          className="cursor-pointer text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          <span>{label}</span>
        </FormLabel>
      </div>
    </FormItemContainer>
  )
}

export default CheckBoxInput
