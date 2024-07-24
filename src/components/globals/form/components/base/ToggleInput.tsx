import { useController } from 'react-hook-form'

import { FormItem, FormLabel } from '@/components/ui/form'
import { Switch } from '@/components/ui/switch'

import { IData } from '../../types'
import Errormessage from './ErrorMessage'

interface ToggleProps {
  item: IData
}

export default function ToggleInput({ item }: Readonly<ToggleProps>) {
  const { name, control, defaultValue, label, description } = item
  const {
    field: { onChange, value },
    fieldState: { error },
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
      <FormLabel className="grid cursor-pointer" htmlFor={name}>
        <span className="capitalize">{label}</span>
        <small> {description}</small>
      </FormLabel>
      {error && <Errormessage message={error.message} />}
    </FormItem>
  )
}
