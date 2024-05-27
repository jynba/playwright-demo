import { chromium } from "@playwright/test";

import { SignPage } from "./sign-page-model.ts";

async function globalSetup() {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  const sign = new SignPage(page);
  await sign.login();

  await context.storageState({ path: "./playwright/auth/user.json" });
  await browser.close();
}
export default globalSetup;
