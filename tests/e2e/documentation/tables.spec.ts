import { expect, test } from '@playwright/test'

const base = process.env.APP_URL || 'http://localhost:3000'

const url = '/documentation/tables'
test.describe('Documentation - Tables ', () => {
  test('', async ({ page }) => {
    await page.goto(base + url)
    const button = await page.getByText('View')
    await expect(button).toBeVisible()
    await button.click()
    await page.getByText('Toggle columns').isVisible()
  })
})
