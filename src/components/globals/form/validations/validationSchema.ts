export const nameRule = {
  required: 'This field is required',
  minLength: {
    value: 3,
    message: 'Minimum length should be 3',
  },
  maxLength: {
    value: 20,
    message: 'Maximum length should be 20',
  },
}
export const passWordRule = {
  required: 'This field is required',
  minLength: {
    value: 6,
    message: 'Minimum 6 letters are required',
  },
  pattern: {
    value: /^(?=.*[A-Z]).*$/,
    message: 'Password must include at least one capital letter',
  },
  maxLength: {
    value: 10,
    message: 'Maximum length should be 10',
  },
}
export const emailRule = {
  required: 'This field is required',
  pattern: {
    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    message: 'Please enter a valid email address',
  },
}
