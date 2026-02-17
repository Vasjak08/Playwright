
import { test, expect } from '@playwright/test';

test('Login  test',async ({page}) => { 
 
await page.goto('https://clinic.ummu.health/login')
const phone = page.locator('input[type="tel"]');

await phone.click();
await phone.clear();

 
await phone.pressSequentially('+380955490000');
await page.locator('[name="password"]').fill('Qwerty123');
  await page.waitForTimeout(2000)

await page.locator('button:has-text("Log in")').click();
  //await page.waitForTimeout(3000)

await expect(page).not.toHaveURL(/login/);

})