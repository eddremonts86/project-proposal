import { Control, FieldValues } from 'react-hook-form'

import {
  CheckBoxInput,
  DatePickerWithRange,
  RadioInput,
  SelectBtn,
  TextAreaInput,
  TextInput,
  ToggleInput,
} from '../components/base'
import { IData, InputsTypes } from '../types'

const useInputsFields = (
  list: IData[],
  control: Control<FieldValues, unknown>
) => {
  return list.map((listItem: IData) => {
    const item = {
      ...listItem,
      control,
    }

    if (item.type === InputsTypes.text) {
      return <TextInput key={item.inputId} item={item} />
    }
    if (item.type === InputsTypes.password) {
      return <TextInput key={item.inputId} item={item} />
    }
    if (item.type === InputsTypes.email) {
      return <TextInput key={item.inputId} item={item} />
    }
    if (item.type === InputsTypes.file) {
      return <TextInput key={item.inputId} item={item} />
    }
    if (item.type === InputsTypes.select) {
      return <SelectBtn key={item.inputId} item={item} />
    }
    if (item.type === InputsTypes.radio) {
      return <RadioInput key={item.inputId} item={item} />
    }
    if (item.type === InputsTypes.date) {
      return <DatePickerWithRange key={item.inputId} item={item} />
    }
    if (item.type === InputsTypes.checkbox) {
      return <CheckBoxInput key={item.inputId} item={item} />
    }
    if (item.type === InputsTypes.toggle) {
      return <ToggleInput key={item.inputId} item={item} />
    }
    if (item.type === InputsTypes.textarea) {
      return <TextAreaInput key={item.inputId} item={item} />
    }
  })
}

export default useInputsFields
