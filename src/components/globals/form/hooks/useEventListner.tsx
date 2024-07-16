import { useState } from 'react'
import { FieldValues } from 'react-hook-form'

const useEventListner = () => {
  const [formValues, setFormValues] = useState<FieldValues | null>(null)

  const onSubmit = (data: FieldValues) => {
    setFormValues(data)
  }

  
  return {
    onSubmit,
    formValues,
  }
}

export default useEventListner
