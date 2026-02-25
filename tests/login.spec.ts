import { test, expect } from '@playwright/test';
import path from 'path';

const signupPage = 'file://' + path.resolve('./signup.html');
const loginPage = 'file://' + path.resolve('./login.html');

test('signup then login with username', async ({ page }) => {

  // Start from signup
  await page.goto(signupPage);

  // Fill signup form
  await page.fill('#username', 'daffy');
  await page.fill('#email', 'daffy@test.com');
  await page.fill('#password', '1234');
  await page.click('#signupBtn');

  // Should redirect to login
  await expect(page).toHaveURL(/login.html/);

  // Login
  await page.fill('#loginId', 'daffy');
  await page.fill('#loginPassword', '1234');
  await page.click('#loginBtn');

  // Should redirect to dashboard
  await expect(page).toHaveURL(/dashboard.html/);

  // Should show welcome message
  await expect(page.locator('#welcome'))
    .toContainText('Welcome daffy');
});