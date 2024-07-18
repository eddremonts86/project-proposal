import { Suspense } from 'react'
import { Control, FieldValues } from 'react-hook-form'

import {
  CheckBoxInput,
  DatePickerWithRange,
  RadioInput,
  SelectBtn,
  TextInput,
} from '../components/base'
import TextAreaInput from '../components/base/TextAreaInput'
import { ToggleInput } from '../components/base/ToggleInput'
import { IData, InputsTypes } from '../types'

const useInputsFields = (
  list: IData[],
  control: Control<FieldValues, unknown>
) => {
  return list.map((item: IData) => {
    if (item.type === InputsTypes.text) {
      return (
        <TextInput
          key={item.inputId}
          name={item.name}
          label={item.label}
          defaultValue={item.value || ''}
          description={item.description || ''}
          control={control}
          type={item.type}
          placeholder={item.label}
          inputId={item.inputId}
          rules={item.rules}
        />
      )
    }
    if (item.type === InputsTypes.password) {
      return (
        <TextInput
          key={item.inputId}
          name={item.name}
          label={item.label}
          defaultValue={item.value || 'Pa$$w0rd'}
          description={item.description || ''}
          control={control}
          type={item.type}
          placeholder={item.label}
          inputId={item.inputId}
          rules={item.rules}
        />
      )
    }
    if (item.type === InputsTypes.email) {
      return (
        <TextInput
          key={item.inputId}
          name={item.name}
          label={item.label}
          defaultValue={item.value || ''}
          description={item.description || ''}
          control={control}
          type={item.type}
          placeholder={item.label}
          inputId={item.inputId}
          rules={item.rules}
        />
      )
    }
    if (item.type === InputsTypes.file) {
      return (
        <TextInput
          inputId={item.inputId}
          key={item.inputId}
          name={item.inputId}
          label={item.label}
          defaultValue={item.value?.toString() || ''}
          description={item.description || ''}
          control={control}
          type={item.type}
          placeholder={item.label}
        />
      )
    }

    if (item.type === InputsTypes.select) {
      return <SelectBtn key={item.inputId} item={item} control={control} />
    }

    if (item.type === InputsTypes.radio) {
      return (
        <Suspense key={item.inputId}>
          <RadioInput item={item} control={control} key={item.inputId} />
        </Suspense>
      )
    }

    if (item.type === InputsTypes.date) {
      return (
        <Suspense key={item.inputId}>
          <DatePickerWithRange
            control={control}
            name={item.name}
            label={item.label}
            key={item.inputId}
            defaultValue={item.value}
          />
        </Suspense>
      )
    }
    if (item.type === InputsTypes.checkbox) {
      return (
        <Suspense key={item.inputId}>
          <CheckBoxInput
            control={control}
            name={item.name}
            label={item.label}
            key={item.inputId}
            defaultValue={item.value}
          />
        </Suspense>
      )
    }
    if (item.type === InputsTypes.toggel) {
      return (
        <Suspense key={item.inputId}>
          <ToggleInput
            control={control}
            name={item.name}
            label={item.label}
            key={item.inputId}
            defaultValue={item.value}
          />
        </Suspense>
      )
    }
    if (item.type === InputsTypes.textarea) {
      return (
        <TextAreaInput
          key={item.inputId}
          name={item.name}
          label={item.label}
          defaultValue={item.value || ''}
          description={item.description || ''}
          control={control}
          type={item.type}
          placeholder={item.label}
          inputId={item.inputId}
        />
      )
    }
  })
}

export default useInputsFields
