import {
  IData,
  IOptions,
  InputsTypes,
} from '../../../../components/globals/form/types'

export const selectOptions: IOptions[] = [
  { value: '1', label: '32' },
  { value: '2', label: '36' },
  { value: '3', label: '40' },
  { value: '4', label: '42' },
  { value: '5', label: '44' },
]

export const inputsExample: IData[] = [
  {
    name: 'name',
    label: 'name',
    value: 'John Doe',
    inputId: 'name',
    type: InputsTypes.text,
    description: 'This is your public display name.',
  },
  {
    name: 'Password',
    label: 'Password',
    value: 'password',
    inputId: 'password',
    type: InputsTypes.text,
    description: 'This is your password',
  },
  {
    name: 'Email',
    label: 'Email',
    value: 'example@test.com',
    inputId: 'email',
    type: InputsTypes.text,
    description: 'This is your email address',
  },
  {
    name: 'uploadFile',
    label: 'Upload File',
    value: '',
    inputId: 'file',
    type: InputsTypes.file,
    description: 'Upload a file here',
  },
  {
    name: 'List of sizes',
    label: 'Sizes',
    value: null,
    inputId: 'file',
    type: InputsTypes.select,
    items: selectOptions,
  },
]
