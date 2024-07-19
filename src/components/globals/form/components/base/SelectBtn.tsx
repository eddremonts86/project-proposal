import { useEffect, useState } from 'react'
import { Control, FieldValues, useController } from 'react-hook-form'

import { Label } from '../../../../ui/label'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '../../../../ui/select'
import { IData, IOptions } from '../../types'

interface SelectProps {
  item: IData
  control: Control<FieldValues>
}

export default function SelectBtn({ item, control }: Readonly<SelectProps>) {
  const {
    field: { onChange, value },
  } = useController({
    name: item.name,
    defaultValue: item.value,
    control,
  })
  const [selectedValue, setSelectedValue] = useState(value)

  // Effect to update the local state when the value changes externally
  useEffect(() => {
    setSelectedValue(value)
  }, [value])

  const handleInputChange = (newValue: string) => {
    setSelectedValue(newValue) // Update local state
    onChange(newValue) // Notify react-hook-form of the change
  }

  return (
    <div className="p-4">
      <Select onValueChange={handleInputChange} value={selectedValue}>
        <Label>{item.description}</Label>

        <SelectTrigger>
          <SelectValue placeholder={item.label} />
        </SelectTrigger>
        <SelectContent className="cursor-pointer border-0 px-3 py-1 capitalize hover:bg-gray-100 hover:text-gray-900">
          <SelectGroup>
            <SelectLabel>{item.label}</SelectLabel>

            {item.items?.length &&
              item.items.map((option: IOptions) => (
                <SelectItem value={option.value} key={option.value}>
                  {option.label}
                </SelectItem>
              ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  )
}
