import {
  IData,
  InputsTypes,
  IOptions,
} from '../../../../components/globals/form/types'
import {
  emailRule,
  nameRule,
  passWordRule,
} from '../../../../components/globals/form/validations/validationShema'

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
    name: 'toggelInput',
    label: 'Turn On',
    value: true,
    inputId: 'toggelInput',
    type: InputsTypes.toggel,
    description: 'Select to bold',
  },
  {
    name: 'username',
    label: 'username',
    value: 'John Doe',
    inputId: 'username',
    type: InputsTypes.text,
    description: 'This is your public display name.',
    rules: nameRule,
  },
  {
    name: 'Password',
    label: 'Password',
    value: 'Eegfh282*',
    inputId: 'password',
    type: InputsTypes.password,
    description: 'This is your password',
    rules: passWordRule,
  },
  {
    name: 'Email',
    label: 'Email',
    value: 'example@test.com',
    inputId: 'email',
    type: InputsTypes.email,
    description: 'This is your email address',
    rules: emailRule,
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
    name: 'textarea',
    label: 'Bio',
    value: 'Your Biography here',
    inputId: 'textarea',
    type: InputsTypes.textarea,
    description: 'This is your biography',
  },
  {
    name: 'listSizes',
    label: 'Sizes',
    value: selectOptions[0].value,
    inputId: 'listSizes',
    type: InputsTypes.select,
    items: selectOptions,
    description: 'Select size',
  },
  {
    name: 'radioInput',
    label: 'Colors',
    value: 'red',
    inputId: 'radioInout',
    type: InputsTypes.radio,
    items: radioOptions,
    description: 'Select color',
  },
  {
    name: 'dateInput',
    label: 'Date',
    value: { from: new Date(), to: new Date() },
    inputId: 'dateInput',
    type: InputsTypes.date,
    description: 'Select Date',
  },
  {
    name: 'checkInput',
    label: 'Terms and Conditions',
    value: true,
    inputId: 'checkInput',
    type: InputsTypes.checkbox,
    description: 'Select to agree',
  },
]
