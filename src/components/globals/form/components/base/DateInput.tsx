/*
import { useState } from 'react'
import { Calendar as CalendarIcon } from 'lucide-react'
import { Control, FieldValues, useController } from 'react-hook-form'

import { cn } from '@/lib/utils'
import { formatDate } from '@/lib/utils/dates'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'

interface DatePickerComponentProps {
  name: string
  label: string
  control: Control<FieldValues>
}

const DatePickerComponent: React.FC<DatePickerComponentProps> = ({
  name,
  label,
  control,
}) => {
  const {
    field: { onChange, value },
  } = useController({
    name: name,
    control,
    defaultValue: new Date(),
  })

  return (
    <div>
      <label>{label}</label>
      <Controller
        name={name}
        control={control}
        render={() => (
          <DatePicker
            selected={value}
            onChange={(date) => onChange(date)}
            className="rounded-md border border-gray-300 p-2"
            // Add any additional props here, like dateFormat, minDate, etc.
          />
        )}
      />
    </div>
  )
}
*/

export default function DatePickerComponent() {
  return <div>Date Picker Component</div>
}
