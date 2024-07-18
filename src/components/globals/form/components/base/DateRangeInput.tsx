import { useMemo } from 'react'
import { Calendar as CalendarIcon } from 'lucide-react'
import { DateRange } from 'react-day-picker'
import { Control, FieldValues, useController } from 'react-hook-form'

import { cn } from '@/lib/utils'
import { formatDate } from '@/lib/utils/dates'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { FormItem, FormLabel } from '@/components/ui/form'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'

interface DatePickerComponentProps {
  name: string
  control: Control<FieldValues>
  label?: string
  defaultValue?: DateRange
  className?: string
  mode?: 'single' | 'range'
  numberOfMonths?: number
  format?: string
}

export default function DatePickerWithRange({
  defaultValue,
  name,
  className,
  control,
  mode = 'range',
  numberOfMonths = 2,
  format = 'LLL dd, y',
}: Readonly<DatePickerComponentProps>) {
  const {
    field: { onChange, value },
  } = useController({
    control,
    name: name,
    defaultValue: defaultValue || { from: new Date(), to: new Date() },
  })
  const dateLabel = useMemo(() => {
    let dateLabel = 'Pick a date or date range'
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
    <FormItem className={cn('grid gap-2', className)}>
      <Popover>
        <FormLabel> Pick a date</FormLabel>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={'outline'}
            className={cn(
              'w-[300px] justify-start text-left font-normal',
              !value && 'text-muted-foreground'
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {value ? dateLabel : 'Pick a date or date range'}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            mode={mode}
            initialFocus
            selected={value}
            numberOfMonths={numberOfMonths}
            defaultMonth={value?.from}
            disabled={[{ before: new Date() }]}
            onSelect={onChange}
          />
        </PopoverContent>
      </Popover>
    </FormItem>
  )
}
