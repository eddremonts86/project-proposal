import { useMemo, useState } from 'react'
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
  format?: string
  className?: string
}

export default function DateInput({
  item,
  className,
  format = 'LLL dd, y',
}: Readonly<DatePickerComponentProps>) {
  const { name, control, defaultValue, label } = item
  const [open, setOpen] = useState(false)
  const {
    field: { onChange, value },
    fieldState: { error, isTouched },
  } = useController({
    control,
    name: name,
    defaultValue: defaultValue || new Date(),
  })
  const dateLabel = useMemo(() => {
    let dateLabel = 'Pick a date'
    if (value) {
      dateLabel = formatDate(value, format)
    }
    return dateLabel
  }, [value, format])

  const myDate = formatDate(defaultValue, format)

  return (
    <FormItem className={cn('grid gap-2', className)}>
      {myDate}
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <div className="flex w-fit flex-col justify-start gap-4">
            <FormLabel>{label}</FormLabel>
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
            {isTouched && error?.message && (
              <Errormessage message={error.message} />
            )}
          </div>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            mode="single"
            selected={value}
            onSelect={onChange}
            onBlur={() => setOpen(false)}
            initialFocus
          />
        </PopoverContent>
      </Popover>
    </FormItem>
  )
}
