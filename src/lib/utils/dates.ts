 import { format } from "date-fns"


export const formatDate = (date: Date, style: string) => {
  return format(date, style)
}
