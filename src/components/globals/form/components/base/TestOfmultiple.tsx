import { useState } from 'react'

import { IData } from '../../types'
import DateInput from './DateInput'
import SelectBtn from './SelectBtn'

interface SelectProps {
  item: IData
}
export default function TestOfmultiple({ item }: Readonly<SelectProps>) {
  const [selectedValue, setSelectedValue] = useState('')

  return (
    <div className="flex  items-center justify-start gap-3 bg-zinc-100 p-4">
      <SelectBtn
        item={item}
        onUpdate={() => {
          const date = new Date()
          setSelectedValue(date.toUTCString())
        }}
      />
      <DateInput
        item={{ ...item, defaultValue: selectedValue }}
        key={selectedValue}
      />
    </div>
  )
}
