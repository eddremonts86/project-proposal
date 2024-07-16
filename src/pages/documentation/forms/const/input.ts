import { IData, IOptions } from "../../../../components/globals/form/types"

export const inputsExample: IData[] = [
  {
    userName: 'username',
    label: 'Username',
    value: 'John Doe',
    inputId: 'username',
    type: 'text',
    description: 'This is your public display name.',
  },
  {

    userName: 'Password',
    label: 'Password',
    value: 'password',
    inputId: 'password',
    type: 'text',
    description: 'This is your password',
  },
  {
    userName: 'Email',
    label: 'Email',
    value: 'example@test.com',
    inputId: 'email',
    type: 'text',
    description: 'This is your email address',
  },
  {
    userName: 'uploadFile',
    label: 'Upload File',
    value: '',
    inputId: 'file',
    type: 'file',
    description: 'Upload a file here',
  },
]

export const selectOptions: IOptions[] = [
  { value: '1', label: '32' },
  { value: '2', label: '36' },
  { value: '3', label: '40' },
  { value: '4', label: '42' },
  { value: '5', label: '44' },
]
