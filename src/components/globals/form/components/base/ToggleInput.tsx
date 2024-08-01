import { useController } from 'react-hook-form'

import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'

import { IData } from '../../types'
import FormItemContainer from './FormItemContainer'

interface ToggleProps {
  item: IData
  className?: string
}

export default function ToggleInput({
  item,
  className,
}: Readonly<ToggleProps>) {
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
    <FormItemContainer
      error={error || null}
      description={description || ''}
      className={className}
    >
      <div className="flex items-center space-x-2">
        <Switch checked={value} onCheckedChange={onChange} id={name} />
        <Label htmlFor={name} className="cursor-pointer">
          {label}
        </Label>
      </div>
    </FormItemContainer>
  )
}
