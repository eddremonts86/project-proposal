import { format } from 'date-fns'

export const formatDate = (date: Date, style = 'PPP') => {
  const isDateValid = date instanceof Date
  if (!isDateValid) return

  return format(date, style)
}
