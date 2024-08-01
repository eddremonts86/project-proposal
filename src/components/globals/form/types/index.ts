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
  toggle = 'toggle',
  dateRange = 'dateRange',
  dateInput = 'dateInput',
  combobox = 'combobox',
  dateInputPlusSelect = 'dateInputPlusSelect',
  checkboxPlusSelect = 'checkboxPlusSelect',
}

export interface IData {
  key: string
  name: string
  label: string
  placeholder?: string
  description?: string
  type: InputsTypes
  items?: IOptions[]
  control?: Control<FieldValues>
  rules?: Record<string, unknown> | null | string
  defaultValue?:
    | string
    | null
    | number
    | boolean
    | unknown[]
    | Record<string, unknown>
    | undefined
    | Date
}

export interface IAdvanceData extends Omit<IData, 'items'> {
  items: IData[]
}
