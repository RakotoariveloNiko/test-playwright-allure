import { test, expect } from '@playwright/test';

test('Test Squash de connexion et gestion des erreurs', async ({ page }) => {
  await page.goto('http://localhost:4200/login');
  await page.fill('input[name="username"]', 'wrongUser');
  await page.fill('input[name="password"]', 'wrongPass');
  await page.click('button[type="submit"]');
  page.once('dialog', async (dialog) => {
    expect(dialog.message()).toBe(
      "Nom d'utilisateur ou mot de passe incorrect",
    );
    await dialog.dismiss();
  });
  await expect(page).toHaveURL('http://localhost:4200/login');
});
