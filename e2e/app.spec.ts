import { test, expect } from '@playwright/test';

test('doit permettre à un utilisateur de se connecter', async ({ page }) => {
  await page.goto('http://localhost:4200/login');

  await page.fill('input[name="username"]', 'admin');
  await page.fill('input[name="password"]', 'admin');

  await page.click('button[type="submit"]');

  await expect(page).toHaveURL('http://localhost:4200/home');

  const pageTitle = await page.locator('h1');
  await expect(pageTitle).toHaveText('Bienvenue sur votre tableau de bord');
});
