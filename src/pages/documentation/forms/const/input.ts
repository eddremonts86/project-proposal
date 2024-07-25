import { IData, InputsTypes, IOptions } from '@/components/globals/form/types'
import {
  emailRule,
  nameRule,
  passWordRule,
} from '@/components/globals/form/validations/validationSchema'

export const frameworks: IOptions[] = [
  {
    value: 'next.js',
    label: 'Next.js',
  },
  {
    value: 'sveltekit',
    label: 'SvelteKit',
  },
  {
    value: 'nuxt.js',
    label: 'Nuxt.js',
  },
  {
    value: 'remix',
    label: 'Remix',
  },
  {
    value: 'astro',
    label: 'Astro',
  },
]

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
    key: 'toggleInput',
    name: 'toggleInput',
    label: 'Turn On',
    defaultValue: true,
    description: 'Select to bold',
    type: InputsTypes.toggle,
  },
  {
    key: 'username',
    name: 'username',
    label: 'username',
    defaultValue: 'John Doe',
    description: 'This is your public display name.',
    rules: nameRule,
    type: InputsTypes.text,
  },
  {
    key: 'password',
    name: 'Password',
    label: 'Password',
    defaultValue: 'Password1*',
    description: 'This is your password',
    rules: passWordRule,
    type: InputsTypes.password,
  },
  {
    key: 'email',
    name: 'Email',
    label: 'Email',
    defaultValue: 'example@test.com',
    description: 'This is your email address',
    rules: emailRule,
    type: InputsTypes.email,
  },
  {
    key: 'file',
    name: 'uploadFile',
    label: 'Upload File',
    defaultValue: '',
    description: 'Upload a file here',
    type: InputsTypes.file,
  },
  {
    key: 'textarea',
    name: 'textarea',
    label: 'Bio',
    defaultValue: 'Your Biography here',
    description: 'This is your biography',
    type: InputsTypes.textarea,
  },
  {
    key: 'radioInout',
    name: 'radioInput',
    label: 'Colors',
    defaultValue: 'red',
    description: 'Select color',
    items: radioOptions,
    type: InputsTypes.radio,
  },
  {
    key: 'listSizes',
    name: 'listSizes',
    label: 'Sizes',
    defaultValue: selectOptions[0].value,
    description: 'Select size',
    items: selectOptions,
    type: InputsTypes.select,
  },

  {
    key: 'combobox',
    name: 'combobox',
    label: 'Frameworks',
    defaultValue: frameworks[0],
    description: 'Select Framework',
    items: frameworks,
    type: InputsTypes.combobox,
  },
  {
    key: 'dateRange',
    name: 'dateRange',
    label: 'Pick a date range',
    defaultValue: { from: new Date(), to: new Date() },
    description: 'Select Date',
    type: InputsTypes.dateRange,
  },
  {
    key: 'dateInput',
    name: 'dateInput',
    label: 'Pick a date',
    defaultValue: new Date(),
    description: 'Select Date',
    type: InputsTypes.dateInput,
  },
  {
    key: 'checkInput',
    name: 'checkInput',
    label: 'Terms and Conditions',
    defaultValue: true,
    description: 'Select to agree',
    type: InputsTypes.checkbox,
  },
  {
    key: 'TestOfmultiple',
    name: 'TestOfmultiple',
    label: 'Terms and TestOfmultiple',
    defaultValue: '',
    description: 'Select to TestOfmultiple',
    items: frameworks,
    type: InputsTypes.TestOfmultiple,
  },
]
