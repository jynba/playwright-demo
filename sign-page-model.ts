import type { Page } from "@playwright/test";

import { BASE_URL } from "./config";

export class SignPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }
  async login() {
    const { page } = this;
    await page.goto(`${BASE_URL}/`);

    await page.getByPlaceholder("输入账号").click();
    await page.getByPlaceholder("输入账号").fill("admin");
    await page.getByPlaceholder("输入账号").press("Tab");
    await page.getByPlaceholder("输入密码").fill("pa55w0rd");
    await page.getByPlaceholder("输入密码").press("Enter");

    await page.waitForNavigation();
  }
}
