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
  type: InputsTypes
  name: string
  label: string
  defaultValue?:
    | string
    | null
    | number
    | boolean
    | unknown[]
    | Record<string, unknown>
  description?: string
  items?: IOptions[]
  rules?: Record<string, unknown>
  control?: Control<FieldValues>
  placeholder?: string
}
