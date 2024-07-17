import { format } from 'date-fns'

export const formatDate = (date: Date, style = "PPP") => {
  return format(date, style)
}
