// @ts-check
import { test, expect } from '@playwright/test';

test('Test Navigate to Home Page of OpenCart', async ({ page }) => {
  await page.goto('https://demo.opencart.com/?__cf_chl_tk=tzdlqM2.ZRkJkCqy1jL0Iyvs.kVS0YkP9KsEbafWjDY-1742976826-1.0.1.1-NpqT62txBOCaQpASgHb9enPIsVU3lfKT_cvUTgj0Cwk');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Your Shop/);
});