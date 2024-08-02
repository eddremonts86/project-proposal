import React from 'react'
import { useController } from 'react-hook-form'

import { Checkbox } from '@/components/ui/checkbox'
import { FormLabel } from '@/components/ui/form'

import { IData } from '../../types'
import FormItemContainer from '../FormItemContainer'

/**
 * Props for the CheckBoxInput component.
 *
 * @typedef {Object} CheckboxProps
 * @property {IData} item - The data item containing form field information.
 * @property {function(string): void} [onUpdate] - Optional callback function to handle updates.
 * @property {string} [className] - Optional CSS class name for styling.
 */
interface CheckboxProps {
  item: IData
  onUpdate?: (value: string) => void
  className?: string
}
/**
 * CheckBoxInput component integrates a checkbox input with react-hook-form.
 *
 * @param {CheckboxProps} props - The props for the CheckBoxInput component.
 * @returns {JSX.Element} The rendered CheckBoxInput component.
 */
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
