export interface IOptions {
  value: string
  label: string
}
export interface IData {
  inputId: string
  type: InputsTypes
  name: string
  label: string
  value?: string | null | number | boolean | unknown[]
  description?: string
  items?: IOptions[]
  rules?: Record<string, unknown>
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
  toggel = 'toggel',
}
