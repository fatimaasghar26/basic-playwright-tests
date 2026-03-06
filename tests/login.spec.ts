import { test, expect } from '@playwright/test';
import path from 'path';

const basePath = path.resolve(
  'C:/Users/fatim/Downloads/basic-playwright-tests-main/html files'
);

const signupPage =
  'file:///' + path.join(basePath, 'signup.html').replace(/\\/g, '/');

const loginPage =
  'file:///' + path.join(basePath, 'login.html').replace(/\\/g, '/');

test('signup then login with username', async ({ page }) => {

  await page.goto(signupPage);

  // Signup
  await page.fill('#username', 'daffy');
  await page.fill('#email', 'daffy@test.com');
  await page.fill('#password', '1234');
  await page.click('#signupBtn');

  await expect(page).toHaveURL(/login.html/);

  // Login
  await page.fill('#loginId', 'daffy');
  await page.fill('#loginPassword', '1234');
  await page.click('#loginBtn');

  await expect(page).toHaveURL(/dashboard.html/);
  await expect(page.locator('#welcome')).toContainText('Welcome daffy');
});