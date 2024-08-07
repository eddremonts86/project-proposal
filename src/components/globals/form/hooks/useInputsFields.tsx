import { Control, FieldValues } from 'react-hook-form'

import { createDate, createDateRange } from '@/lib/utils/dates'

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
import {
  CheckboxPlusSelect,
  DateInputPlusSelect,
} from '../components/combinations'
import { IAdvanceData, IData, InputsTypes } from '../types'
import { rules } from '../validations/validationSchema'

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
  return list.map((listItem: IData | IAdvanceData) => {
    const item = {
      ...listItem,
      control,
      // @ts-expect-error ts-migrate(2532) FIXME: Object is possibly 'undefined'.
      rules: listItem.rules ? rules[listItem.rules] : null,
    }

    if (textInputs.includes(item.type)) {
      return <TextInput key={item.key} item={item as IData} />
    }
    if (item.type === InputsTypes.select) {
      return <SelectBtn key={item.key} item={item as IData} />
    }
    if (item.type === InputsTypes.radio) {
      return <RadioInput key={item.key} item={item as IData} />
    }
    if (item.type === InputsTypes.dateInput) {
      const dateInput = {
        ...item,
        defaultValue: createDate((item.defaultValue as string) || null),
      }
      return <DateInput key={dateInput.key} item={dateInput as IData} />
    }
    if (item.type === InputsTypes.dateRange) {
      const input = {
        ...item,
        defaultValue: createDateRange(
          //@ts-expect-error - TS doesn't know that item.defaultValue is an object
          item?.defaultValue?.from,
          //@ts-expect-error - TS doesn't know that item.defaultValue is an object
          item?.defaultValue?.to
        ),
      }

      return <DatePickerWithRange key={input.key} item={input as IData} />
    }
    if (item.type === InputsTypes.checkbox) {
      return <CheckBoxInput key={item.key} item={item as IData} />
    }
    if (item.type === InputsTypes.toggle) {
      return <ToggleInput key={item.key} item={item as IData} />
    }
    if (item.type === InputsTypes.textarea) {
      return <TextAreaInput key={item.key} item={item as IData} />
    }
    if (item.type === InputsTypes.combobox) {
      return <ComboBoxInput key={item.key} item={item as IData} />
    }
    if (item.type === InputsTypes.checkboxPlusSelect) {
      return <CheckboxPlusSelect key={item.key} item={item as IAdvanceData} />
    }
    if (item.type === InputsTypes.dateInputPlusSelect) {
      return <DateInputPlusSelect key={item.key} item={item as IAdvanceData} />
    }
  })
}

export default useInputsFields
