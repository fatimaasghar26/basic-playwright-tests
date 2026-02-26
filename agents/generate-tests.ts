import fs from 'fs';

function generateLoginTest() {

const test = `
import { test, expect } from '@playwright/test';

test('Login Test', async ({ page }) => {

await page.goto('file://' + process.cwd() + '/login.html');

await page.fill('#email', 'fatima@test.com');

await page.fill('#password', '123456');

await page.click('#login');

await expect(page.locator('#message')).toHaveText('Login successful');

});
`;

fs.writeFileSync('tests/login.spec.ts', test);

console.log("Login Test Generated");

}

function generateSignupTest() {

const test = `
import { test, expect } from '@playwright/test';

test('Signup Test', async ({ page }) => {

await page.goto('file://' + process.cwd() + '/signup.html');

await page.fill('#name', 'Fatima');

await page.fill('#email', 'fatima@test.com');

await page.fill('#password', '123456');

await page.click('#signup');

await expect(page.locator('#message')).toHaveText('Signup successful');

});
`;

fs.writeFileSync('tests/signup.spec.ts', test);

console.log("Signup Test Generated");

}

generateLoginTest();

generateSignupTest();
