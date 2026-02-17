import {getAuthentData} from '../utlitaData';
import { test, expect } from '@playwright/test';

test('Login  test',async ({page}) => { 
   const authentData= getAuthentData();
await page.goto('https://clinic.ummu.health/login')
const phone = page.locator('input[type="tel"]');

await phone.click();
await phone.clear();
await phone.pressSequentially(authentData.tel);

await page.locator('[name="password"]').fill(authentData.password);
  await page.waitForTimeout(2000)

await page.locator('button:has-text("Log in")').click();
 

await expect(page).not.toHaveURL(/login/);

})
