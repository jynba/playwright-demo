import { test, expect } from "@playwright/test";
import { BASE_URL } from "../config";

test.describe("The sub page below the admin is rendered", () => {
  test("Sub page render", async ({ page }) => {
    // 已经登录了,可以做任何想做的事情需要
    // 这里作为登录用户来实现我们的测试目标和断言
    await page.goto(BASE_URL);

    await page.getByRole("menuitem", { name: "订单管理" }).locator("div").click();
    await page.getByRole("menuitem", { name: "输液椅订单" }).click();
    await page.getByPlaceholder("订单开始时间").first().click();
    await page.getByRole("gridcell", { name: "24" }).first().click();
    await page.getByText("26").first().click();
    await page.getByRole("button", { name: "搜索" }).click();
    // 判断p标签中文本含有2024-05-24是否存在
    expect(await page.locator("p").first().textContent()).toContain("2024-05-24");
    await page.getByRole("button", { name: "重置" }).click();
  });
});
