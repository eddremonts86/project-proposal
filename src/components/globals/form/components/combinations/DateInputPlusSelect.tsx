//import { useState } from 'react'

import { IAdvanceData, InputsTypes } from '../../types'
import DateInput from '../base/DateInput'
import SelectBtn from '../base/SelectBtn'

interface SelectProps {
  item: IAdvanceData
}
export default function DateInputPlusSelect({ item }: Readonly<SelectProps>) {
  // const [selectedValue, setSelectedValue] = useState('')
  const handledSelect = (value: string) => {
    console.log(value)
  }
  const dateInput = item?.items?.find((i) => i.type === InputsTypes.dateInput)
  const select = item?.items?.find((i) => i.type === InputsTypes.select)
  return (
    <div className="flex-col gap-4 rounded-sm bg-slate-50 p-4">
      <p>{item.label}</p>

      <div className="flex  items-center justify-start gap-3">
        <SelectBtn
          item={
            select || { key: '', name: '', label: '', type: InputsTypes.select }
          }
          onUpdate={handledSelect}
        />
        <DateInput
          item={
            dateInput || {
              key: '',
              name: '',
              label: '',
              type: InputsTypes.dateInput,
            }
          }
          onUpdate={handledSelect}
        />
      </div>
    </div>
  )
}
