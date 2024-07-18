import { Control, FieldValues, useController } from 'react-hook-form'

import { FormItem, FormLabel } from '@/components/ui/form'

import { Switch } from '../../../../ui/switch'

interface ToggelProps {
  control: Control<FieldValues>
  name: string
  label: string
  defaultValue?: boolean
  description?: string
}

export function ToggleInput({
  control,
  name,
  label,
  defaultValue,
  description,
}: Readonly<ToggelProps>) {
  const {
    field: { onChange, value },
  } = useController({
    name,
    control,
    defaultValue,
  })

  return (
    <FormItem className="flex items-center space-x-2">
      <Switch
        checked={value}
        onCheckedChange={onChange}
        id={name}
        className="mt-2"
      />
      <FormLabel className="grid" htmlFor={name}>
        <span className="capitalize">{label}</span>
        <small> {description}</small>
      </FormLabel>
    </FormItem>
  )
}
