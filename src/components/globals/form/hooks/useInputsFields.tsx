import { Control, FieldValues } from 'react-hook-form'

import {
  CheckBoxInput,
  ComboBoxInput,
  DateInput,
  DatePickerWithRange,
  RadioInput,
  SelectBtn,
  TextAreaInput,
  TextInput,
  ToggleInput,
} from '../components/base'
import { IData, InputsTypes } from '../types'

const textInputs = [
  InputsTypes.text,
  InputsTypes.password,
  InputsTypes.email,
  InputsTypes.file,
]

const useInputsFields = (
  list: IData[],
  control: Control<FieldValues, unknown>
) => {
  return list.map((listItem: IData) => {
    const item = {
      ...listItem,
      control,
    }

    if (textInputs.includes(item.type)) {
      return <TextInput key={item.key} item={item} />
    }
    if (item.type === InputsTypes.select) {
      return <SelectBtn key={item.key} item={item} />
    }
    if (item.type === InputsTypes.radio) {
      return <RadioInput key={item.key} item={item} />
    }
    if (item.type === InputsTypes.dateInput) {
      return <DateInput key={item.key} item={item} />
    }
    if (item.type === InputsTypes.dateRange) {
      return <DatePickerWithRange key={item.key} item={item} />
    }
    if (item.type === InputsTypes.checkbox) {
      return <CheckBoxInput key={item.key} item={item} />
    }
    if (item.type === InputsTypes.toggle) {
      return <ToggleInput key={item.key} item={item} />
    }
    if (item.type === InputsTypes.textarea) {
      return <TextAreaInput key={item.key} item={item} />
    }
    if (item.type === InputsTypes.combobox) {
      return <ComboBoxInput key={item.key} item={item} />
    }
  })
}

export default useInputsFields
