import { useController } from 'react-hook-form'

import { Textarea } from '@/components/ui/textarea'

import { IData } from '../../types'
import FormItemContainer from './FormItemContainer'

interface TextInputProps {
  item: IData
  className?: string
}

const TextAreaInput = ({ item, className }: Readonly<TextInputProps>) => {
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
    <FormItemContainer
      error={error || null}
      label={label}
      description={description || ''}
      className={className}
    >
      <Textarea
        value={value}
        ref={ref}
        onChange={onChange}
        placeholder={placeholder}
        className="resize-none"
      />
    </FormItemContainer>
  )
}

export default TextAreaInput
