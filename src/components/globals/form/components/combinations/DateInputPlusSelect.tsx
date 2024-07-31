import { useController } from 'react-hook-form'

import FormGroupsContainer from '@/components/containers/FormGroupsContainer'

import { IAdvanceData, InputsTypes } from '../../types'
import DateInput from '../base/DateInput'
import SelectBtn from '../base/SelectBtn'

interface SelectProps {
  item: IAdvanceData
}
const defDateInput = {
  key: '',
  name: '',
  label: '',
  type: InputsTypes.dateInput,
  defaultValue: '',
}
const defSelect = {
  key: '',
  name: '',
  label: '',
  type: InputsTypes.select,
  defaultValue: '',
}
export default function DateInputPlusSelect({ item }: Readonly<SelectProps>) {
  const { control, name } = item
  const dateInput =
    item?.items?.find((i) => i.type === InputsTypes.dateInput) || defDateInput
  const select =
    item?.items?.find((i) => i.type === InputsTypes.select) || defSelect
  const {
    field: { onChange, value },
  } = useController({
    name,
    control,
    defaultValue: {
      [dateInput.name]: new Date(dateInput?.defaultValue as string),
      [select.name]: select?.defaultValue,
    },
  })

  const showSelect = value[select.name]
  const handledSelect = (data: { [key: string]: string }) => {
    onChange({
      ...value,
      ...data,
    })
  }

  return (
    <FormGroupsContainer
      className="flex-col gap-4 rounded-sm bg-slate-50"
      name={item.label}
    >
      <SelectBtn
        item={select}
        onUpdate={(value) => handledSelect({ [select.name]: value })}
      />
      {showSelect && (
        <DateInput
          item={dateInput}
          onUpdate={(value) => handledSelect({ [dateInput.name]: value })}
        />
      )}
    </FormGroupsContainer>
  )
}
