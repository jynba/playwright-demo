> [官方文档](https://playwright.nodejs.cn/docs/intro)

> [如何快速上手 playwright 自动化测试？](https://github.com/jynba/jynba.github.io/issues/51)

### 自动化测试有什么用？
* 个人观点：便于复用脚本进行测试，减少回归测试带来的时间成本。因此，编写的测试脚本一般适用于可复测的测试案例。

### playwright的优势
个人觉得playwright最大的亮点在于可以通过可视化界面生成自动化脚本，无需学习成本，只需要点点点即可上手。

### 使用教程
●生成自动化脚本，复制代码创建脚本，即可测试
`npx playwright codegen url`

复制代码->编写脚本-> `npx playwright test test.spec.ts`( 注意：默认目录是 playwright.config.ts 中的 testDir )

●运行命令

○常规运行： `npx playwright test test.spec.ts`

○UI界面截图显示： `npx playwright test test.spec.ts --ui`

○模拟浏览器运行显示(有头模式)：`npx playwright test test.spec.ts --headed`
