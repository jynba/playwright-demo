import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("http://192.168.11.215:6587/");
  await page.getByPlaceholder("输入账号").click();
  await page.getByPlaceholder("输入账号").fill("admin");
  await page.getByPlaceholder("输入账号").press("Tab");
  await page.getByPlaceholder("输入密码").fill("pa55w0rd");
  await page.getByPlaceholder("输入密码").press("Enter");
});
