import { FC } from 'react'
import { Control, FieldValues, useController } from 'react-hook-form'

import { FormItem, FormLabel } from '@/components/ui/form'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'

import { IData, IOptions } from '../../types'

interface RadioInputProps {
  control: Control<FieldValues>
  item?: IData // Mark item as optional
}

const RadioInput: FC<RadioInputProps> = ({ control, item }) => {
  // console.log('Control prop:', control) // Debugging line to check control prop

  // if (!control) {
  //   console.error('RadioInput component is missing the control prop.')
  //   return <div>Missing control prop</div> // Handling missing control prop
  // }

  // Use useMemo to handle optional item and provide defaults
  // const { itemName, defaultValue } = useMemo(() => ({
  //   itemName: item?.name ?? 'defaultName',
  //   defaultValue: item?.value,
  // }), [item]);

  const {
    field: { onChange, value },
  } = useController({
    name: item?.name ?? 'defaultName',
    control,
    defaultValue: item?.value,
  })

  // Handle rendering when item is undefined
  if (!item) {
    console.error('RadioInput component is missing the item prop.')
    return null // or return a placeholder, error message, etc.
  }

  return (
    <FormItem>
      <FormLabel>{item.label}</FormLabel>
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
    </FormItem>
  )
}

export default RadioInput
