import { useEffect, useState } from 'react'
import { useController } from 'react-hook-form'

import { FormItem, FormLabel } from '@/components/ui/form'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

import { IData, IOptions } from '../../types'
import Errormessage from './ErrorMessage'

interface SelectProps {
  item: IData
  onUpdate?: (value: string) => void
}

export default function SelectBtn({ item, onUpdate }: Readonly<SelectProps>) {
  const { name, control, defaultValue, placeholder, label } = item
  const {
    field: { onChange, value },
    fieldState: { error },
  } = useController({
    name,
    defaultValue,
    control,
  })
  const [selectedValue, setSelectedValue] = useState(value)

  useEffect(() => {
    setSelectedValue(value)
  }, [value])

  const handleInputChange = (newValue: string) => {
    setSelectedValue(newValue)
    onChange(newValue)
    onUpdate && onUpdate(newValue)
  }

  return (
    <FormItem className="w-[300px] p-0">
      <Select onValueChange={handleInputChange} value={selectedValue}>
        <FormLabel className="mb-4 mt-0  pt-0">
          <span className="capitalize">{label}</span>
        </FormLabel>
        <SelectTrigger>
          <SelectValue placeholder={placeholder} />
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
      {error && <Errormessage message={error.message} />}
    </FormItem>
  )
}
