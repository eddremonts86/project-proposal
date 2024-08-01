import { useEffect, useState } from 'react'
import { useController } from 'react-hook-form'

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
import FormItemContainer from './FormItemContainer'

interface SelectProps {
  item: IData
  onUpdate?: (value: string) => void
  className?: string
}

export default function SelectBtn({
  item,
  onUpdate,
  className,
}: Readonly<SelectProps>) {
  const { name, control, defaultValue, placeholder, label, description } = item
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
    <FormItemContainer
      error={error || null}
      label={label}
      description={description || ''}
      className={className}
    >
      <Select onValueChange={handleInputChange} value={selectedValue}>
        <SelectTrigger>
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent className="cursor-pointer p-1 capitalize ">
          <SelectGroup>
            <SelectLabel>{description}</SelectLabel>
            <hr className="my-2" />
            {item.items?.length &&
              item.items.map((option: IOptions) => (
                <SelectItem value={option.value} key={option.value}>
                  {option.label}
                </SelectItem>
              ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </FormItemContainer>
  )
}
