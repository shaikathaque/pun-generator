import { test, expect } from '@playwright/test';

test('should navigate to the pun page', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  await page.getByRole('link', { name: 'Pun' }).click();

  await expect(page).toHaveURL('http://localhost:3000/pun')

  await expect(page.locator('h1')).toContainText('Pun Page')
});

