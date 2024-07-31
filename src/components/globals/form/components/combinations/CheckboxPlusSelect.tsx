import { useController } from 'react-hook-form'

import FormGroupsContainer from '@/components/containers/FormGroupsContainer'

import { IAdvanceData, InputsTypes } from '../../types'
import CheckBoxInput from '../base/CheckBoxInput'
import SelectBtn from '../base/SelectBtn'

interface SelectProps {
  item: IAdvanceData
}
const defCheckbox = {
  key: '',
  name: '',
  label: '',
  type: InputsTypes.checkbox,
  defaultValue: false,
}
const defSelect = {
  key: '',
  name: '',
  label: '',
  type: InputsTypes.select,
  defaultValue: '',
}
export default function CheckboxPlusSelect({ item }: SelectProps) {
  const { control, name } = item
  const checkbox =
    item.items?.find((i) => i.type === InputsTypes.checkbox) || defCheckbox
  const select =
    item.items?.find((i) => i.type === InputsTypes.select) || defSelect
  const {
    field: { onChange, value },
  } = useController({
    name,
    control,
    defaultValue: {
      [checkbox.name]: checkbox.defaultValue,
      [select.name]: select.defaultValue,
    },
  })
  const showSelect = value[checkbox.name]
  const handledSelect = (data: { [key: string]: string }) => {
    onChange({
      ...value,
      ...data,
    })
  }

  return (
    <FormGroupsContainer
      className="flex-col gap-4 rounded-sm bg-slate-50 p-4"
      name={item.label}
    >
      <CheckBoxInput
        item={checkbox}
        onUpdate={(value) => handledSelect({ [checkbox.name]: value })}
      />
      {showSelect && (
        <SelectBtn
          item={select}
          onUpdate={(value) => handledSelect({ [select.name]: value })}
        />
      )}
    </FormGroupsContainer>
  )
}
