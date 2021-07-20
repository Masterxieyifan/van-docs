## Vantop FE库发包流程

### CI/CD
`ui`、`util`、`vantop-docs` 库已经集成 `CI/CD` 自动化方案，当代码合并到 `master` 或者 `alpha` 分支，会自动触发对应蓝盾流水线，进行 `NPM版本发布` 和 `CDN 更新`，减少人工成本。

该方案流程为：版本号更新 -> NPM版本发布 -> CDN更新。

其中版本号更新由库维护者控制，其余流程均为蓝盾自动化执行。

- [vantop-ui 测试版本流水线: vantop-ui-alpha](http://devops.ops.nextop.cc/console/pipeline/nextop-saas/p-01bae2fa5d7348d79d84f41024a2574c/history)

- [vantop-ui 正式版本流水线: vantop-ui-master](http://devops.ops.nextop.cc/console/pipeline/nextop-saas/p-22263cadd80d4b7d9d079e3a7314a5d6/history)

- [vantop-util 测试版本流水线: vantop-util-alpha](http://devops.ops.nextop.cc/console/pipeline/nextop-saas/p-a98210223c094385a2e417dbdadf8c15/history)

- [vantop-util 正式版本流水线: vantop-util-master](http://devops.ops.nextop.cc/console/pipeline/nextop-saas/p-281170841870443fbc10fe239bdaab89/history)

- [vantop-docs 流水线: vantop-docs](http://devops.ops.nextop.cc/console/pipeline/nextop-saas/p-b33274b888f6441b88c05b16d1199541/history)

`develop` 分支：所有功能基于此分支开发

`master` 分支：正式版本管理分支

`alpha` 分支： 测试版本管理分支

### 发包流程
**1、对应库维护人员对 `pr` 进行审核合并到 `develop` 分支**

**2、切换 `develop` 到分支**

**3、执行脚本命令开始版本发布**

`npm run publish:patch` : 正式版本发包命令

`npm run publish:alpha` : 测试版本发包命令

上述脚本会进行对应版本的更新，将代码自动合并提交到对应的分支（正式版本对应 `master` 分支，测试版本对应 `alpha` 分支），并自动触发蓝盾流水线进行 `NPM版本发布` 和 `CDN更新` 操作。

**4、 进入到对应的蓝盾流水线查看发布进度**

蓝盾流水线执行流程已拆分为`打包编译`、`NPM版本发布`、`CDN发布` 三个主要步骤。

如若某个步骤失败，可以点击步骤日志查看失败信息或者点击重试重新执行该步骤。

**5、进入[vantop npm](http://npm.nextop.cc/)官网查看版本是否更新成功**

**6、发布成功后会触发钉钉智能机器人自动在Vantop FE Lab 群组发消息通知**

**7、通知对应相关人员**

### 常见问题
**Q1: 需要重新单独执行`NPM版本发布`或者`CDN发布`流程，该如何操作？**

A1: 进入对应的流水线，点击执行，点击 `process` 下拉框，选择需要执行的流程值，默认值为ALL，最后执行即可。

process值对应的操作

- ALL：执行NPM版本发布、CDN发布流程；

- NPM：只单独进行NPM发布；

- CDN：只单独进行CDN发布操作

**Q2: 请问 `vantop-docs` 文档库如何更新？**

A2: vantop-docs 文档库项目由于无需进行版本控制和NPM发布等流程，所以我们只需在 `develop` 分支上进行文档修改，完成后将代码合并到 `master` 分支即可触发自动构建。


### TODO
- 生成的changelog文件过滤掉测试版本


有任何问题请@蔡远程