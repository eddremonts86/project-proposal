import { useController } from 'react-hook-form'

import { FormDescription, FormItem, FormLabel } from '@/components/ui/form'

import { Textarea } from '../../../../ui/textarea'
import { IData } from '../../types'
import Errormessage from './ErrorMessage'

interface TextInputProps {
  item: IData
}

const TextAreaInput = ({ item }: Readonly<TextInputProps>) => {
  const {
    name,
    control,
    rules,
    label,
    defaultValue,
    placeholder,
    description,
  } = item
  const {
    field: { onChange, value, ref },
    fieldState: { error },
  } = useController({
    name,
    control,
    rules,
    defaultValue,
  })

  return (
    <FormItem>
      <FormLabel className="grid">
        <span className="capitalize">{label}</span>
      </FormLabel>
      <Textarea
        value={value}
        ref={ref}
        onChange={onChange}
        placeholder={placeholder}
        className="resize-none"
      />
      <FormDescription>{description}</FormDescription>
      {error && <Errormessage message={error.message} />}
    </FormItem>
  )
}

export default TextAreaInput
