// @ts-check
import { test, expect } from '@playwright/test';

const titulo = "Entrega trabalho TEST DAS 2024";
const nomesEMatriculas = [
  'Danilo Machado de Oliveira - 202400184604',
  'Enzo Gabriel Belloto Furlan - 202400184610',
  'Eriedene Souza - 201500037722',
];
const corpoNota = nomesEMatriculas.join('\n');

test.beforeEach(async ({ page }) => {
  await page.goto('https://pt.anotepad.com', { waitUntil: 'domcontentloaded' });
});

test.afterEach(async ({ page }) => {
  await page.close();
});

test('cria nota adicionando titulo e conteúdo', async ({ page }) => {
  await page.getByRole('textbox', { name: 'Título da Nota' }).fill(titulo);
  await page.getByRole('textbox', { name: 'Conteúdo da Nota' }).fill(corpoNota);

  await expect(page.getByRole('textbox', { name: 'Título da Nota' })).toHaveValue(titulo);
  await expect(page.getByRole('textbox', { name: 'Conteúdo da Nota' })).toHaveValue(corpoNota);

  // timeout para conseguir ver o resultado
  await page.waitForTimeout(10000);
});
