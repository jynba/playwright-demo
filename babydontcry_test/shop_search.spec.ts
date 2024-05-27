import { test, expect } from "@playwright/test";
import { BASE_URL } from "../config";

test.describe("The sub page below the admin is rendered", () => {
  test("Sub page render", async ({ page }) => {
    // 已经登录了,可以做任何想做的事情需要
    // 这里作为登录用户来实现我们的测试目标和断言
    await page.goto(BASE_URL);
    await page.getByRole("menuitem", { name: "组织架构" }).locator("div").click();
    await page.getByRole("menuitem", { name: "商户管理" }).click();
    await page.getByPlaceholder("选择所属上级").click();
    await page.locator("li").filter({ hasText: "小林" }).click();
    await page.getByRole("button", { name: "搜索" }).click();
    await expect(page.getByRole("cell", { name: "小林" }).first()).toBeVisible();
    await expect(page.getByRole("cell", { name: "小林" }).nth(2)).toBeVisible();
    await page.getByPlaceholder("名称").click();
    await page.getByPlaceholder("名称").fill("小林");
    await page.getByRole("button", { name: "搜索" }).click();
    await expect(page.getByRole("cell", { name: "小林商户" })).toBeVisible();
  });
});
