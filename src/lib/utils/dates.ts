import { format } from 'date-fns'

type DateType = string | number | Date | undefined | null
enum Intervals {
  second = 'second',
  minute = 'minute',
  hour = 'hour',
  day = 'day',
  month = 'month',
  year = 'year',
}
export const formatDate = (date: Date, style = 'PPP') => {
  const isDateValid = date instanceof Date
  if (!isDateValid) return

  return format(date, style)
}

export const addInterval = (date: Date, interval: Intervals, unit: number) => {
  const intervals = {
    second: () => date.setTime(date.getTime() + unit * 1000),
    minute: () => date.setTime(date.getTime() + unit * 60000),
    hour: () => date.setTime(date.getTime() + unit * 3600000),
    day: () => date.setDate(date.getDate() + unit),
    month: () => date.setMonth(date.getMonth() + unit),
    year: () => date.setFullYear(date.getFullYear() + unit),
  }
  return new Date(intervals[interval]())
}

export const createDate = (date: DateType) => {
  if (!date) return new Date()
  if (date instanceof Date) return date
  const newDate = new Date(date)
  if (isNaN(newDate.getTime())) return new Date()
  return newDate
}

export const createDateRange = (from: DateType, to: DateType) => {
  const fromDate = createDate(from)
  return {
    from: fromDate,
    to: to ? createDate(to) : addInterval(createDate(null), Intervals.day, 15),
  }
}
