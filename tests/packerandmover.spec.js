import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.bestrelocations.co.in/');
  await page.getByRole('textbox', { name: 'Enter Your Name' }).click();
  await page.getByRole('textbox', { name: 'Enter Your Name' }).fill('vindhya');
  await page.getByRole('textbox', { name: 'Enter Your Email' }).click();
  await page.getByRole('textbox', { name: 'Enter Your Email' }).fill('vindhya@gamil.com');
  await page.getByRole('textbox', { name: 'Enter Your Phone' }).click();
  await page.getByRole('textbox', { name: 'Enter Your Phone' }).fill('5455554544');
  await page.getByPlaceholder('Shifting Date').fill('2025-02-15');
  await page.getByRole('textbox', { name: 'From Location' }).click();
  await page.getByRole('textbox', { name: 'From Location' }).fill('manglore');
  await page.getByRole('textbox', { name: 'To Location' }).click();
  await page.getByRole('textbox', { name: 'To Location' }).fill('bangalore');
  await page.getByRole('textbox', { name: 'Message' }).click();
  await page.getByRole('textbox', { name: 'Message' }).fill('hi i want immediate shifting');
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByText('Thank You Your Contact').click();
  await page.getByText('Thank You Your Contact').click();
});