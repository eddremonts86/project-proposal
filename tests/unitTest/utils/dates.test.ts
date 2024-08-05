import { expect, test } from '@playwright/test'

import {
  addInterval,
  createDate,
  createDateRange,
  formatDate,
  Intervals,
} from '../../../src/lib/utils/dates.ts'

test.describe('formatDate', () => {
  test('should format a valid date', async () => {
    const date = new Date(2023, 0, 1)
    expect(formatDate(date)).toBe('January 1st, 2023')
  })

  test('should return undefined for an invalid date', async () => {
    expect(formatDate(null)).toBeUndefined()
  })
})

test.describe('addInterval', () => {
  test('should add seconds to a date', async () => {
    const date = new Date(2023, 0, 1)
    const newDate = addInterval(date, Intervals.second, 30)
    expect(newDate.getSeconds()).toBe(30)
  })

  test('should add days to a date', async () => {
    const date = new Date(2023, 0, 1)
    const newDate = addInterval(date, Intervals.day, 5)
    expect(newDate.getDate()).toBe(6)
  })
})

test.describe('createDate', () => {
  test('should create a date from a string', async () => {
    const date = createDate('2023-01-01')
    expect(date).toEqual(new Date('2023-01-01'))
  })

  test('should return the current date for invalid input', async () => {
    const date = createDate('invalid-date')
    expect(date).toBeInstanceOf(Date)
  })
})

test.describe('createDateRange', () => {
  test('should create a date range from two dates', async () => {
    const range = createDateRange('2023-01-01', '2023-01-15')
    expect(range.from).toEqual(new Date('2023-01-01'))
    expect(range.to).toEqual(new Date('2023-01-15'))
  })

  test('should create a date range with a default end date', async () => {
    const range = createDateRange('2023-01-01', null)
    expect(range.from).toEqual(new Date('2023-01-01'))
    expect(range.to).toBeInstanceOf(Date)
  })
})
