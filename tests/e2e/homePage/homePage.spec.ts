import { expect, test } from '@playwright/test'

const appUrl = process.env.APP_URL || 'http://localhost:3000'
test.describe('Home page', () => {
  test('Title', async ({ page }) => {
    await page.goto(appUrl)
    const title = await page.title()
    expect(title).toBe('Schilling React Proposal')
  })
  test('Header', async ({ page }) => {
    await page.goto(appUrl)
    const header = await page.textContent('h1')
    expect(header).toBe('Schilling Proposal')
  })
})
