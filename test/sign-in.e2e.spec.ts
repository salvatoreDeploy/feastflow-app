import { expect, test } from '@playwright/test'

test('sign-in in successfuly', async ({ page }) => {
  await page.goto('/sign-in', { waitUntil: 'networkidle' })

  await page
    .getByPlaceholder('Digite seu e-mail...')
    .fill('johnDoe@example.com')

  await page.getByRole('button', { name: 'Acessar painel' }).click()

  const toast = page.getByText(
    'Enviamos um link de autenticação para seu e-mail',
  )

  expect(toast).toBeVisible()

  // await page.waitForTimeout(2)
})

test('sign-in with wrong credentials', async ({ page }) => {
  await page.goto('/sign-in', { waitUntil: 'networkidle' })

  await page.getByPlaceholder('Digite seu e-mail...').fill('wrong@example.com')

  await page.getByRole('button', { name: 'Acessar painel' }).click()

  const toast = page.getByText('Credenciais invalidas')

  expect(toast).toBeVisible()

  // await page.waitForTimeout(2)
})

test('navigate to new restaurant page', async ({ page }) => {
  await page.goto('/sign-in', { waitUntil: 'networkidle' })

  await page.getByRole('link', { name: 'Novo estabelecimento' }).click()

  expect(page.url()).toContain('/sign-up')

  // await page.waitForTimeout(2)
})
