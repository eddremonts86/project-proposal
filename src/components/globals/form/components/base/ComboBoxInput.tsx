import { useState } from 'react'
import { Check, ChevronsUpDown } from 'lucide-react'
import { useController } from 'react-hook-form'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'

import { FormItem, FormLabel } from '../../../../ui/form'
import { IData, IOptions } from '../../types'
import Errormessage from './ErrorMessage'

interface ComboBoxInputProps {
  item: IData
}
export default function ComboBoxInput({ item }: Readonly<ComboBoxInputProps>) {
  const { items, label, description, defaultValue, name, rules, control } = item
  const [open, setOpen] = useState(false)

  const {
    field: { onChange, value: inputValue },
    fieldState: { error, isTouched },
  } = useController({
    name,
    control,
    rules,
    defaultValue: defaultValue || '',
  })

  const isActive = (value: string) => {
    if (!inputValue) return false
    return inputValue.value === value
  }

  if (items === undefined || !items.length) return null

  return (
    <FormItem>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <div className="flex flex-col justify-start gap-4">
            <FormLabel>{label}</FormLabel>
            <Button
              variant="outline"
              aria-expanded={open}
              className="w-[300px] justify-between"
            >
              {inputValue?.label || description}
              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
            {isTouched && error?.message && (
              <Errormessage message={error.message} />
            )}
          </div>
        </PopoverTrigger>
        <PopoverContent className="w-[300px] p-0">
          <Command>
            <CommandInput placeholder={description} />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup>
                {items.map(({ value, label }: IOptions) => (
                  <CommandItem
                    key={value}
                    value={value}
                    className="cursor-pointer"
                    onSelect={(currentValue: string) => {
                      onChange(isActive(currentValue) ? null : { value, label })
                      setOpen(false)
                    }}
                  >
                    <Check
                      className={cn(
                        'text-bold mr-2 h-4 w-4 shrink-0',
                        isActive(value) ? 'opacity-100' : 'opacity-0'
                      )}
                    />
                    {label}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </FormItem>
  )
}
