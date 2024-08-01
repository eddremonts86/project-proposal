import { FC } from 'react'
import { useController } from 'react-hook-form'

import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'

import { IData, IOptions } from '../../types'
import FormItemContainer from './FormItemContainer'

interface RadioInputProps {
  item: IData
  className?: string
}

const RadioInput: FC<RadioInputProps> = ({
  item,
  className,
}: Readonly<RadioInputProps>) => {
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
      label={label}
      description={description || ''}
      className={className}
    >
      <RadioGroup value={value} onValueChange={onChange}>
        {item.items?.length &&
          item.items?.map((option: IOptions) => (
            <div
              key={option.value}
              className="my-1 flex items-center justify-start gap-2"
            >
              <RadioGroupItem value={option.value} id={option.value} />
              <Label htmlFor={option.value} className="cursor-pointer">
                {option.label}
              </Label>
            </div>
          ))}
      </RadioGroup>
    </FormItemContainer>
  )
}

export default RadioInput
