import { test, expect } from '@playwright/test';
import path from 'path';

const basePath = path.resolve(
  'C:/Users/fatim/Downloads/basic-playwright-tests-main/html files'
);

const signupPage =
  'file:///' + path.join(basePath, 'signup.html').replace(/\\/g, '/');
test('signup fails with invalid email', async ({ page }) => {
  await page.goto(signupPage);

  await page.fill('#username', 'sj');
  await page.fill('#email', 'invalid-email');
  await page.fill('#password', '1234');

  await page.click('#signupBtn');

  const error = page.locator('#error');

  await expect(error).toBeVisible();
  await expect(error).toContainText(/invalid/i);
});