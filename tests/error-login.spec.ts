import { test, expect } from '@playwright/test';
import path from 'path';

const signupPage = 'file://' + path.resolve('./signup.html');
const loginPage = 'file://' + path.resolve('./login.html');

test('login fails with wrong password', async ({ page }) => {

  // Signup first
  await page.goto(signupPage);
  await page.fill('#username', 'daffy');
  await page.fill('#email', 'daffy@test.com');
  await page.fill('#password', '1234');
  await page.click('#signupBtn');

  await expect(page).toHaveURL(/login.html/);

  // Try wrong password
  await page.fill('#loginId', 'daffy');
  await page.fill('#loginPassword', 'wrongpass');
  await page.click('#loginBtn');

  // Should stay on login page
  await expect(page).toHaveURL(/login.html/);

  // Error message should appear
  await expect(page.locator('#loginError'))
    .toHaveText('Invalid Credentials');
});