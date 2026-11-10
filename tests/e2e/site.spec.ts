import { expect, test } from '@playwright/test'

test('мобильное меню открывается и ведёт на страницу программы', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 })
  await page.goto('./')
  await page.getByRole('button', { name: 'Открыть меню' }).click()
  const menu = page.getByRole('dialog', { name: 'Меню навигации' })
  await expect(menu).toBeVisible()
  await menu.getByRole('link', { name: /Разработка программно-информационных систем/i }).click()
  await expect(page).toHaveURL(/\/bachelor\/software-systems\/?$/)
  await expect(page.getByRole('heading', { level: 1 })).toContainText('Разработка программно-информационных систем')
})

test('меню программ сообщает состояние и возвращает фокус по Escape', async ({ page }) => {
  await page.goto('./')
  const trigger = page.getByRole('button', { name: 'Программы', exact: true })
  await trigger.click()
  await expect(trigger).toHaveAttribute('aria-expanded', 'true')
  await page.getByRole('link', { name: /Разработка программно-информационных систем/i }).first().focus()
  await page.keyboard.press('Escape')
  await expect(trigger).toBeFocused()
  await expect(trigger).toHaveAttribute('aria-expanded', 'false')
})

test('модальное окно анкеты удерживает фокус и закрывается по Escape', async ({ page }) => {
  await page.goto('./master')
  const trigger = page.getByRole('button', { name: /Анкета в магистратуру/i }).first()
  await trigger.click()
  const dialog = page.getByRole('dialog', { name: 'Анкета для поступления' })
  await expect(dialog).toBeVisible()
  await expect(dialog.getByText('Отправка анкет пока недоступна. Форма представлена для ознакомления.')).toBeVisible()
  await expect(dialog.getByRole('button', { name: 'Отправить анкету' })).toBeVisible()
  await expect(dialog.getByRole('button', { name: 'Отправить анкету' })).toBeEnabled()
  await page.locator('header a').first().evaluate((element: HTMLElement) => element.focus())
  await expect(dialog).toBeFocused()
  await page.keyboard.press('Escape')
  await expect(dialog).not.toBeVisible()
  await expect(trigger).toBeFocused()
})

test('форма показывает ошибки при потере фокуса и отправке неполных данных', async ({ page }) => {
  await page.goto('./')
  await expect(page.locator('.site-preloader')).toBeHidden()
  const form = page.locator('#form form')
  await expect(form.getByText('Отправка вопросов пока недоступна. Форма представлена для ознакомления.')).toBeVisible()
  await expect(form.getByRole('button', { name: 'Задать вопрос' })).toBeEnabled()
  await expect(form.getByRole('button', { name: 'Задать вопрос' })).toBeVisible()
  await form.getByLabel('Имя', { exact: true }).focus()
  await form.getByLabel('Имя', { exact: true }).blur()
  await expect(form.getByText('Это обязательное поле').first()).toBeVisible()
  await form.getByLabel('Имя', { exact: true }).fill('Анна')
  await form.getByRole('textbox', { name: 'Телефон', exact: true }).fill('9991234567')
  await form.getByLabel('Почта').fill('anna@example.com')
  await form.getByLabel('Вопрос', { exact: true }).fill('Как поступить?')
  await form.locator('input[type="checkbox"]').check()
  await expect(form.getByRole('button', { name: 'Задать вопрос' })).toBeEnabled({ timeout: 15_000 })
  await form.getByLabel('Почта').fill('неверный адрес')
  await form.getByRole('button', { name: 'Задать вопрос' }).click()
  await expect(form.getByText('Введите корректный адрес почты')).toBeVisible()
})

test('телефон форматируется и ограничивает длину для выбранной страны', async ({ page }) => {
  await page.goto('./')
  const phone = page.locator('#form').getByRole('textbox', { name: 'Телефон', exact: true })
  await expect(page.locator('#form .iti__selected-country')).toBeVisible()
  await expect(phone).toBeEditable()
  await phone.pressSequentially('9991234567890123')
  await expect(phone).toHaveValue('(999) 123-45-67')
})

test('телефоны других стран сохраняют свой формат и проходят проверку', async ({ page }) => {
  await page.goto('./')
  const form = page.locator('#form')
  const phone = form.getByRole('textbox', { name: 'Телефон', exact: true })
  await expect(phone).toBeEditable()
  for (const [country, digits] of [['us', '2025550123'], ['gb', '7400123456'], ['de', '15123456789']]) {
    await phone.fill('')
    await form.locator('.iti__selected-country').click()
    await form.locator(`[data-iso2="${country}"]`).click()
    await phone.pressSequentially(digits!)
    expect((await phone.inputValue()).replace(/\D/g, '')).toBe(digits)
    await phone.blur()
    await expect(phone).not.toHaveAttribute('aria-invalid', 'true')
  }
})

test('изображения загружаются с учётом базового пути сайта', async ({ page, baseURL }) => {
  await page.goto('./')
  const basePath = new URL(baseURL!).pathname
  const image = page.locator(`img[src^="${basePath}images/"]`).first()
  await expect(image).toBeVisible()
  const src = await image.getAttribute('src')
  expect(src).toBeTruthy()
  const response = await page.request.get(new URL(src!, page.url()).href)
  expect(response.ok()).toBe(true)
})

test('содержимое слайдеров доступно без JavaScript', async ({ browser, baseURL }) => {
  const context = await browser.newContext({ javaScriptEnabled: false, viewport: { width: 390, height: 844 } })
  try {
    const page = await context.newPage()
    await page.goto(baseURL!)
    const advantages = page.getByRole('region', { name: 'Преимущества обучения' })
    await expect(advantages.locator('h3:visible').filter({ hasText: 'Современная траектория обучения' })).toBeVisible()
    await expect(page.locator('#team').getByText('Директор Высшей школы программной инженерии МФТИ')).toBeVisible()
    await expect(page.locator('#team').getByText('Машинное обучение, 2 курс')).toBeVisible()
    await expect(page.getByRole('heading', { name: 'SberFit' })).toBeVisible()
    await expect(page.getByRole('link', { name: 'Посмотреть видео' }).first()).toHaveAttribute('href', /^https:\/\//)
  } finally {
    await context.close()
  }
})
