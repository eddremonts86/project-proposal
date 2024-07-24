import { useEffect, useState } from 'react'
import { Control, FieldValues, useController } from 'react-hook-form'

import { FormItem, FormLabel } from '@/components/ui/form'

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

  useEffect(() => {
    setSelectedValue(value)
  }, [value])

  const handleInputChange = (newValue: string) => {
    setSelectedValue(newValue)
    onChange(newValue)
  }

  return (
    <FormItem>
      <Select onValueChange={handleInputChange} value={selectedValue}>
        <FormLabel className="grid">
          <span className="capitalize">{item.label}</span>
        </FormLabel>

        <SelectTrigger>
          <SelectValue placeholder={item.description} />
          <hr />
        </SelectTrigger>
        <SelectContent className="cursor-pointer p-1 capitalize ">
          <SelectGroup>
            <SelectLabel>{item.description}</SelectLabel>
            {item.items?.length &&
              item.items.map((option: IOptions) => (
                <SelectItem value={option.value} key={option.value}>
                  {option.label}
                </SelectItem>
              ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </FormItem>
  )
}
