import { FieldValues, FormProvider, useForm } from 'react-hook-form'

import useInputsFields from '../hooks/useInputsFields'
import { IData } from '../types'

interface FormProps {
  onSubmit: (values: FieldValues) => void
  onChange: (values: FieldValues) => void
  inputs: IData[]
}

const FormContent = ({ onSubmit, onChange, inputs }: FormProps) => {
  const { handleSubmit, control } = useForm()

  const methods = useForm()

  const formInputs = useInputsFields(inputs, control)

  return (
    <FormProvider {...methods}>
      <form
        className="flex flex-col gap-4"
        onChange={handleSubmit((values: FieldValues) => {
          onChange(values)
        })}
        onSubmit={handleSubmit((values: FieldValues) => {
          onSubmit(values)
        })}
      >
        {formInputs}
      </form>
    </FormProvider>
  )
}

export default FormContent
