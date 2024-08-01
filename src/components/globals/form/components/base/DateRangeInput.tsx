import { useMemo, useState } from 'react'
import { Calendar as CalendarIcon } from 'lucide-react'
import { useController } from 'react-hook-form'

import { cn } from '@/lib/utils'
import { formatDate } from '@/lib/utils/dates'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'

import { IData } from '../../types'
import FormItemContainer from './FormItemContainer'

interface DatePickerComponentProps {
  item: IData
  className?: string
  numberOfMonths?: number
  format?: string
  disabledDateRange?: { before: Date; after: Date }[]
}

export default function DatePickerWithRange({
  item,
  className,
  numberOfMonths = 2,
  format = 'LLL dd, y',
  disabledDateRange,
}: Readonly<DatePickerComponentProps>) {
  const { name, control, defaultValue, label, description } = item
  const [open, setOpen] = useState(false)

  const {
    field: { onChange, value },
    fieldState: { error },
  } = useController({
    control,
    name: name,
    defaultValue: defaultValue || { from: new Date(), to: new Date() },
  })
  const dateLabel = useMemo(() => {
    let dateLabel = 'Pick a date range'
    if (value?.from) {
      if (value.to) {
        dateLabel = `${formatDate(value.from, format)} - ${formatDate(value.to, format)}`
      } else {
        dateLabel = formatDate(value.from, format)
      }
    }
    return dateLabel
  }, [value, format])

  return (
    <FormItemContainer
      error={error || null}
      label={label}
      description={description || ''}
      className={className}
    >
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant={'outline'}
            aria-expanded={open}
            className={cn(
              'w-[300px] justify-start text-left font-normal',
              !value && 'text-muted-foreground'
            )}
            onClick={() => {
              if (open) {
                onChange(value)
              }
            }}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {dateLabel}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            mode="range"
            initialFocus
            selected={value}
            numberOfMonths={numberOfMonths}
            defaultMonth={value?.from}
            disabled={disabledDateRange}
            onSelect={onChange}
            onBlur={() => setOpen(false)}
          />
        </PopoverContent>
      </Popover>
    </FormItemContainer>
  )
}
