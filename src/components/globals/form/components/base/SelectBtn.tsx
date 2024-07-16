import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { InputChangeEvent } from '@/types/forms'
import { Control, FieldValues, useController } from 'react-hook-form'
import { IData, IOptions } from '../../types'

interface SelectProps {
  item: IData
  control: Control<FieldValues>
}

export default function SelectBtn({ item, control }: Readonly<SelectProps>) {
  const {
    field: { onChange },
  } = useController({
    name: item.name,
    defaultValue: item.value,
    control,
  })

  const handleInputChange = (value: string) => {
    console.log(value)
    onChange(value)
  }

  return (
    <Select>
      <SelectTrigger>
        <SelectValue placeholder={item.label} />
      </SelectTrigger>
      <SelectContent className="cursor-pointer border-0 px-3 py-1 capitalize hover:bg-gray-100 hover:text-gray-900">
        <SelectGroup>
          {item.description && <SelectLabel>{item.description}</SelectLabel>}
          {item.items?.length &&
            item.items.map((option: IOptions) => (
              <SelectItem
                key={option.value}
                value={option.value}
                onClick={() => handleInputChange(option.value)}
              >
                {option.label}
              </SelectItem>
            ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
