import { FieldValues, useForm } from 'react-hook-form'
import { IData, InputsTypes } from '../types'
import { RadioInput, SelectBtn, TextInput } from './base'

interface FormProps {
  onSubmit: (values: FieldValues) => void
  inputs: IData[]
}

const FormContent = ({ onSubmit, inputs }: FormProps) => {

  const { handleSubmit, control } = useForm<FieldValues>()

  // const onChange = (value: string) => {
  //   console.log('select clicked', value)
  // }

  const allInputs = inputs.map((item: IData) => {
    if (item.type === InputsTypes.text) {
      return (
        <TextInput
          key={item.inputId}
          name={item.name}
          label={item.label}
          value={item.value || ''}
          description={item.description || ''}
          control={control}
          type={item.type}
          placeholder={item.label}
          inputId={item.inputId}
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
       return <SelectBtn item={item} control={control} key={item.inputId} />
    }
    if (item.type === InputsTypes.radio) {
      return <RadioInput />
    }
    if (item.type === InputsTypes.checkbox) {
      return
    }
    if (item.type === InputsTypes.textarea) {
      return
    }
  })

  return (
    <form onChange={handleSubmit((values: FieldValues) => onSubmit(values))}>
      <div>{allInputs}</div>
    </form>
  )
}

export default FormContent
