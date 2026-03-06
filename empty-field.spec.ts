import { test, expect } from '@playwright/test';
import path from 'path';

const basePath = path.resolve(
  'C:/Users/fatim/Downloads/basic-playwright-tests-main/html files'
);

const signupPage =
  'file:///' + path.join(basePath, 'signup.html').replace(/\\/g, '/');

test('signup fails with empty fields', async ({ page }) => {
  await page.goto(signupPage);

  await page.click('#signupBtn');

  const error = page.locator('#error');

  await expect(error).toBeVisible();
  await expect(error).toContainText('All fields are required');

  // keep browser open for 5 seconds
  await page.waitForTimeout(15000);
});