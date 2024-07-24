import { Control, FieldValues } from 'react-hook-form'

export interface IOptions {
  value: string
  label: string
}

export enum InputsTypes {
  text = 'text',
  password = 'password',
  email = 'email',
  select = 'select',
  file = 'file',
  radio = 'radio',
  checkbox = 'checkbox',
  textarea = 'textarea',
  date = 'date',
  toggle = 'toggle',
}

export interface IData {
  inputId: string
  name: string
  label: string
  placeholder?: string
  description?: string
  type: InputsTypes
  items?: IOptions[]
  control?: Control<FieldValues>
  rules?: Record<string, unknown>
  defaultValue?:
    | string
    | null
    | number
    | boolean
    | unknown[]
    | Record<string, unknown>
}
