import { test, expect } from "@playwright/test";
import { BASE_URL } from "../config";

test.describe("The sub page below the admin is rendered", () => {
  test("Sub page render", async ({ page }) => {
    // 已经登录了,可以做任何想做的事情需要
    // 这里作为登录用户来实现我们的测试目标和断言
    await page.goto(BASE_URL);
    await page.getByRole("menuitem", { name: "订单管理" }).locator("div").click();
    await page.getByText("输液椅订单").click();
    await page.getByRole("row", { name: "2024052415573661762 小林网点 00:" }).getByRole("button").first().click();
    await page.getByRole("button", { name: "退款" }).click();
    await page.getByRole("button", { name: "确定" }).click();
    await page.getByRole("menuitem", { name: "输液椅订单" }).click();
  });
});
