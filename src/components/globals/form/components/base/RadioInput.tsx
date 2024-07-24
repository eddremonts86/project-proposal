import { FC } from 'react'
import { useController } from 'react-hook-form'

import { FormItem, FormLabel } from '@/components/ui/form'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'

import { IData, IOptions } from '../../types'
import Errormessage from './ErrorMessage'

interface RadioInputProps {
  item: IData
}

const RadioInput: FC<RadioInputProps> = ({
  item,
}: Readonly<RadioInputProps>) => {
  const { name, control, defaultValue, label } = item

  const {
    field: { onChange, value },
    fieldState: { error },
  } = useController({
    name,
    control,
    defaultValue,
  })

  return (
    <FormItem>
      <FormLabel>{label}</FormLabel>
      <RadioGroup value={value} onValueChange={onChange} className="py-3">
        {item.items?.length &&
          item.items?.map((option: IOptions) => (
            <div
              key={option.value}
              className="flex flex-col items-center justify-start gap-2 sm:flex-row"
            >
              <RadioGroupItem value={option.value} id={option.value} />
              <Label htmlFor={option.value} className="cursor-pointer">
                {option.label}
              </Label>
            </div>
          ))}
      </RadioGroup>
      {error && <Errormessage message={error.message} />}
    </FormItem>
  )
}

export default RadioInput
