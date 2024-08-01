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
  format?: string
  className?: string
  onUpdate?: (value: string) => void
}

export default function DateInput({
  item,
  className,
  format = 'LLL dd, y',
  onUpdate,
}: Readonly<DatePickerComponentProps>) {
  const { name, control, defaultValue, label, description } = item
  const [open, setOpen] = useState(false)
  const {
    field: { onChange, value },
    fieldState: { error },
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

  return (
    <FormItemContainer
      error={error || null}
      label={label}
      description={description || ''}
      className={className}
    >
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <div className="flex w-fit flex-col justify-start gap-4">
            <Button
              variant={'outline'}
              aria-expanded={open}
              className={cn(
                'w-[300px] justify-start text-left font-normal',
                !value && 'text-muted-foreground'
              )}
              onClick={() => {
                onChange(value)
              }}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {dateLabel}
            </Button>
          </div>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            mode="single"
            selected={value}
            onSelect={(value: string) => {
              onChange(value)
              onUpdate?.(value)
            }}
            onBlur={() => setOpen(false)}
            initialFocus
          />
        </PopoverContent>
      </Popover>
    </FormItemContainer>
  )
}
