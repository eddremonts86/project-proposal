import { useMemo } from 'react'
import { Calendar as CalendarIcon } from 'lucide-react'
import { useController } from 'react-hook-form'

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

import { IData } from '../../types'
import Errormessage from './ErrorMessage'

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
  const { name, control, defaultValue } = item

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
          />
        </PopoverContent>
      </Popover>
      {error && <Errormessage message={error.message} />}
    </FormItem>
  )
}