import {
  IData,
  InputsTypes,
  IOptions,
} from '../../../../components/globals/form/types'

export const selectOptions: IOptions[] = [
  { value: '32', label: '32' },
  { value: '36', label: '36' },
  { value: '40', label: '40' },
  { value: '42', label: '42' },
  { value: '44', label: '44' },
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
    name: 'listSizes',
    label: 'Sizes',
    value: null,
    inputId: 'listSizes',
    type: InputsTypes.select,
    items: selectOptions,
    description: 'Select your size',
  },
]
