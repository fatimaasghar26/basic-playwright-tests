import { test, expect } from '@playwright/test';
import path from 'path';

const basePath = path.resolve(
  'C:/Users/fatim/Downloads/basic-playwright-tests-main/html files'
);

const signupPage =
  'file:///' + path.join(basePath, 'signup.html').replace(/\\/g, '/');

test('login fails with wrong password', async ({ page }) => {

  await page.goto(signupPage);

  // Signup first
  await page.fill('#username', 'daffy');
  await page.fill('#email', 'daffy@test.com');
  await page.fill('#password', '1234');
  await page.click('#signupBtn');

  await expect(page).toHaveURL(/login.html/);

  // Wrong password
  await page.fill('#loginId', 'daffy');
  await page.fill('#loginPassword', 'wrongpass');
  await page.click('#loginBtn');

  await expect(page).toHaveURL(/login.html/);
  await expect(page.locator('#loginError'))
    .toHaveText('Invalid Credentials');
});