import { browser, Page } from 'k6/browser';
import { check } from 'k6';

const hyperlink = (page: Page, name: string) => page.locator(`//a[@href="${name}"]`);
const heading = (page: Page, heading: string) => page.locator(`//h3[text()="${heading}"]`);
const backButton = (page: Page) => page.locator('//a[@href="/"]');

export const options = {
  scenarios: {
    ui: {
      executor: 'per-vu-iterations',
      vus: 5,
      iterations: 1,
      options: {
        browser: {
          type: 'chromium',
        },
      },
    },
  },
  thresholds: {
    checks: ['rate >= 1.0'],
    http_req_failed: ['rate <0.06'],
    browser_web_vital_lcp: ['p(90) < 1000'],
  },
};

export default async function browserTest () {

  console.log('browserTest started');

  const page = await browser.newPage();
  await goHome(page);

  await hyperlink(page, '/contacts.php').click();
  const contactUsHeadingVisible = await heading(page, 'Contact us').waitFor().then(() => true).catch(() => false);

  check(contactUsHeadingVisible, {
    'heading is visible': val => val === true,
  });

  await backButton(page).click();
  await hyperlink(page, '/news.php').click();
  await goHome(page);
  await hyperlink(page, '/flip_coin.php').click();
  await goHome(page);
  await hyperlink(page, '/browser.php').click();
  await page.locator('//button[@id="counter-button"]').click({ clickCount: 5 });
  await goHome(page);
  await hyperlink(page, '/my_messages.php').click();

  await page.locator('//input[@name="login"]').fill('admin');
  await page.locator('//input[@name="password"]').fill('123');
  await page.locator('//input[@value="Go!"]').click();

  await page.close();

  console.log('browserTest finished');
}

async function goHome(page: Page) {
  await page.goto('https://test.k6.io/');
}
