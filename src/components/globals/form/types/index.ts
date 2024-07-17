export interface IOptions {
  value: string
  label: string
}
export interface IData {
  inputId: string
  type: InputsTypes
  name: string
  label: string
  value?: string | null | number | unknown[]
  description?: string
  items?: IOptions[]
}

// export interface IUser{
//   username: string
//   Password: string
//   Email: string
// }

export enum InputsTypes {
  text= 'text',
  select= 'select',
  file= 'file',
  radio= 'radio',
  checkbox= 'checkbox',
  textarea= 'textarea',
}
