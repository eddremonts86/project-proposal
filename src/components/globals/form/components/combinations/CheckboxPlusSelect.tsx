//import { useState } from 'react'

import { IAdvanceData, InputsTypes } from '../../types'
import CheckBoxInput from '../base/CheckBoxInput'
import SelectBtn from '../base/SelectBtn'

interface SelectProps {
  item: IAdvanceData
}

export default function CheckboxPlusSelect({ item }: SelectProps) {
  // const [selectedValue, setSelectedValue] = useState('')

  const checkbox = item.items?.find((i) => i.type === InputsTypes.checkbox)
  const select = item.items?.find((i) => i.type === InputsTypes.select)
  const handledSelect = (value: string) => {
    console.log(value)
  }
  return (
    <div className="flex-col gap-4 rounded-sm bg-slate-50 p-4">
      <p>{item.label}</p>

      <div className="flex  items-center justify-start gap-3 ">
        <div>
          <CheckBoxInput
            item={
              checkbox || {
                key: '',
                name: '',
                label: '',
                type: InputsTypes.checkbox,
              }
            }
            onUpdate={handledSelect}
          />
        </div>
        <div>
          <SelectBtn
            item={
              select ?? {
                key: '',
                name: '',
                label: '',
                type: InputsTypes.select,
              }
            }
            onUpdate={handledSelect}
          />
        </div>
      </div>
    </div>
  )
}
