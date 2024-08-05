/**
 * ComboBoxInput component.
 *
 * @component
 * @param {ComboBoxInputProps} props - The component props.
 * @param {IData} props.item - The data item.
 * @param {string} [props.className] - The optional class name.
 * @returns {JSX.Element} The rendered ComboBoxInput component.
 */
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
import { FormControl } from '@/components/ui/form'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'

import { IData, IOptions } from '../../types'
import FormItemContainer from '../FormItemContainer'

/**
 * Props for the ComboBoxInput component.
 *  @property {IData} item - The data item containing form field information.
 * @property {string} [className] - Optional CSS class name for styling.
 */
interface ComboBoxInputProps {
  item: IData
  className?: string
}
export default function ComboBoxInput({
  item,
  className,
}: Readonly<ComboBoxInputProps>) {
  const { items, label, description, defaultValue, name, rules, control } = item
  const [open, setOpen] = useState(false)

  const {
    field: { onChange, value: inputValue },
    fieldState: { error },
  } = useController({
    name,
    control,
    rules,
    defaultValue: defaultValue || '',
  })

  /**
   * Checks if the provided value is active.
   * @param value - The value to check against the input value.
   * @returns True if the input value is equal to the provided value, otherwise false.
   */
  const isActive = (value: string) => {
    if (!inputValue) return false
    return inputValue.value === value
  }

  if (items === undefined || !items.length) return null

  return (
    <FormItemContainer
      error={error || null}
      label={label}
      description={description || ''}
      className={className}
    >
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <FormControl>
            <div className="flex w-fit flex-col justify-start gap-4">
              <Button
                variant="outline"
                aria-expanded={open}
                className="w-[300px] justify-between"
                onClick={() => {
                  if (!open) {
                    onChange(inputValue)
                  }
                }}
              >
                {inputValue?.label || description}
                <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
              </Button>
            </div>
          </FormControl>
        </PopoverTrigger>
        <PopoverContent className="w-[300px] p-0">
          <Command onSelect={() => console.log('Aqui')}>
            <CommandInput placeholder={description} />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup heading={label}>
                {items.map(({ value, label }: IOptions) => (
                  <CommandItem
                    key={value}
                    value={value}
                    onSelect={(currentValue: string) => {
                      onChange(isActive(currentValue) ? null : { value, label })
                    }}
                    className={cn(
                      'capitalize',
                      isActive(value) && 'bg-gray-200'
                    )}
                  >
                    <div className="flex w-full items-center justify-between">
                      <span>{label}</span>
                      <Check
                        color="#12316B"
                        className={cn(
                          'text-bold mr-2 h-4 w-4 shrink-0',
                          isActive(value) ? 'opacity-100' : 'opacity-0'
                        )}
                      />
                    </div>
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </FormItemContainer>
  )
}
