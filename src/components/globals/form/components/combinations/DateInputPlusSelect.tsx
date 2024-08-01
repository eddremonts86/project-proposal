import { useController } from 'react-hook-form'

import FormGroupsContainer from '@/components/containers/FormGroupsContainer'

import { IAdvanceData, IData, InputsTypes } from '../../types'
import DateInput from '../base/DateInput'
import SelectBtn from '../base/SelectBtn'

interface SelectProps {
  item: IAdvanceData
}
const defDateInput: IData = {
  key: '',
  name: '',
  label: '',
  type: InputsTypes.dateInput,
  defaultValue: new Date(),
}
const defSelect: IData = {
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
      [dateInput.name]: dateInput?.defaultValue,
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
    <FormGroupsContainer className="flex-col" name={item.label}>
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
