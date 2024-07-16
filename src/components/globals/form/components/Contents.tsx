import { useForm, FieldValues } from 'react-hook-form'
import { TextInput } from './base'
import { IData } from '../types'

interface FormProps {
  onSubmit: (values: FieldValues) => void
  inputs: IData[]
}

const Contents = ({ onSubmit, inputs }: FormProps) => {
  const { handleSubmit, control } = useForm<FieldValues>()

  const allInputs = inputs.map((item: IData, index) => (
    <TextInput
      key={index}
      name={item.inputId}
      label={item.label}
      defValue={item.value}
      description={item.description}
      control={control}
      type={item.type}
      placeholder={item.label}
    />
  ))

  return (
    <form onChange={handleSubmit((values: FieldValues) => onSubmit(values))}>
      <div>{allInputs}</div>
    </form>
  )
}

export default Contents
