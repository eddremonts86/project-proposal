import { IData, InputsTypes, IOptions } from '@/components/globals/form/types'
import {
  emailRule,
  nameRule,
  passWordRule,
} from '@/components/globals/form/validations/validationSchema'

export const selectOptions: IOptions[] = [
  { value: '32', label: '32' },
  { value: '36', label: '36' },
  { value: '40', label: '40' },
  { value: '42', label: '42' },
  { value: '44', label: '44' },
]

export const radioOptions: IOptions[] = [
  { value: 'red', label: 'Red' },
  { value: 'blue', label: 'Blue' },
  { value: 'yellow', label: 'Yellow' },
]

export const inputsExample: IData[] = [
  {
    name: 'toggleInput',
    label: 'Turn On',
    defaultValue: true,
    inputId: 'toggleInput',
    description: 'Select to bold',
    type: InputsTypes.toggle,
  },
  {
    name: 'username',
    label: 'username',
    defaultValue: 'John Doe',
    inputId: 'username',
    description: 'This is your public display name.',
    rules: nameRule,
    type: InputsTypes.text,
  },
  {
    name: 'Password',
    label: 'Password',
    defaultValue: 'Password1*',
    inputId: 'password',
    description: 'This is your password',
    rules: passWordRule,
    type: InputsTypes.password,
  },
  {
    name: 'Email',
    label: 'Email',
    defaultValue: 'example@test.com',
    inputId: 'email',
    description: 'This is your email address',
    rules: emailRule,
    type: InputsTypes.email,
  },
  {
    name: 'uploadFile',
    label: 'Upload File',
    defaultValue: '',
    inputId: 'file',
    description: 'Upload a file here',
    type: InputsTypes.file,
  },
  {
    name: 'textarea',
    label: 'Bio',
    defaultValue: 'Your Biography here',
    inputId: 'textarea',
    description: 'This is your biography',
    type: InputsTypes.textarea,
  },
  {
    name: 'listSizes',
    label: 'Sizes',
    defaultValue: selectOptions[0].value,
    inputId: 'listSizes',
    description: 'Select size',
    items: selectOptions,
    type: InputsTypes.select,
  },
  {
    name: 'radioInput',
    label: 'Colors',
    defaultValue: 'red',
    inputId: 'radioInout',
    description: 'Select color',
    items: radioOptions,
    type: InputsTypes.radio,
  },
  {
    name: 'dateRange',
    label: 'Pick a date range',
    defaultValue: { from: new Date(), to: new Date() },
    inputId: 'dateRange',
    description: 'Select Date',
    type: InputsTypes.dateRange,
  },
  {
    inputId: 'dateInput',
    name: 'dateInput',
    label: 'Pick a date',
    defaultValue: new Date(),
    description: 'Select Date',
    type: InputsTypes.dateInput,
  },
  {
    name: 'checkInput',
    label: 'Terms and Conditions',
    defaultValue: true,
    inputId: 'checkInput',
    description: 'Select to agree',
    type: InputsTypes.checkbox,
  },
]
